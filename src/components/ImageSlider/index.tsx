import React from 'react';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imageUrl: string[];
}

export function ImageSlider({imageUrl}: Props) {
  return(
    <Container>
      <ImageIndexes>
        <ImageIndex active={false}/>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexes>

      <CarImageWrapper>
        {imageUrl.length && imageUrl.map((image, index) => (
          <CarImage
            key={index}
            source={{ uri: image }}
            resizeMode="contain"
          />
        ))}
      </CarImageWrapper>
    </Container>
  )
}
