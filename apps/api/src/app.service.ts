import { Injectable } from '@nestjs/common';
import { OrderStatus, type Order } from '@kano-sendit/shared';

export type CreateOrderDto = {
  customerName: string;
  pickupLocation: string;
  dropoffLocation: string;
  itemType: string;
  notes?: string;
};

export type UpdateOrderStatusDto = {
  status: OrderStatus;
};

@Injectable()
export class AppService {
  private orders: Order[] = [
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

  getOrders(): Order[] {
    return this.orders;
  }

  createOrder(payload: CreateOrderDto): Order {
    const order: Order = {
      id: `ord_${Date.now()}`,
      customerName: payload.customerName,
      pickupLocation: payload.pickupLocation,
      dropoffLocation: payload.dropoffLocation,
      itemType: payload.itemType,
      notes: payload.notes ?? '',
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
