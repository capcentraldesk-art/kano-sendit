import { Controller, Get, Param, Patch, Post, Body } from '@nestjs/common';
import { AppService, CreateOrderDto, UpdateOrderStatusDto } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  getHealth() {
    return { status: 'ok', service: 'kano-sendit-api' };
  }

  @Get('orders')
  getOrders() {
    return this.appService.getOrders();
  }

  @Post('orders')
  createOrder(@Body() payload: CreateOrderDto) {
    return this.appService.createOrder(payload);
  }

  @Patch('orders/:id/status')
  updateOrderStatus(
    @Param('id') id: string,
    @Body() payload: UpdateOrderStatusDto,
  ) {
    return this.appService.updateOrderStatus(id, payload.status);
  }
}
