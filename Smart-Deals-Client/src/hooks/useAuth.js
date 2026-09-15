import { use } from "react";
import { AuthContext } from "../context/Auth Context/AuthProvider";

const useAuth = () => {
    const authInfo = use(AuthContext);
    return authInfo;
}

export default useAuth;