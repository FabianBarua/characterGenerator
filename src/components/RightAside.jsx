import { variationsStore } from '../utils/stores/variationsStore'
import { useState } from 'react'
import { VariationsItems } from './VariationsItems'
import { NoSelected } from './NoSelected'
import { ShowVariations } from './ShowVariations'

export const RightAside = () => {
  const { variations } = variationsStore()
  const [selected, setSelected] = useState(null)
  return (
    <aside className=' gap-2 flex flex-col'>
      <h2 className=' w-full text-center mb-2'>Customize look 🎉</h2>
      <div className=' grid grid-cols-3 gap-2 w-unit-6xl '>
        <VariationsItems items={variations?.items} selected={selected} setSelected={setSelected} />
      </div>
      <div>
        {selected ? <ShowVariations selectedGroup={selected} /> : <NoSelected />}
      </div>
    </aside>
  )
}
