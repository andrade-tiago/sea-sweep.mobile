export default interface Ship {
  id: string
  shipName: string
  IMO: string
  flag: string
  tonnage: number
  originPort: string
  originPortName: string
  destinationPort: string
  destinationPortName: string
  collectAmount: number
  createdAt: string
}
