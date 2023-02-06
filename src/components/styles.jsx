import styled, {css} from "styled-components";

export const CommonButton = styled.button`
    background-color: red;
    color: black;
    transition: 1s;
    font-size: 20px;
`

export const CommonInput = styled.input`
    color: red;
    background-color: green;
    text-align: center;
    
`

export const CommonPropInput = styled.input`
    background-color: ${props => props.bkcolor ? props.bkcolor : "black"};
    color: ${props => props.color ? props.color : "red"};
    padding: ${props => props.padding ? props.padding : '10px'};
    cursor: pointer;
`
export const CommonPropButton = styled.button`
    background-color: ${props => props.bkcolor ? props.bkcolor : "black"};
    color: ${props => props.color ? props.color : "red"};
    padding: ${props => props.padding ? props.padding : '10px'};
    margin: ${props => props.margin ? props.margin : "20px"};
${props => props.primary 
? css`
color: red;
font-size: 20px;
background-color: yellowgreen;
cursor: pointer;
font-weight: 900;
` 
: css`
color: green;
font-size: 30px;
background-color: coral;
`}
`