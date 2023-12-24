export interface IBlog {
    id: string;
    content: string;
    categories: string[];
    isFeatured: boolean;
    title: string;
    additionalLinks?: string[];
}
export type IBlogDetail = Omit<IBlog, 'id'>;
