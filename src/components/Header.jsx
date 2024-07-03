const Header = () => {
    return <>
        <header className="flex text-white/70 justify-between w-full bg-white/[3%] rounded-[23px] shadow-md backdrop-blur-3xl h-14 rounded-3xl border border-white/5" dir="rtl">
                <div>
                    {/* <div className='float-right block mr-5 mt-[14px] w-[25px] h-[25px] text-center rounded-3xl text-white/70 bg-white/[3%] rounded-[23px] shadow-md backdrop-blur-3xl border-white/5 border hover:bg-white/[10%] cursor-pointer'>
                        <span className='icon-moon block mt-[3px] text-white/90'></span>
                    </div>
                    <div className='float-right h-6 w-[0.5px] bg-gray-200/10 mr-3 mt-[15px]'></div> */}
                    <a href="https://github.com/laravel-cheat-sheet/" target="_blank" className='group float-right mr-4 mt-[14px] w-20 h-[25px] text-[11px] text-center rounded-3xl text-white/70 bg-white/[3%] rounded-[23px] shadow-md backdrop-blur-3xl border-white/5 border hover:bg-white/[10%] cursor-pointer'>
                        <div className='float-right mr-[8px] mt-[3px]'>ستاره بده </div><span className='group-hover:text-yellow-300 text-white text-[13px] icon-star-empty mt-[5px] float-right mr-[5px]'></span>
                    </a>
                </div>
                <div className='ml-5 mt-4'>برگه‌تقلب‌ لاراول</div>
        </header>
    </>
}

export default Header;