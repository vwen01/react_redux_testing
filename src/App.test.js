import React from 'react';
import {shallow} from 'enzyme';
import {testStore, findByTestAttr} from "./utils/testUtils";
import App from "./App";


const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    console.log(wrapper.debug());
    return wrapper;


};

describe('App Component', () => {
    let wrapper;
    beforeEach(()=>{
        const initialState = {
            posts: [{
                title: 'Example Title 1',
                body: 'Example Title 1',
            },
                {
                    title: 'Example Title 2',
                    body: 'Example Title 2',
                },
                {
                    title: 'Example Title 3',
                    body: 'Example Title 3',
                }]
        };

        wrapper = setUp(initialState);
    });

    it('Should render without errors ', ()=>{
        const component = findByTestAttr(wrapper, 'appComponent')
        expect(component.length).toBe(1);
    })

});