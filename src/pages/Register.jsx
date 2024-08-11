
import React, {useState} from 'react';
import { VscAzure } from "react-icons/vsc";
import { BsShare } from "react-icons/bs"
import { AiOutlineInteraction } from "react-icons/ai";
import {ImConnection} from "react-icons/im"
import {TextInput, CustomButton, Loading} from '../components';
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { BgImage } from '../assets';

const Register = () => {
  const {
    register, 
    handleSubmit, 
    getValues,
    formState: {errors},
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async(data)=> {}
  
  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch()
  return (
  <div className='big-bgColor w-full h-[100vh] 
  flex items-center justify-center p-6'>
    <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0
    flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl">
      {/* LEFT */}
      <div className='w-full lg:w=1/2 h-full p-10 2x1:px-20 flex flex-col
       justify-center'>
          <div className='w-full flex gap-2 iteams-center mb-6'>
          <div className='p-2 bg-[#065ad8] rounded text-white'>
            <VscAzure />
          </div>
          <span className='text-2x1 text-[#065ad8] ' font-semibold >
            Socialgram
          </span>
          </div>

          <p className='text-ascent-1 text-base font-semibold'>
            Create your account
          </p>

          <form 
          className="py-10 flex-col gap-10 w-full"
          onSubmit={handleSubmit(onSubmit)}>

          <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <TextInput
              name="first Name" 
              placeholder="First Name"
              lable="First Name"
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
            </div>
             
             <TextInput
              name="email" 
              placeholder="email@example.com"
              lable="Email Addresss"
              type="email"
              register={ register("email", {
                  required: "This field is mandatory",
                })}
                style="w-full rounded-full"
                lableStyle="ml-2"
                error={errors.email ? errors.email.message : ""}
           />

              <TextInput
              name="password" 
              placeholder="Password"
              lable="Password"
              type="password"
              style="w-full rounded-full"
              lableStyle="ml-2"
              register={ register("Password", {
                  required: "Password is mandatory",
                })}
                error={errors.password ? errors.password.message : ""}
           />

              <TextInput
              name="conformPassword" 
              placeholder="conformPassword"
              lable="Conform Password"
              type="password"
              style="w-full rounded-full"
              lableStyle="ml-2"
              register={ register("cPassword", {
                validate: (value) => {
                  const {password} = getValues();

                  if (password != value) {
                    return "Password does not match";
                  }
                },
              })}
              erros={
                errors.cPassword && errors.cPassword.type == "validate"
                ? errors.cPassword?.message 
                : ""}  
              />     

            {errMsg?.message && (
                <span className={`text-sm ${
                  errMsg?.status =="failed"
                   ? " text-[#f64949fe]"
                   : "text-[#34c759]"
                } mt-0.5`}>
                {errMsg?.message}</span>
              )}

              {isSubmitting ?( 
                <Loading/> 
              ) : (
                 <CustomButton 
                type="submit"
                ContainerStyles={`inline-flex justify-center rounded-md 
                  bg-blue px-7 py-3 text-sm font-medium text-white outline-none`}
                  title="Create Account"
               />
               )}
        </form>

          <p className='text-ascent-2 text-sm text-center'>
            Already have an  account? {" "}
            <Link
            to='/login'
            className='text-[#247bd9f8] font-semibold ml-2 cursor-pointe '
            >
              Login
            </Link>
          </p>
      </div>

      {/* RIGHT */}
      <div className='hidden w-1/2 h-full lg:flex flex-col items-center
      justify-center bg-blue'>
        <div className='relarive w-full flex items-center justify-center'>
          <img src={BgImage} 
            alt="Bg Image"
            className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full
            objext-cover'
           />

           <div className='absolute flex items-center gap-1 bg-white
           right-10 top-10 py-2 px-5 rounded-full'>
            <BsShare size={14} />
            <span className='text-xs font-mediun'>Share</span>
            </div>

           <div className='absolute flex items-center gap-1 bg-white
           left-10 top-6 py-2 px-5 rounded-full'>
            <ImConnection />
            <span className='text-xs font-mediun'>Coonnect</span>
            </div>

            
           <div className='absolute flex items-center gap-1 bg-white
           left-12 bottom-6 py-2 px-5 rounded-full'>
            <AiOutlineInteraction />
            <span className='text-xs font-mediun'> Interact </span>
           </div>
        </div>

        <div className='mt-16 text-center'>
        <p className='text-white text-base'>
          Connect with friends & have share for fun
          </p>
          <span className='text-sm text-white/80'>
           Share memories with friends and the world.
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Register;