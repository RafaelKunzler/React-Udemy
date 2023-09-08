import {useRef} from 'react'

import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {

    const ComponentRef = useRef()

  return (
    <div>
        <h2>useImperativeHandle</h2>
        <SomeComponent ref={ComponentRef} />
        <button onClick={() => ComponentRef.current.validate()}>Validate</button>
        <hr />
    </div>
  )
}

export default HookUseImperativeHandle