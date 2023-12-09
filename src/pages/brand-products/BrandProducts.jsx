import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { useEffect, useState } from "react";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const BrandProducts = () => {
    const { brand } = useParams();
    const products = useLoaderData();
    console.log(products)
    const [advertisement, setAdvertisement] = useState([]);

    useEffect(() => {
        fetch(`https://b8a10-brandshop-server-side-abusayed0.vercel.app/sliders/${brand}`)
            .then(res => res.json())
            .then(data => {
                console.log("advertisement images", data.images);
                setAdvertisement(data.images)

            })
    }, [brand]);

    return (
        <div className="mt-20">
            {
                products.length > 0 ?
                    <div>
                        <div className="">
                            <AutoplaySlider
                                className="max-w-[800px] mx-auto"
                                play={true}
                                cancelOnInteraction={false} // should stop playing on user interaction
                                interval={4000}
                                animation="cubeAnimation"
                                bullets={false}

                            >
                                {
                                    advertisement.map((slide, index) => <div
                                        key={index}
                                        data-src={slide} />)
                                }
                            </AutoplaySlider>
                        </div>
                        <div className="mt-20">
                            <h2 className="text-3xl font-semibold">All {brand} product</h2>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {
                                    products.map(product => <SingleProduct
                                        key={product._id}
                                        productData={product}
                                    />)
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <h2 className="text-3xl font-semibold">No product available for {brand} at this moment.</h2>


            }
        </div >
    );
};

export default BrandProducts;
