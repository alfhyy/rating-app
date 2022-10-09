const Data = (data, k) => {
    console.log(data);
    return (
        <div key={k}>
            <p>{data.comments}</p>
            <p>{data.user.name}</p>
        </div>
    );
};

export default Data;
