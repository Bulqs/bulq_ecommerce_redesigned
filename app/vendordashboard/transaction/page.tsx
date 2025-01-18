import VendorLayout from '@/components/vendordashboardcomponents/VendorLayout';
import React from 'react';

const VendorDashoardSalesTransaction: React.FC = () => {
    return (
        <VendorLayout>
            <div className="shadow-md rounded-md p-6 bg-appBanner h-[78vh] overflow-y-scroll">
                <div className="flex items-center justify-between w-full border-b-2 border-b-appTitleBgColor pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif">Vendor Transaction Page </h2>
                </div>
            </div>
        </VendorLayout>
    );
}

export default VendorDashoardSalesTransaction;
