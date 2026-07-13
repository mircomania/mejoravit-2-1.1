import { TitleSEO } from '../utils/TitleSEO';

import { SectionPp1 } from '../exports/SectionPp1';

const PoliticasPage = () => {
    return (
        <main className="fade-in">
            <TitleSEO
                title="Tramite Mejoravit | Política de Privacidad"
                description="Conoce cómo protegemos y utilizamos tu información personal en nuestra plataforma de fondo Mejoravit."
                canonical="https://tramitemejoravit.com.mx/politica-privacidad"
            />

            <SectionPp1 />
        </main>
    );
};

export default PoliticasPage;
