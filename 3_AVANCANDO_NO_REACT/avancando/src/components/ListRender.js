import {useState} from 'react'

const ListRender = () => {
    const [list] = useState(["Rafael", "Pedro", "Josias", "Maria"]);

    const [users] = useState([
        {id: 1, name: "Rafael", age: 26},
        {id: 8764681, name: "Pedro", age:28},
        {id: 781251, name: "Josias", age: 44},
    ]);
    
  return (
    <div>
        <ul>
            {list.map((item, i) =>  (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListRender