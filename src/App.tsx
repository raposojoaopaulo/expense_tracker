import { useState, useEffect } from 'react';

import { Container, Header, HeaderText, Body } from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { items } from './data/items'
import { categories } from './data/categories'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea';

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter' ;


const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList) {
      if(categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setExpense(expenseCount);
    setIncome(incomeCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <Container>
      <Header>
        <HeaderText>Expense Tracker</HeaderText>
      </Header>
      <Body>
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <TableArea list={filteredList} />
      </Body>
    </Container>
  );
}

export default App;