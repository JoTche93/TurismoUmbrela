import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Booking {
  id: string;
  userId: string;
  serviceId: string;
  serviceType: 'excursion' | 'accommodation' | 'dining';
  serviceName: string;
  date: {
    start: string;
    end: string;
  };
  guests: number;
  totalAmount: number;
  currency: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: string;
}

interface BookingState {
  bookings: Booking[];
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
  getUserBookings: (userId: string) => Booking[];
  cancelBooking: (bookingId: string) => void;
  updateBookingStatus: (bookingId: string, status: Booking['status']) => void;
}

export const useBookingStore = create<BookingState>()(
  persist(
    (set, get) => ({
      bookings: [],
      addBooking: (bookingData) => {
        const newBooking: Booking = {
          ...bookingData,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          status: 'confirmed'
        };
        
        set((state) => ({
          bookings: [...state.bookings, newBooking]
        }));
      },
      getUserBookings: (userId) => {
        return get().bookings
          .filter(booking => booking.userId === userId)
          .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      },
      cancelBooking: (bookingId) => {
        set((state) => ({
          bookings: state.bookings.map(booking =>
            booking.id === bookingId
              ? { ...booking, status: 'cancelled' }
              : booking
          )
        }));
      },
      updateBookingStatus: (bookingId, status) => {
        set((state) => ({
          bookings: state.bookings.map(booking =>
            booking.id === bookingId
              ? { ...booking, status }
              : booking
          )
        }));
      }
    }),
    {
      name: 'bookings-storage'
    }
  )
);