"use client"
import React from "react";

import colors from "../../styles/colors.js";
import typography from "../../styles/typography.js";

import styled from 'styled-components';

export default function Button({
    children,
    onClick = () => { },
    disabled = false,
    ...props
}) {
    return (
        !disabled ? (
            <ButtonStyled
                onClick={onClick}
                {...props}
            >
                {children}
            </ButtonStyled>
        )
            :
            (
                <ButtonDisabledStyled
                    disabled
                    {...props}
                >
                    {children}
                </ButtonDisabledStyled>
            )
    )
};

const ButtonStyled = styled.button`
    cursor: pointer;
    width: 100%;
    height: 2.5rem;
    border: 2px solid ${colors.black};
    background: ${colors.secondaryDark};
    color: ${colors.black};
    font-size: ${typography.size.md};
    font-weight: ${typography.weight.bold};
    box-shadow: 1px 10px ${colors.black};
`

const ButtonDisabledStyled = styled.button`
    cursor: not-allowed;
    width: 100%;
    height: 2.5rem;
    border: 2px solid ${colors.grayLight};
    background: ${colors.grayLight};
    color: ${colors.gray};
    font-size: ${typography.size.md};
    font-weight: ${typography.weight.bold};
    box-shadow: 2px 6px ${colors.gray};
`
