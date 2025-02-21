import { useParams } from "react-router-dom";

const User = () => {
    console.log(useParams());
    const { userId, name } = useParams();


    return (
        <>
            <h2>User {userId} {name} </h2>
        </>
    );
};

export default User;
