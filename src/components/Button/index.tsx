import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Loading } from "../Loading";
import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  type?: string;
  loading?: boolean;
  color?: string;
  light?: boolean;
}

export function Button({
  title,
  type,
  color,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <Container
      enabled={enabled}
      style={{ opacity: enabled ? 1 : 0.5 }}
      color={color ? color : theme.colors.main}
      {...rest}
    >
      {loading ? <Loading type={type} /> : <Title light={light}>{title}</Title>}
    </Container>
  );
}
