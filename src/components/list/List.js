import React from 'react';
import {
    Container,
    Wrapper,
} from '../header/Style';
import ListItem from './listItem/ListItem';



const List = () => {
    return ( 
        <Container list>
            <Wrapper list>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </Wrapper>
        </Container>
     );
}
 
export default List;