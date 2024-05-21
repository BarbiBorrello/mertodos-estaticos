class Peli {
  title: string;
  tags?: string[];  // ? opcional para usar en el constructor

  constructor(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }

  //---metodo estatico : static  se puede usar sin instanciar el objeto Peli (GRUPOS) --//

  static searchPelis():Peli[]{
    const peliEncontrada = new Peli("Peli encontrada");
    return [peliEncontrada];

  }
}

function main() {
  // const miPeli = new Peli("Una Peli");
  // console.log(miPeli.getTitle());
  // console.log ("soy el cambio n° 2");
  // console.log ("soy el cambio n° 3");
  // console.log ("soy un cambio desde GitHub")

  const pelis = Peli.searchPelis();
  // console.log(pelis);
  console.log(pelis[0]);
  
}

main();
