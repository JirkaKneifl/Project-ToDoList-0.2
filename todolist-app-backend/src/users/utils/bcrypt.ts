import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export function EncodePassword(rawPassword: string){
    return bcrypt.hashSync(rawPassword, saltRounds);
}