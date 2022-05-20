export interface ErrorDetails {
    Details?: Array<string>;
    ErrorCode: number;
    Message: string;
}

export interface IResponseTemplate<T> {
    Content?: T,
    ErrorDetails?: ErrorDetails
}