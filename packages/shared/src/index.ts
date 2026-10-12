export enum OrderStatus {
  PENDING = 'pending',
  ACCEPTED = 'accepted',
  PICKED_UP = 'picked_up',
  IN_TRANSIT = 'in_transit',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
}

export type UserRole = 'customer' | 'driver' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
  phone: string;
  createdAt: string;
}

export interface Driver {
  id: string;
  name: string;
  vehicleType: string;
  isAvailable: boolean;
}

export interface Order {
  id: string;
  customerName: string;
  pickupLocation: string;
  dropoffLocation: string;
  itemType: string;
  notes?: string;
  status: OrderStatus;
  driverName: string;
  createdAt: string;
  updatedAt: string;
}
