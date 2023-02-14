/* import { withIronSessionApiRoute } from "iron-session/next";
import useSWR from "swr";

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    const { data, error } = useSWR("/api/users/me");
    req.session.user = {
      id: 230,
      admin: true,
    };
    await req.session.save();
    res.send({ ok: true });
  },
  {
    cookieName: "myapp_cookiename",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  },
); */