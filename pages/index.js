import React, {useState} from 'react';

const InputElement = () => {

const [inputText, setInputText] = useState("");
const [historyList, setHistoryList] = useState([]);


    return (<div>
            <input
            onChange={ (e) => { 
                setInputText(e.target.value);
                setHistoryList([...historyList, e.target.value]) 
            }}
            placeholder="Enter some text" />
            <br/>
            <label>{inputText}</label>
            {historyList.map(item => {
                return <div>{item}</div>
            })}
            </div>);
}

export default InputElement;