"use client"
import React from "react";

import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";

import Text from "@/components/Text";

import styled from 'styled-components';

export default function Input({
    labelText,
    placeholder,
    type = "text",
    value,
    onChange,
    error,
    ...props
}) {
    return (
        <Container>
            <LabelStyled>{labelText}</LabelStyled>
            <InputStyled
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                {...props}
            />
            {error && (
                <Text
                    text={error}
                    fontSize={typography.size.xs}
                    fontWeight={typography.weight.regular}
                    color={colors.yellowLight}
                />
            )}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    width: 100%;
`

const LabelStyled = styled.label`
    color: ${colors.white};
    font-size: ${typography.size.sm};
    font-weight: ${typography.weight.bold};
`

const InputStyled = styled.input`
    width: 100%;
    height: 2.5rem;
    border: 1px solid ${colors.deepPurple};
    padding: 0.5rem;
    font-size: ${typography.size.sm};
    font-weight: ${typography.weight.regular};
    color: ${colors.black};

    &:focus {
        outline: none;
        border: 1px solid ${colors.deepPurple};
    }
`
