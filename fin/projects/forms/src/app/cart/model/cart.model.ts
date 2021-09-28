export interface Item {
  product_id: number;
  quantity: number;
}

export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface Coupon {
  id: string;
  expired: boolean;
}

export type ProductMap = Map<number, Product>;
