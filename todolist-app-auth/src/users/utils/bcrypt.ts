import * as bcrypt from 'bcrypt';

const saltRounds = 10;

export function EncodePassword(rawPassword: string) {
  return bcrypt.hashSync(rawPassword, saltRounds);
}

export function ComparePassword(rawPassword: string, encodedPassword: string) {
  return bcrypt.compareSync(rawPassword, encodedPassword);
}
