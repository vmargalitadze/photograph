import React from 'react'
import DeleteBooking from './DeleteBooking'
import { fetchPhotos } from '@/utils/actions';

async function ImageList() {
  const photos = await fetchPhotos();
  return (
<div className="flex  items-center flex-col justify-around min-h-screen px-4">
  <div className="grid mt-20 w-full sm:grid-cols-1 md:grid-cols-1">
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    className="px-5 w-full py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Image
                  </th>
                  <th
                    className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {photos.map((photo) => (
                  <tr key={photo.id}>
              
                    <td className="px-5 py-5 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-24 h-24">
                          <img
                            className="w-full h-full rounded-full"
                            src={photo.image}
                            alt={`Photo ${photo.id}`}
                          />
                        </div>
                      </div>
                    </td>

                 
                    <td className="px-5 py-5 bg-white text-sm text-right">
                      <DeleteBooking bookingId={photo.id} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}

export default ImageList