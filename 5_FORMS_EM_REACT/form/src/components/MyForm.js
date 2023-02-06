import './MyForm.css'

import {useState} from 'react'

const MyForm = () => {
    // 3 - gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulario")
        console.log(name, email)
    }

    //console.log(name)
    //console.log(email)

  return (
    <div>
        {/* 5 - envio de form */}
        {/* 1 - criação de form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite o seu nome" 
                    onChange={handleName}/>
            </div>
            {/* label envolvelndo input */}
            <label>
                <span>Email:</span>
                {/* simplificação de manipulação de state */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o seu email" 
                    onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm