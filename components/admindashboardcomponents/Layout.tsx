"use client"
import { ReactNode, useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {



    return (
        <div className="flex max-h-screen h-[85vh] bg-white mt-28 w-full">
            <Sidebar/>
            <div className="flex-1 flex flex-col w-9/12 bg-appNav">
                {/* <Header toggleSidebar={toggleSidebar} /> */}
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};

export default Layout;
