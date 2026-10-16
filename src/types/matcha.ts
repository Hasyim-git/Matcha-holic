export interface IngredientDetail {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  origin: string;
  tasteNote: string;
  icon: 'leaf' | 'milk' | 'sparkles';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'order' | 'shipping' | 'storage' | 'ingredients';
}

export interface OrderPreference {
  product: string;
  variant: string;
  sweetness: 'Normal (100%)' | 'Sedikit Manis (50%)' | 'Tanpa Gula (0%)';
  milkType: 'Fresh Milk Sapi Segar' | 'Oat Milk Nabati (+Rp 6.000)';
  quantity: number;
  customerName: string;
  city: string;
  address: string;
  notes: string;
}

export interface DeliveryArea {
  name: string;
  coverage: string;
  courier: string;
  cutoffTime: string;
  deliverySchedule: string;
}
