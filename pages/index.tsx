import React, { FunctionComponent } from 'react'
import withPage from '../lib/hocs/withPage';
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
`

const Home: FunctionComponent = () => {
  return (
    <Container> Home Page </Container>
  )
}

export default withPage()(Home);
