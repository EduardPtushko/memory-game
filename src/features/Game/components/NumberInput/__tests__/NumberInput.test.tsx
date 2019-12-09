import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import NumberInput from '../NumberInput';

describe('NumberInput', (): void => {
    const props = {
        getNumberColors: jest.fn(),
        className: expect.any(String),
        initialValue: 4
    };
    let wrapper: ReactWrapper;

    beforeEach((): void => {
        wrapper = mount(<NumberInput {...props} />);
    });

    afterEach((): void => {
        wrapper.unmount();
    });

    test('renders correctly', (): void => {
        expect(wrapper.find('label').exists()).toBeTrue();
        expect(wrapper.find('input').exists()).toBeTrue();
        expect(wrapper.find('input').prop('value')).toBe(4);
    });

    test('getNumberColors are called on change event', (): void => {
        wrapper.find('input').simulate('change', { target: { value: 5 } });

        expect(props.getNumberColors).toHaveBeenCalledTimes(1);
        expect(props.getNumberColors).toHaveBeenCalledWith(5);
    });

    test('input value is changed on change event', (): void => {
        wrapper.find('input').simulate('change', { target: { value: 5 } });

        expect(wrapper.find('input').prop('value')).toBe(5);
    });
});
