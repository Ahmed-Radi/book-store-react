import { BsHeartFill } from 'react-icons/bs';
import { BiUser, BiSearch } from 'react-icons/bi';

interface navbarprop {
    setData: any;
}
function Navbar({setData}: navbarprop) {

    const changeHandle = (e:any) => {
        setData((prev:any) => prev.filter((title:any) => title.title === e))
    }
    return (
        <div>
            <div className="container w-[80%] mx-auto p-4">
                <div className="nan-content flex justify-between items-center">
                    <div className="w-[20%] font-semibold text-xl">Booksy</div>
                    <div className="w-[50%] bg-gray-100 rounded-lg">
                        <div className="flex items-center px-2">
                            <input type="text" placeholder="Search by author, title, name" onChange={e => changeHandle(e.target.value)} className="w-[91%] bg-transparent outline-none p-2 mr-2" />
                            <BiSearch />
                        </div>
                    </div>
                    <div className="w-[10%]">
                        <div className="flex justify-between items-center">
                            <i><BsHeartFill /></i>
                            <div className="avatar">
                                <BiUser />
                            </div>
                            <div className="font-bold">
                                En
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar