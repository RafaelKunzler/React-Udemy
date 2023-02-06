import './MyForm.css'

import {useState} from 'react'

const MyForm = ({user}) => {
    // 6 - controlled inputs
    // 3 - gerenciamento de dados
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulario");
        console.log(name, email);

        // 7 - limpar form
        setName("");
        setEmail("");
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
                    onChange={handleName}
                    value={name}/>
            </div>
            {/* label envolvelndo input */}
            <label>
                <span>Email:</span>
                {/* simplificação de manipulação de state */}
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Digite o seu email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm