import { Outlet } from "react-router-dom";
import Navbar from "../../common-components/navbar/Navbar";
import Footer from "../../common-components/footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;