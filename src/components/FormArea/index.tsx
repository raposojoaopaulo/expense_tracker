import React from 'react'
import { Item } from '../../types/Item';
import { Container, ButtonSubmit, InputArea, SelectArea } from './styles'
import { categories } from '../../data/categories';
import { newDateAdjusted } from '../../helpers/dateFilter';

type Props = {
  onAdd: (item: Item) => void;
}

export const FormArea = ({ onAdd }: Props) => {

  const [date , setDate] = React.useState('');
  const [category , setCategory] = React.useState('');
  const [title , setTitle] = React.useState('');
  const [value , setValue] = React.useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(date, category, title, value);

    onAdd({
      date: newDateAdjusted(date),
      category: category,
      title: title,
      value: value
    });

    clearFields();
  }

  const clearFields = () => {
    setDate('');
    setCategory('');
    setTitle('');
    setValue(0);
  }

  return (
    <Container>
      <form onSubmit={handleAddEvent}>
        <InputArea 
          type="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <SelectArea 
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>        
          <>
            <option value="">Select Category</option>
            {categoryKeys.map((key, index) => (
            <option key={index} value={key}>{categories[key].title}</option>
            ))}
          </>
        </SelectArea>           
        <InputArea 
          type='text'
          name='title'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <InputArea 
          type='number'
          name='value'
          placeholder='Value'
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
        <ButtonSubmit type="submit">Add new item</ButtonSubmit>
      </form>
    </Container>
  )
}
