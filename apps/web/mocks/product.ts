export type Product = {
  name: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  image: string;
  id: string;
};
export type Review = {
  content: string;
  author: string;
  title: string;
  date: string;
  rating: number;
  id: string;
};

export function getReviewMock(length = 1): Review[] {
  return Array.from({ length }, (_, index) => ({
    id: index.toString(),
    content:
      "I recently purchased a pair of sneakers and I am thoroughly impressed with their quality and comfort. The design is sleek and modern, and the shoes are available in a variety of colors to suit anyone's style preferences. The upper is made of a breathable and durable material that allows my feet to stay cool and dry during long walks or runs. The sole is also very comfortable and provides great support for my feet, making it easy for me to wear them all day without experiencing any discomfort or fatigue. Overall, I highly recommend these sneakers to anyone in the market for a comfortable and stylish shoe that can handle any activity. They are definitely worth the investment!",
    author: 'John Doe',
    date: '2 days ago',
    rating: 5,
    title: 'Great product!',
  }));
}

export function getProductMock(length = 1): Product[] {
  return Array.from({ length }, (_, index) => ({
    id: index.toString(),
    name: 'Athletic mens walking sneakers',
    rating: 5,
    reviews: 123,
    description: 'Lightweight • Non slip • Flexible outsole • Easy to wear on and off',
    price: 2345.99,
    image: '/images/product.webp',
  }));
}
