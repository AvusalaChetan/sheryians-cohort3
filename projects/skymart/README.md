 1:47:33:15


   ```
     <div className="w-full">
            <div className="flex items-center gap-3 border border-neutral-700 bg-neutral-950 rounded-lg px-4 py-3 focus-within:border-lime-400 transition-colors">
              <Lock className="text-neutral-400 w-5 h-5 flex-shrink-0" />
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
              <div className="flex gap-4 w-full  rounded h-1 mt-2 ">
                {[1, 2, 3, 4].map((i) => (
                  <div
                  key={i}
                    className={`h-1 rounded transition-all ${colors[strength]} ${widths[strength]}`}
                  />
                ))}
              </div>
            )}
   ```