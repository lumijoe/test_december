// components/Header.js

import React from 'react';
import Image from 'next/image';

export default function Header() {
    return(
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            <Image
                src="/iconCat.png" // 35kb
                width={70}
                height={70}
                alt="image of app"
        />
            <div>
                <code className="font-mono font-bold text-5xl ml-3">CashNyan</code>
                <p className='ml-5'>キャッシュニャン</p>
            </div>
        </div>
    ) 
}