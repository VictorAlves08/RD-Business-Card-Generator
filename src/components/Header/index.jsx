import React from "react";

import Image from 'next/image'
import Logo from '../../../public/logo_with_name.svg'

import Text from "@/components/Text";

import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";
import { Container } from "./styles";

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
