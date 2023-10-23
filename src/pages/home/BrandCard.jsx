import { useNavigate } from "react-router-dom";

const BrandCard = ({brandData}) => {
    const {name, logo} = brandData;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/${name}`)} className="border p-3 cursor-pointer">
            <h2 className="text-3xl mb-2">{name}</h2>
            <img className="h-[300px] w-full" src={logo} alt="" />
        </div>
    );
};

export default BrandCard;