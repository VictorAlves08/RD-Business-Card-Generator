"use client"
import React, { useState } from "react";
import Image from "next/image.js";

import colors from "../styles/colors.js";
import typography from "../styles/typography.js";

import Text from "@/components/Text/index.jsx";
import FormContent from "@/components/FormContent/index.jsx";

import Landing from '../../public/landing.svg'
import { device, size } from '../styles/breakpoints';

import styled from 'styled-components';
import { formSteps } from "@/utils/constants.js";
import { formatPhone } from '../utils/checkInputs.js';
import CardContent from "@/components/CardContent/index.jsx";

const initialDataUser = {
    name: "",
    email: "",
    phone: "",
}

export default function Home() {
    const [step, setStep] = useState(formSteps.FORM);
    const [dataUser, setDataUser] = useState(initialDataUser);

    const handleDataUser = (e) => {
        const { name, value } = e.target;

        let formattedValue = value;
        if (name === 'phone') {
            formattedValue = formatPhone(value);
        }

        setDataUser({
            ...dataUser,
            [name]: formattedValue,
        });
    };

    const handleFormStep = (step) => {
        setStep(step);
    };

    const handleBackToForm = () => {
        setDataUser(initialDataUser)
        setStep(formSteps.FORM)
    }

    return (
        <Container colors={colors}>
            <HeaderSection colors={colors} typography={typography}  >
                {step === formSteps.FORM && (
                    <>
                        <h1>Gerador de Cartão de Visita</h1>
                        <Text
                            fontSize={typography.size.lg}
                            fontWeight={typography.weight.light}
                            color={colors.white}
                            style={{ textAlign: "center", lineheight: "1.5rem" }}
                            text="Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais."
                        />
                    </>
                )}
            </HeaderSection>

            <ContentSection colors={colors}>
                <Image className="content-image" priority src={Landing} alt="Imagem de um homem pintor, trabalhando no cartão de visita" />

                {step === formSteps.FORM && (
                    <FormContent
                        dataUser={dataUser}
                        handleDataUser={handleDataUser}
                        formSteps={formSteps}
                        handleFormStep={handleFormStep}
                    />
                )}

                {step === formSteps.CARD && (
                    <CardContent
                        dataUser={dataUser}
                        handleBackToForm={handleBackToForm}
                    />
                )}


            </ContentSection>
        </Container>
    );
};

const Container = styled.main`
    width: 100%;
    height: 100%;
    max-width: ${size.laptopL};

    background: ${({ colors }) => `linear-gradient(90deg, ${colors.deepPurple}, ${colors.lightPurple})`};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const HeaderSection = styled.section`
    max-width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    padding-top: 0.5rem;

    h1{
        color: ${({ colors }) => colors.white};
        font-size: ${({ typography }) => typography.size.xxl};
        font-weight: ${({ typography }) => typography.weight.bold};
        text-align: center;
    }

    @media ${device.mobileL} {
        max-width: 100%;
        h1{
            font-size: ${({ typography }) => typography.size.xl};
        }
    }
`

const ContentSection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;

    .content-image{
        width: 400px;
        @media ${device.mobileL} {
            width: 300px;
        } 
    }
`