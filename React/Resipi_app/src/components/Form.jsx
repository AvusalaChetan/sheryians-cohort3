import React from "react";
import {useForm} from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data)=>{
    console.log(data)
    
  }

  return (
  <div className="bg-white max-w-xl mx-auto my-8 p-6 md:p-8 rounded-sm shadow-sm border border-gray-100">
  <h3 className="text-2xl font-bold text-gray-800 mb-1">add recipie </h3>
  <p className="text-sm text-gray-500 mb-6">
    Lorem adipisicing elit. Unde nihil dolorum minima?
  </p>

  <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
    {/* Recipe Name */}
    <div className="inputCon flex flex-col gap-1.5">
      <label htmlFor="recipiName" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
        recipi Name
      </label>
      <input
        type="text"
        id="recipiName"
        {...register("recipiName",{ required:{
                value:true,
                message:'enter recipiName'
            }})}
        placeholder="enter recipiName "
        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all placeholder:text-gray-400"
      />
            {errors.chefName && <p>{errors.chefName.message}</p>}

    </div>

    {/* Chef Name */}
    <div className="inputCon flex flex-col gap-1.5">
      <label htmlFor="chefName" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
        chef Name
      </label>
      <input
        type="text"
        id="chefName"
        {...register("chefName",{
            required:{
                value:true,
                message:'enter chef name'
            }
        })}
        placeholder="enter chefName "
        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all placeholder:text-gray-400"
      />
      {errors.chefName && <p>{errors.chefName.message}</p>}
    </div>

    {/* Price */}
    <div className="inputCon flex flex-col gap-1.5">
      <label htmlFor="price" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
        price
      </label>
      <input
        type="number"
        id="price"
        {...register("price",{required:'enter the price'})}
        placeholder="enter price "
        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all placeholder:text-gray-400"
      />
    </div>

    {/* Image URL */}
    <div className="inputCon flex flex-col gap-1.5">
      <label htmlFor="imageUrl" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
        image Url
      </label>
      <input
        type="text"
        id="imageUrl"
        {...register("imageUrl",{required:'enter the img url '})}
        placeholder="enter imageUrl "
        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all placeholder:text-gray-400"
      />
    </div>{" "}

    {/* Description */}
    <div className="inputCon flex flex-col gap-1.5">
      <label htmlFor="description" className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
        description
      </label>
      <textarea
        id="description"
        {...register("description",{required:'enter the feedback'})}
        placeholder="enter description "
        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all placeholder:text-gray-400 h-28 resize-none"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button 
      type="submit" 
      className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm shadow-sm hover:shadow-md uppercase tracking-wider"
    >
      submit
    </button>
  </form>
</div>
  );
};

export default Form;
