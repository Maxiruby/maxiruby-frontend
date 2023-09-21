import { LoaderFunction, V2_MetaFunction, json } from "@remix-run/node";
import { useLoaderData, useLocation } from "@remix-run/react";
import React, { useEffect } from "react";

// components
import { Container, Section } from "~/components/Layout";
import Image from "~/components/shared/Image";

export const meta: V2_MetaFunction = ({ data }) => {
  return [
    { title: `One blog — Maxiruby` }, // burasi data.blog.title olcak
    { name: "description", content: `One blog — Maxiruby` }, // burasi data.blog.description olcak
  ];
};

export default function BlogDetails() {
  const { pathname } = useLocation();
  const [projects, setProjects] = React.useState<any>([]);
  useEffect(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();

      var requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(
        "http://api.maxiruby.com/api/landing/blogone/" + pathname.split("/")[2],
        requestOptions
      )
        .then((response) => response.json())
        .then((result: any) => setProjects(result.result))
        .catch((error) => console.log("error", error));
    };
    getAllProject();
  }, []);
  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-8">
            <header className="flex flex-col gap-y-3">
              <h1 className="text-3xl font-bold text-foreground">
                {projects.title}
              </h1>
              <span className="flex items-center text-sm font-medium text-muted-foreground">
                6d ago • 16min read
              </span>
            </header>
            <main className="flex flex-1 flex-col">
              <div className="relative block max-h-[640px] mx-auto w-full rounded-xl overflow-hidden mb-5">
                <Image
                  src={projects.image}
                  alt={projects.title}
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              </div>

              <p className="text-lg font-semibold">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${projects.text}`,
                  }}
                />
              </p>
            </main>
          </div>
        </Container>
      </Section>
    </div>
  );
}
