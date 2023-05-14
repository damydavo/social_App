import { valley, sade } from '../assets';
import TopBar from './../components/topBar';
import SideBar from './../components/sideBar';
import Feed from './feed';
import Right from './right';


const Profile = () => {
    return (
        <>
            <TopBar />
            <div className='flex flex-row'>
                <div className='basis-[20%]'>
                    <SideBar />
                </div>
                <div className='basis-4/5'>
                    <div className='relative'>
                        <img className='object-cover h-[250px] w-full' src={valley} alt="valley" />
                        <img className='rounded-[50%] h-[150px] w-[150px] right-0 left-0 m-auto top-[150px] object-cover absolute border-2' src={sade} alt="sade" />
                        <h2 className='flex justify-center items-center text-2xl tracking-tight font-medium mt-12 '>Damydavo</h2>
                        <span className='text-gray-500 flex justify-center items-center'>Welcome to your page</span>
                    </div>

                    <div className='flex flex-row mt-4 ml-6'>
                        <div className='basis-1/2'>
                            <Feed />
                        </div>

                        <div className='basis-1/2'>
                            <Right profile />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Profile;