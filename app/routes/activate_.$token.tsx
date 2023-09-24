import { Link, useLoaderData, useNavigate, useParams } from "@remix-run/react";
import {
  LoaderFunction,
  Response,
  V2_MetaFunction,
  json,
} from "@remix-run/node";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
// components
import { Container, Section } from "~/components/Layout";
import Image from "~/components/shared/Image";
import React, { useEffect, useState } from "react";
import ActivateForm from "~/components/shared/ActivateForm";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Activate — Maxiruby" },
    { name: "description", content: "Activate — Maxiruby" },
  ];
};

interface Blog {
  index: number;
}

export default function Active() {
  const { user } = useSelector((user: any) => ({ ...user }));
  const { token } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(token);

  useEffect(() => {
    activateAccount();
  }, [token]);
  const activateAccount = async () => {
    try {
      setLoading(true);
      console.log(token, "muzo");
      const { data } = await axios.post(
        `https://api.maxiruby.com/api/users/auth/activate`,
        { token },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setSuccess(data.message);
      Cookies.set("user", JSON.stringify({ ...user, verified: true }));
      dispatch({
        type: "VERIFY",
        payload: true,
      });

      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error: any) {
      setError(error.message);
      // setTimeout(() => {
      //   navigate("/");
      // }, 3000);
    }
  };
  return (
    <div className="flex flex-1 flex-col h-full min-h-[75vh]">
      <Section>
        <Container>
          {success && (
            <ActivateForm
              type="success"
              header="Account verification succeded."
              text={success}
              loading={loading}
            />
          )}
          {error && (
            <ActivateForm
              type="error"
              header="Account verification failed."
              text={error}
              loading={loading}
            />
          )}
        </Container>
      </Section>
    </div>
  );
}
