import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '../components/Card';


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
            {/* card/grid */}
      <div className="mb-32 grid text-center lg:max-w-3xl w-[500px] lg:mb-0 grid-cols-2 lg:text-left absolute top-[250px] left-[50px] gap-5">

        {/* コンテンツ１ */}
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent  pb-4 border-gray-300 max-w-[165px] shadow-lg" 
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Image
              src="/catHero2.jpg"
              alt="heroimage of cat"
              width={165}
              height={165}
              className='rounded-t-lg'
          />
          <div className='mx-3'>
          <h2 className={`mb-3 text-2xl`}>
           {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ¥0
            </span>
          </h2>
          <p className={`m-0  text-sm opacity-50`}>
           1
          </p>
          </div>
        </a>

        {/* コンテンツ２ */}
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent  ml-[-81px] pb-4 border-gray-300 max-w-[165px] shadow-lg" 
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Image
              src="/catHero2.jpg"
              alt="heroimage of cat"
              width={165}
              height={165}
              className='rounded-t-lg'
          />
          <div className='mx-3'>
          <h2 className={`mb-3 text-2xl`}>
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ¥1200
            </span>
          </h2>
          <p className={`m-0  text-sm opacity-50`}>
          2
          </p>
          </div>
        </a>

        {/* コンテンツ３ */}
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent  pb-4 border-gray-300 max-w-[165px] shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Image
              src="/catHero2.jpg"
              alt="heroimage of cat"
              width={165}
              height={165}
              className='rounded-t-lg'
          />
          <div className='mx-3'>
          <h2 className={`mb-3 text-2xl`}>
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
             ¥12000
            </span>
          </h2>
          <p className={`m-0  text-sm opacity-50`}>
          3
          </p>
          </div>
        </a>

        {/* コンテンツ４ */}
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent ml-[-81px] pb-4 border-gray-300 max-w-[165px] shadow-lg" 
          target="_blank"
          rel="noopener noreferrer"
        > 
          <Image
              src="/catHero2.jpg"
              alt="heroimage of cat"
              width={165}
              height={165}
              className='rounded-t-lg'
          />
          <div className='mx-3'>
          <h2 className={`mb-3 text-2xl`}>
            {' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              ¥560
            </span>
          </h2>
          <p className={`m-0  text-sm opacity-50`}>
          4
          </p>
          </div>
        </a>

        {/* コンテンツ５ */}
        <Card
          href="/"
          src="/catHero2.jpg"
          alt="cat"
          amountBalance="1200"
          category="5"   
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