import { AuthResponse } from "../lib/actions";
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


export interface FullUserDetails {
    sn: number;
    user_id: string;
    firstName: string;
    lastName: string;
    middleName: string;
    username: string;
    email: string;
    authorities: string;
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

export interface User {
    firstName: string;
    lastName: string;
    username: string;
    authorities: { authority: string }[];   
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

export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
export const ROUTE_SECRET = process.env.ROUTE_SECRET;

const BASE_NAVIGATION = "/app";

export const COOOKIE_EXPIRY = 100000000000000;

const SESSION_EXPIRY = 10000;

export type Session = AuthResponse & { SESSION_EXPIRY: number };

export type PagedResponse<T> = {
    content: T[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
  };

export enum NAVIGATION {
    /*************************** Admin Routes ********************************************/
  ADMIN = "/admindashboard",
  ADMIN_BRANDS = `${ADMIN}/management`,
  ADMIN_CATEGORY = `${ADMIN}/category`,
  ADMIN_CHANGE_PASSWORD = `${ADMIN}/changepassword`,
  ADMIN_DASHBOARD = `${ADMIN}/changepassword`,
  ADMIN_ORDERS = `${ADMIN}/orders`,
  ADMIN_PRODUCTS = `${ADMIN}/products`,
  ADMIN_PROFILE = `${ADMIN}/profile`,
  ADMIN_SELLERS = `${ADMIN}/sellers`,
  ADMIN_TRANSACTION = `${ADMIN}/transaction`,
  ADMIN_USERS = `${ADMIN}/users`,

  /*************************** User Dashboard Routes ********************************************/
  USER = "/user",
  
  USER_INBOX = `${USER}/brand`,
  USER_PROFILE = `${USER}/profile`,
  USER_WALLET = `${USER}/brand`,
  USER_WISHLIST = `${USER}/wishlist`,
  USER_MYWALLET = `${USER}/mywallet`,
  USER_ALLORDERS = `${USER}/brand`,
  USER_BRAND = `${USER}/brand`,
  USER_CART = `${USER}/cart`,
  USER_CHECKOUT = `${USER}/checkout`,
  USER_CONGRAT = `${USER}/congrat`,
  USER_RECEIPT = `${USER}/receipt`,
  USER_VOUCHER = `${USER}/voucher`,

  /*************************** Vendor Routes ********************************************/
  VENDOR = "/vendordashboard",
  VENDOR_BRANDS = `${VENDOR}/brands`,
  VENDOR_CATEGORY = `${VENDOR}/category`,
  VENDOR_CHANGE_PASSWORD = `${VENDOR}/changepassword`,
  VENDOR_DASHBOARD = `${VENDOR}/dashboard`,
  VENDOR_ORDERS = `${VENDOR}/orders`,
  VENDOR_PRODUCTS = `${VENDOR}/products`,
  VENDOR_PROFILE = `${VENDOR}/profile`,
  VENDOR_SELLERS = `${VENDOR}/sellers`,
  VENDOR_TRANSACTION = `${VENDOR}/transaction`,
  VENDOR_USERS = `${VENDOR}/users`,

  /*************************** Public Routes ********************************************/
  LOGIN = `/login`,
  SIGNUP = `/signup`,
  CHANGE_PASSWORD = `/brand`,
  ABOUT_US = `/aboutus`,
  PRODUCTS = `/products`,
  REVIEWS = `/reviews`,
  SHIPPING = `/shipping`,
  TERMS = `/terms`,
  BRAND = `/brand`,
  HOME = `/home`,

  /*************************** Driver Routes ********************************************/
DRIVER = "/driverdashboard",
}

export const viewport = "width=device-width, initial-scale=1, user-scalabe=no";

export enum ROLES {
    USER = "USER",
    ADMIN = "ADMIN",
    VENDOR = "VENDOR",
    DRIVER = "DRIVER",
  }

  export type BaseEntity = {
    createdAt: Date | null;
    createdBy: number | null;
    updatedAt: Date | null;
    updatedBy: number | null;
  };

  export type RegisterUser = {
    email: string,
    password: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    username: string,
    country: string,
    state: string,
    city: string,
    address: string
  }

  

  export enum USER_AUTHORITES {
    USER = "USER",
    ADMIN = "ADMIN",
    VENDOR = "VENDOR",
  }

  export enum ACCOUNT_STATUS {
    APPROVED = "APPROVED",
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    ACCEPTED = "ACCEPTED",
  }