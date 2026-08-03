import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import Error from "../components/common/Error";
import Logo from "../components/common/Logo";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { users, setUsers } = useContext(Auth);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { setUser,} = useContext(Auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const checkStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 1) return "Weak";
    if (score === 2) return "Fair";
    if (score === 3) return "Good";
    return "Strong";
  };
  const password = watch("password");
  const strength = checkStrength(password || "");
  const colors = {
    Weak: "bg-red-500",
    Fair: "bg-orange-400",
    Good: "bg-yellow-400",
    Strong: "bg-green-500",
  };

  const widths = {
    Weak: "w-1/4",
    Fair: "w-2/4",
    Good: "w-3/4",
    Strong: "w-full",
  };

  const onSubmit = (data) => {
    if (data.password !== data.conformPassword) {
      toast.error("password and conformPassword are not same ");
      return;
    }
    const userExist = users.find((val) => val.email === data.email);
    if (userExist) {
      toast.warn("user already exist with that email");
      return;
    }

    setUsers([...users, data]);
    localStorage.setItem("sm_users", JSON.stringify([...users, data]));
    localStorage.removeItem('sm_session')
    localStorage.setItem("sm_session", JSON.stringify(data));
    setUser(JSON.parse(localStorage.getItem("sm_session")));
    navigate("/home");
    toast.success('registered successfully!')
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
              <User className="text-neutral-400 w-5 h-5 shrink-0" />
              <input
                type="text"
                placeholder="Full name"
                autoComplete="new-password"
                className="bg-transparent w-full outline-none placeholder:text-neutral-500 text-sm"
                {...register("name", {
                  required: "This field is required",
                })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-xs mt-1 ml-1 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <div className="flex items-center gap-3 border border-neutral-700 bg-neutral-950 rounded-lg px-4 py-3 focus-within:border-lime-400 transition-colors">
              <Mail className="text-neutral-400 w-5 h-5 shrink-0" />
              <input
                type="email"
                placeholder="Email address"
                autoComplete="new-password"
                className="bg-transparent w-full outline-none placeholder:text-neutral-500 text-sm"
                {...register("email", {
                  required: "this field is requrired",
                })}
              />
            </div>
            {errors.email && <Error error={errors.email.message} />}
          </div>

          <div className="w-full">
            <div className="flex items-center gap-3 border border-neutral-700 bg-neutral-950 rounded-lg px-4 py-3 focus-within:border-lime-400 transition-colors">
              <Lock className="text-neutral-400 w-5 h-5 shrink-0" />
              <input
                type={isShowPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Password (min 6 chars)"
                className="bg-transparent w-full outline-none placeholder:text-neutral-500 text-sm"
                {...register("password", {
                  required: {
                    value: true,
                    message: "this field is requrired",
                  },
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setIsShowPassword((p) => !p)}
              >
                {isShowPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {password && (
              <div className="w-full bg-gray-700 rounded h-1 mt-2">
                <div
                  className={`h-1 rounded transition-all ${colors[strength]} ${widths[strength]}`}
                />
              </div>
            )}
            <p
              className={`text-xs mt-1 text-right ${colors[strength].replace("bg-", "text-")}`}
            >
              {password ? strength : ""}
            </p>

            {errors.password && <Error error={errors.password.message} />}
          </div>

          <div className="w-full">
            <div className="flex items-center gap-3 border border-neutral-700 bg-neutral-950 rounded-lg px-4 py-3 focus-within:border-lime-400 transition-colors">
              <Lock className="text-neutral-400 w-5 h-5 shrink-0" />
              <input
                type="password"
                autoComplete="new-password"
                placeholder="Confirm password"
                className="bg-transparent w-full outline-none placeholder:text-neutral-500 text-sm"
                {...register("conformPassword", {
                  required: {
                    value: true,
                    message: "thsi field is req",
                  },
                })}
              />
            </div>
            {errors.conformPassword && (
              <Error error={errors.conformPassword.message} />
            )}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-lime-400 hover:bg-lime-500 text-neutral-950 font-semibold py-3 rounded-lg transition-colors mt-2 text-sm shadow-lg shadow-lime-400/10"
          >
            Create account
          </button>
        </form>
      </div>
      <p>
        Already have an account?{" "}
        <NavLink to="/login" className={"text-lime-400"}>
          Sign in
        </NavLink>
      </p>
    </main>
  );
};

export default Register;
