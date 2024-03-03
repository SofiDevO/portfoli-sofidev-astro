import { PortfolioData, skillIcons } from "../data/PortfolioData";

export const PortfolioSection = () => {
	return (
		<>
			{PortfolioData.map((data) => {
				return (
					<div className="portafolio__tarjeta" key={data.id}>
						<div className="portafolio__cara faceA card__content caja__dark__portafolio ">
							<div className="img__container">
								<img
									className={`portafolio__img`}
									src={data.imgSrc}
									alt={data.title}
								/>
							</div>
							<div className="container__info">
								<h3 className="portafolio__subtitulo titulo__dark">{data.titulo}</h3>
								<div className="skills__used">
									{data.skill.map((skill, index) => (
										<div className="tecnology" key={index}>
											<iconify-icon icon={skillIcons[skill] || ""} width="22" />
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="portafolio__cara faceB  caja__dark__portafolio">
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
		</>
	);
};
