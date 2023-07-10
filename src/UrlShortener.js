import React, { useState } from 'react'

const UrlShortener = ({setInputVal}) => {
    const [val, setVal] = useState("");
    

     const handleClick = () => {
        //console.log(val)
        //localStorage.setItem("inputVal", val);
        setInputVal(val)
        setVal("")
     }

    return (
        <div className='inputContainer'>
            <h1>URL Shortener</h1>
            <input 
                type="text" 
                placeholder="Enter URL...." 
                value={val}
                onChange={e => setVal(e.target.value)}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default UrlShortener;