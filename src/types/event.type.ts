import { Ticket } from './ticket.type'
export interface Event {
    id: string
    date: string
    image: string
    location: string
    price: string
    title: string
    slug?: string
    description?: string
    contractAddress?: string
    organizerId?: number
    tickets?: Ticket[]
  }
  