// export interface FootersProps{
//
// }


// export interface IProductListProps {
//     id: number;
//     name: string;
//     price: number;
//     imageSrc?: any;
//     imageAlt?: string;
// }

export interface IMultipleForms {
    firstName: string,
    lastName: string,
    businessName: string,
    businessCity: string,
    businessWebsite: string,
    businessEmail: string,
    incomePerMonth: number,
    taxPercentage: number,
    agreeToTerms: boolean,
    showStepNumber?: any;
}

export interface Iimage {
    id: number;
    imageSrc: string;
    imageAlt: string;
    width?: number;
    height?: number;
    button?: string;
    index?: number;
    title?: string;
    subtitle?: string;
    littleText?: number | string;
}

// export interface IProductCardProps {
//     id: number;
//     names: string;
//     price: number;
//     imageUrl: string;
//     imageAlt: string;
//     width: number;
//     height: number;
// }

// export interface `IProductCardProps2 {
//     id: number;
//     names: string;
//     imageUrl: string;
//     imageAlt: string;
//     originalPrice: number;
//     discountPrice: number;
//     discountPercentage: number;
//     rating?: number;
//     width: number;
//     height: number;
// }

// export interface IOtherBuyAble{
//     imageSrc: string;
//     imageAlt: string;
//     width: number;
//     height: number;
//     title: string;
// }

export interface ISvgIconProps {
    width?: string;
    height?: string;
    className?: any;
    fill?: string;
}

export interface ICartCardProps {
    id: number;
    product: string;
    desc?: string;
    img: string;
    brand?: string;
    vendor?: string;
    rating?: number;
    price?: number;
    shipping?: number;
    images?: {
        image: string
    }[];
    reviews?: {
        review: string;
    }[];
    Model?: string;
    Weight?: string;
    Material?: string;
    colors?: {
        color: string;
        price: number;
        // image: string;
    }[];
    size?: {
        title: string,
    }[],
    features?: {
        feature: string
    }[],
}

export interface IAllVendorsProps {
    id: number;
    image: string;
    link: string;
    name?: string;
}[];

export interface IAllVendorsBanner {
    image: string;
    desc?: string;
    small?: string;
}

export interface ISingleVendorBanner {
    image: string;
    desc?: string;
    small?: string;
    big?: string;
}

export interface IAllVendorsImageBottomTag {
    id: number;
    image: string;
    desc?: string;
    predesc?: string;
}

export interface IAllVendorsImageTopTag {
    id: number;
    image?: string;
}

export interface IAllRatings {
    id: number;
    image: string;
    comment?: string;
    rating: number;
}[]

export interface IOrderReceipt {
    logo: string;
    date?: string;
    receiptNumber?: string;
    name?: string;
    message?: string;
    productInfo?: {
        image: string;
        name: string;
        price: number;
        paid: string;
    }[];
    paymentMethod?: string;
    address?: string;
    itemSubtotal?: number;
    shippingFee?: number;
    totalOverall?: number;
}

// export interface TSocialMediaItem {
//     id?: number;
//     platform?: string;
//     username?: string;
//     url?: string;
//     size?: any;
//     color?: any;
// }


// AdminORder.ts
// export interface Order {
//     order_id: string;
//     totalItems: string;
//     subtotal: string;
//     shippingFee: string;
//     customerName: string;
//     customer_email: string;
//     country: string;
//     state: string;
//     address: string;
//     type_of_delivery: string;
//     paymentstatus: string;
// }

// export interface OrderDetails extends Order {
//     size: string;
//     frequency: string;
//     total: string;
//     vendor: string;
//     deliveryStatus: string;
//     discount: string;
//     payment_method: string;
// }


export type OrderDetail = {
    id: number;
    size: string;
    color: string;
    frequency: string;
    total: string;
    vendor: string;
    discount: string;
    payment_method: string;
    name: string;
    image?: string;

};

export type CustomerOrder = {
    id: number;
    order_id: string;
    customerName: string;
    customer_email?: string;
    country: string;
    state: string;
    address: string;
    type_of_delivery: string;
    paymentstatus: string;
    totalItems: string;
    subtotal: string;
    shippingFee: string;
    deliveryStatus: string;
    deliveryType?: string;
    orders: OrderDetail[]; // Array of orders for each customer
};


export interface User {
    sn: number;
    user_id: string;
    firstname: string;
    lastname: string;
    middlename: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    created_at: string;
    nin: string;
    bvn: string;
    isKycCompleted: boolean;
    country: string;
    state: string;
    address: string;
    isBlocked?: boolean; // Add this property
}

export interface Seller {
    sn: number;
    seller_id: string;
    firstname: string;
    lastname: string;
    middlename: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    created_at: string;
    nin: string;
    bvn: string;
    isKycCompleted: boolean;
    country: string;
    state: string;
    address: string;
    isBlocked?: boolean; // Add this property
}