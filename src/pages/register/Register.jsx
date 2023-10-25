import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
    const { createUser, update } = useContext(AuthContext);
    const handleUpdateProfile = (data) => {
        update(data)
            .then(() => {
                console.log("profileUpdate");
                
            })
            .catch(error => {
                const errorMessage = error.message;
                console.error(errorMessage);
               
            })
    };

    const handleRegister = (e) => {
        e.preventDefault();

        // get form data 
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoUrl, email, password);
        const condition = /^(?=.*[A-Z])(?=.*[!@#$&*]).{6,}$/;
        if (!condition.test(password)) {
            console.error("Password must be atleast 6 character and contain uppercase and special character.")
            return;
        }
        // create user 
        createUser(email, password)
            .then(success => {
                const currentUser = success.user;
                console.log("create user", currentUser);
              
                const data = {
                    displayName: name,
                    photoURL: photoUrl
                }
                handleUpdateProfile(data);
            })
            .catch(error => {
                const errorMesssage = error.message;
                console.error(errorMesssage);
              

            })
    };
    return (
        <div className="mt-20 bg-[#e4e6df] p-5 md:p-8 w-full md:w-4/5 lg:w-3/5 mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold">Please Register</h2>
            <form onSubmit={handleRegister} className="mt-5 flex flex-col gap-3 items-start">
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