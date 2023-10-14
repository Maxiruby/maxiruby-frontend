// components
import Image from "~/components/shared/Image";
import Button from "~/components/shared/Button";
import { Container } from "~/components/Layout";

// config
import { Images } from "~/config";
import { Link, NavLink } from "@remix-run/react";
import SendVerification from "../shared/SendVerification";

export default function Banner({ user }: any) {
  return (
    <div className="relative flex flex-1 flex-col w-full h-full pb-16">
      <Container>
        <div className="relative flex flex-1 flex-col justify-center items-center py-14">
          <div className="absolute top-0 w-screen -mt-24 -z-1 pointer-events-none">
            <div className="relative inset-0 w-full h-0 pb-[61.783525291304635%]">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={Images.HomeBackground}
                  alt="MaxiRuby"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
          {user && user.verified === false && <SendVerification user={user} />}
          <h1 className="font-heading font-semibold text-foreground text-center text-[max(3.896vw,28px)] pb-8 z-1">
            Empowering Visionaries <br />
            MaxiRuby Launchpad Unleashed
          </h1>

          <div className="relative flex flex-1 flex-wrap items-center justify-center gap-x-3 lg:gap-x-5 gap-y-3 z-1">
            <NavLink to="https://pancakeswap.finance/swap?chain=bscTestnet&outputCurrency=0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee">
              <Button
                type="button"
                title="Buy on PancakeSwap"
                variant="secondary"
                disabled={true}
              >
                Buy on PancakeSwap
              </Button>
            </NavLink>
            <NavLink to="https://www.sushi.com/swap?chainId=1&token0=NATIVE&token1=0x6B175474E89094C44Da98b954EedeAC495271d0F">
              <Button
                type="button"
                title="Buy on PancakeSwap"
                variant="secondary"
                disabled={true}
              >
                Buy on SushiSwap
              </Button>
            </NavLink>
            <Button
              type="button"
              title="Buy on PancakeSwap"
              variant="secondary"
              disabled={true}
            >
              Buy on Swap
            </Button>
            <NavLink to="https://docs.google.com/forms/d/e/1FAIpQLSdrVUjE2FvRdFm9CNNEk07iQ9mx7h00L2PNn4klIVQO6WMmDQ/viewform?usp=sf_link">
              <Button type="button" title="Apply for Launch" variant="primary">
                Apply for Launch
              </Button>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
