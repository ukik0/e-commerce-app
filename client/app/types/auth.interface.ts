export interface IAuth {
	email: string
	password: string
	username: string
}

export interface IUser {
	_id: string;
	username: string;
	email: string;
	password: string;
	avatarUrl: string;
	accessToken: string;

}

export interface IAuthState extends IUser{
	user: IUser | null,
	isLoading: boolean,
	accessToken: string
}