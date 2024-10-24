'use client';
import React from "react";

import Image from 'next/image'
import Logo from '../../../public/logo_with_name.svg'

import Text from "@/components/Text";

import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";

import { device, size } from "@/styles/breakpoints";
import styled from 'styled-components';

export default function Header() {
    return (
        <Container>
            <Image
                src={Logo}
                alt="Logo Resultados Digitais"
                width={150}
            />
            <Text
                text="Gerador de Cartão de Visita"
                fontSize={typography.size.lg}
                fontWeight={typography.weight.bold}
                color={colors.black}
            />
        </Container>
    )
}

const Container = styled.header`
    width: 90%;
    max-width: ${size.laptopL};
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    padding: 1.25rem 2rem;

    @media ${device.mobileL} {
        justify-content: center;
    }
`;
