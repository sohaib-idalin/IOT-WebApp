import { Outlet, Link, useNavigate } from "react-router-dom";
import NavBar from "../components/navBar";
import Header from "../components/header";
import { useContext, useEffect } from "react";
import { AppContext } from "../components/ContextProvider";
import DataFetcher from "../api/DataFetcher";
import { useState } from "react";
import Cookies from "js-cookie";
import { accessTokenCookieName } from "../constants/CookiesNames";
import { BiSolidBookBookmark } from "react-icons/Bi";
import { FaUsers, FaUniversity, FaUserAlt} from "react-icons/Fa";
import { MdGroup, MdGroupAdd, MdGroups2 } from "react-icons/Md";
import { PiStudentBold } from "react-icons/Pi";


const navBarItems = [
    {
        id: 1,
        link: '/utilisateurs',
        title: 'Utilisateurs',
        icone: FaUserAlt,
    },
    {
        id: 2,
        link: '/groupe',
        title: 'Groupes',
        icone: MdGroup,
    },
    {
        id: 3,
        link: '/beneficiare',
        title: 'Bénéficiaires',
        icone: PiStudentBold,
    },
    {
        id: 4,
        link: '/cours',
        title: 'Cours',
        icone: FaUniversity,
    },
 
    {
        id: 5,
        link: '/chapitres',
        title: 'Chapitres',
        icone: BiSolidBookBookmark,
    },
    // {
    //     id: 7,
    //     link: '/editeurpr',
    //     title: 'EditeurPr',
    //     icone: BiSolidBookBookmark,
    // },
    
    
]

export default function Layout() {
    const { connected, setConnected } = useContext(AppContext)
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    useEffect(() => {
        console.log(connected);
        if (!Cookies.get(accessTokenCookieName)) {
            setConnected(false)
            navigate('/login', { replace: true })
            return;
        }
        setConnected(true)
        DataFetcher({ method: 'GET', path: '/users' }).then(data => {
            if (!data) {
                console.log(data.error.message);
                setConnected(false)
                navigate('/login', { replace: true })
                return;
            }
            setUsers(data)
        }).catch(error => {
            console.log(error);
            setConnected(false)
        })


    }, [connected])

    return (


        <div className="grid grid-cols-7 relative">
            <div className="col-span-1 h-full bg-[#4f5d73] max-w-80 ">
                <NavBar items={navBarItems} />
            </div>
            <div className="col-span-6 ">
                <Header />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}



