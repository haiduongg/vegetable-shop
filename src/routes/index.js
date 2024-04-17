import HomePage from '../pages/HomePage';
import ProductPage from "../pages/ProductPage.jsx";

const routes = [
  {
    path: '/',
    component: HomePage,
    isHeader: true,
  },
  {
    path: '/product',
    component: ProductPage,
    isHeader: false
  }
];
export { routes };
