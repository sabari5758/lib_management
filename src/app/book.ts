export interface Book {
  id: number;
  title: string;
  author: string;
  status: 'available' | 'checked-out' | 'reserved';
  cover?: string;
}
