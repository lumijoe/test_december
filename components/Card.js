// components/Card.js

import React from 'react';
import Image from 'next/image';

export default function Card({href, src, alt, amountBalance, category, ml}) {
    return (
        <>
            <a 
                href={href} 
                className={`group rounded-lg pb-4 max-w-[165px] shadow-lg ${ml}`}
                target='_blank'
                rel='noopener noreferrer'
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
                    <h2 className={`mb-3 text-2xl`}>{`¥${amountBalance}`}</h2>
                    <p className={`m-0 text-sm opacity-50`}>{category}</p>
                </div>
            </a>
        </>
    )
}