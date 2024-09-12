import * as React from 'react';
import './Body.css'
import Bottom from './Bottom'
import Cards from './Card'
import Heading from './Heading'
import { Context } from '../context/Context';
import ChatBox from './ChatBox';

function Body() {
  const { results } = React.useContext(Context)
  return (
    <>
    {((results==false) ?
      <>
      <Heading/>
      <Cards/>
      </>
      :
      <>
        <ChatBox/>
      </>
    )}
      <Bottom/>
    </>
  )
}

export default Body
