import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import App from '../App';
import NavBar from '../../components/NavBar/NavBar';
import ColorLists from '../../components/ColorLists/ColorLists';
import ColorList from '../../components/ColorList/ColorList';
import Modal from '../../components/UI/Modal/Modal';

describe('App', (): void => {
    let wrapper: ReactWrapper;

    beforeEach((): void => {
        wrapper = mount(<App />);
    });

    afterEach((): void => {
        wrapper.unmount();
    });

    test('renders correctly', (): void => {
        expect(wrapper.find(NavBar)).toHaveLength(1);
        expect(wrapper.find(Modal)).toHaveLength(0);
        expect(wrapper.find(ColorLists)).toHaveLength(1);
        expect(wrapper.find(ColorList)).toHaveLength(10);
    });

    test('renders correct number colors on new game', (): void => {
        wrapper
            .find({ id: 'boxes' })
            .simulate('change', { target: { value: 6 } });
        wrapper.find('button').simulate('click');

        expect(wrapper.find(ColorList)).toHaveLength(12);
    });

    test('', (): void => {
        wrapper
            .find({ id: 'boxes' })
            .simulate('change', { target: { value: 6 } });
        wrapper.find('button').simulate('click');

        expect(wrapper.find(ColorList)).toHaveLength(12);
    });
});
