import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../NavBar';
import { Button } from '../../../../elements';
import NumberInput from '../../NumberInput/NumberInput';
import Tooltip from '../../UIElements/Tooltip/Tooltip';

describe('NavBar', (): void => {
    const props = {
        newGame: jest.fn(),
        getNumberColors: jest.fn(),
        initialValue: 5,
        numberColors: 5
    };
    test('renders correctly', (): void => {
        const wrapper = shallow(<NavBar {...props} />);

        expect(wrapper.find(Tooltip)).toHaveLength(1);
        expect(wrapper.find(NumberInput)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.text()).toContain('Memory Game');
    });
});