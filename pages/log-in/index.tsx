import type { NextPage } from "next";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
};

const logIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it
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
