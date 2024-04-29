import React, { useEffect, useState } from "react";
import Footer from "../components/common/Footer";
import Navbar from "../components/Home/Navbar";
import Sidebar from "../components/Home/Sidebar";

const Layout = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.classList.add("fixed-screen");
        } else {
            document.body.classList.remove("fixed-screen");
        }
    }, [isSidebarOpen]);
    
    return (
        <>   
            <Navbar className = "sticky-bar" setSidebarOpen={setSidebarOpen} />
            <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
