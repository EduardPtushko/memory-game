import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import BackDrop from '../BackDrop';

interface Props {
    close: () => void;
    show: boolean;
}

describe('BackDrop', (): void => {
    let wrapper: ReactWrapper;
    let props: Props;

    beforeEach((): void => {
        props = {
            close: jest.fn(),
            show: true
        };

        wrapper = mount(<BackDrop {...props} />);
    });

    afterEach((): void => {
        wrapper.unmount();
    });

    test('renders correctly when prop show is true', (): void => {
        expect(wrapper.find('div').exists()).toBeTrue();
        expect(wrapper.find('div').text()).toBe('');
    });

    test('renders correctly when prop show is false', (): void => {
        wrapper.setProps({ show: false });

        expect(wrapper).toBeEmptyRender();
    });

    test('prop close is called on click', (): void => {
        wrapper.find('div').simulate('click');

        expect(props.close).toHaveBeenCalled();
    });
});
