import React, { useEffect } from "react";
import type { V2_MetaFunction } from "@remix-run/node";

// components
import { Container, Section } from "~/components/Layout";
import Project from "~/components/Project";
import Button from "~/components/shared/Button";

// config
import { Projects as ProjectsConfig } from "~/config/projects.config";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Launchpad Projects — Maxiruby" },
    { name: "description", content: "Launchpad Projects — Maxiruby" },
  ];
};

export default function Projects() {
  const [filter, setFilter] = React.useState<
    "all" | "upcoming" | "open" | "claim"
  >("all");
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Access-Control-Allow-Origin",
        "https://api.maxiruby.com"
      );
      myHeaders.append("Content-Type", "application/json");
      var requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("https://api.maxiruby.com/api/landing/all", requestOptions)
        .then((response) => response.json())
        .then((result: any) => setProjects(result.result))
        .catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p: any) => p.status === filter);
  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-10">
            <header className="flex flex-1 flex-row flex-wrap items-center justify-between gap-5">
              <h1 className="text-3xl font-medium font-heading">Projects</h1>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  type="button"
                  title="All"
                  variant={filter === "all" ? "primary" : "secondary"}
                  onClick={() => setFilter("all")}
                >
                  All
                </Button>
                <Button
                  type="button"
                  title="Upcoming"
                  variant={filter === "upcoming" ? "primary" : "secondary"}
                  onClick={() => setFilter("upcoming")}
                >
                  Upcoming
                </Button>
                <Button
                  type="button"
                  title="Open"
                  variant={filter === "open" ? "primary" : "secondary"}
                  onClick={() => setFilter("open")}
                >
                  Open
                </Button>
                <Button
                  type="button"
                  title="Closed"
                  variant={filter === "claim" ? "primary" : "secondary"}
                  onClick={() => setFilter("claim")}
                >
                  Closed
                </Button>
              </div>
            </header>

            <main className="flex flex-1 flex-wrap items-start justify-start gap-6">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((p, i) => <Project key={i} project={p} />)
              ) : (
                <small className="text-sm text-muted-foreground font-semibold">
                  No projects to show currently.
                </small>
              )}
            </main>
          </div>
        </Container>
      </Section>
    </div>
  );
}
