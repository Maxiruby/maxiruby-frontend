import React from "react";

// components
import { Container, Section } from "~/components/Layout";
import Image from "~/components/shared/Image";

// config
import { Meta, Images } from "~/config";

// types
import type { Tier as TierType } from "~/types/meta.types";

export default function TierSystem() {
  return (
    <React.Fragment>
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-10">
            <header className="flex flex-col gap-y-2">
              <h3 className="text-foreground text-[max(2vw,24px)] font-medium font-heading">
                Tier System
              </h3>
              <h4 className="flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading">
                <span className="text-foreground">Round 1</span>
                <span>—</span>
                <span>Allocation Round</span>
              </h4>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full lg:max-w-4/5 lg:mx-auto gap-8">
              {Meta.Tiers.map((tier, index) => (
                <Tier key={index} tier={tier} />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative">
        <Container>
          <div className="flex flex-1 flex-col gap-y-8 lg:gap-y-3">
            <header className="flex flex-col">
              <h4 className="flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading">
                <span className="text-foreground">Round 2</span>
                <span>—</span>
                <span>FCFS Round</span>
              </h4>
            </header>

            <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between gap-x-24 gap-y-8">
              <div className="flex flex-1">
                <p className="text-lg leading-6 text-muted-foreground font-medium">
                  MaxiRuby Launchpad introduces an exciting opportunity with our
                  unique ROUND-2 FCFS ROUND for MAXI token holders. In this
                  second round, any unsold tokens from the initial round become
                  available on a First-Come-First-Served (FCFS) basis
                  exclusively to our Platinum and above guaranteed tiers. These
                  esteemed members can acquire an additional allocation,
                  determined by a tier-based formula. This round remains open
                  until every token finds its home, usually spanning just a few
                  minutes. Once all tokens are claimed, the IDO reaches its
                  conclusion.
                  <br />
                  <br />
                  We're committed to gathering valuable data and feedback on our
                  IDO structure, continually optimizing it over time. Community
                  feedback and potential DAO proposals hold a special place in
                  our decision-making process
                  <br />
                  <br />
                  Our system stands as a transparent and demonstrably equitable
                  framework, motivating users to accumulate and hold MAXI tokens
                  while backing every project launched. As time progresses,
                  we'll fine-tune parameters, introduce new tiers, and make
                  necessary adjustments to ensure the system remains functional,
                  competitive, and rewarding for our entire community.
                  <br />
                  <br />
                  MaxiRuby.com represents the next step in the evolution of
                  blockchain launchpads, addressing the inherent flaws of
                  existing platforms. Our platform benefits all MAXI token
                  holders, leveling the playing field for traders of all sizes,
                  granting them access to the most promising upcoming Binance
                  Smart Chain projects."
                </p>
              </div>

              <div className="flex flex-1 justify-center items-center">
                <Image
                  src={Images.FCFS}
                  alt="FCFS Round"
                  width={306}
                  height={363}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>

          <div className="absolute right-0 -top-16 w-screen -z-1 pointer-events-none">
            <div className="relative inset-0 w-full h-0 pb-[61.783525291304635%]">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={Images.FCFS_BG}
                  alt="MaxiRuby"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="relative">
        <Container>
          <div className="flex flex-1 flex-col gap-y-8 lg:gap-y-3">
            <header className="flex flex-col">
              <h4 className="flex items-center gap-x-3 text-muted-foreground text-[max(1.75vw,18px)] font-medium font-heading">
                <span className="text-foreground">About</span>
              </h4>
            </header>

            <div className="flex flex-1 flex-col-reverse lg:flex-row items-center justify-between gap-x-24 gap-y-8">
              <div className="flex flex-1">
                <p className="text-lg leading-6 text-muted-foreground font-medium">
                  Maxiruby.com is a crypto launchpad platform that represents an
                  exciting future in the crypto world. Our mission goes beyond
                  providing a secure and user-friendly solution for crypto
                  projects to have a successful start.
                  <br />
                  <br />
                  The Maxiruby.com team combines its experience in the crypto
                  industry with the goal of making the crypto world more
                  accessible and rewarding. In the near future, users holding
                  Maxi tokens and tokens from projects launched on our platform
                  will have the opportunity to earn exclusive discounts and
                  rewards from numerous shopping brands in both Turkey and
                  worldwide.
                  <br></br>
                  <br></br>
                  <span>Why Choose Maxiruby.com?</span>
                  <br></br>
                  <br></br>- Reliability: Security is our top priority, and we
                  take the highest security measures to protect our users'
                  assets.
                  <br></br>
                  <br></br>- Reliability: We are committed to providing the
                  <br></br>
                  <br />- Supporting Projects: We assist in successfully funding
                  and growing crypto projects, thereby adding value to our
                  community.
                  <br />
                  <br />- User-Centric: We've designed our platform to maximize
                  the user experience and focus on our users' needs.
                  <br />
                  <br />- Investing in the Future: We believe in exploring the
                  potential of the crypto world and continuously work to support
                  the future growth of projects.
                  <br />
                  <br />
                  Maxiruby.com is not only a gateway to the crypto world but
                  also an ideal platform for anyone looking to earn special
                  discounts and rewards from shopping brands by holding Maxi
                  tokens and tokens from launch projects. Join us on this
                  journey and enjoy an experience beyond the crypto world.
                </p>
              </div>

              <div className="flex flex-1 justify-center items-center">
                {/* <Image
                  src={Images.FCFS}
                  alt="FCFS Round"
                  width={306}
                  height={363}
                  objectFit="contain"
                /> */}
              </div>
            </div>
          </div>

          <div className="absolute right-0 -top-16 w-screen -z-1 pointer-events-none">
            <div className="relative inset-0 w-full h-0 pb-[61.783525291304635%]">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={Images.FCFS_BG}
                  alt="MaxiRuby"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
}

function Tier({ tier }: { tier: TierType }) {
  return (
    <div className="flex flex-1 flex-col w-full bg-card/80 rounded-3xl p-5 gap-y-8">
      <header className="flex items-center justify-center bg-accent rounded-2xl py-3 px-6">
        <strong className="text-xl text-accent-foreground font-bold capitalize">
          {tier.tier}
        </strong>
      </header>

      <main className="flex flex-1 flex-col">
        <ul className="flex flex-col justify-center items-center gap-y-6">
          <li className="flex flex-col gap-y-1 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Entry Requirement
            </span>
            <strong className="text-2xl font-bold">
              {tier.staking_requirement}
            </strong>
          </li>

          <li className="flex flex-col gap-y-1 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Pool Weight
            </span>
            <strong className="text-2xl font-bold">
              {tier.whitelist_requirement}
            </strong>
          </li>

          <li className="flex flex-col gap-y-1 text-center">
            <span className="text-sm text-muted-foreground font-medium">
              Whitelist Tickets
            </span>
            <strong className="text-2xl font-bold">
              {tier.lottery_ticket}
            </strong>
          </li>
        </ul>
      </main>
    </div>
  );
}
