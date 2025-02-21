import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
    isAuthenticated : boolean
}

const ProtectedRoute = ({ isAuthenticated }:ProtectedRouteProps) => {
  console.log("protected");
  return (
    <>
        {isAuthenticated ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};

export default ProtectedRoute;
