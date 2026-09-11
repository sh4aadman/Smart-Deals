import { use } from "react";
import { AuthContext } from "../../context/Auth Context/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router";
import LoadingScreen from "../../components/ui/Loading/LoadingScreen";

function PrivateRoute() {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoadingScreen />;
  }

  if (user) {
    return <Outlet />;
  }

  return <Navigate state={location.pathname} to={"/auth/login"} />;
}

export default PrivateRoute;
