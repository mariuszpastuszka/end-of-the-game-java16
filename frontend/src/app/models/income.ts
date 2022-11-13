export interface Income {
  id: string,

  category: string,

  currency: string,

  amount: number,

  person: string,

  timestamp: string,

  creationTimestamp: string,

  updateTimestamp: string | null
}
