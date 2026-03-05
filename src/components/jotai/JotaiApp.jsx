import { atom, useAtom } from "jotai"
import Counter from "./Counter"
import {counterAtom } from "./Atoms"
import DoubleCounter from "./DoubleCounter"

const JotaiApp = () => {
    const [count]=useAtom(counterAtom)
  return (
    <div>
      <h1>{count}</h1>
      <Counter/>
      <DoubleCounter/>
    </div>
  )
}

export default JotaiApp
