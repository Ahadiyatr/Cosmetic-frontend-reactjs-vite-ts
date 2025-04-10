import { z } from "zod";

export const bookingSchema = z.object({
  name: z.string().min(1, "Name is Required"),
  email: z.string().email("Invalid Email"),
  phone: z.string().min(1, "Phone number is Required"),
  post_code: z.string().min(1, "Post code is Required"),
  address: z.string().min(1, "Address is Required"),
  city: z.string().min(1, "City is Required"),
});

export const paymentSchema = z.object({
  proof: z
    .instanceof(File)
    .refine((file) => file.size > 0, "Proof of payment is required"),
});

export const viewBookingSchema = z.object({
  booking_trx_id: z.string().min(1, "Booking TRX is required"),
  email: z.string().min(1, "email number is required"),
});
