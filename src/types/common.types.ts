export interface IBasicUser {
    username: string,
    displayname: string,
    avatar: string,
    _id: string
}

export enum FollowStatus {
    active = 'active',
    pending = 'pending'
};