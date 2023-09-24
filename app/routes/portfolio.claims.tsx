import { V2_MetaFunction } from "@remix-run/node";
import { Form, Link, NavLink, Outlet } from "@remix-run/react";
import React, { useEffect, useState } from "react";

// components
import { Container, Section } from "~/components/Layout";
import { ProjectCountdown } from "~/components/Project";
import Button from "~/components/shared/Button";

// config
import { Projects } from "~/config/projects.config";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portfolio — Maxiruby" },
    { name: "description", content: "Portfolio — Maxiruby" },
  ];
};

export default function PortfolioClaims() {
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

  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="flex flex-1 flex-col w-full max-w-[1100px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8">
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

                  <Link to="/projects/1" className="mx-auto sm:mx-0">
                    <Button type="button" title="Claim" variant="primary">
                      Claim
                    </Button>
                  </Link>
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

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const targetTime =
        project.status === "claim"
          ? new Date(project.vestingStartTime).getTime()
          : new Date(project.project_fcfs_open_time).getTime();

      const distance = targetTime - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
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
        {isClaim ? "Claim" : "Project"}{" "}
        {project.status === "open" || project.status === "closed"
          ? "ends"
          : "starts"}{" "}
        in
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
