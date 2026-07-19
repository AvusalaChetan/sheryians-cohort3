import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import Error from "../components/Error";
import Logo from "../components/Logo";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    
    let users = JSON.parse(localStorage.getItem("sm_users"));

    let user = users.find((u) => {
      console.log(u);
      return u.email === data.email;
    });

    if (!user) {
      alert(" user do not exist with that email");
      return;
    }

    if (user.password !== data.password) {
      alert("Password or email is wrong");
      return;
    }
    localStorage.setItem("sm_session", JSON.stringify(user));
    navigate("/home");
  };

  return (
    <main className="flex items-center justify-center flex-col min-h-screen w-full bg-neutral-950 text-white px-4">
      <div className="border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm w-full max-w-md rounded-2xl p-6 sm:p-8 shadow-xl">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>

        <div className="space-y-1 mb-6 text-center sm:text-left">
          <h3 className="text-2xl font-bold tracking-tight">Create account</h3>
          <p className="text-sm text-neutral-400">
            Join SkyMart and start shopping
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <div className="flex items-center gap-3 border border-neutral-700 bg-neutral-950 rounded-lg px-4 py-3 focus-within:border-lime-400 transition-colors">
              <Mail className="text-neutral-400 w-5 h-5 flex-shrink-0" />
              <input
                type="email"
                autoComplete="new-password"
                placeholder="Email address"
                className="bg-transparent w-full outline-none placeholder:text-neutral-500 text-sm"
                {...register("email", {
                  required: "this field is requrired",
                })}
              />
            </div>
            {errors.email && <Error error={errors.email.message} />}
          </div>

          {/* Password */}
          <div className="w-full">
            <div className="flex items-center gap-3 border border-neutral-700 bg-neutral-950 rounded-lg px-4 py-3 focus-within:border-lime-400 transition-colors">
              <Lock className="text-neutral-400 w-5 h-5 flex-shrink-0" />
              <input
                type="password"
                autoComplete="new-password"
                placeholder="Password (min 6 chars)"
                className="bg-transparent w-full outline-none placeholder:text-neutral-500 text-sm"
                {...register("password", {
                  required: "this field is requrired",
                })}
              />
            </div>
            {errors.password && <Error error={errors.password.message} />}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-lime-400 hover:bg-lime-500 text-neutral-950 font-semibold py-3 rounded-lg transition-colors mt-2 text-sm shadow-lg shadow-lime-400/10"
          >
            login
          </button>
        </form>
      </div>
      <p>
        create account{" "}
        <NavLink to="/register" className={"text-lime-400"}>
          sing up
        </NavLink>
      </p>
    </main>
  );
};

export default Login;
