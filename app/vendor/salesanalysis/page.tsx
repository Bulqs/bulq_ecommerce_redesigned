"use client"
import Layout from '@/components/vendornavigation/Layout';
import { BarChart } from '@mui/x-charts/BarChart';



const page = () => {
    return (
        <Layout>
            <div className="w-full items-center  p-3 flex bg-appNav mt-8">
                <p className='text-black font-semibold text-xl'>Sales Analysis</p>
            </div>
            <div>
                <BarChart
                    xAxis={[
                        {
                            id: 'barCategories',
                            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                            scaleType: 'band',
                        },
                    ]}
                    series={[
                        {
                            data: [2, 5, 3, 7, 4, 9, 4, 6, 2, 9, 5, 8],
                        },
                    ]}
                    width={1200}
                    height={600}
                />
            </div>

            <div className="w-full flex flex-rows items-center justify-between px-10 mt-10 mb-24">
                <div className="px-8 py-6 rounded-3xl bg-appTitleBgColor gap-8">
                    <p className="font-extrabold text-xl text-white"> Today Revenue</p>
                    <p className="ml-8 font-semibold text-2xl text-white"> $10000 </p>
                </div>

                <div className="px-8 py-6 rounded-3xl bg-appTitleBgColor gap-10">
                    <p className="font-extrabold text-xl text-white"> Last Week Revenue</p>
                    <p className="ml-10 font-semibold text-2xl text-white"> $10000 </p>
                </div>

                <div className="px-8 py-6 rounded-3xl bg-appTitleBgColor gap-10">
                    <p className="font-extrabold text-xl text-white"> Last Month Revenue</p>
                    <p className="ml-10 font-semibold text-2xl text-white"> $10000 </p>
                </div>

                <div className="px-8 py-6 rounded-3xl bg-appTitleBgColor gap-8">
                    <p className="font-extrabold text-xl text-white"> Return Revenue</p>
                    <p className="ml-10 font-semibold text-2xl text-red-700"> -$300 </p>
                </div>
            </div>
        </Layout >
    )
}

export default page