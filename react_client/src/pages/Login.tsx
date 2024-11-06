import { SubmitHandler, useForm } from "react-hook-form";
import { loginUser, User } from "../services/auth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();
  const { register, handleSubmit } = useForm<User>();

  const onSubmit: SubmitHandler<User> = (data) => {
    loginUser(data)
      .then(({ data }) => {
        console.log(data.user);
        toast.success("Login Success");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", data.user._id);
        nav("/");
      })
      .catch(() => toast.error("Error"));
  };
  return (
    <div className="container">
      <h1 className="text-center my-2">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            {...register("email")}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
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
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
