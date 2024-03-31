import { create } from 'zustand'
import { getDefault, getRandom, getSelected } from '../services/random'

export const variationsStore = create((set) => ({
  variations: null,
  selected: {},
  updateSelected: (key, value, indexValue) => {
    const index = variationsStore.getState().variations?.[key]?.index

    set((state) => ({
      selected:
        { ...state.selected, [key]: ({ path: value, index: indexValue || index }) }
    }
    ))
    localStorage.setItem('selected', JSON.stringify(variationsStore.getState().selected))
  }
}))

getRandom().then((data) => { variationsStore.setState({ variations: data }) })
variationsStore.setState({ selected: getSelected() || {} })

variationsStore.getState()
  . updateSelected('Default', getDefault(), 1)
