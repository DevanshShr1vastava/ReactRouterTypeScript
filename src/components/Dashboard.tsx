import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    console.log("Dashboard")
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/about");
    }
    return (
        <>
            <h2>Dashboard</h2>
            <Button onClick = {handleClick}>About</Button>
        </>
    );
};

export default Dashboard;
