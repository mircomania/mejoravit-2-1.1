import styles from '../../styles/modules/sectionLp4.module.css';

import ImgSection from '../../assets/images/img-section-4-lp-1.webp';

import { BotonNav } from '../utils/BotonNav';

import useAnimationScroll from '../../hooks/UseAnimationScroll';

export const SectionLp4 = () => {
    const objRef = useAnimationScroll('slide-in');

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">¡Obtén tu fondo ahora!</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.contenido1}>
                    <p className="light-text">
                        Déjanos tus datos y uno de nuestros asesores expertos se pondrá en contacto contigo a la brevedad. Estamos aquí para brindarte
                        atención personalizada y resolver todas tus dudas.
                    </p>

                    <p className="light-text">¡No pierdas la oportunidad de agilizar tu trámite de manera fácil y segura!</p>

                    <BotonNav dataCta="home-btn-3" />
                </div>

                <div className={styles.contenido2}>
                    <img
                        className="animacion-izq"
                        ref={objRef}
                        src={ImgSection}
                        alt="Mujer apuntando con el dedo las características principales de fondo Mejoravit"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};
