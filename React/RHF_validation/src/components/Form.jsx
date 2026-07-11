import React from "react";
import {useForm} from "react-hook-form";

const Form = ({users,setUsers,setToggle}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({
    mode:'onChange'
  });

  const handileSubmit = (data) => {
    let arr = [...users,{id:1,...data}]
    setUsers(arr)
    localStorage.setItem('users',JSON.stringify(arr))
    setToggle((p)=>!p)
    reset();
  };

  return (
    <section className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-2xl items-center px-4 py-8">
      <form
        onSubmit={handleSubmit(handileSubmit)}
        className="w-full rounded-3xl border border-white/10 bg-zinc-950/90 p-6 text-white shadow-2xl shadow-black/30 backdrop-blur md:p-8"
      >
        <div className="mb-6 space-y-2">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300/80">
            Create User
          </p>
          <h1 className="text-3xl font-semibold text-white">
            User Details Form
          </h1>
          <p className="text-sm text-white/60">
            Enter your name, email, number, and upload an image.
          </p>
        </div>

        <div className="grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-medium text-white/80">Name</span>
            <input
              {...register("name", {
                required: "this is req",
              })}
              type="text"
              placeholder="Enter your name"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-blue-400 focus:bg-white/10"
            />
            {errors.name && (
              <p className="text-red-400">{errors.name.message}</p>
            )}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-white/80">Email</span>
            <input
              {...register("email", {
                required: "email is req",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-blue-400 focus:bg-white/10"
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-white/80">Number</span>
            <input
              {...register("number", {
                required: "number is req",
                minLength: {
                  value: 10,
                  message: "min 10 digits are req ",
                },
                maxLength: {
                  value: 10,
                  message: "max 10 digits are req ",
                },
              })}
              type="number"
              placeholder="Enter your number"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition placeholder:text-white/30 focus:border-blue-400 focus:bg-white/10"
            />
            {errors.number && (
              <p className="text-red-400">{errors.number.message}</p>
            )}
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-medium text-white/80">Image</span>
            <input
              type="text"
              {...register("image", {required: "image is req"})}
              accept="image/*"
              className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-3 text-sm text-white/70 file:mr-4 file:rounded-full file:border-0 file:bg-blue-500 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-400"
            />
            {errors.image && (
              <p className="text-red-400">{errors.image.message}</p>
            )}
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 w-full rounded-2xl bg-blue-500 px-4 py-3 font-medium text-white transition hover:bg-blue-400"
        >
          Submit Form
        </button>
      </form>
    </section>
  );
};

export default Form;
