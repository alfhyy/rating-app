import React, { useState } from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "../../Components/Menu/Topbar";
import { Inertia } from "@inertiajs/inertia";

export default function CreateCategory(props) {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [isFlash, setIsFlash] = useState(false);

    const handleSubmit = () => {
        const data = {
            name,
            position,
        };
        Inertia.post("/category", data);
        setIsFlash(true);
        setName("");
        setPosition("");
    };

    console.log('flash ?',props)

    return (
        <div className="min-h-screen bg-slate-700">
            <Head title={props.title} />
            <Navbar />
            {isFlash && <div className="alert alert-success shadow-lg">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>{props.flash.message}</span>
                </div>
            </div>
            }

            <div className="flex justify-center items-center ">
                <div className="card lg:w-2/4 bg-base-100 shadow-xl m-5">
                    <div className="card-body">
                        <label className="block">
                            <span className="font-semibold text">Name</span>
                            <input
                                type="text"
                                placeholder="Type here for new category"
                                className="mt-2 input input-bordered input-secondary w-full"
                                onChange={(name) => setName(name.target.value)}
                                value={name}
                            />
                        </label>
                        <label className="block">
                            <span className="font-semibold text">Position</span>
                            <input
                                type="number"
                                placeholder="Type here for new position ?"
                                className="mt-2 input input-bordered input-secondary w-full"
                                onChange={(position) =>
                                    setPosition(position.target.value)
                                }
                                value={position}
                            />
                        </label>
                        <div className="card-actions justify-end">
                            <button
                                className="btn btn-primary"
                                onClick={() => handleSubmit()}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
