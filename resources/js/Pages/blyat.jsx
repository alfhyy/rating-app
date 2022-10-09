import React from "react";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "../Components/Navbar";
import Card from "@/Components/Menu/Card";
import Pagination from "@/Components/Menu/Pagination";

export default function blyat(props) {
    return (
        <div className="min-h-screen bg-slate-700">
            {/* <link rel="icon" href="amoamogus.png" /> */}
            <Head  title={props.title} />
            <Navbar user={props.auth.user} />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch items-center gap-4 p-5">
            <Card menu={props.menu.data}/>
            </div>
            <div className="flex justify-center items-center p-4">
                <Pagination meta={props.menu.meta} />
            </div>
        </div>
    );
}
