import { PiEyeBold, PiEyeClosed } from 'react-icons/pi';
import { useState } from 'react';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
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
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
