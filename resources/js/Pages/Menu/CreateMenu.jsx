import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "../../Components/Menu/Topbar";
import { Inertia } from "@inertiajs/inertia";

export default function CreateMenu(props) {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [idCategory, setIdCategory] = useState("");

    const handleSubmit = () => {
        const data = {
            name,
            description,
            price,
            idCategory
        };

        Inertia.post("/menu", data);
        setName("");
        setDescription("");
        setPrice("");
        // setCategory("");

    };

    console.log('See props :', props)

    return (
        <div className="min-h-screen bg-slate-700">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center items-center ">
                <div className="card lg:w-2/4 bg-base-100 shadow-xl m-5">
                    <div className="card-body">
                        <label className="block">
                            <span className="font-semibold text">Name</span>
                            <input
                                type="text"
                                placeholder="Type here for new's menu name"
                                className="mt-2 input input-bordered input-secondary w-full"
                                onChange={(name) => setName(name.target.value)}
                                value={name}
                            />
                        </label>
                        <label className="block">
                            <span className="font-semibold text">
                                Description
                            </span>
                            <input
                                type="text"
                                placeholder="Type here for new menu's description"
                                className="mt-2 input input-bordered input-secondary w-full"
                                onChange={(description) => setDescription(description.target.value)}
                                value={description}
                            />
                        </label>
                        <label className="block">
                            <span className="font-semibold text">Price</span>
                            <input
                                type="number"
                                placeholder="Type here for new menu's price"
                                className="mt-2 input input-bordered input-secondary w-full"
                                onChange={(price) => setPrice(price.target.value)}
                                value={price}
                            />
                        </label>
                        <label className="block">
                            <span className="font-semibold text">
                                Categories
                            </span>
                            <select defaultValue={'DEFAULT'} className="select select-secondary w-full mt-2" onChange={(idCategory) => setIdCategory(idCategory.target.value) }>
                                <option value="DEFAULT" disabled>
                                    Select menu's category
                                </option>
                                {
                                    props.category.map((cat) =>
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    )
                                }
                            </select>
                        </label>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={() => handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
