import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Container,
  Detail,
} from './styles';

export interface DataSheetProps {
  svg: React.FC<SvgProps>;
  detail: string;
}

export function DataSheet({
  svg: Svg,
  detail,
}: DataSheetProps) {
  return(
    <Container>
      <Svg width={32} height={32} />
      <Detail>{detail}</Detail>
    </Container>
  )
}
