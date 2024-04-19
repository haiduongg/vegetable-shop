import Logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeadingPage = ({label}) => {
  return (
    <div className='flex items-center justify-start gap-6'>
      <div className='py-2'>
        <Link to={'/'} className='inline-block w-fit'>
          <img src={Logo} alt='logo' />
        </Link>
      </div>
      <div>
        <h1 className='text-2xl font-medium underline underline-offset-4'>{label}</h1>
      </div>
    </div>
  );
};

HeadingPage.propTypes = {
  label: PropTypes.string.isRequired,
};

export default HeadingPage;
