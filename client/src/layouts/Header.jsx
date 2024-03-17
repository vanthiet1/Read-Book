import Search from "../components/search/Search";
import { useContext } from "react";
import { DIsplayUiForm } from "../contexts/UiContext";
import { DataUser } from "../contexts/authContext/DataUserLogin";
import ListMenuUser from "../components/menuUser/listMenuUser";

const Header = (props) => {
    const { page1, page2, page3, page4, page5, page6 } = props;
    const { handleDisplayLogin, handleDisplayRegister } = useContext(DIsplayUiForm);
    // const [isLoggedOut, setIsLoggedOut] = useState(true);
    const {userEmail} = useContext(DataUser);
    console.log(userEmail);

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.assign('/')
        // if (user) {
        //     setIsLoggedOut(false)
        // }
    };


    return (
        <>
            <div className="bg-[#1f1f1f] items-center justify-between p-3 opacity-[0.9] flex fixed w-full z-[2]">
                <div className="flex items-center gap-4">
                    <div className="px-5">
                        <h1 className="text-green-200 text-[35px] font-bold">Sách</h1>
                    </div>
                    <ul className="flex gap-2">

                        <li className="text-white font-bold px-2 cursor-pointer">{page1}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page2}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page3}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page4}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page5}</li>
                        <li className="text-white font-bold px-2 cursor-pointer">{page6}</li>
                    </ul>
                </div>
                <div className="flex items-center gap-5 px-1">
                    <div className="cursor-pointer flex items-center">
                        <Search />
                    </div>
                    <div className="flex gap-2 items-center">
                        {!userEmail ? (
                            <>
                                <button className="text-white font-bold bg-[#C7C7C8] p-[6px] rounded-full border-[1px] border-gray-300 bg-transparent bg-opacity-50 w-[100px]" onClick={handleDisplayRegister}>Đăng ký</button>
                                <button className="text-white font-bold bg-[#139F7B] p-[5px] rounded-full w-[110px]" onClick={handleDisplayLogin}>Đăng nhập</button>
                            </>
                        ) : (
                            <>
                                <ListMenuUser LogoutUser={handleLogout} />
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;