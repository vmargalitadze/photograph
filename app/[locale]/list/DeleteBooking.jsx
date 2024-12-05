"use client";

import { deleteBookingAction } from '@/utils/actions';
import { IconButton } from './Buttons';
import FormContainer from '@/components/image/FormContainer'

function DeleteBooking({ bookingId }) {
  const deleteBooking = () => {
    deleteBookingAction({ bookingId })
      .then(() => console.log('Booking deleted:', bookingId))
      .catch((error) => console.error('Delete failed', error));
  };

  return (
    <FormContainer action={deleteBooking}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

export default DeleteBooking;
