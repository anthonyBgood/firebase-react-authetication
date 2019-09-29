import React from 'react';
import { withAuthorization } from '../Session'


const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>The Home Page is Accessible for all signed in users</p>
  </div>
);

const condition = authUser => !!authUser

export default withAuthorization(condition) (HomePage);