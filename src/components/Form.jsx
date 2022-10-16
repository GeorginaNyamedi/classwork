import React from "react";
import  { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().length(20).required(),
  lastName: yup.string().length(20).required(),
  middleName: yup.string().length(20),
  dateOfBirth: yup.date().required(),
  gender: yup.string().oneOf(["male", "female"]).required(),
  phoneNumber: yup.string().length(10).required(),
  email: yup.string().email().required()
});

function Form() {
  const { register, handleSubmit, watch } = useForm({
   mode: "onSubmit",
   resolver: yupResolver(schema),
});

const onSubmit = (data) => {
  console.log(data);
};

    return (
      <div className="h-screen bg-gradient-to-br from-fuchsia-500 flex justify-center items-center">
        <div className="max-w-2xl w-full bg-white rounded-xl p-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input type="text" {...register("firstName")} />
              </div>
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input type="text" {...register("lastName")} />
              <div>
                <label htmlFor="middleName" className="form-label">
                  Middle Name
                </label>
                <input type="text" {...register("middleName")} />
              </div>
              <div className="space-y-2 space-x-1 text-lg">
                <label htmlFor="male"><h4 className="space-x-2 space-y-6 font-bold text-md">Gender</h4></label>
                <input type="radio" {...register("male")} value="male" />
                Male
              
                <label htmlFor="gender"></label>
                <input type="radio" {...register("female")} value="female" />
                Female
              </div>
              <div className="space-y-2 space-x-10 text-lg">
                <label htmlFor="date of Birth">Date of Birth</label>
                <input type="date" {...register("date of Birth")} />
              </div>
              <div className="space-y-2 space-x-10 text-lg">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  {...register("phone Number")}
                  placeholder="xxx-xxx-xxxx"
                />
              </div>
              <div className="space-y-2 space-x-10 text-lg">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="john.doe@email.com"
                />
              </div>
              <div>
                <button button type="Submit" className="font-bold text-lg">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}




export default Form;