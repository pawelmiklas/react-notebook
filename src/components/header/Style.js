import styled from 'styled-components';

// https://coolors.co/fefeff-d6efff-fed18c-fed99b-fe654f

export const Container = styled.div`
    width: 100%;
    height: 300px;
    background-color: #FE654F;
    color: #fff;
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const Form = styled.form`
    width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Label = styled.label`
    width: ${props => (props.small ? '300px' : '100%')};
    display: flex;
    justify-content: center;
    align-items: center;
    input[type="text"], input[type="date"]{
        width: 100%;
        height: 45px;
        border: none;
        padding: 0 10px;
        font-size: 1rem;
    }
    select {
        margin: 0 20px;
        width: 100%;
        height: 45px;
        border: none;
        padding: 0 10px;
        font-size: 1rem;
    }
`;

export const FormElement = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    flex-direction: row;
`;

export const Submit = styled.input`
    width: 100px;
    cursor: pointer;
    background-color: transparent;
    color: #fff;
    /* text-transform: uppercase; */
    font-size: 1.5rem;
    width: 100%;
    height: 45px;
    border: none;
    padding: 0 10px;
    border: 3px solid #FFf;
    letter-spacing: 1px;
`;
export const Title = styled.h1`
    text-align: left;
    width: 100%;
    margin-bottom: 5px;
`;