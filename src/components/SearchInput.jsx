const SearchInput = ({onChange = null}) => {
    return <>
        <div dir="rtl" className="w-full flex justify-center mt-6">
            <div className="relative sm:w-[auto] w-[80%]">
                <input onChange={onChange} placeholder="جست‌وجو" type="text" className="px-4 pr-8 text-right text-sm h-10 sm:w-[360px] w-full focus:outline-none rounded-3xl text-white/70 bg-white/[4%] rounded-[23px] shadow-md backdrop-blur-3xl border-white/5 border" />
                <span className="icon-search absolute right-3 top-3"></span>
            </div>
        </div>
    </>
}

export default SearchInput;