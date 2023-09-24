import Cookies from "js-cookie";

export function userReducer(
  state: any = Cookies.get("user")
    ? JSON.parse(Cookies.get("user") as string)
    : null,

  action: { type: any; payload: any }
) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return null;
    case "VERIFY":
      return { ...state, verified: action.payload };

    default:
      return state;
  }
}
