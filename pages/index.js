// pages/index.js

import Image from 'next/image'
import { Inter } from 'next/font/google'
import MobileBottom from '../components/MobileBottom';
import MobileHeader from '../components/MobileHeader';


import CardBox from '../components/CardBox';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">


        {/* アイコンとタイトル */}
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Image
            src="/iconCat.png" // 35kb
            width={70}
            height={70}
            alt="image of app"
        />
        <div>
          <code className="font-mono font-bold text-5xl ml-3">CashNyan</code>
          <p className='ml-5'>キャッシュニャン</p></div>
        </div>



        {/* モバイル */}
        <MobileHeader
        pageTitle="残高と支出入力"
        >
          <CardBox />
          <MobileBottom />
        </MobileHeader>
       
      </div>

    </main>
  )
}


/*
半角&nbsp;
 モバイル：ヒーロー 
            {/* <div className='absolute top-[225px] left-[36.3px]'>
              <Image
                  src="/catHero2.jpg"
                  alt="heroimage of cat"
                  width={410.8}
                  height={411}
                />
            </div>

*/