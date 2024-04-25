export interface Manga {
  titre: string;
  auteur: string;
  annee_publication: number;
  genre: string[];
  volumes: number;
  img?: string;
}

export type ListMangas = Manga[];

export type InfoThumbnail = Omit<Manga, 'annee_publication' | 'volumes'>;

export interface MangaAndAnime extends Manga {
  isAnime: boolean;
}
