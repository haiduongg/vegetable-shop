import PropTypes from 'prop-types';
import { useState } from 'react';

ViewImage.propTypes = {
	children: PropTypes.node.isRequired
};

function ViewImage({children}) {
	const [isInView, setIsInView] = useState(false)

	return (
		<div className={`cursor-pointer ${isInView && "scale-110 absolute w-full h-screen top-0 left-0 grid place-items-center"} transition duration-300 cursor-default backdrop-blur-3xl`} onClick={() => {
			isInView && setIsInView(false)
		}}>
			<div className={`cursor-pointer ${isInView && "scale-110 shadow-2xl"}`} onClick={() => setIsInView(!isInView)}>{children}</div>
		</div>
	);
}

export default ViewImage;