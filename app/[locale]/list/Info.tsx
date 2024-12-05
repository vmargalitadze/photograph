"use server";
import { TableRow, TableCell } from '@/components/ui/table';
import React from 'react';
import Image from 'next/image';
import DeleteBooking from './DeleteBooking'
import { fetchPhotos } from '@/utils/actions';

async function Info() {
  const photos = await fetchPhotos();

 

  return (
    <>
      {photos.map((item) => {
        const { id,  } = item;
        
        return (
          <TableRow key={id} className="hover:bg-gray-100">
              {photos.map((photo, index) => (
        <div
          key={photo.id}
          className={index % 2 === 1 ? 'tall' : '' } 
        >
          <Image
            src={photo.image}
            alt={`Photo ${photo.id}`}
            width={500}
            height={400}
            className="max-w-full h-auto"
          />
        </div>
      ))}
        
      

            <TableCell><DeleteBooking bookingId={id} /></TableCell>
          </TableRow>
        );
      })}
    </>
  );
}

export default Info;
