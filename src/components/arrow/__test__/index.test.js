import React from 'react';
import ReactDOM from 'react-dom';
import renderer from "react-test-renderer"
import Arrow from '../index';


it("render correctly ", () => {
    const TextInputComponent = renderer.create(<Arrow></Arrow>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});

it("render correctly with inverted icon", () => {
    const TextInputComponent = renderer.create(<Arrow iconInvert></Arrow>).toJSON();
    expect(TextInputComponent).toMatchSnapshot();
});
