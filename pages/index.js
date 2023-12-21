import Image from 'next/image'
import { Inter } from 'next/font/google'
import CardA from '../components/CardA';
import Card from '../components/Card';
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
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none">

          {/* モバイル：ヘッダー */}
          <div className='relative'>
            <Image
              src="/mobile01.png" // 42kb
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
            <h2 className='text-4xl text-white absolute top-[170px] left-[52px]'>残高と支出入力</h2>

            {/* モバイル：ヒーロー */}
            {/* <div className='absolute top-[225px] left-[36.3px]'>
              <Image
                  src="/catHero2.jpg"
                  alt="heroimage of cat"
                  width={410.8}
                  height={411}
                />
            </div> */}

      {/* コンテンツ */}
      {/* CardBox */}
      <div className="mb-32 grid text-center  w-[500px]  grid-cols-2  absolute top-[250px] left-[50px] gap-5">

        {/* コンテンツ1 */}
        <CardA />

        {/* コンテンツ2 */}
        <Card
          href="/"
          src="/catHero2.jpg"
          alt="cat"
          amountBalance="0"
          category="1" 
          ml="ml-[-81px]"  
        />

        {/* コンテンツ3 */}
        <Card
          href="/"
          src="/catHero2.jpg"
          alt="cat"
          amountBalance="1200"
          category="2"   
        />

        {/* コンテンツ4 */}
        <Card
          href="/"
          src="/catHero2.jpg"
          alt="cat"
          amountBalance="12000"
          category="4" 
          ml="ml-[-81px]"  
        />
      
    

    {/* モバイル：ボトムナビ */}
    <div className='bg-white bg-opacity-90 w-[362px] h-[80px] rounded-b-[32px] absolute top-[505px] left-[-8.5px]'>
      <div className='flex flex-row justify-around items-center h-full'>
        <div>
        <Image
          src="/iconMemo.svg"
          alt="image of cellular"
          width={40}
          height={40}
        />
        <p className='text-[12px]'>入力</p>
        </div>

        <div>
        <Image
          src="/iconList.svg"
          alt="image of wifi"
          width={40}
          height={40}
        />
        <p className='text-[12px]'>一覧</p>
        </div>

        <div>
        <Image
          src="/iconAlbum.svg"
          alt="image of electro"
          width={40}
          height={40}
        />
        <p className='text-[12px]'>アルバム</p>
        </div>
    </div> {/* ここまでモバイルボトムナビ  */}
    </div> {/* card grid ここまで*/}


    </div>








      </div>
    </div>





      </div>

      
    </main>
  )
}
/*
半角&nbsp;

*/