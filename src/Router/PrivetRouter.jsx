import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivetRouter = ({children}) => {
  const {user,userLoading} = useContext(AuthContext)
  const location = useLocation()

  if(userLoading)return <Loading/>
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return children

};

export default PrivetRouter;