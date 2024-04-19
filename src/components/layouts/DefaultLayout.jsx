import PropTypes from 'prop-types';
import Header from '../Header/index.jsx';
import Footer from 'components/Footer/index.jsx';

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

function DefaultLayout({ children }) {
  return (
    <div className='page'>
      <div className='container'>
        <Header />
      </div>
      <div className='container py-20'>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
