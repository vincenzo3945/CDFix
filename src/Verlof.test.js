import React from 'react';
import ReactDOM from 'react-dom';

import { cleanup} from "@testing-library/react";
import { shallow, mount, render } from 'enzyme';

//const wrapper = shallow(<App />);
//import App from './App';
import Verlof from './Verlof';
import {Cookies} from "react-cookie";

const cookie = new Cookies();


afterEach(cleanup);

var testUser = {
   personId: 1,
   firstName: "test",
   lastName: "user",
   emailAddress: null,
   age: null,
   address: null,
   houseNumber: null,
   zipcode: null,
   city: null,
   country: null,
   toke: "null"
}

describe('Full page render', () => {
    it('renders without crashing', () => {
       //window.sessionStorage.setItem("loggedinuser",  JSON.stringify(loggedInUser));
        window.localStorage.setItem("user", JSON.stringify(testUser));
         cookie.set("token","null");
       shallow(<Verlof/>);
    });
 });


<reference path="src/Verlof.js" />

 describe('No date test', () => {
    it('trows alert null begin date', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Verlof/>);

      component.instance().request(null, "25/01/2020");

      expect(component.state("test")).toEqual(0);

    })

    it('trows alert null end date', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Verlof/>);

      component.instance().request("25/01/2020", null);

      expect(component.state("test")).toEqual(0);

    })

    it('trows alert begin date in past', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Verlof/>);

      component.instance().request("01-01-2020", "20-02-2020");

      expect(component.state("test")).toEqual(0);

    })

    it('trows alert end date in past', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Verlof/>);

      component.instance().request("20-02-2020", "01-01-2020");

      expect(component.state("test")).toEqual(0);

    })

    /*it('trows alert end date in past', () => {

      window.localStorage.setItem("user", JSON.stringify(testUser));
      cookie.set("token","null");
      const component = shallow(<Verlof/>);

      component.instance().request("20-02-2020", "19-02-2020");

      expect(component.state("test")).toEqual(0);

    })*/
 })