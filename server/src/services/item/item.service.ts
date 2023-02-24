import { Injectable } from '@nestjs/common';
import { ItemModel } from 'src/models/item.model';

@Injectable()
export class ItemService {
  itemList: ItemModel[] = [
    {
      id: 1,
      name: 'Trà Sữa Berry Berry',
      price: 60000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/4bab552f7ed0a6-trasuaberryberry60000839.png',
    },
    {
      id: 2,
      name: 'Caramen Chảy',
      price: 50000,
      quantity: 1,
      image:'https://phuclong.com.vn/uploads/dish/8e9e15c6b9704d-cafe5mon03.png',
    },
    {
      id: 3,
      name: 'Cappuchino - Vietnamo',
      price: 45000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/90405a9f256f11-cafe5mon04.png'
    },
    {
      id: 4,
      name: 'Latte Latte',
      price: 45000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/8a92bb4b37c012-cafe5mon01.png'
    },
    {
      id: 5,
      name: 'Ngọc Viễn Đông',
      price: 30000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/6e1c837ccd02b3-cafe5mon05.png'
    },
    {
      id: 6,
      name: 'Phin Sữa Đá - Năng Lượng',
      price: 34363,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/8ebb07f0eeccc1-resize_damdadunggu07.png'
    },
    {
      id: 7,
      name: 'Phin Đen Đá - Đậm Đà',
      price: 34363,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/4521f4c77fc38a-cf67efb06d5aa504fc4b.png'
    },
    {
      id: 8,
      name: 'Sữa Chua Phúc Bồn Tử Đác Cam',
      price: 70000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/4136b3715bff3e-sachuaphcbntccamphclong.png'
    },
    {
      id: 9,
      name: 'Sữa Chua Xoài Đác Thơm',
      price: 70000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/65a7d028c2229d-sachuaxoicthmphclong.png'
    },
    {
      id: 10,
      name: 'Trà Đài Đác Thơm',
      price: 50000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/b8f1dd4d4f583c-dacthom.png'
    },
    {
      id: 11,
      name: 'Trà Sữa FULL Topping',
      price: 50000,
      quantity: 1,
      image: 'https://vungtaureview.vn/attachments/1ab74c13-d775-4429-840f-eb277bc7c9bd-jpeg.2651/'
    },
    {
      id: 12,
      name: 'Hồng Trà Đác Cam',
      price: 70000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/dae727e03e8092-daccam.png'
    },
    {
      id: 13,
      name: 'Hồng Trà Sữa',
      price: 45000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/3c2d50a2c26783-hngtrsaphclongtrosaphclong.png'
    },
    {
      id: 14,
      name: 'Sinh Tố Dâu',
      price: 55000,
      quantity: 1,
      image: 'https://phuclong.com.vn/uploads/dish/4a625d6564e694-sinhtdu.png'
    }
  ];

  getAllItems(): ItemModel[] {
    return this.itemList;
  }

  getItemById(id: string): ItemModel {
    return this.itemList.find((item) => item.id === parseInt(id));
  }

  createItem(item: ItemModel): string {
    this.itemList.push(item);
    return 'Created Successfully!';
  }

  updateItem(itemUpdate: ItemModel): string {
    const index = this.itemList.findIndex((item) => item.id === itemUpdate.id);
    this.itemList[index] = itemUpdate;
    return 'Updated Successfully!';
  }

  deleteItemById(id: string): string {
    const index = this.itemList.findIndex((item) => item.id === parseInt(id));
    if (index === -1) {
      return 'Item not found!';
    }
    this.itemList.splice(index, 1);
    return 'Deleted Successfully!';
  }
}
