import styled from 'styled-components';

export const Item = styled.div`
    width: 49%;
    min-height: 120px;
    height: 100%;
    color: #000;
    border: 2px solid #D6EFFF;
    margin: 10px 0;
    padding: 15px 30px;
    @media (max-width: 770px) {
        width: 100%;
    }
`;
export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.date ? 'gray' : '#000'};
    color: ${props => props.isDone ? 'gray' : null};
    text-decoration: ${props => props.isDone ? 'line-through' : null};
    h4{
        text-align: left;
        font-weight: 400;
        width: 100%;
    }
    @media (max-width: 410px) {
        flex-direction: column;
    }
`;
export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme};
    position: relative;
    margin: 0 20px;
    ::before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: #fff;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

export const RowPair = styled.div`
    display: flex;
    justify-content: ${props => props.right ? "flex-end" : "start"};
    align-items: center;
    width: 50%;
    @media (max-width: 410px) {
        width: 100%;
        justify-content: flex-start;
    }
`;

export const Cross = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d3d3d3;
    position: relative;
    margin: 0 4px;
    cursor: pointer;
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    line-height: 21px;
    transition: cubic-bezier(0.645, 0.045, 0.355, 1) .2s;
    :hover{
        background: #939393;
    }
    `;

export const Delete = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d3d3d3;
    color: #fff;
    line-height: 23px;
    text-align: center;
    font-size: .7rem;
    margin: 0 10px;
    font-weight: bold;
    cursor: pointer;
    transition: cubic-bezier(0.645, 0.045, 0.355, 1) .2s;
    :hover{
        background: #fb3216;
    }
`;