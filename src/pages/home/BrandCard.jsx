
const BrandCard = ({brandData}) => {
    const {name, logo} = brandData;
    console.log(name)
    return (
        <div className="border p-3">
            <h2 className="text-3xl mb-2">{name}</h2>
            <img className="h-[300px] w-full" src={logo} alt="" />
        </div>
    );
};

export default BrandCard;