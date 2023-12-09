
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ productData }) => {
    console.log(productData);
    const {_id, image, name, brand, type, price, rating } = productData;
    const navigate = useNavigate();
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
                    <button onClick={() => navigate(`/update/${_id}`)}  className="text-xl font-medium text-white bg-[#9A3B3B] px-2 py-1">Update</button>
                    <button onClick={() => navigate(`/details/${_id}`)} className="text-xl font-medium text-white bg-[#9A3B3B] px-2 py-1">Details</button>
                </div>
            </div>
        </div>
    );
};
SingleProduct.propTypes = {
    productData: PropTypes.object.isRequired
};

export default SingleProduct;