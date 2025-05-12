export interface ClothDonationType {
    action: string
    firstname: string
    lastname: string
    email: string
    address: string
    city: string
    zip: string
    artOfCloth: string
    crisisArea: string
    date: string
    time: string
    setFormContent: (c: string) => void
}

export type SortDirection = "asc" | "desc";