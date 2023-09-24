import React, { useContext, useEffect } from "react";
import type { LoaderFunction, V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData, useLocation } from "@remix-run/react";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";

// config
import { Projects as ProjectsConfig } from "~/config/projects.config";
import Icon from "~/components/shared/Icon";
import Image from "~/components/shared/Image";
import {
  ProjectCountdown,
  ProjectCurrency,
  ProjectSocialLinks,
  ProjectStatus,
} from "~/components/Project";
import ClaimModal from "~/components/project/ClaimModal";
import JoinModal from "~/components/project/JoinModal";
import PriceContext from "~/context/priceContext";
import WhitelistModal from "~/components/project/WhitelistModal";
import { useSelector } from "react-redux";

export const loader: LoaderFunction = ({ params }) => {
  const projectId = Number(params.project);
  const project = ProjectsConfig.at(projectId);

  if (!project) {
    return {
      statusCode: 404,
      message: "Project not found",
    };
  }

  return { project };
};

export const meta: V2_MetaFunction = ({ data }) => {
  const { project } = data;

  return [
    { title: `${project.name} — Maxiruby` },
    { name: "description", content: "Launchpad Projects — Maxiruby" },
  ];
};

export default function Project() {
  const prices = useContext(PriceContext);
  const { project } = useLoaderData<typeof loader>();
  const { pathname } = useLocation();
  const { user } = useSelector((user: any) => ({ ...user }));
  const segments = pathname.split("/");
  const [projectStatus, setProjectStatus] = React.useState<
    "open" | "upcoming" | "closed"
  >(project.status);
  const bnb = prices.BNB;
  function convertTimestampToDate(timestamp: any) {
    const date = new Date(timestamp);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // getUTCMonth 0 ile 11 arasında bir değer döndürür
    const year = date.getUTCFullYear();

    return `${day}-${month}-${year}`;
  }
  const [projects, setProjects] = React.useState<any>([]);
  const [tierlist, setTierlist] = React.useState<any>([]);
  useEffect(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();

      var requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "https://api.maxiruby.com/api/landing/oneproject/" +
          pathname.split("/")[2],
        requestOptions
      )
        .then((response) => response.json())
        .then((result: any) => setProjects(result.result))
        .catch((error) => console.log("error", error));
      fetch(
        "https://api.maxiruby.com/api/landing/tierlist/" +
          pathname.split("/")[2],
        requestOptions
      )
        .then((response) => response.json())
        .then((result: any) => setTierlist(result.result))
        .catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  function calculateProgress(totalTokens: number, soldTokens: number) {
    if (soldTokens === 0) {
      return 0;
    }
    return (soldTokens / totalTokens) * 100;
  }
  //@ts-ignore
  const profile: any = JSON.parse(localStorage?.getItem("profile"));

  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Container>
        <Section className="pb-3">
          <div className="flex flex-1 flex-col gap-y-5">
            <header>
              <Link to="/projects">
                <Button
                  type="button"
                  title="Back to projects"
                  variant="secondary"
                  size="small"
                  className="text-muted-foreground"
                >
                  <Icon icon="arrow-left" className="w-4 h-4" />
                  Back to projects
                </Button>
              </Link>
            </header>

            <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-8">
              <div className="flex flex-row flex-wrap items-center justify-between gap-5">
                <div className="flex flex-wrap items-start gap-4">
                  <div className="flex w-24 h-24 rounded-full bg-secondary overflow-hidden">
                    <img
                      src={projects.project_image}
                      alt={projects.project_image}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-y-3">
                    <h1 className="text-xl font-semibold">
                      {projects.project_name}
                    </h1>

                    <div className="flex flex-row items-center gap-2">
                      <div className="flex flex-row flex-wrap items-center gap-3">
                        <ProjectStatus status={projects.status} />

                        <ProjectCurrency
                          currency={
                            projects.enableByUsdt === 1 ? "BNB" : "USDT"
                          }
                        />
                      </div>
                    </div>

                    <div className="mt-1">
                      <ProjectSocialLinks
                        twitter={projects.project_twitter_url}
                        telegram={projects.project_telegram_url}
                        website={projects.project_website_url}
                      />
                    </div>
                  </div>
                </div>

                <ProjectCountdown project={projects} />

                <div className="flex flex-col items-center justify-center gap-y-4 md:items-end md:justify-end">
                  <Link
                    to={projects.whitepaper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 text-muted-foreground text-sm font-semibold hover:text-foreground transition-colors duration-150"
                  >
                    Whitepaper
                    <Icon icon="external" className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    to={projects.audit_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 text-muted-foreground text-sm font-semibold hover:text-foreground transition-colors duration-150"
                  >
                    Audit
                    <Icon icon="external" className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex flex-row items-center gap-x-2">
                    {project.status === "closed" ? (
                      <ClaimModal
                        project={project}
                        trigger={
                          <Button type="button" title="Claim" variant="primary">
                            Claim
                          </Button>
                        }
                      />
                    ) : (
                      <React.Fragment>
                        <WhitelistModal
                          project={tierlist}
                          trigger={
                            <Button
                              type="button"
                              title="View Whitelist"
                              variant="invert"
                            >
                              View Whitelist
                            </Button>
                          }
                        />

                        <JoinModal
                          project={projects}
                          trigger={
                            <Button
                              type="button"
                              title="Join"
                              variant="primary"
                              disabled={
                                projects.status !== "claim" ||
                                !profile ||
                                !user.user.verified ||
                                profile.tier === "None"
                              }
                            >
                              Join
                            </Button>
                          }
                        />
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-y-3 text-foreground/80">
                <p>{projects.project_description}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-3">
          <div className="flex flex-1 flex-row flex-wrap gap-6">
            <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5 min-w-[340px]">
              <h3 className="text-xl text-foreground/80 font-bold">
                Pool Information
              </h3>

              <div className="flex flex-1 flex-col gap-y-4">
                <li className="flex flex-1 flex-wrap items-center justify-between gap-2">
                  <strong className="text-foreground/60 font-medium uppercase">
                    TOKEN DISTRIBUTION
                  </strong>
                  <span className="text-foreground font-semibold">
                    {convertTimestampToDate(projects.startTime)}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    MIN. ALLOCATION
                  </strong>
                  <span className="text-foreground font-semibold">
                    {projects.minimumPayment}{" "}
                    {(() => {
                      if (
                        projects.enableByEther === 1 &&
                        projects.enableByUsdt === 1
                      ) {
                        return (
                          <span className="text-foreground/60 font-medium uppercase">
                            USDT/BNB
                          </span>
                        );
                      }
                      if (projects.enableByEther === 1) {
                        return (
                          <span className="text-foreground/60 font-medium uppercase">
                            BNB
                          </span>
                        );
                      }
                      return (
                        <span className="text-foreground/60 font-medium uppercase">
                          USDT
                        </span>
                      );
                    })()}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    MAX. ALLOCATION
                  </strong>
                  <span className="text-foreground font-semibold">
                    {projects.maximumPayment}{" "}
                    {projects.enableByEther === 1 &&
                    projects.enableByUsdt === 1 ? (
                      <span className="text-foreground/60 font-medium uppercase">
                        USDT/BNB
                      </span>
                    ) : projects.enableByEther === 1 ? (
                      <span className="text-foreground/60 font-medium uppercase">
                        BNB
                      </span>
                    ) : (
                      <span className="text-foreground/60 font-medium uppercase">
                        USDT
                      </span>
                    )}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    TOKEN PRICE
                  </strong>
                  <span className="text-foreground font-semibold">
                    1 BUSD = {projects.project_swap_rate}{" "}
                    {projects.project_token_symbol}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    ACCESS TYPE
                  </strong>
                  <span className="text-foreground font-semibold">
                    <div className="py-1 px-3 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                      Private
                    </div>
                  </span>
                </li>
              </div>
            </div>

            <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5 min-w-[340px]">
              <h3 className="text-xl text-foreground/60 font-bold">
                Token Information
              </h3>

              <div className="flex flex-1 flex-col gap-y-4">
                <li className="flex flex-1 flex-wrap items-center justify-between gap-2">
                  <strong className="text-foreground/60 font-medium uppercase">
                    NAME
                  </strong>
                  <span className="text-foreground font-semibold">
                    {projects.project_name}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    SYMBOL
                  </strong>
                  <span className="text-foreground font-semibold">
                    {" "}
                    {projects.project_token_symbol}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    DECIMALS
                  </strong>
                  <span className="text-foreground font-semibold">
                    {" "}
                    {projects.tokenDecimal}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    ADDRESS
                  </strong>
                  <span className="text-foreground font-semibold">
                    {projects.tokenToSell}
                  </span>
                </li>

                <li className="flex flex-1 flex-wrap items-center justify-between gap-1.5">
                  <strong className="text-foreground/60 font-medium uppercase">
                    TOTAL SUPPLY
                  </strong>
                  <span className="text-foreground font-semibold">
                    {projects.project_hard_cap}
                  </span>
                </li>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-3">
          <div className="flex flex-1 flex-col border border-solid border-border rounded-xl py-6 px-5 gap-y-5">
            <h3 className="text-xl text-foreground/80 font-bold">
              Total Raised
            </h3>

            <div className="flex flex-1 flex-row flex-wrap items-center justify-between">
              <h6 className="text-2xl text-foreground font-bold">
                {Number(projects.selled) /
                  Number(projects.project_swap_rate) /
                  bnb}{" "}
                BNB
              </h6>

              <span className="text-foreground font-semibold">Filled</span>
            </div>

            <div className="flex flex-col gap-y-3">
              <div className="flex flex-1 flex-row flex-wrap items-center justify-between">
                <strong className="flex items-center gap-x-1.5 text-foreground/60 uppercase">
                  PROGRESS
                  <span className="text-foreground font-bold">
                    {" "}
                    {calculateProgress(
                      Number(projects.project_hard_cap),
                      Number(projects.selled)
                    )}
                    %
                  </span>
                </strong>

                <span className="text-foreground font-medium">
                  {projects.selled} /{" "}
                  <span className="text-foreground/60">
                    {" "}
                    {projects.project_hard_cap} {projects.project_token_symbol}
                  </span>
                </span>
              </div>

              {/* progressbar */}
              <div className="w-full h-4 mb-4 bg-secondary/50 rounded-full">
                <div
                  className="h-4 rounded-full bg-gradient-to-l from-bg-background from-accent"
                  style={{
                    width: `${calculateProgress(
                      Number(projects.project_hard_cap),
                      Number(projects.selled)
                    )}%`,
                  }}
                />
              </div>
            </div>

            <div className="flex flex-1 flex-row flex-wrap items-center justify-between">
              <strong className="flex flex-col gap-y-1.5 text-foreground/60">
                Limited
                <span className="text-foreground">
                  Participants: {projects?.project_total_user?.length}
                </span>
              </strong>

              <span className="py-2.5 px-4 rounded-xl bg-secondary/70 text-secondary-foreground text-sm font-semibold">
                1 BNB = {(bnb / 1) * projects.project_swap_rate}{" "}
                {projects.project_token_symbol}
              </span>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
}
