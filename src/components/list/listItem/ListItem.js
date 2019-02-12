import React from 'react';
import {
    Item,
    Row,
    Circle,
    RowPair,
    Cross,
    Delete
} from './Style';

const theme = {
    main: "mediumseagreen"
  };


  /*
    Dodać przycisk do skreślania tekstu jako zrobione.
    Przycisk do ususwania taska.
    Footer.
    */

const ListItem = () => {
    return ( 
        <Item>
            <Row date>
                <RowPair>
                    <p>2019-05-10</p>
                    <Circle theme={theme}/>
                </RowPair>
                <RowPair right>
                    <Cross>&minus;</Cross>
                    <Delete>&#10060;</Delete>
                </RowPair>
            </Row>
            <Row>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iure aspernatur omnis ipsa. Hic officiis quia quibusdam aspernatur, sapiente nemo.</p>
            </Row>
        </Item>
     );
}
 
export default ListItem;