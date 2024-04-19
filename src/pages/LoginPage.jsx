import HeadingPage from 'components/HeadingPage';
import LoginForm from 'components/LoginForm';
import FarmerImage from 'assets/images/famer.png';

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
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
