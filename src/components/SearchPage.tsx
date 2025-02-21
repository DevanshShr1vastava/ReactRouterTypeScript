import { useLocation } from "react-router-dom";

const useQuery = () =>{
    return new URLSearchParams(useLocation().search);
}

const SearchPage = () => {
    const query = useQuery();
    const term = query.get("term");  
    return (<>
        <h2>Search Page - {term} </h2>
    </>);
};

export default SearchPage;
