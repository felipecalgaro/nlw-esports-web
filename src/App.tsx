import './styles/main.css'
import LogoImg from './assets/logo-nlw.svg';
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>

      <img src={LogoImg} alt="logo" />

      <h1 className='text-6xl text-white font-black mt-20'>Your <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> is here</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 1.png" alt="game" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolue bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>LOL</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 2.png" alt="game" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolue bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 3.png" alt="game" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolue bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 5.png" alt="game" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolue bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 6.png" alt="game" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolue bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

        <a href="" className='relative rounded-lg overflow-hidden'>
          <img src="/image 7.png" alt="game" />

          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolue bottom-0 left-0 right-0">
            <strong className='font-bold text-white block'>Game</strong>
            <span className='text-zinc-300 text-sm block'>4 anúncios</span>
          </div>
        </a>

      </div>

      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div className='bg-[#2a2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Have not found your duo yet?</strong>
            <span className='text-zinc-400 block'>Publish an advertisement to meet new players!</span>
          </div>
          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publish ad
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
