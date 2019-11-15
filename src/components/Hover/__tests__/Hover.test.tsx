import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Hover from '../Hover';

describe('Hover', (): void => {
    test('renders correctly', (): void => {
        const wrapper = mount(
            <Hover>
                {({ hovering }): JSX.Element => {
                    return <div>{hovering === true && <div>Hover</div>}</div>;
                }}
            </Hover>
        );

        expect(wrapper.find('div')).toHaveLength(2);
        expect(wrapper.containsMatchingElement(<div>Hover</div>)).toBeFalse();
        expect(wrapper.containsMatchingElement(<div></div>)).toBeTrue();
        wrapper.unmount();
    });

    test('change hovering to true on mouse enter ', (): void => {
        const wrapper = mount(
            <Hover>
                {({ hovering }): JSX.Element => {
                    return <div>{hovering === true && <div>Hover</div>}</div>;
                }}
            </Hover>
        );

        act((): void => {
            jest.useFakeTimers();
            wrapper
                .find('div')
                .at(0)
                .simulate('mouseenter');
            jest.runAllTimers();
        });

        expect(setTimeout).toBeCalledTimes(2);
        expect(wrapper.containsMatchingElement(<div>Hover</div>)).toBeFalse();
    });
});
