import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'iPhone 14 Pro Max',
      description: 'The latest iPhone with A16 Bionic chip and Dynamic Island',
      rating: 4.9,
      images: [
        'https://cdn1.technopark.ru/technopark/photos_resized/product/1000_1000/685060/3_685060.jpeg'
      ],
      price: 700000,
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000'
    },
    {
      name: 'MacBook Air M2',
      description: 'Ultra-thin laptop with M2 chip for outstanding performance',
      rating: 4.8,
      images: [
        'https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SX679_.jpg'
      ],
      price: 850000,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mly13-105933751/?c=750000000'
    },
    {
      name: 'Dyson V15 Detect Vacuum Cleaner',
      description: 'Powerful vacuum cleaner with laser dust detection',
      rating: 4.7,
      images: [
        'https://cdn1.ozone.ru/s3/multimedia-n/6426763211.jpg'
      ],
      price: 450000,
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=750000000'
    },
    {
      name: 'Apple Watch Ultra',
      description: 'Advanced sports watch for outdoor activities',
      rating: 4.9,
      images: [
        'https://cdn1.ozone.ru/s3/multimedia-g/6458743372.jpg'
      ],
      price: 420000,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-medium-alpine-loop-seryi-belyi-106667190/?c=750000000'
    },
    {
      name: 'Sony PlayStation 5',
      description: 'Next-gen console with stunning graphics and fast loading times',
      rating: 4.8,
      images: [
        'https://ir.ozone.ru/s3/multimedia-n/6605750507.jpg'
      ],
      price: 380000,
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-geimpad-fifa-23-ps5-106889399/?c=750000000'
    },
    {
      name: 'Canon PowerShot G7X Mark III',
      description: 'Compact camera with 4K video recording and flip screen',
      rating: 4.7,
      images: [
        'https://avatars.mds.yandex.net/get-mpic/7728649/img_id6497857035790615394.jpeg/orig'
      ],
      price: 400000,
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7x-mark-ii-chernyi-2200949/?c=750000000'
    },
    {
      name: 'Dyson Supersonic Hair Dryer',
      description: 'Fast-drying hair dryer with intelligent heat control',
      rating: 4.9,
      images: [
        'https://img.mvideo.ru/Pdb/400180609b.jpg'
      ],
      price: 200000,
      link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd08-fen-1600-vt-108433915/?c=750000000'
    },
    {
      name: 'Swarovski Crystal',
      description: 'Elegant bracelet with Swarovski crystals',
      rating: 4.8,
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p4a/pf0/17502596.png?format=gallery-large'
      ],
      price: 100000,
      link: 'https://kaspi.kz/shop/p/swarovski-5677813-dlina-24-sm-juvelirnyi-splav-kristally-swarovski-tsirkonii-132674751/?c=750000000'
    },
    {
      name: 'iPad Pro',
      description: 'Powerful tablet with M2 chip and Liquid Retina XDR display',
      rating: 4.9,
      images: [
        'https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg'
      ],
      price: 500000,
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-wi-fi-11-11-djuim-8-gb-256-gb-chernyi-119774227/?c=750000000'
    },
    {
      name: 'Sony WH-CH520 Earbuds',
      description: 'True wireless noise-cancelling earbuds with excellent sound quality',
      rating: 4.8,
      images: [
        'https://cdn1.ozone.ru/s3/multimedia-7/c600/6489736807.jpg'
      ],
      price: 20000,
      link: 'https://kaspi.kz/shop/p/sony-wh-ch520-sinii-113518221/?c=750000000'
    }
  ];

  buyProduct(productName: string) {
    alert(`You purchased: ${productName}! 🎉`);
  }
}

