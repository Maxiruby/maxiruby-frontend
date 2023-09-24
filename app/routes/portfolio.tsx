import { V2_MetaFunction } from "@remix-run/node";
import { Form, NavLink, Outlet } from "@remix-run/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portfolio — Maxiruby" },
    { name: "description", content: "Portfolio — Maxiruby" },
  ];
};

export default function Portfolio() {
  const { address } = useAccount();
  const { user } = useSelector((user: any) => ({ ...user }));

  let userData: any = Cookies.get("user");
  userData = JSON.parse(userData);


  const gerUSer = async () => {
    if (!userData.token) return;
    try {
      const { data } = await axios.get(
        `https://api.maxiruby.com/api/users/auth`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      localStorage.setItem("profile", JSON.stringify(data.result));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    gerUSer();
  }, []);
  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Section>
        <Container>
          <div className="flex flex-1 flex-col gap-y-12">
            <header className="flex flex-1 flex-col items-center justify-center gap-y-6">
              <h1 className="text-3xl font-medium font-heading">Portfolio</h1>

              <div className="flex flex-wrap items-center justify-center text-center gap-x-1.5 gap-y-1">
                <span className="text-sm text-muted-foreground font-medium uppercase">
                  Wallet Address
                </span>
                <span className="text-sm text-accent font-medium">
                  {address}
                </span>
              </div>
            </header>

            <div className="flex flex-1 flex-col items-center justify-center">
              <div className="flex flex-1 flex-wrap items-center justify-center gap-4">
                <NavLink to="/portfolio" end>
                  {({ isActive }) => (
                    <Button
                      type="button"
                      title="Tier"
                      variant={isActive ? "primary" : "secondary"}
                    >
                      Tier
                    </Button>
                  )}
                </NavLink>

                <NavLink to="/portfolio/idos" end>
                  {({ isActive }) => (
                    <Button
                      type="button"
                      title="IDO's Participated"
                      variant={isActive ? "primary" : "secondary"}
                    >
                      IDO's Participated
                    </Button>
                  )}
                </NavLink>

                <NavLink to="/portfolio/claims" end>
                  {({ isActive }) => (
                    <Button
                      type="button"
                      title="Claims"
                      variant={isActive ? "primary" : "secondary"}
                    >
                      Claims
                    </Button>
                  )}
                </NavLink>
              </div>
            </div>

            <main className="flex flex-1 flex-col items-center justify-center">
              <Outlet />
            </main>
          </div>
        </Container>
      </Section>
    </div>
  );
}
