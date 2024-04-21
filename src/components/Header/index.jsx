import Logo from 'assets/images/logo.png';
import Button from 'components/Button';
import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Link } from 'react-router-dom';

function Header() {
  const [showSearch, setShowSearch] = useState(false)
  const navLinks = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Shop',
      path: '/shop',
    },
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Contact us',
      path: '/contact',
    },
    {
      label: 'Blog',
      path: '/blog',
    },
  ];


  return (
    <div className='grid grid-cols-4'>
      <div className='col-span-1 py-2'>
        <Link to={'/'} className='inline-block w-fit'><img src={Logo} alt='logo' /></Link>
      </div>

      <nav className=' col-span-3 flex items-center justify-between gap-'>
        <ul className='flex items-center justify-start gap-7'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className='uppercase font-medium text-base p-3 hover:text-primary duration-300 transition-colors'
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className='flex items-center justify-start gap-8'>
          <div className='relative'>
            <IoIosSearch size={25} onClick={()=>setShowSearch(!showSearch)} className={`cursor-pointer ${showSearch &&  "absolute left-2 top-[5px]"} transition duration-300`}/>
            {showSearch && <input type="text" autoFocus placeholder='Search...' className='bg-slate-200 h-[35px] w-[250px] focus:outline-none pl-11 text-sm'/>}
          </div>
          <Button
            height={'40px'}
            width={'165px'}
            className={'rounded-md'}
            backgroundColor={'#0396c7'}
          >
            <Link to={"/login"} className='inline-grid w-full h-full place-items-center'>Login / Register</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
