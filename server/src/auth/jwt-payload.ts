export interface JwtPayload {
    email: string;
    id: string;
    name: string;
    
    // sub: string;   // This is typically the user ID in my case _id
}
