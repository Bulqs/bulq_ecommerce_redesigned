"use client"
import { ReactNode, useState } from 'react';
import UserHeader from './UserHeader';
import UserSidebar from './UserSidebar';

interface LayoutProps {
    children: ReactNode;
}

const UserLayout = ({ children }: LayoutProps) => {



    return (
        <div className="flex max-h-screen h-[85vh] bg-white mt-28 w-full">
            <UserSidebar />
            <div className="flex-1 flex flex-col w-9/12 bg-appNav">
                {/* <UserHeader toggleSidebar={toggleSidebar} /> */}
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};

export default UserLayout;
