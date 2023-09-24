import type { V2_MetaFunction } from "@remix-run/node";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Banner from "~/components/home/Banner";
import LaunchFeatures from "~/components/home/LaunchFeatures";
import Partners from "~/components/home/Partners";
import TierSystem from "~/components/home/TierSystem";
import SendVerification from "~/components/shared/SendVerification";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Launchpad — Maxiruby" },
    { name: "description", content: "Launchpad — Maxiruby" },
  ];
};

export default function Index() {
  const { user } = useSelector((user: any) => ({ ...user }));
  const dispatch = useDispatch();
  let userData: any = Cookies.get("user");
  userData = JSON.parse(userData);
  console.log(userData.user, "muzo");

  const gerUSer = async () => {
    if (!user) return;
    try {
      const { data } = await axios.get(
        `https://api.maxiruby.com/api/users/auth`,
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
          },
        }
      );
      console.log(data.result, "muzo");

      localStorage.setItem("profile", JSON.stringify(data.result));
      Cookies.set(
        "user",
        JSON.stringify({ ...user, verified: data.result.verify })
      );
      dispatch({
        type: "VERIFY",
        payload: data.result.verify,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    gerUSer();
  }, []);
  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Banner user={user} />

      <LaunchFeatures />
      <TierSystem />
      <Partners />
    </div>
  );
}
