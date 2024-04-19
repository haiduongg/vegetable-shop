import WithoutHeaderLayout from 'components/layouts/WithoutHeaderLayout';
import HomePage from '../pages/HomePage';
import ShopPage from "../pages/ShopPage.jsx";
import LoginPage from 'pages/LoginPage';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/shop',
    component: ShopPage,
  },
  {
    path: '/login',
    component: LoginPage,
    layout: WithoutHeaderLayout
  }
];
export { routes };
