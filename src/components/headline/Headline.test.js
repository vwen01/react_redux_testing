import React from "react";
import {shallow} from 'enzyme';
import Headline from "./Headline";
import {findByTestAttr} from "../../utils/testUtils";


const setUp = (props = {}) => {
    return shallow(<Headline {...props}/>);
};

describe('Headline Component', () => {

    let wrapper;

    describe('Have props', () => {
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Description'
            };
            wrapper = setUp(props);
        });

        it('should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render h1', () => {
            const component = findByTestAttr(wrapper, 'header');
            expect(component.length).toBe(1);
        });

        it('should render p', () => {
            const component = findByTestAttr(wrapper, 'desc');
            expect(component.length).toBe(1);
        })

    });

    describe('Have no props', () => {
        beforeEach(() => {
            wrapper = setUp();
        });

        it('Nothing should render without props', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(0);
        });

    });

});