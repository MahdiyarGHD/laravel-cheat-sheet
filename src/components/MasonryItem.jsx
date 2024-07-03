const MasonryItem = ({title = '', children}) => {
    return <>
        <div dir="rtl" className="masonry-item px-4 py-2.5 rounded-3xl text-white/70 bg-blue-500/[5%] rounded-[23px] shadow-md backdrop-blur-3xl border-white/5 border">
            <div className="w-full text-right">{title}</div>
            <div className="w-full mt-2 mb-1 px-3.5 rounded-xl text-white/70 bg-blue-500/[3%] rounded-[23px] shadow-md backdrop-blur-3xl border-white/10 border">
                {children}
            </div>
        </div>

    </>
}

export default MasonryItem