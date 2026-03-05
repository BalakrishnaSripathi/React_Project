import { useAtom } from 'jotai'
import { doubleCounterAtom } from './Atoms'

const DoubleCounter = () => {
    const [doubleCounter]=useAtom(doubleCounterAtom)
  return (
    <div>
      {doubleCounter}
    </div>
  )
}

export default DoubleCounter
