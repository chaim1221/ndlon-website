import React from 'react';
//import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom';
import { Menu, Table } from 'semantic-ui-react';

const Site = () => (

    <div>
      <div id="site-navigation">
        <Menu inverted pointing id='primary-nav'>
          <Menu.Item>
            <a href="/">
              <img src="/images/ndlon-logo.png" />
            </a>
          </Menu.Item>
        </Menu>
      </div>
      <main>
        <div id="left">
          <p>Welcome to the home page of the National Day Laborer Organizing Network.</p>
          <p>Our site is currently experience some maintenance issues, and we've got a team of people working on it.</p>
          <p>In the mean time, we can offer the following contact information:</p>
          <br />
          <p>MAIN OFFICE</p>
          <p>675 S. Park View St. Suite B</p>
          <p>Los Angeles California 90057 </p>
          <p>info@ndlon.org </p>
          <p>(213) 380-2201 Tel</p>
          <p>(213) 380-2787 Fax</p>
          <br />
          <p>NDLON EAST COAST OFFICE</p>
          <p>1419 V St. NW, check Suite 305 </p>
          <p>Washington DC 20009 </p>
          <p>sgsarmiento@ndlon.org </p>
          <p>(202) 332-2871 Tel</p>
        </div>
        <div id="right">
          <img src="/images/under-construction-gif-6.gif" />
        </div>
      </main>
    </div>
)

export default Site;
