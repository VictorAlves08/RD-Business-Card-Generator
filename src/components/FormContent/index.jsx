"use client"
import React, { useState } from "react";

import Text from "@/components/Text";
import Input from "@/components/Input";
import Button from "@/components/Button";

import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";

import { FaLongArrowAltRight } from "react-icons/fa";
import { validateName, validateEmail, validatePhone } from '../../utils/checkInputs.js';

import styled from 'styled-components';

export default function FormContent({
    dataUser,
    handleDataUser,
    formSteps,
    handleFormStep,
}) {
    const [errors, setErrors] = useState({});

    const handleValidateInputs = () => {
        let errorMsg = {};

        if (!validateName(dataUser.name)) {
            errorMsg.name = 'O nome deve ter pelo menos 2 caracteres.';
        }

        if (!validateEmail(dataUser.email)) {
            errorMsg.email = 'Email inválido.';
        }

        if (!validatePhone(dataUser.phone)) {
            errorMsg.phone = 'Telefone inválido. Formato esperado: (00) 0 0000-0000.';
        }

        setErrors(errorMsg);

        return Object.keys(errorMsg).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidateInputs()) {
            handleFormStep(formSteps.CARD);
            setErrors({});
        }
    };

    return (
        <Container>
            <Input
                name="name"
                required
                onChange={handleDataUser}
                value={dataUser.name}
                type="text"
                labelText={"Nome*"}
                placeholder="nome"
                error={errors.name}
            />


            <div className="input-group">
                <Input
                    name="phone"
                    required
                    onChange={handleDataUser}
                    value={dataUser.phone}
                    type="tel"
                    labelText={"Telefone*"}
                    placeholder="(00) 0 0000-0000"
                    error={errors.phone}
                />

                <Input
                    name="email"
                    required
                    onChange={handleDataUser}
                    value={dataUser.email}
                    type="email"
                    labelText={"E-mail*"}
                    placeholder="nome@email.com"
                    error={errors.email}
                />
            </div>

            <InfoContainer>
                <ul>
                    <li>
                        Ao preencher o formulário, concordo <strong>*</strong> em receber comunicações de acordo com meus interesses.
                    </li>
                    <li>
                        Ao informar meus dados, eu concordo com a &nbsp;
                        <Text
                            type="link"
                            text="Política de Privacidade"
                            fontSize={typography.size.xs}
                            fontWeight={typography.weight.regular}
                            color={colors.grayLight}
                            style={{ textDecoration: "underline" }}
                        />
                    </li>
                </ul>
                <Text
                    text="* Você pode alterar suas permissões de comunicação a qualquer tempo."
                    fontSize={typography.size.xs}
                    fontWeight={typography.weight.regular}
                    color={colors.grayLight}
                    style={{ marginTop: "1rem" }}
                />
            </InfoContainer>

            <Button
                type="submit"
                onClick={handleSubmit}
            >
                <ButtonContent>
                    GERAR CARTÃO GRÁTIS
                    <FaLongArrowAltRight size={typography.size.lg} />
                </ButtonContent>
            </Button>
        </Container>
    )
}

export const Container = styled.form`
    max-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    .input-group{
        display: flex;
        width: 100%;
        gap: 1.5rem;
    }
`

const InfoContainer = styled.section`
    ul, span{
        color: ${colors.grayLight};
        font-size: ${typography.size.xs};
        font-weight: ${typography.weight.regular};
    }
`

const ButtonContent = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;