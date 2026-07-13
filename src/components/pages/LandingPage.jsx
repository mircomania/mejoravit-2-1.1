import { TitleSEO } from '../utils/TitleSEO';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionLp1 } from '../exports/SectionLp1';
import { SectionLp2 } from '../exports/SectionLp2';
import { SectionLp3 } from '../exports/SectionLp3';
import { SectionLp4 } from '../exports/SectionLp4';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main>
            <TitleSEO
                title="Tramite Mejoravit | Precalifica Ahora"
                description="Obtén tu fondo Mejoravit y accede a tus beneficios de manera rápida, sencilla y disponible en todo el país. ¡Pídelo ahora!"
                canonical="https://tramitemejoravit.com.mx/"
            />

            <SectionLp1 />

            <section id="beneficios">
                <SectionLp2 />
            </section>

            <section id="requisitos">
                <SectionLp3 />
            </section>

            <SectionLp4 />
        </main>
    );
};

export default LandingPage;
