import React from 'react';
import ReactDOM from 'react-dom';
import TextBlock from '../index';
import renderer from "react-test-renderer"
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TextBlock title={"title"} desc={"description"}></TextBlock>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it("render correctly with title", () => {
    const TextInputComponent = renderer.create(<TextBlock title={"Заголовок"}></TextBlock>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});

it("render correctly with title and description", () => {
    const TextInputComponent = renderer.create(<TextBlock title={"Заголовок"} desc={"Описание"}></TextBlock>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});

it("render correctly with title, description and button", () => {
    const TextInputComponent = renderer.create(<TextBlock title={"Заголовок"} desc={"Текст описания"} button={"КНОПКА"}></TextBlock>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
