function Moon()
{
	return (
		<>
			<div className="gap-100 flex flex-1 overflow-hidden p-300 lg:justify-center md:p-500 lg:p-0 lg:py-600">
				<div className="flex flex-1 flex-col gap-300 justify-between lg:max-w-[1110px]" >
					<div className="flex w-full h-fit gap-300 justify-center py-[1px] md:justify-start">
						<p className="tp-8b !text-[16px] md:!text-[20px] !leading-[1] !tracking-[0.15em] opacity-25  ">01</p>
						<p className="tp-6 md:tp-5 !font-['Barlow_Condensed'] !leading-[1] !tracking-[0.15em]  ">PICK YOUR DESTINATION</p>
					</div>
					<div className="flex flex-col gap-400 min-h-0 flex-1 lg:flex-row lg:justify-between">
						<div className="flex flex-col items-center justify-center flex-shrink-[10] h-full min-h-0 lg:flex-shrink-0"><img src="/image-moon.png" className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[480px] lg:h-[480px]  max-w-full max-h-full object-contain"/></div>
						<div className="flex gap-500 flex-shrink-0 min-h-0 md:min-w-[445px] md:w-full md:justify-center lg:flex-1 lg:justify-center lg:items-center">
							<div className="flex flex-1 flex-col max-w-[514px] gap-300 flex-shrink-0 lg:flex-1 lg:items-start">
							<div className="flex flex-none h-fit gap-400 justify-center">
								<div className="h-[32px] w-fit border-b-[3px]"><div className="h-fit w-fit"><p className="tp-8">MOON</p></div></div>
								<div className="h-[32px] w-fit "><div className="h-fit w-fit"><p className="tp-8 text-[#D0D6F9]">MARS</p></div></div>
								<div className="h-[32px] w-fit "><div className="h-fit w-fit"><p className="tp-8 text-[#D0D6F9]">EUROPA</p></div></div>
								<div className="h-[32px] w-fit "><div className="h-fit w-fit"><p className="tp-8 text-[#D0D6F9]">TITAN</p></div></div>
							</div>
							<div className="flex w-full flex-col h-fit gap-200 items-center lg:items-start">
								<p className="tp-2">MOON</p>
								<p className="tp-9 text-center lg:text-start text-[#D0D6F9]">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
							</div>
							<div className="w-full h-[1px] opacity-25 bg-white"/>
							<div className="flex flex-col w-full h-fit gap-300 items-center justify-between md:flex-row">
								<div className="flex flex-col w-full h-fit gap-[12px] items-center lg:items-start">
									<p className="tp-7 text-[#D0D6F9]">AVG. DISTANCE</p>
									<p className="tp-6 !text-[28px]">384,400 KM</p>
								</div>
								<div className="flex flex-col w-full h-fit gap-[12px] items-center">
									<p className="tp-7 text-[#D0D6F9]">EST. TRAVEL TIME</p>
									<p className="tp-6 !text-[28px]">3 DAYS</p>
								</div>

							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Moon
