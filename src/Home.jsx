function Home()
{
	return (
		<>
			<div className="gap-100 flex flex-1 overflow-auto p-300 lg:justify-center md:py-1600 lg:px-0">
				<div className="flex flex-col flex-1 gap-600 md:items-center lg:items-baseline lg:max-w-[1110px] lg:flex-row ">
					<div className="flex-1 flex flex-col justify-between lg:h-fit lg:flex-row lg:mt-auto ">
						<div className="max-w-[540px] flex flex-col w-fit items-center gap-300 space-y-[1px] lg:flex-1 lg:items-start">
							<p className='tp-6 md:tp-5 !leading-[1] !tracking-[0.15em] md:!tracking-[4px] !font-["Barlow_Condensed"] text-[#D0D6F9] '>
								SO, YOU WANT TO TRAVEL TO
							</p>
							<p className="tp-1 !leading-[1]">SPACE</p>
							<p className="tp-9 text-center lg:text-left text-[#D0D6F9]">
								{" "}
								Let’s face it; if you want to go to space, you might as well
								genuinely go to outer space and not hover kind of on the edge of
								it. Well sit back, and relax because we’ll give you a truly out
								of this world experience!
							</p>
						</div>
						<div className="flex-1 gap-300 max-w-[540px] flex justify-center items-center md:items-end lg:justify-end lg:gap-300">
							<div className="w-[144px] md:w-[272px] h-[144px] md:h-[272px] bg-white rounded-full flex items-center justify-center">
								<span className=" text-black tp-4 !tracking-[0px] !leading-[1]">
									EXPLORE
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Home
