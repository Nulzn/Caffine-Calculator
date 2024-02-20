"use client"
import { Input } from "postcss";
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [result, setResult] = useState("");
  const inputCaffine: any = useRef(null);
  const inputKilos: any = useRef(null);

  function CalculateCaffine() {
    const result: number = (4.5 * inputKilos.current.value) / inputCaffine.current.value
    setResult("Resultat: Du kan dricka ungefär " + result.toString().substring(0, 3) + " energidrycker.");
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-6">
      <div className="flex flex-col">
        <span>Koffein</span>
        <input ref={inputCaffine} type="text" placeholder="Mg" className="border-2" />
      </div>
      <div className="flex flex-col">
        <span>Kroppsvikt</span>
        <input ref={inputKilos} type="text" placeholder="Kg" className="border-2" />
      </div>
      <div>
        {(result == "") ? <span>Resultat: ...</span> : <span>{result}</span>}
      </div>
      <button className="bg-green-500 text-white font-bold px-16  py-2 rounded-md hover:opacity-75" onClick={() => CalculateCaffine()}>Räkna ut</button>
    </div>
  )
}