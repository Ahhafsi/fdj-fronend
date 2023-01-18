export interface Player {
  name: string;
  position: string;
  born: string;
  thumbnail: string;
  signin: Signin;
}

interface Signin {
  amount: number;
  currency: string;
}
