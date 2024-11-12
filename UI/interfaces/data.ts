export interface ItemData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export interface SSRPageProps {
    data: ItemData[]
}

