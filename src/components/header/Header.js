import React from 'react';
import { 
    Container,
    Wrapper,
    Form, 
    Label,
    FormElement,
    Submit,
    Title
} from './Style';

const Header = () => {
    return ( 
        <Container>
            <Wrapper>
                <Form>
                    <Title>Add your note</Title>
                    <FormElement>
                        <Label>
                            <input type="text" id="text"/>
                        </Label>
                    </FormElement>
                    <FormElement>
                        <Label>
                            <input type="date" id="date"/>
                        </Label>
                        <Label>
                            <select name="color" id="color">
                                <option value="green">green</option>
                                <option value="red">red</option>
                                <option value="blue">blue</option>
                                <option value="yellow">yellow</option>
                            </select>
                        </Label>
                        <Label small>
                            <Submit type="submit" value="Add"/>
                        </Label>
                    </FormElement>
                </Form>
            </Wrapper>
        </Container>
     );
}
 
export default Header;