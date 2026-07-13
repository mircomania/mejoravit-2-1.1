import styles from '../../styles/modules/sectionLp3.module.css';

export const requisitos = [
    {
        id: '1',
        text: (
            <>
                Ser <span className={styles.palabraDestacada}>derechohabiente</span> de Infonavit.
            </>
        ),
    },

    {
        id: '2',
        text: (
            <>
                Tener en tu subcuenta de ahorro un mínimo de <span className={styles.palabraDestacada}>$22,222 pesos</span>.
            </>
        ),
    },

    {
        id: '3',
        text: (
            <>
                Realizar la precalificación mejoravit y contar con <span className={styles.palabraDestacada}>1,080 puntos</span>.
            </>
        ),
    },

    {
        id: '4',
        text: (
            <>
                Tener mínimo <span className={styles.palabraDestacada}>8 meses</span> continuos cotizando en Infonavit.
            </>
        ),
    },

    {
        id: '5',
        text: (
            <>
                No exceder a los <span className={styles.palabraDestacada}>65 años</span> de edad.
            </>
        ),
    },

    {
        id: '6',
        text: (
            <>
                No tener otro <span className={styles.palabraDestacada}>fondo vigente</span> con Infonavit.
            </>
        ),
    },
];
