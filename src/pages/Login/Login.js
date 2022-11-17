import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Contexts/ContextProvider";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(authContext);
  const hanldeForm = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((res) => {
        const user = res.user;

        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-xl text-center">Login</h1>
        <form onSubmit={handleSubmit(hanldeForm)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              type="email"
              className="input input-bordered w-full max-w-xs"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-700">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 5,
                  message: "Paassword should be 10 characters or more",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-700">{errors.password.message}</p>
            )}
          </div>

          <label className="label">
            <span className="label-text">Forget Password?</span>
          </label>

          <input
            className="btn btn-neutral w-full"
            value="Login"
            type="submit"
          />
        </form>

        <p className="mt-5">
          New to doctors portal{" "}
          <Link className="text-secondary" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn btn-outline w-full">Continue With Goole</button>
      </div>
    </div>
  );
};

export default Login;
