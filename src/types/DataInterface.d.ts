export interface IDoctorData {
    _id?: string;
    _v?: string;
    image: string;
    name: string;
    mobile: string;
    email: string;
    position: string;
    education: string;
    content: string;
    slug?: string;
    date?: string;
    links: {
        fb: string;
        twitter: string;
        insta: string;
    }
}

export interface IServicesData {
    _id?: string;
    _v?: string;
    image: string;
    title: string;
    content: string;
    slug?: string;
    date?: string;
}

export interface IVideoData {
    _id?: string;
    _v?: string;
    videoId: string;
    title: string;
    date?: string;
}

export interface IBlogData {
    _id?: string;
    _v?: string;
    image: string;
    title: string;
    keywords: string;
    description: string;
    content: string;
    slug?: string;
    date?: string;
}

export interface IContactFormData {
    _id?: string;
    _v?: string;
    name: string;
    email: string;
    mobile: string;
    message: string;
    date?: string;
}

export interface IHomeData {
    services: IServicesData[];
    doctors: IDoctorData[];
    videos: IVideoData[];
    blogs: IBlogData[];
}