import { TitleSEO } from '../utils/TitleSEO';

import { SectionFp1 } from '../exports/SectionFp1';

const FormPage = () => {
    return (
        <main className="fade-in">
            <TitleSEO
                title="Tramite Mejoravit | Precalificar"
                description="Precalifica tu fondo Mejoravit en minutos y mejora tu vivienda. Trámite rápido y sencillo. ¡Empieza ahora!"
                canonical="https://tramitemejoravit.com.mx/precalificar"
            />

            <SectionFp1 />
        </main>
    );
};

export default FormPage;
