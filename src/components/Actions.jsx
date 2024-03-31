import { Button } from '@nextui-org/react'
import mergeImages from 'merge-images'
import { variationsStore } from '../utils/stores/variationsStore'
import { GenerateIcon, SaveIcon } from './Icons'

export const Actions = () => {
  const { selected, variations, updateSelected } = variationsStore()

  const handleGenerate = () => {
    const keys = variations.items
    keys.forEach(({ name, index }) => {
      const x = variations[name].paths[Math.floor(Math.random() * variations[name].paths.length)].png
      updateSelected(name, x, index)
    })
  }

  const handleSave = () => {
    const selectedArraySorted = Object.entries(selected).sort((a, b) => a[1].index - b[1].index)
    const images = selectedArraySorted.map(([key, value]) => value.path)
    mergeImages(images, { width: 257 * 2, height: 273 * 2 }).then((b64) => {
      const link = document.createElement('a')
      link.href = b64
      link.download = 'image.png'
      link.click()
    })
  }

  return (
    <article className=' gap-2 flex'>
      <Button startContent={<GenerateIcon />} size='sm' variant='flat' color='primary' className=' w-full' onClick={handleGenerate} auto>Generate</Button>
      <Button startContent={<SaveIcon />} size='sm' variant='flat' color='primary' className=' w-full' onClick={handleSave} auto>Save</Button>
    </article>
  )
}
