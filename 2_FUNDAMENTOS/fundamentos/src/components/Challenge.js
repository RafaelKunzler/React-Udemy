const Challenge = () => {

    const a = 1;
    const b = 2;        

    function somaValores(){        
        console.log(a + b);
    };
    

    return (
        <div>
            <p>A: {a}</p>
            <p>B: {b}</p>
            <button onClick={somaValores}>Soma</button>
        </div>
    )

};

export default Challenge;