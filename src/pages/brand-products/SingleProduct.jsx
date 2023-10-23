

const SingleProduct = ({ productData }) => {
    console.log(productData);
    const { image, name, brand, type, price, rating } = productData;
    return (
        <div className="bg-[#f7f4de] p-4 flex flex-col">
            <img className="h-[300px] w-full" src={image} alt="" />
            <div className="flex-1 flex flex-col justify-between">
                <div className="mt-5 flex justify-center items-center flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <h3 className="text-2xl font-medium">{name}</h3>
                        <h4 className="font-medium text-xl px-2 py-1 rounded-full bg-[#C08261]">{brand}</h4>
                    </div>
                    <p className="text-xl">Type : {type}</p>
                    <p className="text-xl">Rating : {rating}</p>
                    <h5 className="text-2xl">Price : {price} $</h5>
                </div>
                <div className="mt-3 flex justify-center gap-4">
                    <button className="text-xl font-semibold text-white bg-[#9A3B3B] px-2 py-1">Update</button>
                    <button className="text-xl font-semibold text-white bg-[#9A3B3B] px-2 py-1">Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;