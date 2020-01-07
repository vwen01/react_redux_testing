import React from 'react';
import {checkProps, findByTestAttr} from "../../utils/testUtils";
import SharedButton from "./button";
import {shallow} from 'enzyme';

describe('SharedButton component', () => {

    describe('check proptypes', () => {
        it('should NOT throw warning', () => {
            const expectedProps = {
                buttonText: 'Example String',
                emitEvent: () => {
                }
            };

            const propsErr = checkProps(SharedButton.propTypes, expectedProps, 'props', SharedButton.name);
            expect(propsErr).toBeUndefined();

        });

        describe('Renders', () => {
            let wrapper;
            let mockFunc;

            beforeEach(() => {
                mockFunc = jest.fn();
                const props = {
                    buttonText: 'Example String',
                    emitEvent: mockFunc
                };
                wrapper = shallow(<SharedButton {...props} />);
            });

            it('should render a button ', ()=>{
                const button = findByTestAttr(wrapper, 'buttonComponent');
                expect(button.length).toEqual(1);
            });

            it('simulate click event', ()=>{
                const button = findByTestAttr(wrapper, 'buttonComponent');
                button.simulate('click');
                button.simulate('click');
                const callback = mockFunc.mock.calls.length;
                expect(callback).toBe(2);
            })

        })
    })
});