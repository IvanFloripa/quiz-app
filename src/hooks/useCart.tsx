// hooks/useCart.ts
import { useEffect, useState } from 'react';
import type { CartItem } from '../types/cart';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (saved) setItems(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  function addItem(item: Omit<CartItem, 'id'>) {
    setItems(prev => {
      const existing = prev.find(p => p.name === item.name);
      if (existing) {
        return prev.map(p =>
          p.name === item.name
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      return [...prev, { ...item, id: crypto.randomUUID() }];
    });
  }

  function removeItem(id: string) {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  function updateQuantity(id: string, quantity: number) {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return { items, addItem, removeItem, updateQuantity, total };
}