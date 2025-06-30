function Navbar()
 {
	return(
<div className='flex justify-between lg:justify-normal items-center shrink-0 py-300 lg:py-0 lg:pt-500 '>
				<div className='flex flex-1 items-center pl-300 lg:pl-800  gap-800 '>
        <img src="/logo.svg" className='h-[40px] lg:h-[48px]'/>
				<div className="min-w-[560px] h-[1px] opacity-25 bg-white hidden lg:block z-10"/>
				</div>
				<div className="flex-1 h-full md:hidden flex justify-end pr-300 gap-100 items-center">
        <img src="/icon-hamburger.svg" className=' h-[21px] ' />
				</div>
				<div className='hidden lg:flex justify-end gap-600 lg:px-800 min-w-[664px] w-full h-max bg-[rgba(255,255,255,0.05)] backdrop-blur-[80px] ml-auto'>
				<div className='border-b-[3px] border-white gap-100 h-[96px] flex items-center'>
					<div className="gap-100 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px]">00</p><p className="tp-8">HOME</p></div></div>
					<div className=' gap-100 h-[96px] flex items-center'><div className="gap-150 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px]">01</p><p className="tp-8">DESTINATION</p></div></div>
						<div className=' gap-100 h-[96px] flex items-center'><div className="gap-150 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px]">02</p><p className="tp-8">CREW</p></div></div>
							<div className=' gap-100 h-[96px] flex items-center'><div className="gap-150 w-auto flex flex-row"><p className="tp-8b !tracking-[2.7px]">03</p><p className="tp-8">TECHNOLOGY</p></div></div>

				</div>
        </div>)
}
export default Navbar;
