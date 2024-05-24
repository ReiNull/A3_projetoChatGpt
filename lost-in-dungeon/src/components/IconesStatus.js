import * as React from 'react';

export default function CustomImageList(props) {
    return (
        <img
            height={'80vh'}
            alt={'Coração'}
            src={props.src}
            loading="lazy"
        />
        );
}