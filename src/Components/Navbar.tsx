import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { UserState } from "../Redux/Slices/UserSlices";
import { logout } from "../Redux/Slices/UserSlices";
import { useDispatch } from "react-redux";

export default function Navbar() {
    const dispatch = useDispatch(); 

    const user = useSelector((state:{user:UserState}) => state.user);


    return (
        <nav className="min-h-[10vh] max-h-[10vh] flex flex-row justify-between items-center bg-white px-6 shadow-md">
            <Link to="/" className="text-2xl font-bold text-black hover:text-orange-700 transition-colors">
                Logo
            </Link>
            <ul className="flex flex-row gap-6">
                {user.isLoggedIn && user.userSession?.t_rol==2&&(
                <li>
                    <Link
                        to="/crear-producto"
                        className="text-lg text-red-700 hover:text-orange-700 transition-colors"
                    > Crear Producto
                    </Link>
                </li>
                )}

                <li>
                    <Link
                        to="/catalogo"
                        className="text-lg text-red-700 hover:text-orange-700  transition-colors"
                    >
                        Catálogo
                    </Link>
                </li>
    
                {
                    user.isLoggedIn ? (
                        <li>

                            <Link
                                to={"/"}
                                className="text-lg text-red-700  hover:text-orange-700 transition-colors"
                                onClick={()=>dispatch(logout())}
                                >
                                Cerrar Sesión
                            </Link>
                        </li>

                    ) : (
                        <>
                        <li>
                            <Link
                                to="/registrarse"
                                className="text-lg text-red-700 hover:text-orange-700 transition-colors"
                            >
                                Registrarse
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="text-lg text-red-700 hover:text-orange-700 transition-colors"
                            >
                                Iniciar Sesión
                            </Link>

                        </li>

                        </>

                    )
                }


            </ul>
        </nav>
        
        
    );
    
}


 



