import Logo from 'assets/images/logo.png';
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';

function Header() {
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
        <img src={Logo} alt='logo' />
      </div>

      <nav className=' col-span-3 flex items-center justify-between gap-'>
        <ul className='flex items-center justify-start gap-7'>
          {navLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className='uppercase font-medium text-base p-3 hover:text-primary duration-300 transition-colors'>{item.label}</Link>
            </li>
          ))}
        </ul>
		<IoIosSearch size={25}/>
      </nav>
    </div>
  );
}

export default Header;
