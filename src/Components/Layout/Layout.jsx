import React, { useEffect } from 'react'
import Topbar from '../HeaderSection/TopBar/Topbar'
import Navbar from '../HeaderSection/Navbar/Navbar'
import Menubar from '../HeaderSection/Menubar/Menubar'
import Footer from '../Footer/Footer'
import ScrollerTop from '../ScrollerTop/ScrollerTop'

export default function Layout({ title, children }) {

    useEffect(() => {
        document.title = title
        window.scrollTo(0, 0)
    })
    return (
        <>
            <header className='flex flex-col'>
                <Topbar />
                <Navbar />
                <Menubar />
            </header>
            <main>{children}</main>
            <footer>
                <Footer />
            </footer>
            <ScrollerTop />
        </>
    )
}
