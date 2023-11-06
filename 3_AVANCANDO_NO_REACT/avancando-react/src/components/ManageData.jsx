
import {useState} from 'react';

const ManageData = () => {
    
    let someData = 10;
    console.log(someData);

    const [number, setNumber] = useState(0);
    return (
        <div>
            <div>
                <p>Valor someData: {someData}</p>
                <button onClick={() => someData += 15}>Mudar variável</button>
                <p>Valor UseState: {number}</p>
                <button onClick={()=> setNumber(number + 1)}>Mudar useState</button>
            </div>
        </div>
    )
} 


export default ManageData;