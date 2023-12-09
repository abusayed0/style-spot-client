import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="mx-w-[500px] text-center">
                <h3 className="text-4xl">You Are Lost</h3>
                <p className="mt-2 text-xl">The page you are looking for not found!</p>
                <button onClick={() => navigate("/")} className="mt-2 font-medium text-white px-3  py-2 rounded-md bg-red-950">Home</button>
            </div>
        </div>
    );
};

export default NotFound;