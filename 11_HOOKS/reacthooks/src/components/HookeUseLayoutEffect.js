import {useLayoutEffect, useEffect, useState} from 'react'

const HookeUseLayoutEffect = () => {

    const [name, setName] = useState("Algum nome")

    useEffect(() => {
        console.log("2");
        setName("Mudou de novo!")
    }, [])

    useLayoutEffect(() => {
        console.log("1")
        setName("Outro Nome")
    }, [])

    console.log(name)

  return (
    <div>
        <h2>Use LayoutEffect</h2>
        <p>Nome: {name}</p>
        <hr />
    </div>
  )
}

export default HookeUseLayoutEffect