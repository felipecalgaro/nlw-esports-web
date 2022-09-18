import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";

interface Game {
  id: string
  title: string
}


export function CreateAdModal() {
  const [games, setGames] = useState<Game[]>([])
  const [weekDays, setWeekDays] = useState<string[]>([])
  const [useVoiceChannel, setUseVoiceChannel] = useState(false)

  async function handleCreateAd(e: FormEvent) {
    e.preventDefault()

    const formData = new FormData(e.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.name) return

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name: data.name,
        yearsPlaying: Number(data.yearsPlaying),
        discord: data.discord,
        weekDays: weekDays.map(Number),
        hourStart: data.hourStart,
        hourEnd: data.hourEnd,
        useVoiceChannel: useVoiceChannel
      })

      alert('Ad successfully created!')
    } catch (err) {
      console.log(err);
      alert('Error while creating ad.')
    }
  }

  useEffect(() => {
    axios('http://localhost:3333/games')
      .then(res => setGames(res.data))
  }, [])

  return (
    <Dialog.Portal>
      <Dialog.Overlay className='bg-black/60 inset-0 fixed' />

      <Dialog.Content className='fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
        <Dialog.Title className='text-3xl font-black'>Publish an ad</Dialog.Title>

        <form onSubmit={handleCreateAd} className='mt-8'>
          <div className='flex flex-col gap-2'>
            <label htmlFor="game" className='font-semibold'>What's the game?</label>
            <select
              name="game"
              id="game"
              className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
              defaultValue=''
            >
              <option disabled value=''>Select the game you want to play</option>

              {games.map(game => (
                <option key={game.id} value={game.id}>{game.title}</option>
              ))}
            </select>
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="name">What's your name (or nickname)?</label>
            <Input name="name" id="name" placeholder='How are you called?' />
          </div>

          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="yearsPlaying">How long do you play it?</label>
              <Input type='number' name="yearsPlaying" id="yearsPlaying" placeholder="It's okay to be zero!" />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="discord">What's your discord?</label>
              <Input name="discord" id="discord" placeholder="User#0000" />
            </div>
          </div>

          <div className='flex gap-6'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="weekDays">When do you usually play?</label>
              <Input type='number' id="weekDays" placeholder="It's okay to be zero!" />

              <ToggleGroup.Root
                className='grid grid-cols-4 gap-2'
                type="multiple"
                onValueChange={setWeekDays}
                value={weekDays}
              >
                <ToggleGroup.Item
                  value='0'
                  className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  title='Sunday'
                >
                  S
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='1'
                  className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  title='Monday'
                >
                  M
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='2'
                  className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  title='Tuesday'
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='3'
                  className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  title='Wednesday'
                >
                  W
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='4'
                  className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  title='Thursday'
                >
                  T
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='5'
                  className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  title='Friday'
                >
                  F
                </ToggleGroup.Item>
                <ToggleGroup.Item
                  value='6'
                  className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}
                  title='Saturday'
                >
                  S
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>
            <div className='flex flex-col gap-2 flex-1'>
              <label htmlFor="hourStart">What time?</label>
              <div className='grid grid-cols-2 gap-2'>
                <Input type='time' name="hourStart" id="hourStart" placeholder="From" />
                <Input type='time' name="hourEnd" id="hourEnd" placeholder="To" />
              </div>
            </div>
          </div>

          <label className='mt-2 flex items-center gap-2 text-sm'>
            <Checkbox.Root
              checked={useVoiceChannel}
              className="w-6 h-6 p-1 rounded bg-zinc-900"
              onCheckedChange={checked => checked ? setUseVoiceChannel(true) : setUseVoiceChannel(false)}
            >
              <Checkbox.Indicator>
                <Check className="h-4 w-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            I use voice chat
          </label>

          <footer className='mt-4 flex justify-end gap-4'>
            <Dialog.Close className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'>Cancel</Dialog.Close>
            <button className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' type="submit">
              <GameController className='w-6 h-6' />
              Find my duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}