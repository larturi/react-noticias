import React, { useState } from 'react';

export const useSelect = ( initialState, options ) => {

    const [ state, setState ] = useState(initialState);
    
    const SelectNoticias = () => (
        <select
            className="browser-default"
            value={state}
            onChange={ e => setState(e.target.value) }
        >
            {
                options.map( option => (
                    <option 
                       key={option.value} 
                       value={option.value}
                    >
                        {option.label}
                    </option>
                ))
            }

        </select>
    );

    return [ state, SelectNoticias ];

};
