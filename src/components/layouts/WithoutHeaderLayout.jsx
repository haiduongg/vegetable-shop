import PropTypes from 'prop-types';

WithoutHeaderLayout.propTypes = {
    children: PropTypes.element.isRequired,
};

function WithoutHeaderLayout({children}) {
    return (
        <div className='page container'>
            {children}
        </div>
    );
}

export default WithoutHeaderLayout;