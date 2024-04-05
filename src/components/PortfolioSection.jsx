import { PortfolioData, skillIcons } from "../data/PortfolioData";

export const PortfolioSection = () => {
	return (
		<>
				<section id="portfolio" class="flex flex-col lg:flex-row gap-20 flex-wrap w-full justify-center min-h-[100dvh]">

			{PortfolioData.map((data) => {
				return (
					<div className="group/card overflow-hidden flex-column  min-w-[17rem] w-[100%] max-w-[30rem] gap-4 bg-[#8081811b] rounded-xl h-auto max-h-[30dvh] md:max-h-[45dvh] border-sky-950 border-[1px]" key={data.id} >
						<div className="group/faceA  portafolio__cara faceA card__content  ">
							<div className="max-h-[31dvh]  w-full self-center">
								<img
									className={`portafolio__img w-full object-cover `}
									src={data.imgSrc}
									alt={data.title}
								/>
							</div>
							<div className="container__info  ">
								<h3 className="portafolio__subtitulo titulo__dark text-center mb-6">{data.title}</h3>
								<div className="skills__used flex flex-row gap-6 justify-center">
									{data.skill.map((skill, index) => (
										<div className="tecnology " key={index}>
											<iconify-icon icon={skillIcons[skill] || ""} width="22" />
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="group/faceB md:group-hover/card:translate-y-[-334px]  group-hover/card:translate-y-[-297px] group-hover/card:visible invisible translate-y-[80px] flex flex-col h-[45dvh] justify-center items-center backdrop-blur-lg bg-[#2d2d2da0]  transition ease-in-out  duration-800   ">
							<p className="portafolio__descripcion titulo__dark">{data.desc}</p>
							<div className="portafolio__botobnes">
								<a
									className="portafolio__btn boton titulo__dark"
									href={data.demoURL}
									target="_blank"
									rel="nofollow noreferrer noopener"
								>
									<span data-section="portafolio" data-value="demo">
										View Demo
									</span>
								</a>
								<a
									className="portafolio__btn boton titulo__dark"
									href={data.repoURL}
									target="_blank"
									rel="nofollow noreferrer noopener"
								>
									<span data-section="portafolio" data-value="repo">
										View Repo
									</span>
								</a>
							</div>
						</div>
					</div>
				);
			})}
			</section>
		</>
	);
};
