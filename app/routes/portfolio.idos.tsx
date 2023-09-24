import { V2_MetaFunction } from "@remix-run/node";
import { Form, Link, NavLink, Outlet } from "@remix-run/react";
import React, { useEffect } from "react";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";
import Image from "~/components/shared/Image";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portfolio — Maxiruby" },
    { name: "description", content: "Portfolio — Maxiruby" },
  ];
};

export default function PortfolioIDOsParticipated() {
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
  console.log(projects);

  return (
    <div className="flex flex-1 flex-col w-full">
      <div className="flex flex-1 flex-col w-full max-w-[700px] mx-auto bg-card rounded-xl py-8 px-6 gap-y-8">
        <header className="flex flex-col justify-center items-center text-center gap-y-2 pb-5 border-b border-solid border-border">
          <h2 className="font-medium text-muted-foreground">
            IDO's Participated
          </h2>
          <span className="text-2xl font-semibold">
            {projects?.projects ? projects.projects.length : 0}
          </span>
        </header>

        <div className="flex flex-col gap-y-5">
          <h3 className="font-semibold text-center text-lg">
            Participated IDO's
          </h3>

          <ul className="flex flex-col gap-y-6">
            {projects.projects ? (
              projects.projects.map((p: any, i: any) => (
                <li
                  key={i}
                  className="flex flex-1 items-center justify-between gap-x-5"
                >
                  <div className="flex items-center gap-x-3">
                    <div className="relative flex w-12 h-12 rounded-full bg-secondary overflow-hidden">
                      <img
                        src={p.project_image}
                        alt={p.project_image}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <strong className="font-semibold"> {p.project_name}</strong>
                  </div>

                  <Link to={"/projects/" + p._id}>
                    <Button type="button" title="View" variant="secondary">
                      View More
                    </Button>
                  </Link>
                </li>
              ))
            ) : (
              <small className="text-sm text-muted-foreground font-semibold">
                No projects to show currently.
              </small>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
