import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {routes} from 'routes/index';
import DefaultLayout from "./components/layouts/DefaultLayout.jsx";

function App() {
    return (
        <Router>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    const Layout = route.layout ?? DefaultLayout;
                    return <Route key={index} path={route.path} element={<Layout><Page/></Layout>}/>;
                })}
            </Routes>
        </Router>
    );
}

export default App;
