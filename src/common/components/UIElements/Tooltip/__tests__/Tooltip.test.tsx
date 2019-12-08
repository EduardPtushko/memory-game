import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '../Tooltip';
import Hover from '../../../Hover/Hover';
import { act } from 'react-dom/test-utils';

describe('Tooltip', (): void => {
    test('renders correctly', (): void => {
        const Test = (): JSX.Element => <div>Hello World!</div>;
        const wrapper = mount(
            <Tooltip text='Test Tooltip'>
                <Test />
            </Tooltip>
        );

        expect(wrapper.find(Hover)).toHaveLength(1);
        expect(wrapper.containsMatchingElement(<Test />)).toBeTrue();
        wrapper.unmount();
    });
});
