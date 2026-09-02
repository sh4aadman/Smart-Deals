import { use } from "react";
import { AuthContext } from "../../context/Auth Context/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../../components/ui/Loading/Loading";

function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate state={location.pathname} to={"/auth/login"} />;
}

export default PrivateRoute;
