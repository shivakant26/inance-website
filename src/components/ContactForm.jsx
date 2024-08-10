import React from "react";
import InputField from "./common/InputField";
import { useForm } from "react-hook-form";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-field">
        <InputField
          type="text"
          placeholder="Name"
          name="name"
          {...register("name", {
            required: true,
          })}
        />
        {errors?.name?.type === "required" && <p className="error">Required*</p>}
      </div>
      <div className="form-field">
        <InputField
          type="text"
          placeholder="Phone Number"
          name="phone"
          {...register("phone", {
            required: true,
          })}
        />
        {errors?.phone?.type === "required" && <p className="error">Required*</p>}
      </div>
      <div className="form-field">
        <InputField
          type="text"
          placeholder="Email"
          name="email"
          {...register("email", {
            required: true,
          })}
        />
        {errors?.email?.type === "required" && <p className="error">Required*</p>}
      </div>
      <div className="form-field">
        <textarea rows={5} placeholder="message"></textarea>
      </div>
      <button className="send-btn">send</button>
    </form>
  );
};

export default ContactForm;
