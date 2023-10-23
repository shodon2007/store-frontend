import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";

const Layout = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
            />
            <Header />
            <Breadcrumbs />
            <div className="app">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
