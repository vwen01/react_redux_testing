import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from "../../utils/testUtils";
import ListItem from "./listItem";

describe('ListItem Component', () => {

   describe('Checking Proptypes', ()=>{

      it('Should Not throw warning', ()=>{})
       const expectedProps = {
          title: 'sample title',
           desc: 'sample desc',
       };

       const propsErrors = checkProps(ListItem, expectedProps);
       expect(propsErrors).toBe(undefined);

   });

   describe('component renders', ()=>{
       let wrapper;

       beforeEach(()=>{
           const props = {
               title: 'sample title',
               desc: 'sample desc',
           };
           wrapper = shallow(<ListItem {...props} />);
       });

       it('should render without error', ()=>{
           const component = findByTestAttr(wrapper, 'listItemComponent');
           expect(component.length).toBe(1);
       });

       it('should render a title', ()=>{
           const title = findByTestAttr(wrapper, 'componentTitle');
           expect(title.length).toBe(1);
       });

       it('should render a desc', ()=>{
           const desc = findByTestAttr(wrapper, 'componentDesc');
           expect(desc.length).toBe(1);
       });

   });

   describe('should not render', ()=>{
       let wrapper;

       beforeEach(()=>{
           const props = {
               desc: 'sample desc',
           };
           wrapper = shallow(<ListItem {...props} />);
       });

       it('component not rendering', ()=>{
           const component = findByTestAttr(wrapper, 'listItemComponent');
           expect(component.length).toBe(0);
       });

   });

});