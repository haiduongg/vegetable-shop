import PropTypes from 'prop-types';
import Header from "../Header/index.jsx";

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

function DefaultLayout({children}) {
    return (
        <div className='page container'>
            <Header/>
            {children}
        </div>
    );
}

export default DefaultLayout;