import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hook/authHook";
import { spinner } from '../assets';

const PrivateRoute = () => {
    const { loggedIn, checking } = useAuthStatus

    if (checking) return (
        <div className='flex items-center justify-center mx-auto container mt-28'><img className='w-10 h-10' src={spinner} alt="" /></div>
    )


    return loggedIn ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute;