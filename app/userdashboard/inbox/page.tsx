"use client";
import UserLayout from '@/components/userdashboardcomponents/UserLayout';
import React, { useState } from 'react';

interface Message {
    id: number;
    image: string;
    title: string;
    body: string;
}

const initialMessages: Message[] = [
    {
        id: 1,
        image: "/images/allvendors/nikebanner.png",
        title: "Welcome to Next.js!",
        body: "This is the body of the first message.",
    },
    {
        id: 2,
        image: "/images/allvendors/nikebanner.png",
        title: "Your order is shipped",
        body: "Your order #1234 has been shipped. Track it for more details.",
    },
];

const UserDashboardInbox: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [openMessage, setOpenMessage] = useState<number | null>(null);
    const [readMessages, setReadMessages] = useState<Set<number>>(new Set());

    const toggleMessage = (id: number) => {
        setOpenMessage(openMessage === id ? null : id);
        if (!readMessages.has(id)) {
            setReadMessages((prev) => new Set(prev).add(id));
        }
    };

    const unreadCount = messages.length - readMessages.size;

    return (
        <UserLayout>
            <div className="shadow-md rounded-md p-6 bg-appTitleBgColor h-[78vh] overflow-y-scroll">
                <header className="flex items-center justify-start w-full border-b-2 border-b-appBanner pb-1">
                    <h2 className="text-2xl font-semibold text-white font-serif">
                        Customer Inbox Message
                    </h2>
                </header>

                <section className="w-full bg-appNav/60 mt-8 p-4 h-[62vh]">
                    {messages.length > 0 ? (
                        <div className="flex flex-col w-full">
                            <div className="w-full flex border-b bg-black">
                                <div className="px-4 py-2 text-left text-white font-semibold">
                                    Unread Messages: <span className="font-bold text-red-700 ml-2">{unreadCount}</span>
                                </div>
                            </div>
                            <table className="min-w-full bg-white border border-gray-200 shadow-sm rounded-lg">
                                {/* <thead className="bg-gray-100 border-b">
                                <tr className="w-full flex">
                                    <td className="px-4 py-2 text-left text-gray-600 font-semibold">
                                        Unread Messages: <span className="font-bold text-red-700 ml-2">{unreadCount}</span>
                                    </td>
                                </tr>
                            </thead> */}

                                <tbody>
                                    {messages.map((message) => (
                                        <React.Fragment key={message.id}>
                                            <tr className="border-b flex items-center justify-between">
                                                <td className="px-4 py-2 w-20">
                                                    <img
                                                        src={message.image}
                                                        alt="Message"
                                                        className="h-10 w-10 rounded-full"
                                                    />
                                                </td>
                                                <td
                                                    className={`px-4 py-2 ${readMessages.has(message.id)
                                                        ? "text-gray-800 font-normal"
                                                        : "text-gray-800 font-bold"
                                                        }`}
                                                >
                                                    {message.title}
                                                    {readMessages.has(message.id) && (
                                                        <span className="ml-2 text-green-500">✔</span>
                                                    )}
                                                </td>
                                                <td className="px-4 py-2 flex items-center justify-end">
                                                    <button
                                                        onClick={() => toggleMessage(message.id)}
                                                        className="text-blue-500 hover:underline"
                                                        aria-expanded={openMessage === message.id}
                                                    >
                                                        {openMessage === message.id ? "Hide Message" : "Read Message"}
                                                    </button>
                                                </td>
                                            </tr>
                                            {openMessage === message.id && (
                                                <tr>
                                                    <td colSpan={3} className="px-4 py-4 bg-gray-50 text-gray-600">
                                                        {message.body}
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p className="text-white">No inbox messages available.</p>
                    )}
                </section>
            </div>
        </UserLayout>
    );
};

export default UserDashboardInbox;
