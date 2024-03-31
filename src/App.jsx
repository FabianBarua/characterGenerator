import { Actions } from './components/Actions.jsx'
import { RightAside } from './components/RightAside.jsx'
import { variationsStore } from './utils/stores/variationsStore.js'
function App () {
  const { selected } = variationsStore()
  const selectedArraySorted = Object.entries(selected).sort((a, b) => a[1].index - b[1].index)
  return (
    <>

      <main className=' flex sm:flex-row flex-col gap-3'>
        <section className=' flex  flex-col gap-2'>
          <div className='w-[257px] mx-auto bg-default-50 relative rounded-md overflow-hidden h-[273px] '>

            {
              selectedArraySorted.map(([key, value]) => {
                return ((value.path) ? <img className='absolute w-full h-full' key={key} src={value.path} alt={key} /> : null)
              })
            }

          </div>
          <Actions />
        </section>
        <RightAside />
      </main>
    </>
  )
}

export default App
