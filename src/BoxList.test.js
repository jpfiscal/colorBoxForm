// import '@testing-library/jest-dom/extend-expect';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function(){
    const { getByLabelText, queryByText, container } = render(<BoxList/>);
    const widthInput = getByLabelText("Width");
    const heightInput = getByLabelText("Height");
    const colorInput = getByLabelText("Color");
    const submitBtn = queryByText("Add Box");
    //fill out the form
    fireEvent.change(widthInput, {target: {value: "25"}});
    fireEvent.change(heightInput, {target: {value: "25"}});
    fireEvent.change(colorInput, {target: {value: "red"}});
    fireEvent.click(submitBtn);
    //item exists
    const element = container.querySelector("div[style]");
    expect(element).toHaveStyle({backgroundColor: "red"});

})