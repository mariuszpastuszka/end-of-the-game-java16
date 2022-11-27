export interface Income {
  id: string | null,

  category: string,

  currency: string,

  amount: number,

  person: string,

  timestamp: string,

  creationTimestamp: string | null,

  updateTimestamp: string | null
}
