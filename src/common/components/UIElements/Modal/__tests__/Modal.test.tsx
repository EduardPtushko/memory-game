import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Modal from '../Modal';
import BackDrop from '../../BackDrop/BackDrop';
import { Button } from '../../../../../elements';

interface Props {
    show: boolean;
    onClose: () => void;
}

describe('Modal', (): void => {
    let wrapper: ShallowWrapper;
    const props: Props = {
        show: false,
        onClose: jest.fn()
    };

    beforeEach((): void => {
        wrapper = shallow(<Modal {...props} />);
    });

    afterEach((): void => {
        wrapper.unmount();
    });

    test('renders correctly when prop show is false', (): void => {
        expect(wrapper).toBeEmptyRender();
    });

    test('renders correctly when prop show is true', (): void => {
        wrapper.setProps({ show: true });

        expect(wrapper.find(BackDrop)).toHaveLength(1);
        expect(wrapper.find(Button)).toHaveLength(1);
        expect(wrapper.find(Button).text()).toBe('Ok');
    });

    test('prop onClose is called on button clicked', (): void => {
        wrapper.setProps({ show: true });
        wrapper.find(Button).simulate('click');

        expect(props.onClose).toHaveBeenCalled();
        expect(props.onClose).toHaveBeenCalledTimes(1);
    });
});
