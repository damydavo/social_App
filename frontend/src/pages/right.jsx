import { gift, ad, prof, ru, ryu, asa, yemi, sade } from "../assets";
import { Users } from './../components/constant';
import Online from './../components/onLine';

const Right = ({ profile }) => {
    const HomeRight = () => {
        return (
            <div className="hidden md:block space-y-4">
                <div className="hidden md:flex space-x-4 mt-12 ml-4 w-80 ">
                    <img className="h-[40px] w-[40px]" src={gift} alt="gift" />
                    <p className="font-normal text-sm"><strong>Damydavo</strong> and <strong>3 other friends</strong> have birthday today</p>
                </div>
                <img className="hidden md:flex rounded-md w-[480px] mx-4" src={ad} alt="ad_image" />

                <h2 className="font-semibold text-lg ml-4">Friends online</h2>
                <ul className='space-y-4 font-semibold tracking-tight block ml-4'>
                    {Users.map(user => {
                        return (
                            <Online key={user.id} user={user} />
                        )
                    })}
                </ul>
            </div>
        )
    }


    const ProfileRight = () => {
        return (
            <>
                <div className="hidden md:block space-y-2 mt-12 ml-4">
                    <h2 className="tracking-tight text-lg font-semibold">User Information</h2>
                    <h2 className="text-gray-400 font-normal"><span className="text-gray-500 font-semibold mx-2">City:</span> Lagos State</h2>
                    <h2 className="text-gray-400 font-normal"><span className="text-gray-500 font-semibold mx-2">From:</span> Nigeria</h2>
                    <h2 className="text-gray-400 font-normal"><span className="text-gray-500 font-semibold mx-2">Relationship:</span> Married</h2>
                </div>

                <h2 className="hidden md:block tracking-tight text-lg font-semibold ml-4 mt-12 mb-2">Friends List</h2>

                <div class="hidden md:grid grid-cols-3 w-80 ml-5 gap-6">
                    <div>
                        <img className="w-[100px] h-[100px] object-cover rounded-md" src={prof} alt="prof" />
                        <h2>Damy David</h2>
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] object-cover rounded-md" src={sade} alt="prof" />
                        <h2>Sade Ade</h2>
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] object-cover rounded-md" src={yemi} alt="prof" />
                        <h2>Yemoray</h2>
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] object-cover rounded-md" src={ru} alt="prof" />
                        <h2>Rukewe</h2>
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] object-cover rounded-md" src={ryu} alt="prof" />
                        <h2>Bimbo Dan</h2>
                    </div>
                    <div>
                        <img className="w-[100px] h-[100px] object-cover rounded-md" src={asa} alt="prof" />
                        <h2>Prof Nonny</h2>
                    </div>
                </div>

            </>



        )
    }

    return (
        profile ? <ProfileRight /> : <HomeRight />

    );
}

export default Right;