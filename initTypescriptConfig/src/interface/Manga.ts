export interface Manga {
  titre: string;
  auteur: string;
  annee_publication: number;
  genre: string[];
  volumes: number;
}

export type ListMangas = Manga[];
