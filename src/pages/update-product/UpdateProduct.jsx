import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
    const productsPreData = useLoaderData();
    const { _id, image, name, brand, type, price, rating} = productsPreData;
    console.log(productsPreData);
    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const productData = {image: image, name: name, brand: brand.toLowerCase().trim(), type : type, price: price, rating: rating};
        console.log(productData);
        fetch(`https://b8a10-brandshop-server-side-abusayed0.vercel.app/update/${_id}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                toast.success("Product updated successfully!")
            }
        })
    };
    return (
        <div className="mt-20 w-4/5 mx-auto">
        <h2 className="text-3xl font-semibold text-center">Please Update</h2>
        <form onSubmit={handleUpdateProduct} className="mt-6 flex flex-col items-center gap-5">
            <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2"> 
                    <label htmlFor="image" className="text-xl">Enter image url <span className="text-red-600">*</span></label>
                    <input defaultValue={image} id="image" type="text" name="image" className="mt-2 w-full p-2 border" placeholder="Image url" required />
                </div>
                <div className="w-full md:w-1/2">
                    <label htmlFor="name" className="text-xl">Enter product name <span className="text-red-600">*</span></label>
                    <input defaultValue={name} id="name" type="text" name="name" className="mt-2 w-full p-2 border" placeholder="Product name" required />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                    <label htmlFor="type" className="text-xl">Enter product type <span className="text-red-600">*</span></label>
                    <input defaultValue={type} id="type" type="text" name="type" className="mt-2 w-full p-2 border" placeholder="Product type" required />
                </div>
                <div className="w-full md:w-1/2">
                    <label htmlFor="brand" className="text-xl">Enter brand name <span className="text-red-600">*</span></label>
                    <input defaultValue={brand} id="brand" type="text" name="brand" className="mt-2 w-full p-2 border" placeholder="Brand name" required />
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-5">
                <div className="w-full md:w-1/2">
                    <label htmlFor="price" className="text-xl">Enter price <span className="text-red-600">*</span></label>
                    <input defaultValue={price} id="price" type="text" name="price" className="mt-2 w-full p-2 border" placeholder="Price" required />
                </div>
                <div className="w-full md:w-1/2">
                    <label htmlFor="rating" className="text-xl">Enter rating <span className="text-red-600">*</span></label>
                    <input defaultValue={rating} id="rating" type="text" name="rating" className="mt-2 w-full p-2 border" placeholder="Rating" required />
                </div>
            </div>
            <button type="submit" className="px-4 py-2 text-xl font-medium text-white bg-[#9A3B3B]">Update Now</button>
        </form>
    </div>
    );
};

export default UpdateProduct;