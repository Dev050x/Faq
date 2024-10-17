import React, { useEffect, useState } from 'react'
import './App.css'

const FaqComponent = ({faq , index}) => {
    const [isShow,setIsShow] = useState(false);
    useEffect(() => {
        if(index==0){
            setIsShow(true);
        }
    } , [])
    function handleClick() {
        setIsShow(!isShow);
    }
    return (
        <div className='FaqComponent'>
            <div className='question'>
                <button onClick={handleClick} className={isShow ? 'arrow' : ''}> &gt; </button>
                <div>{faq.question}</div>
            </div>
            {isShow && <div className='answer'>{faq.answer}</div>}
            
        </div>
    )
}

export default FaqComponent
