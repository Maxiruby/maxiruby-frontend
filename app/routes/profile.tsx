import { V2_MetaFunction } from "@remix-run/node";
import { Form, useNavigate } from "@remix-run/react";
import axios from "axios";
import { ConnectKitButton } from "connectkit";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import { Container, Section } from "~/components/Layout";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Profile — Maxiruby" },
    { name: "description", content: "Profile — Maxiruby" },
  ];
};

export default function Profile() {
  const navigate = useNavigate();
  //@ts-ignore
  const profile: any = JSON.parse(localStorage?.getItem("profile"));
  const { user } = useSelector((user: any) => ({ ...user }));
  const [username, setUsername] = useState(profile?.username);
  const [surname, setSurname] = useState(profile?.surname);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const handleUpdateProfile = async () => {
    setLoading(true);
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        username,
        surname,
      });
      myHeaders.append("Authorization", "Bearer " + user.token);
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = fetch(
        "https://api.maxiruby.com/api/users/auth/update",
        requestOptions
      );
      const data = await (await response).json();
      setLoading(false);
      localStorage.setItem("profile", JSON.stringify(data.result.user));
      setSuccess("Profile updated successfully");
      setTimeout(() => {
        setSuccess("");
      }, 2000);
      setError("");
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
      setSuccess("");
    }
  };
  const handleChangePassword = async () => {
    setSuccess("");
    setError("");
    setLoading(true);
    if (!password) {
      setError("Password is required");

      setTimeout(() => {
        setError("");
        setLoading(false);
      }, 2000);
      return;
    }
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      var raw = JSON.stringify({
        newpassword: password,
      });
      myHeaders.append("Authorization", "Bearer " + user.token);
      var requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      const response = fetch(
        "https://api.maxiruby.com/api/users/auth/resetpassword",
        requestOptions
      );
      const data = await (await response).json();
      setSuccess("Profile updated successfully");
      setTimeout(() => {
        setSuccess("");
        localStorage.removeItem("profile");
        localStorage.removeItem("token");
        navigate("/login");
      }, 2000);
      setError("");
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
      setSuccess("");
    }
  };
  const { users } = useSelector((user: any) => ({ ...user }));

  let userData: any = Cookies.get("user");
  userData = JSON.parse(userData);
  console.log(userData.token, "muzo");

  const gerUSer = async () => {
    if (!users) return;
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
            <header className="flex flex-1 flex-col items-center justify-center">
              <h1 className="text-3xl font-medium font-heading">
                Profile Settings
              </h1>
            </header>

            <main className="flex flex-1 flex-col items-center justify-center">
              <Form className="flex flex-1 w-full max-w-[720px] mx-auto">
                <FormField>
                  <FormRow>
                    <FormGroup>
                      <FormLabel optional>Username</FormLabel>
                      <Input
                        type="text"
                        value={username}
                        placeholder="Name"
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                        className="w-full min-w-[160px]"
                      />
                    </FormGroup>

                    <FormGroup>
                      <FormLabel optional>Surname</FormLabel>
                      <Input
                        type="text"
                        value={surname}
                        placeholder="Surname"
                        onChange={(e) => {
                          setSurname(e.target.value);
                        }}
                        className="w-full min-w-[200px]"
                      />
                    </FormGroup>
                  </FormRow>

                  <FormGroup>
                    <FormLabel>Email Adress</FormLabel>
                    <Input
                      type="text"
                      value=""
                      placeholder={profile?.email}
                      onChange={() => {}}
                      className="w-full min-w-[200px]"
                    />
                  </FormGroup>

                  <FormGroup>
                    <FormLabel>Password</FormLabel>
                    <div className="flex flex-1 items-stretch flex-wrap gap-4">
                      <Input
                        type="password"
                        value={password}
                        placeholder="********"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        className="flex flex-[5] min-w-[200px]"
                      />

                      <Button
                        type="button"
                        title="Reset Password"
                        variant="border"
                        className="flex-[1] min-w-[200px]"
                        onClick={handleChangePassword}
                        disabled={loading}
                      >
                        {loading ? "Loading..." : "Reset Password"}
                      </Button>
                    </div>
                  </FormGroup>
                  {success ? (
                    <small style={{ color: "green" }}> {success}</small>
                  ) : null}
                  {error ? (
                    <small style={{ color: "red" }}> {error}</small>
                  ) : null}
                  <FormGroup>
                    <Button
                      onClick={handleUpdateProfile}
                      disabled={loading}
                      type="button"
                      title="Save Changes"
                      variant="primary"
                      className="w-fit mx-auto px-8"
                    >
                      {loading ? "Loading..." : "Save Changes"}
                    </Button>
                  </FormGroup>
                </FormField>
              </Form>
            </main>
          </div>
        </Container>
      </Section>
    </div>
  );
}

interface FormDefaultProps {
  children: React.ReactNode;
}

function FormField({ children }: FormDefaultProps) {
  return (
    <div className="flex flex-1 flex-col justify-center items-center gap-y-6">
      {children}
    </div>
  );
}

function FormGroup({ children }: FormDefaultProps) {
  return <div className="flex flex-1 flex-col gap-y-2 w-full">{children}</div>;
}

function FormRow({ children }: FormDefaultProps) {
  return (
    <div className="flex flex-1 flex-row flex-wrap gap-4 w-full">
      {children}
    </div>
  );
}

function FormLabel({
  children,
  optional = false,
}: FormDefaultProps & { optional?: boolean }) {
  return (
    <label className="flex flex-1 flex-row items-center gap-x-1">
      <span className="text-sm font-semibold text-foreground">{children}</span>
      {optional && (
        <span className="text-xs font-medium text-muted-foreground">
          (Optional)
        </span>
      )}
    </label>
  );
}
