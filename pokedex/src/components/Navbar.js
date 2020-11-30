import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <NavContainer>
            <StyledList>
                <li>
                    <Link className="navbar-link" to="/">
                        Início
                    </Link>
                </li>
                <li>
                    <Link className="navbar-link" to="/pokedex">
                        Pokedex
                    </Link>
                </li>
            </StyledList>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    display: flex;
    background-image: linear-gradient( #0A141F , #19324D);
    height: 10vh;
    justify-content: flex-end;
    align-items: center;
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    margin: 2rem;
    color: white;

    .navbar-link {
        color: white;
        text-decoration: none;
        margin: 1.2rem;
        font-size: 1.2rem;
        &:hover{
            text-decoration: underline;
        }
    }
`



