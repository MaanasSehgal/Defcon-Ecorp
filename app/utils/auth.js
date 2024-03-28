import { cookies } from "next/headers";

export const isAuthenticated = () => {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken");
  return !!authToken;
};
