
const PeopleDetails = ({name, age, job}) => {
  return (
    <div>
        <h3>Nome: {name}</h3>
        <p>Idade: {age}</p>
        <p>Profissão: {job}</p>
        {age >= 18 ? (
            <h5>Pode tirar habilitação</h5>
        ) : (
            <h5>Menor de Idade</h5>
        )}
    </div>
  )
}

export default PeopleDetails