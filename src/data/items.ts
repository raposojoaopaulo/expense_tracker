import { Item } from "../types/Item";

export const items: Item[]  = [
  {
    date: new Date(2022, 7, 12),
    category: 'food',
    title: 'Sushi',
    value: 64.90
  },
  {
    date: new Date(2022, 7, 15),
    category: 'food',
    title: 'ceviche at zé miranda',
    value: 99
  },
  {
    date: new Date(2022, 7, 4),
    category: 'invoices',
    title: 'electricity invoices',
    value: 250.35
  },
  {
    date: new Date(2022, 7, 1),
    category: 'salary',
    title: 'salary of the month',
    value: 2000
  }
];