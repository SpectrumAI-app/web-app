export interface Blog {
    _id?: string;
    title: string;
    description: string;
    content: string;
    likes: number;
    timeToRead: number;
    author: string;
}