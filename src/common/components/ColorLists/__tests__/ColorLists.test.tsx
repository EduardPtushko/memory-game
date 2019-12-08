import React from 'react';
import { shallow } from 'enzyme';
import ColorLists from '../ColorLists';
import ColorList from '../../ColorList/ColorList';
import { colors } from '../../../../../test/fixture/collors';

describe('ColorLists', (): void => {
    test('renders correctly', (): void => {
        const wrapper = shallow(
            <ColorLists colors={colors} clicked={jest.fn()} />
        );

        expect(wrapper.find(ColorList)).toHaveLength(2);
    });
});
