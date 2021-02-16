export interface SignInContext {
    userId: string;
    password: string;
};

export interface SignUpContext {
    userId: string;
    name: string;
    confirmPassword: string;
};

export interface SignInComponentRes {
    authenticatedUser: string;
    authenticated: boolean;
    tokon: string;
    message: string;
}