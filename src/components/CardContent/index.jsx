"use client"
import React from "react";
import styled from 'styled-components';
import Image from "next/image.js";

import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowRoundDown } from "react-icons/io";

import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";

import Button from "@/components/Button";
import Text from "@/components/Text";

import { signUpLink } from "@/utils/constants.js";

import LogoNoName from '../../../public/logo_no_name.svg';

export default function CardContent({
    dataUser,
    handleBackToForm,
}) {
    return (
        <Container>
            <SimpleButton
                type="button"
                onClick={handleBackToForm}
            >
                <ButtonContent>
                    <IoIosArrowBack size={typography.size.sm} />
                    Gerar outro cartão
                </ButtonContent>
            </SimpleButton>
            <Card>
                <Image
                    src={LogoNoName}
                    alt="Logo Resultados Digitais"
                    width={80}
                />
                <hr color={colors.grayLight} width="5" size="100" />
                <div className="info-container">
                    <Text
                        text={dataUser.name}
                        color={colors.black}
                        size={typography.size.sm}
                        weight={typography.weight.bold}
                    />
                    <Text
                        text={dataUser.phone}
                        color={colors.black}
                        size={typography.size.sm}
                        weight={typography.weight.bold}
                    />
                    <Text
                        text={dataUser.email}
                        color={colors.black}
                        size={typography.size.sm}
                        weight={typography.weight.bold}
                    />
                </div>
            </Card>
            <Button
                type="button"
                disabled={true}
                style={{ marginBottom: "2rem" }}
            >
                <ButtonGeneralContent>
                    <IoIosArrowRoundDown size={typography.size.lg} />
                    BAIXAR CARTÃO
                </ButtonGeneralContent>
            </Button>
            <ButtonContent>
                <Text
                    type="link"
                    text="fazer um teste grátis do RD Station Marketing"
                    href={signUpLink}
                    color={colors.white}
                    size={typography.size.sm}
                    weight={typography.weight.bold}
                    style={{ textTransform: "uppercase" }}
                />
                <FaLongArrowAltRight color={colors.white} size={typography.size.sm} />
            </ButtonContent>

        </Container>
    )
}

export const Container = styled.section`
    max-width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
    gap: 0.8rem;
    padding: 1rem;
`

const Card = styled.div`
    width: 100%;
    display: flex;
    
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    
    gap: 0.5rem;    
    padding: 1rem;
    
    border-radius: 1.5rem;
    background-color: ${colors.white};

    .info-container{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap: 0.5rem;
    }
`

const SimpleButton = styled.button`
    width: 100%;
    border: none;
    font-size: ${typography.size.sm};
    font-weight: ${typography.weight.regular};
    color: ${colors.white};
    cursor: pointer;
    background-color: transparent;
`;

const ButtonContent = styled.span`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
`;

const ButtonGeneralContent = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

