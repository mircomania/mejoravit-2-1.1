import { TitleSEO } from '../utils/TitleSEO';

import { SectionLp3 } from '../exports/SectionLp3';
import { SectionLp4 } from '../exports/SectionLp4';

const RequisitosPage = () => {
    return (
        <main>
            <TitleSEO
                title="Tramite Mejoravit | Precalifica Ahora"
                description="Obtén tu fondo Mejoravit y accede a tus beneficios de manera rápida, sencilla y disponible en todo el país. ¡Pídelo ahora!"
                canonical="https://tramitemejoravit.com.mx/requisitos"
            />

            <SectionLp3 />

            <SectionLp4 />
        </main>
    );
};

export default RequisitosPage;
