import PropTypes from 'prop-types';

WithoutHeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

function WithoutHeaderLayout({children}) {
    return (
        <div className='page container'>
            {children}
        </div>
    );
}

export default WithoutHeaderLayout;