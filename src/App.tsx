import { useState, useEffect } from 'react';

import { Container, Header, HeaderText, Body } from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items'
import { categories } from './data/categories'
import { TableArea } from './components/TableArea'

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter' ;


const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  return (
    <Container>
      <Header>
        <HeaderText>Expense Tracker</HeaderText>
      </Header>
      <Body>
        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
}

export default App;