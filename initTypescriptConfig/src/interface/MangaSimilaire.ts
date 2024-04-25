export interface MangaSimilaire {
  titre: string;
  auteur: string;
  annee_publication: number;
  genre: string[];
  volumes: number;
}

export interface MangaSimilaires {
  mangasSimilaires: MangaSimilaire[];
}
