import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import handler from "../api/create-account";

type Inputs = {
  name: string;
  email: string;
};

const createAccount: NextPage = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => handler(data);

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
