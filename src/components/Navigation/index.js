import React from 'react';
import { Link } from 'react-router-dom'

import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes'


const Navigation = ({ authUser }) => (
  <div>
    {authUser? <NavigationAuth authUser ={ authUser }/> : <NavigationNonAuth/>}
  </div>
)

const NavigationAuth = (props) =>(
  <div>
  <ul>
    <li>
      <Link to={ROUTES.LANDING}> Landing </Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}> Home </Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}> Account </Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>

  <p>{JSON.stringify(props.authUser, null, '\n')}</p>

  </div>
);


const NavigationNonAuth = () =>(
  <ul>
    <li>
      <Link to={ROUTES.LANDING}> Landing </Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}> Sign in </Link>
    </li>
  </ul>
)


export default Navigation;


{/* <li>
  <Link to={ROUTES.ADMIN}> Admin</Link>
</li>
<li>
  <Link to={ROUTES.SIGN_UP}> Sign up</Link>
</li>
<li>
  <Link to={ROUTES.SIGN_IN}> Sign in</Link>
</li> */}