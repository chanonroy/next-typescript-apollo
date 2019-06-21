import React, { FunctionComponent } from 'react'
import withPage from '../lib/hocs/withPage';

const Home: FunctionComponent = () => {
  return (
    <div> Home Page </div>
  )
}

export default withPage()(Home);
