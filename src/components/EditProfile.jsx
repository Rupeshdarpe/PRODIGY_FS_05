import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {MdClose} from "react-icons/md";
import {TextInput, CustomButton, Loading} from '../components';


const EditProfile = () => {

const { user } = useSelector((state) => state.user);
const dispatch = useDispatch();
const [errMsg, setErrMsg] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [picture, setPicture] = useState(null); 

const {
 register,
 handleSubmit,
formState: {errors},
} = useForm({
    mode: "onChange",
    defaultValues: { ...user},
});
     
const onSubmit = async(data) => {};

const handleClose = () => {
  dispatch(UpdateProfile(false));
};
const handleSelect = () => {
  setPicture(e.target.files[0])
};
 
  return (
    <>
      <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 
      px-4 pb-20 text-center sm:block sm:p-0">
      <div className="fixed inset-0 transition-opacity">
      <div className="absolute inset-0 bg-[#000] opacity-70"></div>
     </div>
     <span className="hidden sm:inline-block sm:align-middle 
     sm:h-screen"></span>
     &#8203;
  
     <div
       className='inline-block align-bottom bg-primary rounded-1g
       text-left overflow-hidden shadow-xl transform transition-all
       sm:my-8 sm:align-middle sm: max-w-lg sm: w-full'
       role='dialog'
      aria-modal='true'
      aria-labelledby='modal-headline'
     >
       <div className='flex justify-between px-6 pt-5 pb-2'>
     <label
       htmlFor='name'
       className='block font-medium text-xl text-ascent-1 text-left'
     >
       Edit Profile
    </label>

    <button className='text-ascent-1' onClick={handleClose}>
        <MdClose size={22} />
    </button>
    </div>

        <form className='px-4 sm:px-6 flex flex-col gap-3 2x1:gap-6' 
        onSubmit={handleSubmit (onSubmit)}
        >
             <TextInput
              name="first Name" 
              placeholder="First Name"
              type="text"
              style='w-full rounded-full'
              register={ register("First Name", {
                  required: "First name is mandatory",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
               />

              <TextInput
              name="Last Name" 
              placeholder="Last Name"
              lable="Last Name"
              type="last"
              style='w-full rounded-full'
              register={ register("Last Name", {
                  required: "Last name do not match",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />

            <TextInput
              name="Profession" 
              placeholder="Profession"
              type="text"
              style='w-full rounded-full'
              register={ register("profession", {
                  required: "Profession is required!",
                })}
                error={errors.profession ? errors.profession?.message : ""}
              />

            <TextInput
            name="Location"
            placeholder='Location'
            type='text'
            styles='w-full rounded-full'
            register={register("location", {
            required: "Location do no match",
             })}
            error={errors.location? errors.location?.message : ""}
            />
             
             {errMsg?.message && (
                <span
                role='alert'
                className={`text-sm ${
                  errMsg?.status =="failed"
                   ? " text-[#f64949fe]"
                   : "text-[#34c759]"
                } mt-0.5`}>
                {errMsg?.message}</span>
              )}

              <div className='py-4 sm:flex sm:flex-row-reverse border-t
               border-[#66666645]'>
              {isSubmitting ?( 
                <Loading/> 
              ) : (
                 <CustomButton 
                type="submit"
                ContainerStyles={`inline-flex justify-center rounded-md 
                  bg-blue px-7 py-3 text-sm font-medium text-white outline-none`}
                  title="Submit"
               />
               )}
           </div>
    </form>
   </div>
 </div>
 </div>
</>
  )
};

export default EditProfile;