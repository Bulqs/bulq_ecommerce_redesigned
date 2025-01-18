"use client"
import { ReactNode, useState } from 'react';
import VendorSidebar from './VendorSidebar';
import VendorHeader from './VendorHeader';

interface LayoutProps {
    children: ReactNode;
}

const VendorLayout = ({ children }: LayoutProps) => {



    return (
        <div className="flex max-h-screen h-[85vh] bg-white mt-28 w-full">
            <VendorSidebar />
            <div className="flex-1 flex flex-col w-9/12 bg-appNav">
                {/* <VendorHeader toggleSidebar={toggleSidebar} /> */}
                <main className="flex-1 p-6 overflow-y-auto">{children}</main>
            </div>
        </div>
    );
};

export default VendorLayout;
