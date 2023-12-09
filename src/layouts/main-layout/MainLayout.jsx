import { Outlet } from "react-router-dom";
import Navbar from "../../common-components/navbar/Navbar";
import Footer from "../../common-components/footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className=" max-w-[1340px] mx-auto">
                <Outlet/>
            </div>
            <Footer />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default MainLayout;