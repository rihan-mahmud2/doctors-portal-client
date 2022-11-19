import React, { useContext, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../Contexts/ContextProvider";
import toast from "react-hot-toast";
import useToken from "../../hooks/UseToken";

//sign up starts here
const SignUp = () => {
  // const [myEmail, setMyemail] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }
  // const ref = useRef();

  const {
    handleSubmit,

    formState: { errors },
    register,
  } = useForm();
  const { createUser, update } = useContext(authContext);
  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        const user = res.user;
        toast("User created uscessfully");
        const updatedUser = {
          displayName: data.name,
        };

        update(updatedUser)
          .then((res) => {
            saveUser(data.email, data.name);
          })
          .catch((err) => toast(err.message));

        console.log(user);
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  //posting the data on database
  const saveUser = (email, name) => {
    const user = {
      email: email,
      name: name,
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((result) => {
        setCreatedUserEmail(email);
      })
      .catch((err) => console.log(err));
  };

  const getToken = (email) => {};
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7">
        <h1 className="text-xl text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>

            <input
              type="text"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: true,
                maxLength: {
                  value: 30,
                  message: "The name should be within 50 character",
                },
              })}
            />
            {errors?.name && errors.name.type === "required" && (
              <p className="text-red-700">The name is required</p>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <p className="text-red-700" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>

            <input
              // ref={ref}
              type="email"
              // onChange={() => setMyemail(getValues("email"))}
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                // onChange: (e) => setMyemail(e.target.value),
              })}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <input
              type="password"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: "Password Required",
                pattern: {
                  value: /[!#$%&]/,
                  message: "Your password should have specail letters",
                },
              })}
            />
            {errors.password && errors.password.type === "pattern" && (
              <p>{errors.password.message}</p>
            )}
            {errors.password && errors.password.type === "required" && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <input
            className="btn btn-neutral w-full mt-5"
            value="Sign Up"
            type="submit"
          />
        </form>

        <p className="mt-5">
          Have an account
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </p>
        <div className="divider">OR</div>

        <button className="btn btn-outline w-full">Continue With Goole</button>
      </div>
    </div>
  );
};

export default SignUp;
