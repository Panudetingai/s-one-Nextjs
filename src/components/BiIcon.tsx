'use client'

type bticon = {
    icon: string,
    hover: string
}

const bticon: bticon[] = [
    {
        icon: "/assets/images/SOne_index_bt-tire.jpg",
        hover: "/assets/images/SOne_index_bt-tire1.jpg"
    },
    {
        icon: "/assets/images/SOne_index_bt-break.jpg",
        hover: "/assets/images/SOne_index_bt-break1.jpg"
    },
    {
        icon: "/assets/images/SOne_index_bt-battery.jpg",
        hover: "/assets/images/SOne_index_bt-battery1.jpg"
    },
    {
        icon: "/assets/images/SOne_index_bt-chokeup.jpg",
        hover: "/assets/images/SOne_index_bt-chokeup1.jpg"
    },
    {
        icon: "/assets/images/SOne_index_bt-oil.jpg",
        hover: "/assets/images/SOne_index_bt-oil1.jpg"
    },
    {
        icon: "/assets/images/SOne_index_bt-guarantee.jpg",
        hover: "/assets/images/SOne_index_bt-guarantee1.jpg"
    }
]

export const BiIcon = () => {
    return (
        <>
            {
                bticon.map((item, index) => (
                    <img
                        onMouseEnter={(e) => {
                            e.currentTarget.src = item.hover
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.src = item.icon
                        }}
                        key={index}
                        src={item.icon}
                        alt="Button Icon"
                        width={200}
                        className="cursor-pointer"
                    />
                ))
            }
        </>
    )
}