import jwt_decode from 'jwt-decode';

export function getDecodedToken(token: string): any {
    return jwt_decode(token);
}
