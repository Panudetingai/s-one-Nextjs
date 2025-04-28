'use client';

export const NewsIconMenu = () => {
    return (
        <>
            {Array.from({ length: 3 }, (_, index) => (
                <img
                    width={10}
                    height={1}
                    onMouseEnter={(e) => {
                        if (index !== 0) {
                            e.currentTarget.src = index === 0 ? "/assets/images/SOne_index_bullet2.png" : "/assets/images/SOne_index_bullet1.png";
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (index !== 0) {
                            e.currentTarget.src = index === 0 ? "/assets/images/SOne_index_bullet1.png" : "/assets/images/SOne_index_bullet2.png";
                        }
                    }}
                    key={index}
                    src={index === 0 ? "/assets/images/SOne_index_bullet1.png" : "/assets/images/SOne_index_bullet2.png"}
                    className={`cursor-pointer`}
                />
            ))}
        </>
    )
}