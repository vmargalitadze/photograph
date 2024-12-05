import { TableRow, TableHead } from '@/components/ui/table'
import React from 'react'

function Row() {
  return (
    <TableRow>
    <TableHead>First Name</TableHead>
    <TableHead>Last Name</TableHead>
    <TableHead>Email</TableHead>
    <TableHead>Phone Number</TableHead>
    <TableHead>Delete</TableHead>

  </TableRow>
  )
}

export default Row