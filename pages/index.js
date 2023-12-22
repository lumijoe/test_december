// pages/index.js

import React from 'react';
import { Inter } from 'next/font/google';
import MobileBottom from '../components/MobileBottom';
import MobileHeader from '../components/MobileHeader';
import CardBox from '../components/CardBox';
import Header from '../components/Header';


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        {/* アプリタイトル、ヘッダー */}
        <Header />
        {/* モバイルビジュアル */}
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
