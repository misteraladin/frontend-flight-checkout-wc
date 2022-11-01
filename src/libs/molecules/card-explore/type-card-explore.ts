export interface Category {
    id: number;
    name: string;
    slug: string;
    image_url: string;
    products: any;
}

export interface Destination {
    id: number,
    name: string
    name_en: string
    name_id: string
    region_type: string,
    slug: string
    parent_id: number,
    image_url: string
}

export interface Badge {
    name: string;
    icon: string;
    image: string;
    title: string;
    background_color: string;
    text_color: string;
    description: string;
    value: string;
}

export interface RootObject {
    id: number;
    name: string;
    name_en: string;
    slug: string;
    source: string;
    type: string;
    stock: number;
    is_open_trip: number;
    is_publish: number;
    booking_date: string;
    image_url: string;
    image_apps_url: string;
    lowest_price: number;
    highest_price: number;
    lowest_gimmick_price: number;
    highest_gimmick_price: number;
    status: string;
    categories: Category[];
    destinations: Destination[];
    badges: Badge[];
}
