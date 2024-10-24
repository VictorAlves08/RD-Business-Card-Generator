"use client"
import React from "react";

import { privacyPolicyLink } from "@/utils/constants";
import styled from 'styled-components';

export default function Text({
    text,
    fontSize,
    fontWeight,
    color,
    type = null,
    href = privacyPolicyLink,
    ...props
}) {
    return (
        type === "link" ?
            <LinkStyled
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label='Acesso a Política de privacidade em uma nova aba.'
                fontSize={fontSize}
                fontWeight={fontWeight}
                color={color}
                {...props}
            >
                {text}
            </LinkStyled>
            :
            <TextStyled
                fontSize={fontSize}
                fontWeight={fontWeight}
                color={color}
                {...props}
            >
                {text}
            </TextStyled>
    )
}

const TextStyled = styled.p`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
`;

const LinkStyled = styled.a`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
    color: ${(props) => props.color};
    text-decoration: solid;
`;

