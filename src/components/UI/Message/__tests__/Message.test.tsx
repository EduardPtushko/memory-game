import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('Message', (): void => {
    test('renders correctly', (): void => {
        const wrapper = shallow(<Message clicks={0} />);

        expect(wrapper.text()).toContain('You’ve done 0 clicks!');
        expect(wrapper.find('span').text()).toBe('0');
    });
});
