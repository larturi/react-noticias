
import React from 'react';
import { Noticia } from './Noticia';

import PropTypes from 'prop-types';

export const Noticias = ({ noticias }) => {
    return (
        <div className="row">
            {
                noticias.map( noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))
            }
        </div>
    )
};

Noticias.propTypes = {
    noticias: PropTypes.array.isRequired
};