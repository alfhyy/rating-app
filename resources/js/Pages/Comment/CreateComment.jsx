import CommentCard from "@/Components/Comment/CommentCard";
import Navbar from "@/Components/Comment/Topbar";
import { Head } from "@inertiajs/inertia-react";
import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";

export default function CreateComment(props) {
    console.log(props);
    const [comment, setComment] = useState("");
    const idUser = props.auth.user.id;
    const idMenu = props.menu.id;

    const handleSubmit = () => {
        const data = {
            idUser,
            idMenu,
            comment,
        };

        Inertia.post("/comment", data);
        setComment("");
    };

    // console.log(props);
    return (
        <div className="min-h-screen bg-slate-700">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center items-center ">
                <div className="card lg:w-2/4 bg-base-100 shadow-xl m-5">
                    <div className="card-body">
                        <label className="block">
                            <span className="font-semibold text">
                                Menu's that you rating
                            </span>
                            <input
                                readOnly
                                value={props.menu.name}
                                type="text"
                                placeholder="Nama menu nya nanti"
                                className="mt-2 input input-bordered input-secondary w-full"
                            />
                        </label>
                        <label className="block">
                            <span className="font-semibold text">Comment</span>
                            <textarea
                                type="text"
                                placeholder="Input your comment"
                                className="mt-2 input input-bordered input-secondary w-full textarea"
                                onChange={(comment) =>
                                    setComment(comment.target.value)
                                }
                                value={comment}
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
            <div>
                <CommentCard comment={props.comment.data} />
            </div>
        </div>
    );
}
