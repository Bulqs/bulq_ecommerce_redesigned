"use client"

import Layout from "@/components/vendornavigation/Layout"
import Sumary from "./Sumary"
import Rustomernotifications from "./Rustomernotifications"

const page = () => {
    return (
        <Layout>
            <div>
                {/* <Sumary /> */}
            </div>
            <div>
                <Rustomernotifications />
            </div>
        </Layout>
    )
}

export default page