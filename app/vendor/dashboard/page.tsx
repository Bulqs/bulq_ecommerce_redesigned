"use client"

import Layout from "@/components/vendornavigation/Layout"
import Sumary from "./Sumary"
import RecentTable from "./RecentTable"

const page = () => {
    return (
        <Layout>
            <div>
                <Sumary />
            </div>
            <div>
                <RecentTable />
            </div>
        </Layout>
    )
}

export default page