export type Product = {
  _id: string | number;
  title: string;
  description: string;
  image: string;
  price: number | string;
  amount?: number;
  quantity: number;
};
