import { useLoaderData, useParams } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const BrandProducts = () => {
    const { brand } = useParams();
    const products = useLoaderData();
    console.log(products)
    return (
        <div className="mt-20">
            {
                products.length ?
                    <>
                        <h2 className="text-3xl font-semibold">All {brand} product</h2>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {
                                products.map(product => <SingleProduct
                                    key={product._id}
                                    productData={product}
                                />)
                            }
                        </div>
                    </>
                    :
                    <h2 className="text-3xl font-semibold">No product available for {brand} at this moment.</h2>


           }
        </div>
    );
};

export default BrandProducts;