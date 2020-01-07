import React from "react";
import {shallow} from 'enzyme';
import Header from "./Header";
import {findByTestAttr} from "../../utils/testUtils";


const setUp = (props={})=>{
    return shallow(<Header {...props} />);
};

describe('Header Component', () => {
    let component;
    beforeEach(()=>{
        component = setUp();
    });

    it('Should render a header', () => {
       const wrapper = findByTestAttr(component, 'headerComponent');
       expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const wrapper = findByTestAttr(component, 'logoImg');
        expect(wrapper.length).toBe(1);
    });
});

