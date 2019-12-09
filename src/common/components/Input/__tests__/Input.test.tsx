import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import Input, { InputElement } from '../Input';

let wrapper: ShallowWrapper;

const setup = (props: any): ShallowWrapper => {
    return shallow(<Input {...props} />);
};

const changeFn = jest.fn();
const props = {
    label: 'Author',
    type: 'text',
    placeholder: 'Enter the author',
    onChange: changeFn,
    value: 'Eduard',
    name: 'author',
    invalid: false,
    touched: false
};
beforeEach((): void => {
    wrapper = setup(props);
});

test('renders without error', (): void => {
    expect(wrapper.find('label')).toHaveLength(1);
    expect(wrapper.find(InputElement)).toHaveLength(1);
});

test('renders correct props', (): void => {
    expect(wrapper.find('label').text()).toEqual('Author');
    expect(wrapper.find(InputElement).prop('placeholder')).toEqual(
        'Enter the author'
    );
    expect(wrapper.find(InputElement).prop('value')).toEqual('Eduard');
    expect(wrapper.find(InputElement).prop('name')).toEqual('author');
    expect(wrapper.find(InputElement).prop('type')).toEqual('text');
});

test('calls onChange on a value changed', (): void => {
    const mockTarget = {
        target: {
            value: 'author'
        }
    };
    wrapper.find(InputElement).simulate('change', mockTarget);

    expect(changeFn).toHaveBeenCalled();
    expect(changeFn).toHaveBeenCalledTimes(1);
    expect(changeFn).toHaveBeenCalledWith(mockTarget);
});

test('input border-color is red  on touched true and invlid false', (): void => {
    const tree = renderer.create(<InputElement invalid={true} />).toJSON();

    expect(tree).toHaveStyleRule('border-color', 'red');
});
