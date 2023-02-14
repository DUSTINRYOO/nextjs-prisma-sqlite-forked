import type { NextPage } from "next";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";

type loginForm = {
  email: string;
};

const logIn: NextPage = () => {
  const router = useRouter();

  const onValid = (data: loginForm) => {
    fetch("/api/log-in", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  };
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<loginForm>();
  const onSubmit: SubmitHandler<loginForm> = (data) => onValid(data);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Email: </label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default logIn;
