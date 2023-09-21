// components
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "~/components/shared/Dialog";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";
import Image from "~/components/shared/Image";
import { ProjectCountdown } from "~/components/Project";
import { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import ido from "../../static/idı.json";
import Wbnbabi from "../../static/Wbnbabi.json";
import PriceContext from "~/context/priceContext";
import { useAccount } from "wagmi";
import Web3 from "web3";
import DotLoader from "react-spinners/ClipLoader";
export default function JoinModal({
  project,
  trigger,
}: {
  project: any;
  trigger: React.ReactNode;
}) {
  const prices = useContext(PriceContext);

  const { address } = useAccount();
  const [loader, setLoader] = useState(false);
  const [inp, setInp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [token, setToken] = useState("");
  const [price, setPrice] = useState("");
  const [bnbPrice, setBnbPrice] = useState("");
  const busd = prices.BUSD;
  const wbnb = prices.WBNB;
  const swap_rate = Number(project.project_swap_rate);
  const calucalte = (token: any) => {
    const tokenPrice = busd / swap_rate;
    setToken(token);
    const wbnbPrice = busd / wbnb / swap_rate;
    const last_price = Number(token) * tokenPrice;
    const bnbPrice = Number(token) * wbnbPrice;
    setPrice(last_price.toFixed(2));
    setBnbPrice(bnbPrice.toFixed(4));
  };
  //@ts-ignore
  const profile: any = JSON.parse(localStorage?.getItem("profile"));
  const handlePRojectBNB = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
    const signer = provider.getSigner();
    //@ts-ignore
    const balance0ETH = await provider.getBalance(address);
    const bnbValue = Web3.utils.fromWei(balance0ETH.toString(), "ether");
    const contract = new ethers.Contract(
      "0x8B7375ec99572Ce2a1Bda223B6Cf39Ca533cA7Df",
      ido,
      signer
    );
    let t = new ethers.Contract(
      "0xdB2d1Ed9e177d7907345e272305A319a412e8FF7", // muzman token
      Wbnbabi,
      signer
    );
    try {
    } catch (error) {}

    // try {
    //   var myHeaders = new Headers();
    //   myHeaders.append("Content-Type", "application/json");
    //   myHeaders.append(
    //     "Authorization",
    //     "Bearer " + localStorage.getItem("token")?.replace(/['"]+/g, "")
    //   );
    //   var raw = JSON.stringify({
    //     project: project._id,
    //   });
    //   var requestOptions: any = {
    //     method: "POST",
    //     headers: myHeaders,
    //     body: raw,
    //     redirect: "follow",
    //   };
    //   fetch("http://api.maxiruby.com/api/users/auth/project", requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log("error", error));
    // } catch (error) {}
  };
  const handlePRojectUSDT = async () => {
    setLoader(true);
    setSuccess("");
    setError("");
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
    const signer = provider.getSigner();

    const balanceUSDT = new ethers.Contract(
      "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee", // muzman token
      Wbnbabi,
      provider
    );
    const balance = (
      (await balanceUSDT.balanceOf(address)) /
      10 ** 18
    ).toString();
    if (Number(balance) < Number(price))
      return setError("You don't have enough USDT");
    const contract = new ethers.Contract(
      "0x8B7375ec99572Ce2a1Bda223B6Cf39Ca533cA7Df",
      ido,
      signer
    );
    let t = new ethers.Contract(
      "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee", // muzman token
      Wbnbabi,
      signer
    );
    try {
      await t.approve(
        "0x8B7375ec99572Ce2a1Bda223B6Cf39Ca533cA7Df",
        Web3.utils.toWei(price, "ether")
      );
      const add = await contract.buyWithUSDT(
        parseInt(project.project_id.toString(), 16),
        Web3.utils.toWei(price, "ether"),
        {
          gasLimit: "2000000",
        }
      );
      await add.wait();

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("token")?.replace(/['"]+/g, "")
      );
      var raw = JSON.stringify({
        project: project._id,
      });
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      fetch("http://api.maxiruby.com/api/users/auth/project", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      var myHeaders2 = new Headers();
      myHeaders2.append("Content-Type", "application/json");
      myHeaders2.append(
        "Authorization",
        "Bearer " + localStorage.getItem("token")?.replace(/['"]+/g, "")
      );
      var raw2 = JSON.stringify({
        project: project._id,
        token: swap_rate * Number(price),
      });
      var requestOptions2: any = {
        method: "POST",
        headers: myHeaders2,
        body: raw2,
        redirect: "follow",
      };
      fetch("http://api.maxiruby.com/api/landing/addproject", requestOptions2)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      setLoader(false);
      setSuccess("Successfully bought");
      setError("");
      setInterval(() => {
        setLoader(false);
        setSuccess("");
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoader(false);
      setError("Someting went wrong");
      setSuccess("");
      setInterval(() => {
        setLoader(false);
        setError("");
      }, 2000);
      return;
    }
  };
  function calculateProgress(totalTokens: number, soldTokens: number) {
    if (soldTokens === 0) {
      return 0;
    }
    return (soldTokens / totalTokens) * 100;
  }
  useEffect(() => {
    const getAlc = async () => {
      //@ts-ignore
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
      const signer = provider.getSigner();

      const contract = new ethers.Contract(
        "0x8B7375ec99572Ce2a1Bda223B6Cf39Ca533cA7Df",
        ido,
        signer
      );
      // const tier1 = await contract.maxAllocaPerUserTier();
      const tier2 = await contract.maxAllocaPerUserTierTwo();
      const tier3 = await contract.maxAllocaPerUserTierThree();
      const tier4 = await contract.maxAllocaPerUserTierFour();
      const tier5 = await contract.maxAllocaPerUserTierFive();
      const tier2max = await contract.minAllocaPerUserTierTwo();
      const tier3max = await contract.minAllocaPerUserTierThree();
      const tier4max = await contract.minAllocaPerUserTierFour();
      const tier5max = await contract.minAllocaPerUserTierFive();
      console.log(
        Web3.utils.fromWei(tier2, "ether"),
        Web3.utils.fromWei(tier3, "ether"),
        Web3.utils.fromWei(tier4, "ether"),
        Web3.utils.fromWei(tier5, "ether"),
        "-----------------",
        "-----------------",
        "-----------------",
        Web3.utils.fromWei(tier2max, "ether"),
        Web3.utils.fromWei(tier3max, "ether"),
        Web3.utils.fromWei(tier4max, "ether"),
        Web3.utils.fromWei(tier5max, "ether")
      );
    };
    getAlc();
  }, []);
  const bnb = prices.BNB;
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent>
        <div className="grid gap-10 pb-4 pt-12">
          <div className="flex flex-col gap-y-2">
            <small className="font-medium text-muted-foreground text-sm">
              Progress
            </small>
            <div className="w-full h-3 bg-secondary/50 rounded-full">
              <div
                className="h-2.5 rounded-full bg-accent"
                style={{
                  width: `${calculateProgress(
                    Number(project.project_hard_cap),
                    Number(project.selled)
                  )}%`,
                }}
              />
            </div>
            <div className="flex flex-1 items-center justify-between gap-x-4">
              <div className="text-sm">
                0/
                {Number(project.selled) /
                  Number(project.project_swap_rate) /
                  bnb}{" "}
                BNB
              </div>
              <div className="text-sm">
                {" "}
                {calculateProgress(
                  Number(project.project_hard_cap),
                  Number(project.selled)
                )}
                %
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-between gap-x-4">
            <div className="flex flex-col gap-y-2 text-start">
              <strong className="font-medium uppercase text-sm text-muted-foreground">
                MIN LIMIT
              </strong>
              <span className="font-semibold text-foreground uppercase">
                {project.minimumPayment} BNB
              </span>
            </div>

            <div className="flex flex-col gap-y-2 text-end">
              <strong className="font-medium uppercase text-sm text-muted-foreground">
                MAX LIMIT
              </strong>
              <span className="font-semibold text-foreground uppercase">
                {project.maximumPayment}BNB
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between gap-x-4">
              <span className="text-muted-foreground font-semibold">
                Enter Amount
              </span>
              <span className="text-muted-foreground font-semibold">
                {bnbPrice} BNB
              </span>
            </div>
            <div className="flex items-center justify-between gap-x-4">
              <span className="text-muted-foreground font-semibold">
                Enter Amount
              </span>
              <span className="text-muted-foreground font-semibold">
                {price} USDT
              </span>
            </div>
            <div className="relative flex items-center">
              <Input
                type="number"
                placeholder="0.00"
                value={token}
                onChange={(e: any) => {
                  calucalte(e.target.value);
                }}
                className="pr-12"
              />
              <Button
                type="button"
                title="MAX"
                variant="ghost"
                className="absolute right-0.5 top-0.5 bottom-0.5 hover:bg-secondary hover:text-foreground"
                size="small"
              >
                MAX
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter className="sm:justify-center">
          <Button
            type="submit"
            title="Claim"
            variant="primary"
            disabled={loader}
            className="px-8"
            onClick={handlePRojectBNB}
          >
            {loader ? (
              <DotLoader color="#1876f2" loading={loader} size={18} />
            ) : (
              "Claim BNB"
            )}
          </Button>

          <Button
            type="submit"
            title="Claim"
            variant="primary"
            disabled={loader}
            className="px-8"
            onClick={handlePRojectUSDT}
          >
            {loader ? (
              <DotLoader color="#1876f2" loading={loader} size={18} />
            ) : (
              " Claim USDT"
            )}
          </Button>
        </DialogFooter>
        <div style={{ width: "100%", textAlign: "center" }}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
        </div>
      </DialogContent>
    </Dialog>
  );
}
