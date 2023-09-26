import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";

const Layout = () => {
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar
            />
            <Header />
            <Outlet />
        </>
    );
};

export default Layout;