import { LogOut, Settings, TextAlignJustify, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router'
import { useNavigate } from 'react-router'


function Navbar() {

    const [isActive, setIsActive] = useState(false)
    let navigate = useNavigate()

    function openSidbar() {
        setIsActive(true)
    }

    function closSidbar() {
        setIsActive(false)
    }

    function handleLogOut(){
        localStorage.removeItem("token")
        navigate("/login")
    }

    return (
        <>
            {/* Navbar */}
            <section className='flex sticky top-0 justify-between items-center px-4 md:px-25 py-3 bg-white shadow border-b border-gray-300'>
                {/* logo */}
                <div className='flex items-center'>
                    <h3 className='hidden md:block font-bold text-2xl'>
                        Store
                    </h3>
                    <button onClick={openSidbar} className='btn-navbar block md:hidden'>
                        <TextAlignJustify />
                    </button>
                </div>

                {/* meun */}
                <nav className='space-x-5 hidden md:block'>
                    <NavLink to="/" className={({isActive}) => isActive ? "underline" : ""}>Home</NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "underline" : ""}>About</NavLink>
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "underline" : ""}>Contact</NavLink>
                </nav>

                {/* icon */}
                <div className='flex items-center gap-4'>
                    <button className='btn-navbar'>
                        <Settings />
                    </button>
                    <button onClick={handleLogOut} className='btn-navbar bg-red-600 hover:bg-red-700 text-gray-100 '>
                        <LogOut />
                    </button>
                </div>
            </section>

            {/* Sidbar */}
            <section className={`${isActive ? "left-0" : "-left-full"} transition-all duration-300 bg-slate-800 w-[330px] fixed top-0 bottom-0 p-6 block md:hidden`}>
                <div className='text-right'>
                    <button onClick={closSidbar} className='btn-navbar bg-slate-400'>
                        <X />
                    </button>
                </div>
                <hr className='border-gray-300 mt-4 mb-5' />

                <nav className='flex gap-1 flex-col'>
                    <NavLink to="/" className={({isActive}) => isActive ? "py-2 px-4 rounded bg-slate-400/40 text-white" : "text-white py-2 px-4"}>Home</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "py-2 px-4 rounded bg-slate-400/40 text-white" : "text-white py-2 px-4"}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "py-2 px-4 rounded bg-slate-400/40 text-white" : "text-white py-2 px-4"}>Contact</NavLink>
                </nav>
            </section>
        </>
    )
}

export default Navbar