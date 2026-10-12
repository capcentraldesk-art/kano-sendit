import { Injectable } from '@nestjs/common';
import { OrderStatus } from '@kano-sendit/shared';

export type OrderRecord = {
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
};

@Injectable()
export class OrdersService {
  private orders: OrderRecord[] = [
    {
      id: 'ord_1001',
      customerName: 'Maryam Yusuf',
      pickupLocation: 'Sabon Gari',
      dropoffLocation: 'Kano Municipal',
      itemType: 'Package',
      notes: 'Fragile items',
      status: OrderStatus.PENDING,
      driverName: 'Ali Sani',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 'ord_1002',
      customerName: 'Ibrahim M',
      pickupLocation: 'Fagge',
      dropoffLocation: 'Nassarawa',
      itemType: 'Food',
      status: OrderStatus.ACCEPTED,
      driverName: 'Zainab Yakubu',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];

  getOrders() {
    return this.orders;
  }

  createOrder(dto: {
    customerName: string;
    pickupLocation: string;
    dropoffLocation: string;
    itemType: string;
    notes?: string;
  }) {
    const order: OrderRecord = {
      id: `ord_${Date.now()}`,
      customerName: dto.customerName,
      pickupLocation: dto.pickupLocation,
      dropoffLocation: dto.dropoffLocation,
      itemType: dto.itemType,
      notes: dto.notes,
      status: OrderStatus.PENDING,
      driverName: 'Awaiting assignment',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.orders.unshift(order);
    return order;
  }

  updateOrderStatus(id: string, status: OrderStatus) {
    const order = this.orders.find((entry) => entry.id === id);

    if (!order) {
      return { message: 'Order not found' };
    }

    order.status = status;
    order.updatedAt = new Date().toISOString();
    return order;
  }
}
