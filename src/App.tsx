import './styles/main.css'
import LogoImg from './assets/logo-nlw.svg';
import { DotsThree, GameController, MagnifyingGlassPlus } from "phosphor-react";
import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog'
import { Input } from './components/Form/Input';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';

interface Game {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(res => setGames(res.data))
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>

      <img src={LogoImg} alt="logo" />

      <h1 className='text-6xl text-white font-black mt-20'>Your <span className='bg-nlw-gradient text-transparent bg-clip-text'>duo</span> is here</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
              key={game.id}
            />
          )
        })}

        <Dialog.Root>
          <CreateAdBanner />

          <CreateAdModal />
        </Dialog.Root>
      </div>
    </div>
  )
}

export default App
