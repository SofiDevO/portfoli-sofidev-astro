export const Logo = () => {
	return (
		<div className="flex lg:flex-2 items-center gap-4">
			<a href="/" className=" p-1.5 flex items-center justify-center gap-5 ">
				<span className="sr-only  text-sm ">SofiDev</span>
				<img className=" w-11 " src="../../public/images/profile-pic.png" alt="logo" />
				<span className="font-bold text-transparent text-[25px]  bg-clip-text bg-gradient-to-r from-purple-400 to-[#00E5FF]">
					SofiDev
				</span>
			</a>
		</div>
	);
};
