import React from 'react'

//useContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookCallBack from '../components/HookCallBack'
import HookUseMemo from '../components/HookUseMemo'
import HookeUseLayoutEffect from '../components/HookeUseLayoutEffect'
import HookUseImperativeHandle from '../components/HookUseImperativeHandle'
import HookCustom from '../components/HookCustom'

const Home = () => {
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        <h2>useContext</h2>
        <p>Valor do Context: {contextValue}</p>
        <hr />
        <HookUseRef />
        <HookCallBack />
        <HookUseMemo />
        <HookeUseLayoutEffect />
        <HookUseImperativeHandle />
        <HookCustom />
    </div>
  )
}

export default Home