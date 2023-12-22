// components/MobileHeader.js

import React from 'react';
import Image from 'next/image';

export default function MobileHeader({ pageTitle, children }) {
    return (
     
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">

        <div className='relative'>
          <Image
            src="/mobile01.png"
            alt="mobileimage"
            width={500}
            height={500}
            priority
          />
          
          <p className='text-sm text-white absolute top-[112px] left-[250px]'>12:12</p>
          <div className='flex flex-row gap-0.5 absolute top-[110px] left-[300px]'>
            <Image
              src="/iconCellular.svg"
              alt="image of cellular"
              width={20}
              height={20}
            />
            <Image
              src="/iconWifi.svg"
              alt="image of wifi"
              width={20}
              height={20}
            />
            <Image
              src="/iconElectro.svg"
              alt="image of electro"
              width={20}
              height={20}
              style={{ rotate: "90deg" }}
            />
          </div>
          <h2 className='text-4xl text-white absolute top-[170px] left-[52px]'>{pageTitle}</h2>

          
          <div className="mb-32 grid text-center w-[500px] grid-cols-2 absolute top-[250px] left-[50px] gap-5">
            {children}
          </div>
        </div>
      </div>
    )
}

/* 
{pageTitle}例：残高と支出入力
{children}例：<CardBox/>と<MobileBottom />
*/
