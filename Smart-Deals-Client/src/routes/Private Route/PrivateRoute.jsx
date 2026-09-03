import { use } from "react";
import { AuthContext } from "../../context/Auth Context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router";
import Loading from "../../components/ui/Loading/Loading";

function PrivateRoute() {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return <Outlet />;
  }

  return <Navigate state={location.pathname} to={"/auth/login"} />;
}

export default PrivateRoute;
