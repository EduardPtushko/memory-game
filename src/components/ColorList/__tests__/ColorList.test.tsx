import React from 'react';
import { shallow } from 'enzyme';
import ColorList from '../ColorList';

describe('ColorList', (): void => {
    const color = {
        bcgColor: '#fff',
        open: false,
        id: 0
    };
    const props = {
        color,
        clicked: jest.fn()
    };

    test('renders correctly on initial render', (): void => {
        const wrapper = shallow(<ColorList {...props} />);

        expect(wrapper.prop('color')).toBe('transparent');
    });

    test('renders the correct color when the prop open is true', (): void => {
        const wrapper = shallow(
            <ColorList
                clicked={props.clicked}
                color={{ ...color, open: true }}
            />
        );

        expect(wrapper.prop('color')).toBe(color.bcgColor);
    });
});
