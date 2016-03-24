interface ICd {
  cart: boolean;
  album: string;
  artist: string;
  price: number;
  genre: string;
}

export class Cd implements ICd {
  public cart: boolean = false;
  constructor (public album: string, public artist: string, public price: number, public genre: string){
  }

}
