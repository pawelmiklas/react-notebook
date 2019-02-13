import styled from 'styled-components';
// https://coolors.co/fefeff-d6efff-fed18c-fed99b-fe654f

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: ${props => props.list ? '500px' : '300px'};
    background-image: ${props => props.list ? '#fff' : 'linear-gradient(to right top, #fe654f, #fe5a42, #fd4e35, #fc4127, #fb3216)'};
    color: #fff;
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    padding: ${props => props.list ? '70px 0' : null};
    margin: 0 30px;
    width: 1000px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
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
    font-size: 1.5rem;
    width: 100%;
    height: 45px;
    border: none;
    padding: 0 10px;
    border: 3px solid #FFf;
    letter-spacing: 1px;
    transition:cubic-bezier(0.455, 0.03, 0.515, 0.955) .3s;
    :hover{
        background-color: #fff;
        color: #fd4e35;
    }
`;
export const Title = styled.h1`
    text-align: left;
    width: 100%;
    margin-bottom: 5px;
`;