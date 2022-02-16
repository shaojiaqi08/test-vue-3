export interface DataType {
  list: Array<ItemType | null>
}
export interface ItemType{
  id: number
  title: string
  content: string
}
