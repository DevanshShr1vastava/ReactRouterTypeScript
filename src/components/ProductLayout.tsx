import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {


    return (
        <>
            <h2>Product Layout</h2>
            <nav className="nav">
                <Link className="nav-link" to="laptop">Laptop</Link>
                <Link className="nav-link" to="phone">Phone</Link>
            </nav>
            <Outlet />
        </>
    );
};

export const Laptop = ()=>{
    return <h2>Laptop</h2>
}
export const Phone = ()=>{
    return <h2>Phone</h2>
}

export default ProductLayout;
