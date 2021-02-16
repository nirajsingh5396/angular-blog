export interface SignInContext {
    userId: string;
    password: string;
};

export interface SignInComponentRes {
    authenticatedUser: string;
    authenticated: boolean;
    tokon: string;
    message: string;
}