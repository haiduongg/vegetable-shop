import Footer from 'components/Footer';
import PropTypes from 'prop-types';

WithoutHeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

function WithoutHeaderLayout({ children }) {
    return (
        <div className='page'>
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default WithoutHeaderLayout;