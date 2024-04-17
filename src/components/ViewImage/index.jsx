import PropTypes from 'prop-types';
import { useState } from 'react';

ViewImage.propTypes = {
	children: PropTypes.node.isRequired
};

function ViewImage({children}) {
	const [isInView, setIsInView] = useState(false)

	return (
		<div className={`cursor-pointer ${isInView && "scale-110 absolute w-full h-screen top-0 left-0 bg-black grid place-items-center"} transition duration-300 cursor-default`} onClick={() => {
			isInView && setIsInView(false)
		}}>
			<div className={`cursor-pointer ${isInView && "scale-110"}`} onClick={() => setIsInView(!isInView)}>{children}</div>
		</div>
	);
}

export default ViewImage;