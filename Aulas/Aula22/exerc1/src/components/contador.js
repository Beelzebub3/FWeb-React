import{useState, useEffect} from 'react';

function Contador() {
    const [contador, setContador] = useState(1);
    useEffect(() =>{const timeID = setInterval(() => {setContador(contador+1)},1000)
        return () => clearInterval(timeID);
    },[contador]);
     
    function adicionarCont() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarCont}>Adicionar</button>
        </div>
    )
}
export default Contador;