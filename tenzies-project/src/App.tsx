import { useState, useRef, useEffect, JSX } from 'react';
import Die from './components/Die';
import { nanoid } from 'nanoid';

type diceType = {
  value: number,
  isHeld: boolean,
  id: string
}

function App() {

  const [dice, setDice] = useState<diceType[]>(getRandom())

  const buttonRef = useRef<HTMLButtonElement | null>(null)
  console.log(buttonRef)

  const gameWon: boolean = dice.every((die: diceType): boolean => die.isHeld) && dice.every((die: diceType): boolean => die.value === dice[0].value)

  useEffect(() => {
    if (gameWon) {
      if (buttonRef.current) {
        buttonRef.current.focus()
        buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }, [gameWon])

  function getRandom(): diceType[] {
    const randomList: diceType[] = [];
    for (let i = 0; i < 10; i++) {
      const randomValue: number = Math.floor(Math.random() * 6) + 1
      randomList.push({
        value: randomValue,
        isHeld: false,
        id: nanoid()
      })
    }
    return randomList
  }

  const diceElement: JSX.Element[] = dice.map((val: diceType): JSX.Element => <Die
    key={val.id}
    {...val}
    hold={() => hold(val.id)} />)

  function rollDice(): void {
    if (gameWon) {
      setDice(getRandom())
    } else {
      setDice(old => (old.map(val => (val.isHeld === true ? val : { ...val, value: Math.floor(Math.random() * 6) + 1 }
      ))
      ))
    }
  }

  function hold(key: string): void {
    setDice(old => {
      return old.map(val => {
        return val.id === key ? { ...val, isHeld: !val.isHeld } : val
      })
    })
  }

  return (
    <main>
      <div aria-live='polite' className='sr-only'>
        {gameWon && <p>You Won!. Press new game to start a new game.</p>}
      </div>
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <section className='die-section'>
        {diceElement}
      </section>
      <button ref={buttonRef} className='roll-dice' onClick={rollDice}>{gameWon ? 'New Game' : 'Roll Dice'}</button>
    </main>
  );
}

export default App;