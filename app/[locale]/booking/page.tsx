import { Table, TableBody, TableCaption, TableHeader } from '@/components/ui/table'
import Info from './Info'
import React from 'react'
import Row from '../list/Row'

function page() {
  return (
    <div className="flex   flex-col justify-center ">
      <div className="container mx-auto px-4 sm:px-8 mt-40">

    <Table className="w-full sm:p-4">
      <TableCaption>A list of recent Reservations</TableCaption>
      <TableHeader>
    <Row />
      </TableHeader>
      <TableBody>
       <Info />
      </TableBody>
    </Table>
      </div>
          
  </div>
  )
}

export default page