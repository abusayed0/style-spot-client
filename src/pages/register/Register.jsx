import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="mt-20 bg-[#e4e6df] p-5 md:p-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Please Register</h2>
            <form className="mt-5 flex flex-col gap-3 items-start">
                <div className="w-full">
                    <label htmlFor="name" className="text-xl">Enter your name <span className="text-red-600">*</span></label>
                    <input type="text" name="name" id="name" className="mt-1 w-full p-3" placeholder="Name" required />
                </div>
                <div className="w-full">
                    <label htmlFor="photo" className="text-xl">Enter your photo url <span className="text-red-600">*</span></label>
                    <input type="text" name="photo" id="photo" className="mt-1 w-full p-3" placeholder="Photo url" required />
                </div>
                <div className="w-full">
                    <label htmlFor="email" className="text-xl">Enter your email <span className="text-red-600">*</span></label>
                    <input type="email" name="email" id="email" className="mt-1 w-full p-3" placeholder="Email" required />
                </div>
                <div className="w-full">
                    <label htmlFor="password" className="text-xl">Enter your password <span className="text-red-600">*</span></label>
                    <input type="password" name="password" id="password" className="mt-1 w-full p-3" placeholder="Password" required />
                </div>
                <button className="px-6 py-2 text-white text-xl font-medium bg-[#9A3B3B]">Register</button>
            </form>
            <p className="text-xl mt-8 text-center">Already have an account? please <Link to="/login" className="underline decoration-[#9A3B3B] hover:no-underline">login</Link>.</p>
        </div>
    );
};

export default Register;