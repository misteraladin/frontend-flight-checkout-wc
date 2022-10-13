export interface Review {
    score: number;
    count: number;
    description: string;
    highlights?: any;
}

export interface Id {
    source: string;
    key: string;
    breakfast: string;
    id: string;
}

export interface RateBadge {
    name: string;
    value: string;
}

export interface Rate {
    check_in: Date;
    check_out: Date;
    total: number;
    average: number;
    average_room_night: number;
    gimmick: number;
    gimmick_room_night: number;
    currency: string;
    allotment: number;
    badges: RateBadge[];
}

export interface CheapestRoom {
    id: Id;
    name: string;
    mapping_name?: any;
    max_occupancy: number;
    minimum_stay: number;
    cancellation_policy?: any;
    breakfast: number;
    thumbnail_url: string;
    info?: any;
    value_added: any[];
    rate: Rate;
}

export interface ReviewApps {
    score: number;
    count: number;
    description: string;
}

export interface Country {
    id: number;
    name: string;
    slug: string;
    code: string;
    currency: string;
    calling_code: string;
    description?: any;
    image_url?: any;
}

export interface State {
    id: number;
    name: string;
    slug: string;
    timezone: string;
    country: Country;
}

export interface City {
    id: number;
    name: string;
    slug: string;
    description?: any;
    images?: any;
    state: State;
}

export interface Area {
    id: number;
    name: string;
    slug: string;
    latitude: number;
    longitude: number;
    zipcode: number;
    category: string;
    city: City;
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
    email: string;
    address: string;
    star_rating: number;
    latitude: string;
    longitude: string;
    check_in?: any;
    check_out?: any;
    thumbnail_url: string;
    original_image_url_resized: string;
    slug: string;
    review: Review;
    cheapest_room: CheapestRoom;
    gift_box?: any;
    distance?: any;
    share_link: string;
    share_text: string;
    review_apps: ReviewApps;
    additional_values: any[];
    area: Area;
    badges: Badge[];
}
