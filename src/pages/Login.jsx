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

const Login = () => {
  const {
    register, 
    handleSubmit, 
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
    flex bg-primary rounded-xl overflow-hidden shadow-xl">
      {/* LEFT */}
      <div className='w-full lg:w=1/2 h-full p-10 2x1:px-20 flex flex-col
       justify-center'>
          <div className='w-full flex gap-2 items-center mb-6'>
          <div className='p-2 bg-[#065ad8] rounded text-white'>
            <VscAzure />
          </div>
          <span className='text-2x1 text-[#065ad8] ' font-semibold >
            Socialgram
          </span>
          </div>

          <p className='text-ascent-1 text-base font-semibold'>
            Login to your account
          </p>
          <span className='text-sm mt-2 text-ascent-2'>Welcome back </span>

          <form className="py-10 flex-col gap-10 w-full"
          onSubmit={handleSubmit(onSubmit)}>
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
              <div className='flex flex-col justify-center gap-2'>
                  <Link
                    to="/reset-password"
                    className="text-[1rem] text-right text-blue underline font-semibold pr-3"
                  >
                    Forgot Password ?
                  </Link>

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
                    ContainerStyles={` text-center rounded-md w-1/2 bg-blue px-7 py-3 text-sm font-medium text-white outline-none`}
                      title="Login"
                      />
                  )}

                  <p className='text-ascent-2 text-sm text-center'>
                    I Don't have any account?
                    <Link
                    to='/register'
                    className='text-[#247bd9f8] font-semibold ml-2 cursor-pointe '
                    >
                      Create Account
                    </Link>
                  </p>
                </div>
              </form>
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
            <span className='text-xs font-mediun'>Connect</span>
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
}

export default Login;