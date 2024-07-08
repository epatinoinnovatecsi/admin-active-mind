import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = () => {
    const admin = useSelector((store) => store.admin)
    if (admin.token === ""){
        return <Navigate to={"/login"}/>
    }
    else{
        return <Outlet/>
    }

}
export default PrivateRoutes