import { Manga } from './Manga';

export interface Anime {
  titre: string;
  isAnime: boolean;
}

export interface MangaAnime {
  anime: Anime[];
}

export type MangaAndAnimeDict = Record<string, Anime | Manga>;
export type AllMangas = Anime[] | Manga[];

export type ExtractPart<T> = T extends Anime ? Anime : Manga;
