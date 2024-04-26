import { useState } from 'react';
import { PiEyeBold, PiEyeClosed } from 'react-icons/pi';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import yup from 'ultils/yupGlobal';
import userApi from 'api/userApi';

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required('Required').email('Email invalid'),
    password: yup.string().required('Required').password('Password invalid'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'Confirm password must be match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    try {
      await userApi.registerUser({
        email: data.username,
        password: data.password,
      })
      alert("Register successfully")
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className='mb-3'>
        <input
          type='text'
          name='username'
          id='username'
          {...register('username')}
          autoComplete='off'
          className='w-full h-[38px] border-[1px] border-[#dbdbdb] focus:border-black focus:outline-none p-3 text-[0.875rem] placeholder:font-light'
          placeholder='Email'
        />
        {errors.username && (
          <p className='text-xs text-red-500 mt-1'>{errors.username.message}</p>
        )}
      </div>
      <div className='relative mb-3'>
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          id='password'
          {...register('password')}
          autoComplete='off'
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
        {errors.password && (
          <p className='text-xs text-red-500 mt-1'>{errors.password.message}</p>
        )}
      </div>

      <div className='relative'>
        <input
          type={showConfirmPassword ? 'text' : 'password'}
          name='confirmPassword'
          id='confirmPassword'
          {...register('confirmPassword')}
          autoComplete='off'
          className='w-full h-[38px] border-[1px] border-[#dbdbdb] focus:border-black focus:outline-none p-3 text-[0.875rem] placeholder:font-light'
          placeholder='Confirm password'
        />
        {!showConfirmPassword && (
          <PiEyeClosed
            size={22}
            className='absolute right-4 top-2 cursor-pointer'
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        )}
        {showConfirmPassword && (
          <PiEyeBold
            size={22}
            className='absolute right-4 top-2 cursor-pointer'
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />
        )}
        {errors.confirmPassword && (
          <p className='text-xs text-red-500 mt-1'>
            {errors.confirmPassword.message}
          </p>
        )}
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
