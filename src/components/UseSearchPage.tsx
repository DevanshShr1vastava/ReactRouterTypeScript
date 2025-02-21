import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const UseSearchPage = () => {
    const [inputBox,setInputBox] = useState<string>('');
    const [inputBox2,setInputBox2] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = ()=>{
        setSearchParams({
            param1:inputBox,
            param2 : inputBox2
        });
    }

    return (
    <>  
        <input className="form-control" type="text" placeholder="enter url parameter 1" value = {inputBox} onChange={(e)=>setInputBox(e.target.value)}/> <br /><br />
        <input className="form-control" type="text" placeholder="enter url parameter 2" value = {inputBox2} onChange={(e)=>setInputBox2(e.target.value)}/> <br /> <br />
        <Button variant="secondary" onClick = {handleClick} type="button">Search</Button>
        <br />
        <br />
        <h1>param1 : {searchParams.get("param1")}</h1>
        <h1>param2 : {searchParams.get("param2")}</h1>

    </>
  );;
};

export default UseSearchPage;
