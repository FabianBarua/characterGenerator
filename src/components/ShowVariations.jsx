import { variationsStore } from '../utils/stores/variationsStore'
import { Image } from '@nextui-org/react'
import { Check } from './Check'
export const ShowVariations = ({ selectedGroup }) => {
  const { variations, updateSelected, selected } = variationsStore()
  const paths = variations?.[selectedGroup].paths

  const handleClick = (key, value) => {
    if (selected[key]?.path === value) {
      updateSelected(key, null)
      return
    }
    updateSelected(key, value)
  }

  return (
    <div
      className=' grid grid-cols-4 place-items-center gap-2'
    >
      {paths.map((path, index) => ((path)
        ? <div
            key={index}
            onClick={() => handleClick(selectedGroup, path.png)}
            className=' relative hover:bg-default-100 bg-default-50  cursor-pointer transition-colors duration-300 ease-in rounded-md'
          >
          {
              selected[selectedGroup]?.path === path.png
                ? <Check />
                : null
          }
          <Image
            src={path.svg}
            alt=''
            width={64}
            height={64}
            className='  p-2 w-16 h-16 object-scale-down '
          />
        </div>
        : null))}
    </div>
  )
}
