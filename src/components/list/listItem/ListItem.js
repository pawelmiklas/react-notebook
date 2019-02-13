import React from 'react';
import {
    Item,
    Row,
    Circle,
    RowPair,
    Cross,
    Delete
} from './Style';



/*
Footer.
*/

const ListItem = (props) => {
    let color = props.color;
    if (props.isDone) {
        color = 'gray';
    }
    return (
        <Item>
            <Row date>
                <RowPair>
                    <p>{props.date}</p>
                    <Circle theme={color} />
                </RowPair>
                <RowPair right>
                    <Cross onClick={() => props.done(props.id)}><span role="img" aria-label="cross">&minus;</span></Cross>
                    <Delete onClick={() => props.remove(props.id)}><span role="img" aria-label="delete">&#10060;</span></Delete>
                </RowPair>
            </Row>
            <Row isDone={props.isDone}>
                <h4>{props.text}</h4>
            </Row>
        </Item>
    );
}

export default ListItem;