'use client'
import { useState } from 'react'

type langIcon = {
    icon: string,
    label: string
}

const langIcon: langIcon[] = [
    {
        icon: '/assets/images/SOne_index_iconthai.jpg',
        label: 'Thai'
    },
    {
        icon: '/assets/images/SOne_index_iconeng2.jpg',
        label: 'English'
    },
]

export const Navigation = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="w-full max-md:px-4">
            <nav className="flex flex-col md:flex-row justify-between items-center mx-auto py-4">
                <div className="logo w-full md:w-auto flex justify-center md:justify-start mb-4 md:mb-0">
                    <img
                        src="/assets/images/SOne_index_logo.png"
                        alt="Logo"
                        className="w-48 md:w-60 lg:w-72 h-auto"
                    />
                </div>
                <div className="detail-nav flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
                    <div className="lang-icon flex items-center gap-2">
                        {langIcon.map((item, index) => (
                            <img
                                onMouseEnter={(e) => {
                                    if (item.label === "English") {
                                    e.currentTarget.src = "/assets/images/SOne_index_iconeng.jpg";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (item.label === "English"){
                                    e.currentTarget.src = item.icon;
                                    }
                                }}
                                key={index}
                                src={item.icon}
                                alt={item.label}
                                className="w-6 h-auto"
                            />
                        ))}
                    </div>
                    <div className="search-icon flex items-center border flex-row border-orange-500 rounded pl-2 w-full md:w-auto">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="focus:outline-none w-full md:w-auto"
                        />
                        <button
                            type="button"
                            className="w-max cursor-pointer"
                        >
                            <img
                                src="/assets/images/SOne_index_btsearch.jpg"
                                alt="Search Icon"
                                className="w-6 h-6"
                            />
                        </button>
                    </div>
                    <div className="hidden md:flex items-center gap-2 flex-row text-xs lg:text-sm">
                        <a href="#" className="hover:text-orange-500">About S-ONE</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:text-orange-500">Job Opportunity</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:text-orange-500">Contact Us</a>
                        <span className="text-gray-300">|</span>
                        <a href="#" className="hover:text-orange-500">Site Map</a>
                    </div>
                    <div className="md:hidden flex flex-col w-full items-center mt-2 space-y-2">
                        <a href="#" className="hover:text-orange-500">About S-ONE</a>
                        <a href="#" className="hover:text-orange-500">Job Opportunity</a>
                        <a href="#" className="hover:text-orange-500">Contact Us</a>
                        <a href="#" className="hover:text-orange-500">Site Map</a>
                    </div>
                </div>
            </nav>
            <div className="relative">
                <button 
                    className="md:hidden flex items-center justify-center w-full bg-black text-white py-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    Menu {mobileMenuOpen ? '▲' : '▼'}
                </button>
                <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
                    <Nav />
                </div>
            </div>
        </div>
    )
}

export const Nav = () => {
    const navdata = [
        { label: "Product & Services" },
        { label: "Promotions" },
        { label: "News & Events" },
        { label: "Safety Tips" },
        { label: "FAQS" },
        { label: "Location" }
    ]

    const iconSocial = [
        {
            icon: "/assets/images/SOne_index_btfacebook.png",
            hoverIcon: "/assets/images/SOne_index_btfacebook1.png"
        },
        {
            icon: "/assets/images/SOne_index_bttwitter.png",
            hoverIcon: "/assets/images/SOne_index_bttwitter1.png"
        },
        {
            icon: "/assets/images/SOne_index_btyoutube.png",
            hoverIcon: "/assets/images/SOne_index_btyoutube1.png"
        }
    ]

    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-black px-2 py-1 rounded">
            <div className="flex flex-col md:flex-row items-center md:gap-4 w-full">
                {navdata.map((item, index) => (
                    <div className="flex items-center gap-2 py-2 md:py-0" key={index}>
                        <img
                            onMouseEnter={(e) => {
                                e.currentTarget.src = "/assets/images/SOne_index_menu02.png";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.src = "/assets/images/SOne_index_menu01.png";
                            }}
                            src={"/assets/images/SOne_index_menu01.png"}
                            className="w-5 h-5"
                            alt=""
                        />
                        <a key={index} href="#" className="text-white text-sm hover:text-orange-500">{item.label}</a>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2 py-3 md:py-0">
                {iconSocial.map((item, index) => (
                    <div className="flex items-center gap-2" key={index}>
                        <img
                            onMouseEnter={(e) => {
                                e.currentTarget.src = item.hoverIcon;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.src = item.icon;
                            }}
                            src={item.icon}
                            className="w-5 h-5"
                            alt={`Social icon ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
