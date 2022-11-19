import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Shared/Loading/Loading";

const AddDoctor = () => {
  //   const imgHostingApi = process.env.REACT_APP_IMG_HOSTING_API_KEY;
  //   console.log(imgHostingApi);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { data: specialities = [], isLoading } = useQuery({
    queryKey: ["appointmentSpecality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpecality");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

  const handleSignUp = (data) => {
    const img = data.image[0];
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=0cc7c5d9462483123e44c8df054d41da`;
    const formData = new FormData();
    formData.append("image", img);
    console.log(formData, img);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            speciality: data.specialities,
            img: imgData.data.url,
          };

          console.log(doctor);

          fetch("http://localhost:5000/dashboard/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(doctor),
          });
        }
      })
      .then((result) => {
        console.log(result);
        toast(`${data.name} added successfully`);
        navigate("/dashboard/manageDoctors");
      })
      .catch((err) => toast(err.message));
  };
  return (
    <div className="w-96 ml-10">
      <h1>Add a doctor</h1>
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
            <span className="label-text">Speciality</span>
          </label>
          <select className="select input-bordered w-full max-w-xs">
            {specialities.map((special) => (
              <option
                {...register("specialities", {
                  required: true,
                  message: "Specialites is required",
                })}
                key={special._id}
                value={special.name}
                special={special}
              >
                {special.name}
              </option>
            ))}
          </select>
          {errors.specialities && (
            <p className="text-red-700" role="alert">
              {errors.specialities.message}
            </p>
          )}
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>

          <input
            type="file"
            className="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: true,
            })}
          />
          {errors?.image && errors.image.type === "required" && (
            <p className="text-red-700">The name is required</p>
          )}
        </div>

        <input
          className="btn btn-neutral max-w-xs w-full mt-5"
          value="Add doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
