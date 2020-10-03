import React from "react";
import App from "./App";
import HelloWorld from "./components/HelloWorld";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from "react-dom";
configure({ adapter: new Adapter() });
it("renders App", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HelloWorld />, div);
  ReactDOM.unmountComponentAtNode(div);
});
describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});
// it("renders correctly", () => {
//   const wrapper = shallow(
//     <App />
//   );
//   expect(wrapper).toMatchSnapshot();
// });
