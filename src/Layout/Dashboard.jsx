import { FaHome} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    const isAdmin = true;

    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-[#5ce852]">
                <div className="text-center mt-10">
                    <h2 className="text-3xl font-bold">T-cash</h2>
                </div>
                <ul className="menu mt-5">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to={'/'}>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'}>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/'}>
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                            
                            </>
                            :""

                    }
                    {/* shared navLinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to={'/'}>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;