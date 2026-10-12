export class CreateOrderDto {
  customerName: string;
  pickupLocation: string;
  dropoffLocation: string;
  itemType: string;
  notes?: string;
}
