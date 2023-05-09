import { useState } from "react";

const unselectedColor : string = '#011111';
const selectedColor : string = '#F34509'; 

interface SpringSign {
    sign : string,
    sighted : boolean
}

const Spring = () => {

    const sign : SpringSign = {sign: 'grill', sighted: false };
    const defaultSigns : SpringSign[] = [sign, {sign: 'pollen', sighted: true }  ];

    const [springSigns, setSpringSigns] = useState(defaultSigns);
    const [newSign, setNewSign ] = useState('');

    const signElements = springSigns.map((sign, index) => (
        <div key={index}
            style={{backgroundColor : sign.sighted ? selectedColor : unselectedColor}}
            onClick={() => selectSign(sign, index)}
            >
            {sign.sign}
        </div>
    ))

    const selectSign = (sign : SpringSign, index : number  ) => {
        let updatedSigns  = [...springSigns]; // skapa en kopia av gamla arrayen
        sign.sighted = !sign.sighted
        updatedSigns[index] = sign;
        setSpringSigns(updatedSigns);
    }

    const handleAddSign = () => {
        setSpringSigns([...springSigns, {sign: newSign, sighted: false } ] );
        setNewSign('');
    } 

    return (
        <div>
            <h2>Vårtecken</h2>
            {signElements}
            Fler vårtecken:
            <input type="text" 
                onChange={event => {setNewSign(event.target.value) }}
                value= {newSign}/>
            <button onClick={handleAddSign}>Lägg till</button>
        </div>
    )
}

export default Spring;