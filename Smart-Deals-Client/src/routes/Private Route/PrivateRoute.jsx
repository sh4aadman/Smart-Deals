import { Navigate, Outlet, useLocation } from "react-router";
import LoadingScreen from "../../components/ui/Loading/LoadingScreen";
import useAuth from "../../hooks/useAuth";

function PrivateRoute() {
  const { user, loading } = useAuth();
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
