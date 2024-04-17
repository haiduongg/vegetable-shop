import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';
import { cn } from 'ultils/cn';
import { hexToHSL } from 'ultils/hexToHSL';
import { useState } from 'react';

const getBackgroundColorHoverCode = (agument) => {
  const temp = agument ?? "#ecad15" // Avoid undefined variable
  const getBackgroundColorCode = hexToHSL(temp);
  var result =  `hsl(${getBackgroundColorCode.h},${
    getBackgroundColorCode.s
  }%,${getBackgroundColorCode.l - 15}%)`;
  return result
}

function Button({
  className,
  children,
  variant,
  width,
  height,
  backgroundColor,
  textColor,
  ...props
}) {
  const [isHover, setIsHover] = useState(false);

  const buttonStyles = {
    width: width,
    height: height,
    backgroundColor: (isHover & (variant === 'primary' || variant === undefined)) ? getBackgroundColorHoverCode(backgroundColor) : backgroundColor,
    color: textColor,
    ...props,
  };

  const buttonVariants = cva(
    `inline-flex items-center justify-center whitespace-nowrap text-base transition-colors duration-300 text-white`,
    {
      variants: {
        variant: {
          primary: 'bg-primary border-none hover:bg-[#b3820f]',
          secondary: 'bg-black hover:bg-primary',
          outline:
            'bg-transparent border-[1px] border-solid border-black text-black hover:bg-primary hover:text-white hover:border-transparent',
        },
        size: {
          sm: '',
          md: `w-[170px] h-[48px]`,
          lg: '',
          icon: '',
        },
      },
      defaultVariants: {
        variant: 'primary',
        size: 'md',
      },
    }
  );
  return (
    <button
      style={buttonStyles}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children || <span>Click here</span>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
