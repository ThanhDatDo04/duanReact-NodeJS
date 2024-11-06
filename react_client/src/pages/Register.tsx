import { SubmitHandler, useForm } from "react-hook-form";
import { registerUser, User } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    registerUser(data)
      .then(() => {
        toast.success("Register Success");
        nav("/login");
      })
      .catch(() => toast.error("Error"));
  };
  return (
    <div className="container">
      <h1 className="text-center my-2">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email", { required: "Email is Required" })}
          />
          {errors?.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            {...register("password")}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
