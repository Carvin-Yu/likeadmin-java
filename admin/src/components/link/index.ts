export enum LinkTypeEnum {
    'SHOP_PAGES' = 'shop',
    'CUSTOM_LINK' = 'custom'
}

export interface Link {
    path: string
    name?: string
    type: string
    params?: Record<string, any>
}
