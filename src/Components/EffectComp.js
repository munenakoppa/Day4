import {useEffect,useState} from 'react';


function EffectComp(){
    let [name,setName]=useState('Arun');
    let [counter,setCounter]=useState(0);

    function effectFunction (){
        setName(name+'a');
        setCounter(counter+1);
    }

    useEffect(()=>{
        console.log('OnLoad of the Function');
       
    },[]);

    useEffect(()=>{
        console.log('OnChange of the Element Name or Counter');
       
    },[name,counter]);

    return(
        <div>
                <input type="text" id="name" name="name" value={name} readonly />
                <input type="text" id="count" name="count" value={counter} readonly />
                <button className='button buttoon1' onClick={effectFunction}> use of Button</button>
        </div>
    );

}

export default EffectComp;