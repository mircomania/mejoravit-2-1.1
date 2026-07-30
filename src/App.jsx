import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar } from './components/common/Navbar';
import { Cargando } from './components/utils/Cargando';
import { ScrollToTop } from './hooks/ScrollTop';
import { WhatsAppIcon } from './components/utils/WhatsAppIcon';
import { Footer } from './components/common/Footer';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));
const BeneficiosPage = lazy(() => import('./components/pages/BeneficiosPage'));
const RequisitosPage = lazy(() => import('./components/pages/RequisitosPage'));
const FormPage = lazy(() => import('./components/pages/FormPage'));
const FaqPage = lazy(() => import('./components/pages/FaqPage'));
const PoliticasPage = lazy(() => import('./components/pages/PoliticasPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage'));

function App() {
    return (
        <>
            <ScrollToTop />

            <Navbar />

            <WhatsAppIcon />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/beneficios" element={<BeneficiosPage />}></Route>
                    <Route path="/requisitos" element={<RequisitosPage />}></Route>
                    <Route path="/precalificar" element={<FormPage />}></Route>
                    <Route path="/faq" element={<FaqPage />}></Route>
                    <Route path="/politica-privacidad" element={<PoliticasPage />}></Route>
                    <Route path="*" element={<ErrorPage />}></Route>
                    <Route path="/" element={<LandingPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </>
    );
}

export default App;
