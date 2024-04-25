export class Manga {
  titre: string;
  auteur: string;
  annee_publication: number;
  genre: string[];
  volumes: number;

  constructor(
    titre: string,
    auteur: string,
    annee_publication: number,
    genre: string[],
    volumes: number,
  ) {
    this.titre = titre;
    this.auteur = auteur;
    this.annee_publication = annee_publication;
    this.genre = genre;
    this.volumes = volumes;
  }
  getTitle(): string {
    return this.titre;
  }
}

// Exemple d'utilisation de la classe
// const livre1 = new Manga(
//   'Naruto',
//   'Masashi Kishimoto',
//   1999,
//   ['Action', 'Aventure', 'Ninja'],
//   72,
// );
