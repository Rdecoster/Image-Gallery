

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


import { shallow, mount, render } from 'enzyme';

const wrapper = shallow(<Foo />);