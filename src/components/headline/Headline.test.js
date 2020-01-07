import React from "react";
import {shallow} from 'enzyme';
import Headline from "./Headline";
import {checkProps} from './../../utils/testUtils';

//testing rendering

const setUp = (props = {}) => {
    return shallow(<Headline {...props}/>);
};

describe('Headline Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Description',
                tempArr: [{
                    fName: 'Test fName',
                    lName: 'Test lName',
                    email: "test@email.com",
                    age: false,
                    onlineStatus: true,
                }]
            };

            const propsErr = checkProps(Headline.propTypes, expectedProps, 'props', Headline.name);
            expect(propsErr).toBeUndefined();

        })
    });


    describe('Have props', () => {

    });

    describe('Have no props', () => {
    });

});