import React, { useEffect } from 'react'
import Topbar from '../HeaderSection/TopBar/Topbar'
import Navbar from '../HeaderSection/Navbar/Navbar'
import Menubar from '../HeaderSection/Menubar/Menubar'

export default function Layout({ title, children }) {
    useEffect(() => {
        document.title = title
    })
    return (
        <>
            <header className='flex flex-col'>
                <Topbar />
                <Navbar />
                <Menubar />
            </header>
            <main>{children}</main>
            <footer></footer>
        </>
    )
}
