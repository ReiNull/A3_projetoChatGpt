import * as React from 'react';
import lobisomem from '../img/lobisomen.png';

export default function CustomImageList() {
  return (
        <img
            width={'100%'}
            height={'270vh'}
            alt={'Jogador'}
            src={lobisomem}
            loading="lazy"
        />
        );
}