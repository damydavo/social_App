import TopBar from './../components/topBar';
import SideBar from './../components/sideBar';
import Feed from './feed';
import Right from './right';

const Home = () => {
    return ( 
        <>
            <TopBar />
            <div className='flex w-full'>
                <div className='flex-[2.8]'>
                    <SideBar />
                </div>
                <div className='flex-[5.2]'>
                    <Feed />
                </div>

                <div className='flex-[4]'>
                    <Right />
                </div>
            </div>
        </>

     );
}
 
export default Home;