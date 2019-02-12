import styled from 'styled-components';

export const Item = styled.div`
    width: 100%;
    min-height: 120px;
    height: 100%;
    color: #000;
    border: 2px solid #D6EFFF;
    margin: 10px 0;
    padding: 15px 30px;
`;
export const Row = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.date ? 'gray' : '#000'};
`;
export const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.main};
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
`;

export const Cross = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d3d3d3;
    position: relative;
    margin: 0 10px;
    cursor: pointer;
    color: #fff;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    font-weight: 300;
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
    /* display: flex; */
    color: #fff;
    /* justify-content: center;
    align-items: center; */
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