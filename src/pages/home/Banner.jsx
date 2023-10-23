
const Banner = () => {
    return (
        <div className="mt-20 bg-[url('https://i.ibb.co/mBxwM13/portrait-happy-lady-sunglasses-standing-with-colorful-shopping-bags-hands-pink-background-young-woma.jpg')] bg-center bg-no-repeat bg-cover md:min-h-[600px] bg-[rgba(0,0,0,0.7)]  bg-blend-overlay flex justify-center items-center p-5">
            <div className="w-[500px] mx-auto flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl md:text-4xl text-bold text-white">Discover Your Signature Style</h2>
                <p className="text-white text-xl">Find the perfect pieces that define your unique style. Explore endless fashion possibilities at Style Spot</p>
                <button className="text-2xl font-semibold bg-[#9A3B3B] px-3 py-3 md:px-5 md:py-3 text-white">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;