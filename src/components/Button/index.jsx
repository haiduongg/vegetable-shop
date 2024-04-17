import PropTypes from 'prop-types';
import {cva} from 'class-variance-authority'
import { cn } from 'ultils/cn';
import { hexToHSL } from 'ultils/hexToHSL';

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

  const buttonStyles = {
    width: width,
    height: height,
    backgroundColor: backgroundColor ?? '#ecad15',
    color: textColor,
    ...props,
  };

  const getBackgroundColorCode = hexToHSL(buttonStyles.backgroundColor);
  const backgroundColorHoverCode = `hsl(${getBackgroundColorCode.h},${getBackgroundColorCode.s}%,${getBackgroundColorCode.l - 15}%)`;

  const buttonVariants = cva(`inline-flex items-center justify-center whitespace-nowrap text-base transition-colors duration-300 text-white`,
  {
    variants: {
      variant: {
        primary: `bg-[${buttonStyles.backgroundColor}] border-none hover:bg-[${backgroundColorHoverCode}]`,
        outline: `bg-black`,
      },
      size: {
        sm: '',
        md: `w-[170px] h-[48px]`,
        lg: '',
        icon: ''
      }
    },
    defaultVariants:{
      variant: 'primary',
      size: 'md'
    }
  }

  )
  return (
    <button  className={cn(buttonVariants({variant , className}))} {...props}>
      {children || <span>Click here</span>}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  variant: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
