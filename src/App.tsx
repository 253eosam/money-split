import { Button } from '@/components/ui/button'
import { useCallback, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const addCount = useCallback(() => setCount(pre => pre+1), [])

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>{count}</p>
      <Button onClick={addCount}>Click me</Button>
    </div>
  )
}

export default App
