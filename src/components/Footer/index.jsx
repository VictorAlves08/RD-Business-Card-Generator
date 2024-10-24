'use client';
import React from "react";

import Text from "@/components/Text";

import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";

import styled from 'styled-components';

export default function Footer() {
    return (
        <Container>
            <Text
                type="link"
                text="Política de Privacidade"
                fontSize={typography.size.sm}
                fontWeight={typography.weight.bold}
                color={colors.grayDark}
                style={{ textDecoration: "underline" }}
            />
            <Text
                text="© 2024 Resultados Digitais"
                fontSize={typography.size.sm}
                fontWeight={typography.weight.bold}
                color={colors.gray}
            />
        </Container>
    )
}

const Container = styled.footer`
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;
`;
