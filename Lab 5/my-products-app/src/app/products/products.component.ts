import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Category } from '../types/types';
import { PRODUCTS, CATEGORIES } from '../data/mock-data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  categories = CATEGORIES;
  products = PRODUCTS;
  selectedCategory: Category | null = null;
  currentImageIndex: { [key: number]: number } = {};
  slidingDirection: { [key: number]: string } = {};

  constructor() {
    // Initialize currentImageIndex for each product
    this.products.forEach(product => {
      this.currentImageIndex[product.id] = 0;
    });
  }
  
  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return this.products;
    return this.products.filter(p => p.categoryId === this.selectedCategory!.id);
  }
  
  selectCategory(category: Category | null) {
    this.selectedCategory = category;
  }

  toggleFavorite(product: Product) {
    product.isLiked = !product.isLiked; // 🔥 Переключаем лайк
    console.log("Лайк изменён:", product.name, "Статус:", product.isLiked); // Проверяем в консоли
  }

  prevImage(product: Product) {
    this.slidingDirection[product.id] = 'right';
    if (this.currentImageIndex[product.id] > 0) {
      this.currentImageIndex[product.id]--;
    } else {
      this.currentImageIndex[product.id] = product.images.length - 1;
    }
    setTimeout(() => {
      this.slidingDirection[product.id] = '';
    }, 500);
  }

  nextImage(product: Product) {
    this.slidingDirection[product.id] = 'left';
    if (this.currentImageIndex[product.id] < product.images.length - 1) {
      this.currentImageIndex[product.id]++;
    } else {
      this.currentImageIndex[product.id] = 0;
    }
    setTimeout(() => {
      this.slidingDirection[product.id] = '';
    }, 500);
  }

  goToImage(product: Product, index: number) {
    const currentIndex = this.currentImageIndex[product.id];
    this.slidingDirection[product.id] = index > currentIndex ? 'left' : 'right';
    this.currentImageIndex[product.id] = index;
    setTimeout(() => {
      this.slidingDirection[product.id] = '';
    }, 500);
  }

  shareOnTelegram(product: Product) {
    const text = encodeURIComponent(`Посмотрите этот товар: ${product.name}\nЦена: ${product.price}₸`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(product.kaspiLink)}&text=${text}`, '_blank');
  }

  shareOnWhatsApp(product: Product) {
    const text = encodeURIComponent(`Посмотрите этот товар: ${product.name}\nЦена: ${product.price}₸`);
    window.open(`https://wa.me/?text=${text}\n${product.kaspiLink}`, '_blank');
  }

  viewOnKaspi(kaspiLink: string) {
    window.open(kaspiLink, '_blank');
  }
}