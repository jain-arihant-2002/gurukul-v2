export type SuccessApiResponse = {
    status: 'Success' | 'Failure';
    data?: any;
    code: number;
    message?: string;
    error?: string;
};
