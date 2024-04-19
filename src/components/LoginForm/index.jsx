import { PiEyeBold, PiEyeClosed } from 'react-icons/pi';
import { FaGoogle } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className='bg-white pt-6 pb-8 px-7'>
      <p className='text-xl font-medium text-center leading-loose mb-6'>
        Login
      </p>
      <form>
        <div className='mb-3'>
          <input
            type='text'
            className='w-full h-[38px] border-[1px] border-[#dbdbdb] focus:border-black focus:outline-none p-3 text-[0.875rem] placeholder:font-light'
            placeholder='Username/Email/Phone number'
          />
          <p className='text-xs text-red-500 mt-1'>Input Invalid</p>
        </div>
        <div className='relative'>
          <input
            type={showPassword ? 'text' : 'password'}
            className='w-full h-[38px] border-[1px] border-[#dbdbdb] focus:border-black focus:outline-none p-3 text-[0.875rem] placeholder:font-light'
            placeholder='Password'
          />
          {!showPassword && (
            <PiEyeClosed
              size={22}
              className='absolute right-4 top-2 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
          {showPassword && (
            <PiEyeBold
              size={22}
              className='absolute right-4 top-2 cursor-pointer'
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
          <p className='text-xs text-red-500 mt-1'>Input Invalid</p>
        </div>
        <button
          className='w-full h-[40px] bg-[#41b06e] text-white mt-4'
          type='submit'
        >
          Login
        </button>
      </form>

      <div className='mt-1 mb-3'>
        <Link to={'/login/reset'} className='text-xs text-blue-600'>
          Forget password
        </Link>
      </div>

      <div className='flex items-center justify-between'>
        <div className='h-[1px] w-[calc(100%/2-20px)] bg-[#dbdbdb]' />
        <p className='uppercase text-xs w-fit opacity-70'>Or</p>
        <div className='h-[1px] w-[calc(100%/2-20px)] bg-[#dbdbdb]' />
      </div>

      <button className='mt-4 border-[1px] p-3 w-full flex items-center justify-center gap-2 hover:bg-slate-100 duration-300 transition-colors'>
        <FaGoogle size={21} />
        <p className='font-light text-[0.875rem]'>Google</p>
      </button>

      <div className='mt-7 flex items-center justify-center gap-1'>
        <p className='text-[0.875rem] font-light opacity-70'>
          New to Picked Fresh?
        </p>
		<Link to={'/register'} className='text-[0.875rem] font-light text-blue-600'>Register</Link>
      </div>
    </div>
  );
};

export default LoginForm;
