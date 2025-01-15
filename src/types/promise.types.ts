export type AllSettledQueryResult<T> = {
    status?: 'fulfilled' | 'rejected';
    value?: T;
    reason?: Error;
}