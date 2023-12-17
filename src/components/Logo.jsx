import profile from "../../public/images/profile.png";

export const Logo = () => {
	return (
		<div className="flex lg:flex-2 items-center gap-4">
			<a href="/" className=" p-1.5 flex items-center justify-center gap-5 ">
				<span className="sr-only  text-sm ">SofiDev</span>
				<img className=" w-11 " src={profile} alt="logo" />
				<span className="font-bold text-transparent text-xl  bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
					SofiDev
				</span>
			</a>
		</div>
	);
};
