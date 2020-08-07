import React, { useState } from 'react'

import BoardContext from './context'
import { loadLists } from '../../services/api'
import List from '../List'
import produce from 'immer'

import { Container } from './styles'

const data = loadLists()

const Board = () => {

  const [lists, setLists] = useState(data)

  const move = (fromList, toList, from, to) => {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from]

      draft[fromList].cards.splice(from, 1)
      draft[toList].cards.splice(to, 0, dragged)
    }))
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List listIndex={index} key={list.title} data={list} />)}
      </Container>
    </BoardContext.Provider>
  )
}

export default Board
