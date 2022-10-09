

const isComment = (comment) => {
    return comment.map((data, d) => {
        // console.log(data)
        return (
            <div key={d}>
                <div className="flex justify-center items-center ">
                    <div className="card lg:w-2/4 bg-base-100 shadow-xl m-5">
                        <div className="card-body">
                            <div className="stats bg-primary text-primary-content">
                                <div className="stat">
                                    <div className="stat-title">
                                        User's name
                                    </div>
                                    <div className="stat-value">{data.user.name}</div>
                                </div>

                                <div className="stat">
                                    <div className="stat-title">
                                        User's comment
                                    </div>
                                    <div className="stat-value">
                                        {data.comment}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
};

const noComment = () => {
    return (
        <p className="flex justify-center items-center text-2xl font-bold text-black">
            No comments available (for now)
        </p>
    );
};

const Comment = ({ comment }) => {
    return !comment ? noComment() : isComment(comment);
};

export default Comment;
