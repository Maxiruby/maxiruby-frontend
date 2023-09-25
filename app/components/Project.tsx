import { Link, NavLink } from "@remix-run/react";

// components
import Icon from "~/components/shared/Icon";
import Button from "~/components/shared/Button";

// utils
import { cn } from "~/utils/cn";
import { useEffect, useState } from "react";

export default function Project({ project }: any) {
  function calculateProgress(totalTokens: number, soldTokens: number) {
    if (soldTokens === 0) {
      return 0;
    }
    return (soldTokens / totalTokens) * 100;
  }
  return (
    <div className="flex flex-1 flex-col min-w-[340px] max-w-[426px] rounded-xl bg-card py-6 px-8">
      <div className="flex flex-1 flex-col gap-y-4">
        <header className="flex flex-col justify-center items-center gap-y-5">
          <div className="relative w-24 h-24 rounded-full bg-secondary overflow-hidden">
            <img
              src={project.project_image}
              alt={project.project_image}
              className="w-full h-full object-cover"
            />
          </div>

          <strong className="text-xl font-medium">
            {project.project_name}
          </strong>

          <div className="flex flex-row items-center gap-x-3">
            <ProjectStatus status={project.status} />
            <ProjectCurrency
              currency={project.enableByUsdt === 1 ? "BNB" : "USDT"}
            />
          </div>

          <ProjectSocialLinks />
        </header>

        <main className="flex flex-col py-4 pb-2 gap-y-6">
          <ProjectCountdown project={project} />

          <ul className="flex flex-col gap-y-3">
            <li className="flex flex-row items-center justify-between gap-x-3">
              <strong className="text-lg">Swap Rate</strong>
              <span className="text-lg text-foreground/60 text-semibold">
                {project.project_swap_rate}
              </span>
            </li>
            <li className="flex flex-row items-center justify-between gap-x-3">
              <strong className="text-lg">Cap</strong>
              <span className="text-lg text-foreground/60 text-semibold">
                {project.project_hard_cap}
              </span>
            </li>
            <li className="flex flex-row items-center justify-between gap-x-3">
              <strong className="text-lg">Access</strong>
              <span className="text-lg text-foreground/60 text-semibold">
                {project.whitelist ? "Private" : "Public"}
              </span>
            </li>
          </ul>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-between text-foreground/60">
              <span>Progress</span>
              <span>Participants</span>
            </div>
            <div className="relative flex flex-1 flex-col">
              <div className="relative w-full h-2 rounded-full bg-background">
                <div
                  className="absolute left-0 top-0 bottom-0 h-full rounded-full bg-accent"
                  style={{
                    width: `${calculateProgress(
                      Number(project.project_hard_cap),
                      Number(project.selled)
                    )}%`,
                  }}
                />
                {/* <span className={styles.progress_thumb} /> */}
              </div>
            </div>
            <div className="flex items-center justify-between text-lg font-semibold">
              <span>
                {calculateProgress(
                  Number(project.project_hard_cap),
                  Number(project.selled)
                )}
                %
              </span>
              <span>{Number(project.selled)}</span>
            </div>
          </div>
        </main>

        <footer className="flex flex-row items-center justify-center">
          <NavLink to={`/projects/${project._id}`}>
            <Button
              type="button"
              title="View More"
              variant="border"
              className="bg-background"
            >
              View More
            </Button>
          </NavLink>
        </footer>
      </div>
    </div>
  );
}

export function ProjectStatus({
  status,
}: {
  status: "open" | "claim" | "upcoming";
}) {
  return (
    <div
      className={cn(
        "flex items-center py-1 px-3 gap-x-2 border border-solid rounded-full text-xs font-semibold",
        {
          "border-accent text-accent": status === "open",
          "border-upcoming text-upcoming": status === "upcoming",
          "border-closed text-closed": status === "claim",
        }
      )}
    >
      <span
        className={cn("w-2 h-2 rounded-full", {
          "bg-accent shadow-[0_0_8px_1px_rgba(235,224,22,0.6)]":
            status === "open",
          "bg-upcoming shadow-[0_0_8px_1px_rgba(0,227,166,0.6)]":
            status === "upcoming",
          "bg-closed shadow-[0_0_8px_1px_rgba(158,158,158,0.6)]":
            status === "claim",
        })}
      />
      <span className="capitalize">
        {status === "claim" ? "closed" : status}
      </span>
    </div>
  );
}

export function ProjectCurrency({ currency }: { currency: string }) {
  return (
    <div className="flex items-center py-1 px-3 gap-x-2 bg-foreground/[.15] rounded-full text-sm font-bold">
      {currency}
    </div>
  );
}

export function ProjectSocialLinks({ twitter, telegram, website }: any) {
  return (
    <ul className="flex flex-row items-center gap-x-4">
      <li>
        <Link to={website} target="_blank" rel="norefeerer noopenner">
          <Icon icon="globe" className="w-6 h-6" />
        </Link>
      </li>
      <li>
        <Link to={twitter} target="_blank" rel="norefeerer noopenner">
          <Icon icon="twitter" className="w-6 h-6" />
        </Link>
      </li>
      <li>
        <Link to={telegram} target="_blank" rel="norefeerer noopenner">
          <Icon icon="telegram" className="w-6 h-6" />
        </Link>
      </li>
    </ul>
  );
}

export function ProjectCountdown({
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
        project.status === "upcoming"
          ? new Date(project.startTime * 1000).getTime() // Saniyeden milisaniyeye dönüştürme
          : new Date(project.endTime * 1000).getTime(); // Saniyeden milisaniyeye dönüştürme

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
  }, [project.startTime, project.endTime, project.status]);

  // Basit bir şartlı sınıf adı oluşturma fonksiyonu
  const cn = (...args: any) => args.filter(Boolean).join(" ");

  if (!showClaimCoundown && project.status === "closed") return null;

  return (
    <div className="flex flex-col py-3 px-4 gap-y-3 bg-background rounded-xl">
      <strong className="font-semibold text-foreground/75 text-center">
        {isClaim ? "Claim" : "Project"}{" "}
        {project.status === "open" || project.status === "closed"
          ? "ends"
          : "starts"}{" "}
        in
      </strong>

      <div className="flex flex-1 flex-wrap items-center space-x-3">
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong
            className={cn("text-xl font-bold", {
              "text-accent": project.status === "open",
              "text-upcoming": project.status === "upcoming",
            })}
          >
            {timeLeft.days}
          </strong>
          <span className="text-sm text-foreground/60 font-semibold">DAYS</span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong
            className={cn("text-xl font-bold", {
              "text-accent": project.status === "open",
              "text-upcoming": project.status === "upcoming",
            })}
          >
            {timeLeft.hours}
          </strong>
          <span className="text-sm text-foreground/60 font-semibold">
            HOURS
          </span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong
            className={cn("text-xl font-bold", {
              "text-accent": project.status === "open",
              "text-upcoming": project.status === "upcoming",
            })}
          >
            {timeLeft.minutes}
          </strong>
          <span className="text-sm text-foreground/60 font-semibold">
            MINUTES
          </span>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center gap-y-1">
          <strong
            className={cn("text-xl font-bold", {
              "text-accent": project.status === "open",
              "text-upcoming": project.status === "upcoming",
            })}
          >
            {timeLeft.seconds}
          </strong>
          <span className="text-sm text-foreground/60 font-semibold">
            SECONDS
          </span>
        </div>
      </div>
    </div>
  );
}
