import * as React from 'react';

export default function CustomImageList(props) {
  return (
    <img
        width={'100%'}
        height={'270vh'}
        alt={'Jogador'}
        src={props.src}
        loading="lazy"
    />
  );
}