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


const Header = (props) => {
    return (
        <Container>
            <Wrapper>
                <Form onSubmit={props.submit}>
                    <Title>Add your note</Title>
                    <FormElement>
                        <Label>
                            <input
                                type="text"
                                id="text"
                                value={props.textValue}
                                onChange={props.change}
                            />
                        </Label>
                    </FormElement>
                    <FormElement>
                        <Label>
                            <input
                                type="date"
                                id="date"
                                onChange={props.change}
                                value={props.dateValue}
                            />
                        </Label>
                        <Label>
                            <select
                                name="color"
                                id="color"
                                onChange={props.change}
                                value={props.colorValue}>
                                <option value="green">Green</option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="yellow">Yellow</option>
                                <option value="purple">Purple</option>
                                <option value="orange">Orange</option>
                            </select>
                        </Label>
                        <Label small>
                            <Submit type="submit" value="Add" />
                        </Label>
                    </FormElement>
                </Form>
            </Wrapper>
        </Container>
    );
}

export default Header;