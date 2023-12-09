import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import toast from "react-hot-toast";

const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`https://b8a10-brandshop-server-side-abusayed0.vercel.app/carts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCartItems(data);
            })
    }, [user])


    const handleDelete = id => {
        // console.log(displayedItems);
        fetch(`https://b8a10-brandshop-server-side-abusayed0.vercel.app/carts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    // const restItems = cartItems.filter(singleItem => singleItem._id !== id);
                    const rest = cartItems.filter(singleItem => singleItem._id !== id);
                    setCartItems(rest);
                    toast.success("Deleted successfully!")
                }
            })

    };
    return (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                cartItems.map(item => <div key={item._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                    <img className="h-[230px] w-full" src={item.image} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.type}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleDelete(item._id)} className="btn btn-error">Delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;