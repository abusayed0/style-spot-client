import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "./BrandCard";

const Home = () => {
    const allBrands = useLoaderData();
    console.log(allBrands)
    return (
        <div>
            <Banner />
            {/* all brand start  */}
            <div className="mt-20">
                <h2 className="text-4xl font-semibold">All brands</h2>
                <div className="mt-6 grid grid-cols-1 grid-col-3 md:grid-cols-3 gap-5">

                    {
                        allBrands.map(sinBrand => <BrandCard
                            key={sinBrand._id}
                            brandData={sinBrand}
                        />)
                    }

                </div>
            </div>
            {/* contact start  */}
            <div className="mt-20 bg-[#e4e6df]  flex gap-8 flex-col md:flex-row items-center p-5 ">
                <div className="w-full md:w-1/2">
                    <div className="max-w-[400px] mx-auto">
                        <h2 className="text-3xl md:text-4xl font-medium">We are Here to Listen</h2>
                        <p className="mt-3 text-xl">Your feedback and questions matter to us. Share your thoughts and inquiries with Style Spot by completing the form.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 bg-[#DDDDDD] p-7">
                    <h3 className="text-2xl md:text-3xl font-bold">Contact Us</h3>
                    <div className="mt-5 flex flex-col gap-3 items-start">
                        <input type="text" name="name" id="name" className=" w-full p-3" placeholder="Name" />
                        <input type="email" name="email" id="email" className="w-full p-3" placeholder="Email" />
                        <textarea name="meassage" id="meassage" rows="5" placeholder="Meassage" className="p-3 w-full resize-none"></textarea>
                        <button className="rounded text-xl font-semibold text-white px-5 py-2 bg-[#9A3B3B]" type="submit">Send</button>
                    </div>
                </div>
            </div>
            {/* frequently asked question start  */}
            <div className="mt-20 flex flex-col gap-4">
                <div className="collapse collapse-arrow bg-[#e4e6df]">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">
                        How can I place an order on Style Spot?
                    </div>
                    <div className="collapse-content">
                        Placing an order on Style Spot is easy. Simply browse our brands, select the products you love, and add them to your cart. Once you have finished shopping, click on the cart icon at the top right corner of the page to review your selections. Then, follow the prompts to complete your purchase. We accept various payment methods for your convenience.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#e4e6df]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        We want you to be completely satisfied with your Style Spot purchase. If for any reason you are not, our return policy allows you to return or exchange items within 30 days of delivery. Please check our Returns & Exchanges page for detailed instructions and any specific conditions that may apply.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#e4e6df]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How can I track my order&#39;s status?
                    </div>
                    <div className="collapse-content">
                        Tracking your order is simple. After your order is processed and shipped, you will receive a confirmation email with a tracking number and a link to our tracking portal. You can click the link or enter the tracking number on our website to monitor the real-time status of your delivery.
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-[#e4e6df]">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer international shipping?
                    </div>
                    <div className="collapse-content">
                        Yes, we do offer international shipping! Style Spot caters to fashion enthusiasts worldwide. During the checkout process, you can select your location, and the shipping options and costs will be displayed accordingly. Please be aware that international shipping times may vary depending on your location.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;