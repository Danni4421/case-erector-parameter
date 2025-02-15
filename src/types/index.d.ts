export interface Carton {
  id: string;
  description: string;
  before: number;
  after: number;
  combined: number;
  created_at: number;
  updated_at?: number;
}
