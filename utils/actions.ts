'use server'
import { revalidatePath } from 'next/cache';
import { bookingeSchema, imageSchema,  validateWithZod } from "./schemas"
import db from './db';
import { uploadImage } from "./supabase";


const renderError = (error: unknown): { message: string } => {
  console.log(error);
  return {
    message: error instanceof Error ? error.message : 'An error occurred',
  };
};





export const createBookingAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const rawData = Object.fromEntries(formData);

    const validatedFields = validateWithZod(bookingeSchema, rawData);

    await db.booking.create({
      data: validatedFields,
    });


   
    return { message: "მალე დაგიკავშირდებით" };
  } catch (error) {
    return renderError(error);
  }
};


export const createPropertyAction = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  try {
    const file = formData.get('image') as File;

    const validatedFile = validateWithZod(imageSchema, { image: file });
    const fullPath = await uploadImage(validatedFile.image);

    await db.photo.create({
      data: {
        image: fullPath,
      },
    });

    
    return { message: 'Photo successfully created!' };
  } catch (error) {
    return renderError(error);
  }
};

export const fetchPhotos = async () => {
  const properties = await db.photo.findMany({
  
    select: {
      id: true,
     
      image: true,
    
    },
  });
  return properties;
};


export async function deleteInfoAction(prevState: { bookingId: string }) {
  const { bookingId } = prevState;


  try {
    const result = await db.booking.delete({
      where: {
        id: bookingId,
      
      },
    });

    revalidatePath('/admin');
    return { message: 'Booking deleted successfully' };
  } catch (error) {
    console.error("Error deleting booking:", error);  
    return { message: 'Failed to delete booking',  };
  }
}


export async function deleteBookingAction(prevState: { bookingId: string }) {
  const { bookingId } = prevState;


  try {
    const result = await db.photo.delete({
      where: {
        id: bookingId,
      
      },
    });

    revalidatePath('/admin');
    return { message: 'Booking deleted successfully' };
  } catch (error) {
    console.error("Error deleting booking:", error);  
    return { message: 'Failed to delete booking',  };
  }
}

export const fetchBooking = async () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 6);

  try {
    const bookings = await db.booking.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phoneNumber: true,
       
      },
    });
    
    
    return bookings;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    throw error;
  }
};

