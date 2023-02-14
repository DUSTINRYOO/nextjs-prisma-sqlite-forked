import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";

type CreateForm = {
  name: string;
  email: string;
};

const createAccount: NextPage = () => {
  const router = useRouter();

  const onValid = (data: CreateForm) => {
    fetch("/api/create-account", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/log-in");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateForm>();
  const onSubmit: SubmitHandler<CreateForm> = async (data) => onValid(data);

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name: </label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
        <label htmlFor="name">Email: </label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
        <input type="submit" value="Create Account" />
      </form>
    </div>
  );
};

export default createAccount;
