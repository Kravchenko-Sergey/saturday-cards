import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Decks } from 'components/tables/decks/decks.tsx'
import { Column, Sort, TableHeader } from 'components/tables/decks/index.tsx'

const meta = {
  title: 'Components/Decks/Tables/Decks',
  component: Decks,
  tags: ['autodocs'],
} satisfies Meta<typeof Decks>

const data = [
  {
    title: 'Project A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Project B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Project C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Project D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Project E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

export const WithSort = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    const columns: Column[] = [
      {
        key: 'name',
        title: 'Name',
        isSortable: true,
      },
      {
        key: 'cardsCount',
        title: 'Cards',
        isSortable: true,
      },
      {
        key: 'updated',
        title: 'Last Updated',
        isSortable: true,
      },
      {
        key: 'createdBy',
        title: 'Created by',
        isSortable: true,
      },
      {
        key: 'options',
        title: '',
      },
    ]

    console.log(sort)

    return (
      <table>
        <TableHeader columns={columns} onSort={setSort} sort={sort} />
        <tbody>
          {data.map(item => (
            <tr key={item.title}>
              <td>{item.title}</td>
              <td>{item.cardsCount}</td>
              <td>{item.updated}</td>
              <td>{item.createdBy}</td>
              <td>icons...</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
