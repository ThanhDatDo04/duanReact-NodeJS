export type Cart = {
  userId: string;
  products: {
    productId: string;
    title: string;
    price: number;
    quantity: number;
    totalPrice: number;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
};
