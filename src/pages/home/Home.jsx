import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import BrandCard from "./BrandCard";

const Home = () => {
    const allBrands = useLoaderData();
    console.log(allBrands)
    return (
        <div>
            <Banner />
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
        </div>
    );
};

export default Home;