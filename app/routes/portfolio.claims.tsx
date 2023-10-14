import { V2_MetaFunction } from "@remix-run/node";
import { Form, Link, NavLink, Outlet } from "@remix-run/react";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import ido from "../static/idı.json";
import DotLoader from "react-spinners/ClipLoader";
// components
import { Container, Section } from "~/components/Layout";
import { ProjectCountdown } from "~/components/Project";
import ClaimModal from "~/components/project/ClaimModal";
import Button from "~/components/shared/Button";

// config
import { Projects } from "~/config/projects.config";
import { useAccount } from "wagmi";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portfolio — Maxiruby" },
    { name: "description", content: "Portfolio — Maxiruby" },
  ];
};

export default function PortfolioClaims() {
  const { address } = useAccount();
  const [projects, setProjects] = React.useState<any>([]);
  useEffect(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("token")?.replace(/['"]+/g, "")
      );

      var requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://api.maxiruby.com/api/users/auth/getproject",
        requestOptions
      )
        .then((response: any) => response.text())
        .then((result) => setProjects(JSON.parse(result).result))
        .catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loader, setLoader] = useState(false);
  const handleClaim = async (project: any) => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x67eb4fD1F47ddE52AeF2aC556E0C441d04D4b4d3",
      ido,
      signer
    );
    setLoader(true);
    setError("");
    setSuccess("");
    try {
      const tx = await contract.claim(
        address,
        parseInt(project.project_id.toString(), 16),
        {
          gasLimit: "2000000",
        }
      );
      await tx.wait();
      console.log(tx);
      setLoader(false);
      setError("");
      setSuccess("Successfully claimed!");
    } catch (error: any) {
      console.log(error);
      setLoader(false);
      setError("Transaction failed!");
      setSuccess("");
    }
  };
  const getDatas = async () => {
    //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window?.ethereum);
    await provider.send("eth_requestAccounts", []); // <- this promps user to connect metamask
    const signer = provider.getSigner();

    const contract = new ethers.Contract(
      "0x67eb4fD1F47ddE52AeF2aC556E0C441d04D4b4d3",
      ido,
      signer
    );
  };
  const isStartTimePresent = (project: any) => {
    return project.vestingStartTime != null && project.vestingStartTime > 0;
  };
  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="flex flex-1 flex-col w-full max-w-[1100px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8">
        <div style={{ width: "100%", textAlign: "center" }}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
        </div>
        <ul className="flex flex-col gap-y-6">
          {projects.projects &&
            projects?.projects
              ?.filter((project: any) => project.status === "claim")
              .map((project: any, index: any) => (
                <li className="flex flex-1 flex-wrap items-center justify-between gap-5">
                  <div className="flex items-center gap-x-3">
                    <div className="relative flex w-12 h-12 rounded-full bg-secondary overflow-hidden">
                      <img
                        src={project.project_image}
                        alt={project.project_image}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <strong className="font-semibold">
                      {project.project_name}
                    </strong>
                  </div>

                  <div className="flex items-center gap-x-5">
                    <div className="flex flex-col justify-center items-center text-center gap-y-2">
                      <strong className="text-sm font-semibold text-muted-foreground">
                        Claimable Tokens
                      </strong>
                      <span className-="text-lg">50</span>
                    </div>
                    <div className="flex flex-col justify-center items-center text-center gap-y-2">
                      <strong className="text-sm font-semibold text-muted-foreground">
                        Your Allocation
                      </strong>
                      <span className-="text-lg">Private</span>
                    </div>
                  </div>

                  <ClaimCountdown project={project} />

                  <Button
                    type="button"
                    title="Join"
                    variant="primary"
                    onClick={() => handleClaim(project)}
                    disabled={loader}
                  >
                    {loader ? (
                      <DotLoader color="#1876f2" loading={loader} size={18} />
                    ) : (
                      " Claim"
                    )}
                  </Button>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

function ClaimCountdown({
  project,
  showClaimCoundown = false,
}: {
  project: any;
  showClaimCoundown?: boolean;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const isClaim = project.status === "closed";
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetTime =
        project.status === "claim"
          ? new Date(project.vestingStartTime * 1000).getTime()
          : new Date(project.project_fcfs_open_time * 1000).getTime();

      const distance = targetTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        setIsTimeUp(true); // Countdown sıfıra ulaştığında state'i güncelle
      } else {
        setIsTimeUp(false); // Eğer countdown devam ediyorsa state'i false olarak set et
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [
    project.vestingStartTime,
    project.project_fcfs_open_time,
    project.status,
  ]);

  if (!showClaimCoundown && project.status === "closed") return null;

  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <strong className="text-sm text-muted-foreground font-semibold">
        {isTimeUp ? "Claim Ended" : "Claim Start In"}
      </strong>

      <div className="flex items-center justify-center gap-x-5">
        <div className="flex flex-col justify-center items-center text-center gap-y-0.5">
          <strong className="text-lg text-accent font-bold">
            {" "}
            {timeLeft.days}
          </strong>
          <span className="text-xs text-muted-foreground font-semibold">
            DAYS
          </span>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-y-0.5">
          <strong className="text-lg text-accent font-bold">
            {" "}
            {timeLeft.hours}
          </strong>
          <span className="text-xs text-muted-foreground font-semibold">
            HOURS
          </span>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-y-0.5">
          <strong className="text-lg text-accent font-bold">
            {" "}
            {timeLeft.minutes}
          </strong>
          <span className="text-xs text-muted-foreground font-semibold">
            MINUTES
          </span>
        </div>

        <div className="flex flex-col justify-center items-center text-center gap-y-0.5">
          <strong className="text-lg text-accent font-bold">
            {" "}
            {timeLeft.seconds}
          </strong>
          <span className="text-xs text-muted-foreground font-semibold">
            SECONDS
          </span>
        </div>
      </div>
    </div>
  );
}
