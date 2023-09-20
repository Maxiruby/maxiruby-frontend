import { V2_MetaFunction } from "@remix-run/node";
import { Form, NavLink, Outlet } from "@remix-run/react";
import React, { useEffect } from "react";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";
import type { Tier as TierType } from "~/types/meta.types";
export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portfolio — Maxiruby" },
    { name: "description", content: "Portfolio — Maxiruby" },
  ];
};

export default function PortfolioTier() {
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

      fetch("http://maxiruby.com/api/users/auth/getproject", requestOptions)
        .then((response: any) => response.text())
        .then((result) => setProjects(JSON.parse(result).result))
        .catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8">
        {projects ? (
          <>
            <Tier
              tier={{
                tier: projects.tier,
              }}
            />
          </>
        ) : (
          <p className="text-muted-foreground font-medium text-center py-3">
            Once you start having activity, your tier level will be shown here.
          </p>
        )}
      </div>
    </div>
  );
}

function Tier({ tier }: any) {
  return (
    <div className="flex flex-1 flex-col w-full bg-card/80 rounded-3xl p-5 gap-y-8">
      <header className="flex items-center justify-center bg-accent rounded-2xl py-3 px-6">
        <strong className="text-xl text-accent-foreground font-bold capitalize">
          {tier.tier}
        </strong>
      </header>
    </div>
  );
}
