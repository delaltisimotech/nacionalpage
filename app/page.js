import Image from "next/image"
import InstitutoDasImg from "../images/institutodas.png"
import PastorHernanImg from "../images/pastorhernan.jpg"
import TrendyImg from "../images/trendy.png"
import HacImg from "../images/hac.png"
import RadioAppImg from "../images/radioapp.png"
import AltisimoTechImg from "../images/logo-altisimo-minimalista.png"
import s from "./page.module.scss"

function HomePage(){
    return (
        <div className={s.inProgress_container}>
            <div className={s.text_logos_container}>
                <div className={s.text_container}>
                <p className={s.describe_text}>
                    Aqui se <span className={s.callout_text}></span> desarrolla
                    <span className={s.callout_text}></span>
                </p>
                <p className={s.describe_text}>La página Oficial del Ministerio</p>
                <p className={s.describe_text}>
                    Internacional <span className={s.callout_text}>Hijos del Altisimo</span>
                </p>
                </div>
                <div className={s.links_container}>
                <div className={s.logos_container}>
                    <a href="https://sites.google.com/view/institutodas/inicio" target="_blank">
                    <Image
                        src={InstitutoDasImg}
                        alt="Instituto DAS"
                        className={s.logo_branch}
                    />
                    </a>
                    <a
                    href="https://www.facebook.com/PastorHernanAlbertoCortes?mibextid=ZbWKwL"
                    target="_blank"
                    >
                    <Image
                        src={PastorHernanImg}
                        alt="Hernan Alberto Cortes"
                        className={s.logo_branch}
                    />
                    </a>
                    <a href="https://t.me/trendyhac" target="_blank">
                    <Image
                        src={TrendyImg}
                        alt="Trendy"
                        className={s.logo_branch}
                    />
                    </a>
                    <a href="https://www.facebook.com/fundacionhac" target="_blank">
                    <Image
                        src={HacImg}
                        alt="Fundacion HAC"
                        className={s.logo_branch}
                    />
                    </a>
                    <a
                    href="https://play.google.com/store/apps/details?id=cadena.delaltisimo"
                    target="_blank"
                    >
                    <Image
                        src={RadioAppImg}
                        alt="Radio Online"
                        className={s.logo_branch}
                    />
                    </a>
                </div>
                <p className={s.visit_pages}>
                    Visita nuestras paginas web disponibles actualmente
                </p>
                </div>
            </div>
            <div className={s.poweredBy_container}>
                <Image
                src={AltisimoTechImg}
                alt="Logo AltisimoTech"
                className={s.tech_logo}
                />
                <article className="text_powered">
                    <p className="poweredBy">PoweredBy</p>
                    <p className="altisimoTech">AltisimoTech</p>
                </article>
            </div>
        </div>
    )
}

export default HomePage