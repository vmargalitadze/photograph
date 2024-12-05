import { Booking } from '@/utils/types';
import { create } from 'zustand';


type InfoState = {
  bookings: Booking[];
  date: string | undefined; 
};

export const useProperty = create<InfoState>((set) => ({
  bookings: [],
  date: undefined,
}));
