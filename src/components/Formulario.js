import React from 'react';
import { useSelect } from '../hooks/useSelect';
import styles from './Formulario.module.css';

import PropTypes from 'prop-types';

export const Formulario = ({ setCaragoria }) => {

    const opciones = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnologia' }
    ]

    const [ categoria, SelectNoticias ] = useSelect('general', opciones);

    const buscarNoticias = e => {
        e.preventDefault();
        setCaragoria(categoria);
    };

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
            
                <form
                    onSubmit={buscarNoticias}
                >
                    <h4 className={styles.heading}>Encuentra Noticias por Categoria</h4>

                    <SelectNoticias />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>

            </div>
        </div>
    )
};

Formulario.propTypes = {
    setCaragoria: PropTypes.func.isRequired
};
