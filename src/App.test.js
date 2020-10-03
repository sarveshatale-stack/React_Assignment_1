import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
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
