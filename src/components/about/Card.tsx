import React, { memo, ReactNode } from 'react';
import styled, { CSSObject } from 'styled-components';

const CardContainer = styled.div<{ containerCss?: CSSObject }>`
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 20px 180px;
  ${({ containerCss }) => containerCss}

  ${(props) => props.theme.media.small} {
    padding: 0 10px 90px;
  }
`;

const Subject = styled.h2`
  position: relative;
  width: 1280px;
  margin: 0 auto 0;
  padding-top: 40px;
  text-transform: uppercase;
  font-family: Inter, Helvetica Neue, Arial, sans-serif;
  font-size: 120px;
  letter-spacing: -1.9px;
  z-index: 100;
  line-height: 70px;

  ${(props) => props.theme.media.custom(1279, 769)} {
    padding-top: 20px;
    font-size: 80px;
    line-height: 47px;
  }

  ${(props) => props.theme.media.small} {
    padding-top: 20px;
    font-size: 55px;
    line-height: 32px;
  }
`;

const ShadowBox = styled.div<{
  flexDirection: 'row' | 'column';
  shadowSize?: 'xl' | 'lg' | 'md' | 'sm';
  color?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  box-shadow: ${({ theme, shadowSize }) => theme.shadows[shadowSize || 'lg']};
  border-radius: 15px;
  background-color: ${({ color }) => color};

  ${(props) => props.theme.media.small} {
    display: block;
    box-shadow: none;
  }
`;

type CardTemplateProps = {
  children: ReactNode;
  title?: string;
  disableShadow?: boolean;
  flexDirection?: 'row' | 'column';
  shadowSize?: 'xl' | 'lg' | 'md' | 'sm';
  color?: string;
  containerCss?: CSSObject;
};

function Card({
  children,
  title,
  disableShadow = false,
  flexDirection = 'row',
  shadowSize,
  color,
  containerCss,
}: CardTemplateProps) {
  return (
    <CardContainer containerCss={containerCss}>
      {!!title && <Subject>{title}</Subject>}
      {disableShadow ? (
        children
      ) : (
        <ShadowBox flexDirection={flexDirection} shadowSize={shadowSize} color={color}>
          {children}
        </ShadowBox>
      )}
    </CardContainer>
  );
}
export default memo(Card);
