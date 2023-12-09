import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="bg-[#E2C799]">

            <div className=" max-w-[1340px] mx-auto mt-20  md:py-6 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center md:text-start">
                        <h4 className="text-xl uppercase">Showroom Address</h4>
                        <div className="mt-2 flex flex-col gap-1">
                            <p>Dhaka, Bangladesh</p>
                            <p>Helpine : 000000000</p>
                            <p>(Available : Sat - Thu, 10 AM to 5 PM)</p>
                        </div>
                    </div>
                    <div className="text-center md:text-start">
                        <h4 className="text-xl uppercase">Important Links</h4>
                        <div className="mt-2 flex flex-col gap-1">
                            <Link>About_Us</Link>
                            <Link>Privacty_Policy</Link>
                            <Link>Terms_Condition</Link>
                            <Link>Blog</Link>
                        </div>
                    </div>
                    <div className="text-center md:text-start">
                        <h4 className="text-xl uppercase">Follow Us</h4>
                        <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-1">
                            <AiFillFacebook className="text-3xl" />
                            <AiFillInstagram className="text-3xl" />
                            <AiFillTwitterSquare className="text-3xl" />
                            <AiFillLinkedin className="text-3xl" />
                            <AiFillYoutube className="text-3xl" />
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-xl text-center">Copyrights Style Spot 2023</p>
            </div>
        </div>
    );
};

export default Footer;