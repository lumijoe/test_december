// components/NavBottom.js

import React from 'react';
import Image from 'next/image';

export default function NavBottom() {
    return(
        <div className='bg-white bg-opacity-90 w-[362px] h-[80px] rounded-b-[32px] absolute top-[505px] left-[-8.5px]'>
            <div className='flex flex-row justify-around items-center h-full'>
                {/* 入力 */}
                <div>
                    <Image
                        src="/iconMemo.svg"
                        alt="image of cellular"
                        width={40}
                        height={40}
                    />
                    <p className='text-[12px]'>入力</p>
                </div>

                {/* 一覧 */}
                <div>
                    <Image
                    src="/iconList.svg"
                    alt="image of wifi"
                    width={40}
                    height={40}
                    />
                    <p className='text-[12px]'>一覧</p>
                </div>

                {/* アルバム */}
                <div>
                    <Image
                    src="/iconAlbum.svg"
                    alt="image of electro"
                    width={40}
                    height={40}
                    />
                    <p className='text-[12px]'>アルバム</p>
                </div>
            </div>
        </div>
    )
}