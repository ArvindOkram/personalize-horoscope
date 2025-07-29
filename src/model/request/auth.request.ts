export interface SignUpRequest {
    name: string;
    email: string;
    password: string;
    birthDate: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LogoutRequest {
    email: string
}