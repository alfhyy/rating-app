const isMenu = (menu) => {
    return menu.map((data, i) => {
        // console.log(menu);
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure>
                    <img
                        className="w-full lg:w-96"
                        src="https://placeimg.com/400/225/arch"
                        alt="Foo"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}!</h2>
                    <p>{data.description}</p>
                    <p>{data.category.name}</p>
                    <div className="card-actions justify-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                        </svg>
                        <p className="font-bold">({data.ratingsum} rating)</p>
                        <button className="btn btn-primary">
                            <a href={`/comment/${data.id}`}>Rate this</a>
                        </button>
                    </div>
                    <div className="card-actions justify-end">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 7.5l3 4.5m0 0l3-4.5M12 12v5.25M15 12H9m6 3H9m12-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="font-bold">{data.price}</p>
                    </div>
                </div>
            </div>
        );
    });
};

const noMenu = () => {
    return (
        <p className="flex justify-center items-center text-2xl font-bold color text-black">
            Gaada Menu Blok
        </p>
    );
};

const Card = ({ menu }) => {
    return !menu ? noMenu() : isMenu(menu);
};

export default Card;
