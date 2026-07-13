import styles from '../../styles/modules/sectionLp2.module.css';

import ImgSection from '../../assets/images/img-section-2-lp-1.webp';

import { BotonNav } from '../utils/BotonNav';

import { burbujas } from '../utils/burbujas';

import useAnimationScroll from '../../hooks/UseAnimationScroll';

export const SectionLp2 = () => {
    const objRef = useAnimationScroll('slide-in');

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">Beneficios del fondo Mejoravit</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.contenido1}>
                    {burbujas.map(({ id, text }) => (
                        <div ref={objRef} key={id} className={`${styles.burbujasContainer} animacion-der`}>
                            <div className={`${styles.burbujaDialogo} ${styles.burbujaDerecha}`}>
                                <p className="light-text">{text}</p>
                            </div>
                        </div>
                    ))}
                    {/* 

                    <div className={styles.burbujasContainer}>
                        <div className={`${styles.burbujaDialogo} ${styles.burbujaDerecha}`}>
                            <p className="light-text">Plazos flexibles desde mínimo 12 a máximo 48 meses para realizar el pago.</p>
                        </div>

                        <div className={`${styles.burbujaDialogo} ${styles.burbujaDerecha}`}>
                            <p className="light-text">Solicítalo con solo 4 bimestres cotizando en el IMSS con el mismo empleador.</p>
                        </div>

                        <div className={`${styles.burbujaDialogo} ${styles.burbujaDerecha}`}>
                            <p className="light-text">Tasa de interés del 11% anual, más baja que otros préstamos similares.</p>
                        </div>
                    </div> */}

                    <BotonNav dataCta="home-btn-2" />
                </div>

                <img
                    className="animacion-izq"
                    ref={objRef}
                    src={ImgSection}
                    alt="Mujer apuntando con el dedo las características principales de fondo Mejoravit"
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <hr />
        </section>
    );
};
