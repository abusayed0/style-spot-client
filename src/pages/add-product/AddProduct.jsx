
const AddProduct = () => {
    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const productData = {name: name, brand: brand.toLowerCase().trim(), type : type, price: price, short_description: description, rating: rating, image: image};
        console.log(productData);
        fetch("http://localhost:5000/product", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                form.reset();
            }
        })
    };
    return (
        <div className="mt-20 w-4/5 mx-auto">
            <h2 className="text-3xl font-semibold text-center">Please add a new product</h2>
            <form onSubmit={handleAddProduct} className="mt-6 flex flex-col items-center gap-5">
                <div className="w-full flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2"> 
                        <label htmlFor="image" className="text-xl">Enter image url <span className="text-red-600">*</span></label>
                        <input id="image" type="text" name="image" className="mt-1 w-full p-2 border" placeholder="Image url" required />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="name" className="text-xl">Enter product name <span className="text-red-600">*</span></label>
                        <input id="name" type="text" name="name" className="mt-1 w-full p-2 border" placeholder="Product name" required />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="type" className="text-xl">Enter product type <span className="text-red-600">*</span></label>
                        <input id="type" type="text" name="type" className="mt-1 w-full p-2 border" placeholder="Product type" required />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="brand" className="text-xl">Enter brand name <span className="text-red-600">*</span></label>
                        <input id="brand" type="text" name="brand" className="mt-1 w-full p-2 border" placeholder="Brand name" required />
                    </div>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-5">
                    <div className="w-full md:w-1/2">
                        <label htmlFor="price" className="text-xl">Enter price <span className="text-red-600">*</span></label>
                        <input id="price" type="text" name="price" className="mt-1 w-full p-2 border" placeholder="Price" required />
                    </div>
                    <div className="w-full md:w-1/2">
                        <label htmlFor="rating" className="text-xl">Enter rating <span className="text-red-600">*</span></label>
                        <input id="rating" type="text" name="rating" className="mt-1 w-full p-2 border" placeholder="Rating" required />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="description" className="text-xl">Enter description <span className="text-red-600">*</span></label>
                    <input id="description" type="text" name="description" className="mt-1 w-full p-2 border" placeholder="Description" required />
                </div>
                <button type="submit" className="px-4 py-2 text-xl font-medium text-white bg-[#9A3B3B]">Add Now</button>
            </form>
        </div>
    );
};

export default AddProduct;