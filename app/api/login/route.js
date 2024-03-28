import { loginKey, users } from "@/app/constants";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    if (!username || !password) {
      return Response.json(
        { error: "Missing username or password" },
        { status: 400 }
      );
    }

    const foundUser = users.find((user) => user.username === username);

    if (foundUser && foundUser.password === password) {
      const cookieStore = cookies();
      cookieStore.set("authToken", loginKey, { path: "/" });
      return Response.json({ username }, { status: 200 });
    } else {
      return Response.json(
        { error: "Incorrect username or password" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
