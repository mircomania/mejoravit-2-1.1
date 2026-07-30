import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp2 } from '../exports/SectionLp2';
import { SectionLp4 } from '../exports/SectionLp4';

const BeneficiosPage = () => {
    return (
        <main>
            <TitleSEO
                title="Tramite Mejoravit | Beneficios"
                description="Obtén tu fondo Mejoravit y accede a tus beneficios de manera rápida, sencilla y disponible en todo el país. ¡Pídelo ahora!"
                canonical="https://tramitemejoravit.com.mx/beneficios/"
            />

            <SectionLp2 />

            <SectionLp4 />
        </main>
    );
};

export default BeneficiosPage;
