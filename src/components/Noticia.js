import React from 'react';

import PropTypes from 'prop-types';
import styles from './Noticia.module.css';

export const Noticia = ({ noticia }) => {

    const { urlToImage, url, title, description, source } = noticia;

    return (
        <div className="col s12">
            <div className="card horizontal">
                <div className="card-image">
                    <img 
                        className={styles.imagen} 
                        src={ (urlToImage !== null) ? urlToImage : "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.jpg" } 
                        alt={ title }
                    />
                    <span className="card-title">{ source.name }</span>
                </div>

                <div className="card-stacked">
                    <div className="card-content">
                        <h5>{ title }</h5>
                        <p>{ description }</p>
                    </div>

                    <div className="card-action">
                        <a 
                            href={url}
                            target="_blank"
                            className="waves-effect waves-light btn"
                        >
                            Ver noticia
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
};
