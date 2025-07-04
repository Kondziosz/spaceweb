function Navbar()
 {
	return(
<div className='flex justify-between md:justify-normal items-center shrink-0 py-300 md:py-0 lg:pt-500 md:h-fit '>
				<div className='flex items-center pl-300 lg:pl-800  gap-800 md:max-w-[160px] md:px-[40px] lg:px-0 md:shrink-0 md:gap-[64px] lg:flex-1  lg:max-w-none'>
        <img src="/logo.svg" className='h-[40px] md:h-[48px] '/>
				<div className="min-w-[560px] h-[1px] opacity-25 bg-white hidden lg:block z-10"/>
				</div>
				<div className="flex-1 h-full md:hidden flex justify-end pr-300 gap-100 items-center">
        <img src="/icon-hamburger.svg" className=' h-[21px] ' />
				</div>
				<div className='hidden md:flex justify-end gap-600 lg:px-800 min-w-[664px] w-full h-max bg-[rgba(255,255,255,0.05)] backdrop-blur-[80px] ml-auto md:min-w-[488px] md:px-500'>
				<div className='relative gap-100 h-[96px] flex items-center after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-white'>
					<div className="gap-100 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px] md:hidden lg:block">00</p><p className="tp-8 !tracking-[2px]">HOME</p></div></div>
					<div className=' gap-100 h-[96px] flex items-center'><div className="gap-150 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px]">01</p><p className="tp-8 !tracking-[2px]">DESTINATION</p></div></div>
						<div className=' gap-100 h-[96px] flex items-center'><div className="gap-150 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px]">02</p><p className="tp-8 !tracking-[2px]">CREW</p></div></div>
							<div className=' gap-100 h-[96px] flex items-center'><div className="gap-150 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px]">03</p><p className="tp-8 !tracking-[2px]">TECHNOLOGY</p></div></div>

				</div>
        </div>)
}
export default Navbar;
