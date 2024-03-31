import { Button, Skeleton } from '@nextui-org/react'

const MakeSkeleton = ({ isLoaded }) => {
  return (
    <>
      {[1, 2, 3, 4, 5].map((key) => (
        <Skeleton key={key} isLoaded={isLoaded} className='rounded-lg'>
          <div className='h-8 w-full rounded-lg bg-secondary' />
        </Skeleton>
      ))}
    </>
  )
}

export const VariationsItems = ({ items, selected, setSelected }) => {
  const handleClick = (item) => {
    setSelected(item !== selected ? item : null)
  }

  return (
    <>
      {items
        ? items.map(({ name }) =>
          <Button key={name} size='sm' variant={name === selected ? 'solid' : 'ghost'} color='primary' className=' border border-primary-400' onClick={() => { handleClick(name) }}>{name}</Button>
        )
        : <MakeSkeleton isLoaded={items} />}
    </>
  )
}
