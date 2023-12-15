
import React,{useEffect, useState} from 'react';
import './App.css';


const Calculate = () =>{
    const [input, setInput] = useState(' ');
   

    const handleClick = (value) =>{
        setInput((prevInput) => prevInput + value); 
       
    };

    const handleClear = () =>{
        setInput(" ");
        
    };
    
    const handleCalculate = () =>{

        try{
            setInput(eval(input).toString());
            

        } catch (error){
            setInput('error');
            

        }
    
    };

  //  const animation = () =>{
       const [text, setText] = useState('');
       const originalText = "My calculator build in react.js";
useEffect (()=>{
    let index = 0;
    const typingInterval = setInterval (()=>{
        if (index <= originalText.length){
            setText(originalText.slice(0, index));
            index++;
        }else{ 
            clearInterval(typingInterval);
        }
    },200);
    return () => clearInterval(typingInterval);
},[]);       
     
    

    return (
    
        <div className='calculator-container  flex items-center justify-center h-screen'>
          <div>
                <p className='animation-container'>{text}</p>
            </div>
            <div className='calculate'>
                <input type='text' value={input} readOnly className="border rounded px-4 py-2" />
            </div>
            <div className='button-row'>
                <button onClick={() => handleClick('1')}>1</button>
                <button onClick={() => handleClick('2')}>2</button>
                <button onClick={() => handleClick('3')}>3</button>
                <button onClick={() => handleClick('+')} className='functions'>+</button>
        </div>
        <div className='button-row'>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')} className='functions'>-</button>
        </div>
        <div className='button-row'>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')} className='functions'>*</button>
        </div>
        <div className='button-row'>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={handleClear} className='functions'>C</button>
        <button onClick={handleCalculate} className='functions'>=</button>
        <button onClick={() => handleClick('/')} className='functions' >/</button>
        </div>
        </div>
    );
};

export default Calculate;

