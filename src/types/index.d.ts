export interface Carton {
  id: string;
  description: string;
  before: number;
  after: number;
  combined: number;
  created_at: number;
  updated_at?: number;
}

export interface Belt {
  id: string;
  description: string;
  before?: number;
  after?: number;
  combined?: number;
  created_at: number;
  updated_at?: number;
}

export interface Opening {
  id: string;
  description: string;
  before?: number;
  after?: number;
  combined?: number;
  created_at: number;
  updated_at?: number;
}

export interface OutfeedConveyor {
  id: string;
  description: string;
  before?: number;
  after?: number;
  combined?: number;
  created_at: number;
  updated_at?: number;
}

export interface Timer {
  id: string;
  description: string;
  before?: number;
  after?: number;
  combined?: number;
  created_at: number;
  updated_at?: number;
}

export interface Transfer {
  id: string;
  description: string;
  before?: number;
  before_active?: number;
  before_inactive?: number;
  after?: number;
  after_active?: number;
  after_inactive?: number;
  combined?: number;
  combined_active?: number;
  combined_inactive?: number;
  created_at: number;
  updated_at?: number;
}
