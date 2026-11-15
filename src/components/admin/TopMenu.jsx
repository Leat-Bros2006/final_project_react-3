import { Menu } from 'lucide-react'
import React from 'react'

function TopMenu({sidebar}) {
    return (
        <div className='bg-white shadow h-13 flex justify-between px-3 items-center'>
            <div>
                <button onClick={sidebar} className='btn-navbar'><Menu /></button>
            </div>

            <div>
                <button className='btn-navbar bg-amber-600 text-white px-4'>ADMIN</button>
            </div>
        </div>
    )
}

export default TopMenu