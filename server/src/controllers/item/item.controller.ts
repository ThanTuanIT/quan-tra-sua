import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemModel } from 'src/models/item.model';
import { ItemService } from 'src/services/item/item.service';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  @Get()
  getAllItems() {
    return this.itemService.getAllItems();
  }

  @Get('/:id')
  getItemById(@Param('id') id : string) {
    return this.itemService.getItemById(id);
  }

  @Post('/create')
  createItem(@Body() item: ItemModel) {
    return this.itemService.createItem(item);
  }

  @Put('/update')
  updateItem(@Body() item:ItemModel) {
    return this.itemService.updateItem(item);
  }


  @Delete('/delete/:id')
  deleteItemById(@Param('id') id:string) {
    return this.itemService.deleteItemById(id);
  }
}
