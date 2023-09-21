import { Link } from "@remix-run/react";
import { V2_MetaFunction } from "@remix-run/node";

// components
import { Container, Section } from "~/components/Layout";
import Image from "~/components/shared/Image";
import React, { useEffect } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Blog — Maxiruby" },
    { name: "description", content: "Blog — Maxiruby" },
  ];
};

interface Blog {
  index: number;
}

export default function Blog() {
  const [projects, setProjects] = React.useState([]);
  useEffect(() => {
    const getAllProject = async () => {
      var myHeaders = new Headers();

      var requestOptions: any = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch("http://api.maxiruby.com/api/landing/blog", requestOptions)
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
          <div className="flex flex-1 flex-col gap-y-10">
            <header className="flex flex-1 flex-row flex-wrap items-center justify-between gap-5">
              <h1 className="text-3xl font-medium font-heading">Blog</h1>
            </header>

            <main className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
              {projects &&
                projects.map((blog) => {
                  return <BlogCard blog={blog} />;
                })}
            </main>
          </div>
        </Container>
      </Section>
    </div>
  );
}

function BlogCard({ blog }: any) {
  console.log(blog);

  return (
    <Link
      to={`/blog/${blog._id}`}
      className="flex flex-col gap-y-5 hover:opacity-80 transition-opacity duration-150"
    >
      <header className="relative flex flex-col rounded-xl overflow-hidden">
        <div className="relative flex flex-1 w-full h-full pb-[52%] overflow-hidden">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={blog.image}
              alt="Blog"
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
        </div>
      </header>

      <div className="flex flex-col gap-y-1">
        <strong className="text-xl font-bold">{blog.title}</strong>
        <p className="line-clamp-3 font-medium text-sm text-muted-foreground">
          <div
            dangerouslySetInnerHTML={{
              __html: `${blog.text}`,
            }}
          />
        </p>

        <span className="text-xs text-muted-foreground"></span>
      </div>
    </Link>
  );
}
