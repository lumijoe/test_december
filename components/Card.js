// components/Card.js

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

export default function Card({href, src, alt, amountBalance, amountExpenditure, amountIncome, category, ml}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('入力金額はこちら：', inputValue);
    };
   


    return (
        <>
            <div 
                className={`group rounded-lg pb-4 max-w-[165px] shadow-lg ${ml}`}
                
                // 右側コンテンツml-[81px]
            >   
                <Image
                    src={src}
                    alt={alt}
                    width={165}
                    height={165}
                    className='rounded-t-lg'
                />
            
                <div className='mx-3'>
                    <h2 className={`mb-3 text-2xl`}>
                        {`¥${amountBalance}`}</h2> {/* UI:残高 */}



                    <form 
                        className={`m-0 text-sm opacity-50`}
                        onSubmit={handleSubmit}>
                        <input 
                            type="number"
                            min="0"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder='支出金額'
                        />
                        <input type='submit'/>
                    </form> 



                    <p className={`m-0 text-sm opacity-50`}>
                        {`+ ${amountIncome}`}</p> {/* 収入金額 */}
                        <br/>



                    <p className={`m-0 text-sm opacity-50`}>
                        {category}</p> {/* カテゴリ名 */}
                </div>

            </div>
        </>
    )
}