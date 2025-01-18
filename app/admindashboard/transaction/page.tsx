import Layout from '@/components/admindashboardcomponents/Layout';
import React from 'react';

const AdminDashoardSalesTransaction: React.FC = () => {
    return (
        <Layout>
            <div className="shadow-md rounded-md p-6 bg-appBanner h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appTitleBgColor pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif">Admin Transaction Page </h2>
                </div>
            </div>
        </Layout>
    );
}

export default AdminDashoardSalesTransaction;
