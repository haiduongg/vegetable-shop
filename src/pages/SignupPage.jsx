import HeadingPage from 'components/HeadingPage';
import SignupForm from 'components/SignupForm';
import FarmerImage from 'assets/images/famer.png';
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <>
      <header className='container'>
        <HeadingPage label='Login Page' />
      </header>

      <div className='bg-[#41b06e] min-h-[600px] grid place-items-center'>
        <div className='container flex items-center justify-center gap-10'>
          <div className='flex flex-col justify-center items-center text-white'>
            <img
              src={FarmerImage}
              alt='carrot-image'
              height={280}
              className='h-[300px]'
            />
            <p className='text-4xl font-bold mt-10'>Picked Fresh Shop</p>
            <p className='text-xl text-medium mt-2'>{`Proud to be Asia's leading clean product supplier`}</p>
          </div>
          <div className='w-[430px] min-h-[400px]'>
            <div className='bg-white pt-6 pb-8 px-7'>
              <p className='text-xl font-medium text-center leading-loose mb-6'>
                Sign Up
              </p>
              <SignupForm />

              <div className='flex items-center justify-between mt-4'>
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
                  You had account?
                </p>
                <Link
                  to={'/register'}
                  className='text-[0.875rem] font-light text-blue-600 hover:underline'
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
