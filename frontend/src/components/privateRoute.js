import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hook/useAuthStatus";
import { spinner } from '../assets';

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) return (
        <div className='flex items-center justify-center mx-auto container mt-28'><img className='w-16 h-16' src={spinner} alt="spinner" /></div>

    )
    return loggedIn ? <Outlet /> : <Navigate to='/login' replace />
}

export default PrivateRoute;