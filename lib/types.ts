export type ApiResponseType<T> = {
    success: boolean;
    code: number;
    data?: T | null;
    message?: string;
    error?: string;
};
