export const NewCard = () => {
    return (
        <div className="flex flex-col gap-2">
            <img
                height={90}
                src={"/assets/images/SOne_index_pic3.jpg"}
            />
            <a className="cursor-pointer text-xs hover:underline py-1 leading-3">
                ข่าวใหม่!! ข่าวและกิจกรรมข่าว
                และกิจกรรมข่าวและกิจกรรมข่าว
                และกิจกรรม
            </a>
        </div>
    )
}