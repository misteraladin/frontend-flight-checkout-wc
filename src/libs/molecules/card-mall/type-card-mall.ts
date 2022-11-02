export interface Image {
    url: string,
    label: string,
    __typename: string
}

export interface DetailPrice {
    value: number,
    currency: string,
    __typename: string
}

export interface IDiscount {
    amount_off: number,
    percent_off: number,
    __typename: string
}

export interface IPrice {
    regular_price: DetailPrice,
    final_price: DetailPrice,
    discount: IDiscount,
    __typename: string
}

export interface PriceRange {
    minimum_price: IPrice,
    maximum_price: IPrice,
    __typename: string
}

export interface StoreInfo {
    origin_store: string,
    store_id: string,
    store_name: string,
    is_premium: string,
    store_image: string,
    __typename: string
}

export interface RootObject {
    product_id: number,
    name: string,
    available_stock: number,
    only_x_left_in_stock: number,
    image: Image,
    price_range: PriceRange,
    store_info: StoreInfo,
    url_key: string
}
