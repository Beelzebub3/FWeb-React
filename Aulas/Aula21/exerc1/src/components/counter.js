import{useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(1);
    function adicionarCount() {
        setCounter(counter + 1);
    }
    function removerCount() {
        if(counter>1)
            {
                setCounter(counter -1);
            }
    }
    return (
        <div>
            <div><h1>{counter}</h1></div>
            <button onClick={adicionarCount}>Adicionar</button>
            <button onClick={removerCount}>Subtrair</button>
        </div>
    )

}
export default Counter;