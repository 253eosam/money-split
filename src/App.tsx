import { Button } from '@/components/ui/button'
import { create } from 'zustand'

type TStore = {
  bears: number
  increasePopulation: () => void
}

const useStore = create<TStore>((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
}))

function BearCounter() {
  const bears = useStore((state) => state.bears)
  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  return <Button onClick={increasePopulation}>Click me</Button>
}

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <BearCounter />
      <Controls />
    </div>
  )
}

export default App
