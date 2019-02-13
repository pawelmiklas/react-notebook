import React from 'react';
import {
    Container,
    Wrapper,
} from '../header/Style';
import ListItem from './listItem/ListItem';


const List = (props) => {

    const data = props.data;
    const createItem = data.map(({ id, text, date, color, isDone }) => {
        return (
            <ListItem
                key={id}
                id={id}
                text={text}
                date={date}
                color={color}
                remove={props.remove}
                done={props.done}
                isDone={isDone}
            />
        )
    });
    return (
        <Container list="true">
            <Wrapper list="true">
                {createItem}
            </Wrapper>
        </Container>
    );
}

export default List;