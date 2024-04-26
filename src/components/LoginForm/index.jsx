import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PiEyeBold, PiEyeClosed } from 'react-icons/pi';
import yup from 'ultils/yupGlobal';
import userApi from 'api/userApi';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const schema = yup.object().shape({
    username: yup.string().required('Required').email('Email invalid'),
    password: yup.string().required('Required').password('Password invalid'),
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
      const user = await userApi.loginUser({
        email: data.username,
        password: data.password,
      })
      console.log(user.data);
      if (confirm("Login successfully. Continue shop now!")) {
        window.location.replace("/");
      }
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
          autoComplete='off'
          {...register('username')}
          className='w-full h-[38px] border-[1px] border-[#dbdbdb] focus:border-black focus:outline-none p-3 text-[0.875rem] placeholder:font-light'
          placeholder='Email'
        />
        {errors.username && (
          <p className='text-xs text-red-500 mt-1'>{errors.username.message}</p>
        )}
      </div>
      <div className='relative'>
        <input
          type={showPassword ? 'text' : 'password'}
          name='password'
          id='password'
          autoComplete='off'
          {...register('password')}
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
      <button
        className='w-full h-[40px] bg-[#41b06e] text-white mt-4'
        type='submit'
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
