class Peli {
  title: string;
  tags?: string[];  // ? opcional para usar en el constructor

  constructor(title: string) {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}

function main() {
  const miPeli = new Peli("Una Peli");
  console.log(miPeli.getTitle());
  console.log ("soy el cambio n° 2");
  console.log ("soy el cambio n° 3");
}

main();