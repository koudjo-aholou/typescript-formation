// Titre, auteur, genre, img

import slugify from 'slugify';
import {
  InfoThumbnail,
  ListMangas,
  Manga,
  MangaAndAnime,
} from '../interface/Manga';
import {
  AllMangas,
  Anime,
  MangaAndAnimeDict,
  MangaAnime,
} from '../interface/MangaAnime';

export const displayManInfoThumbnail = (mangas: ListMangas) => {
  const infoThumbnail: InfoThumbnail[] = mangas?.map(
    ({ titre, auteur, genre, img }) => {
      const updatedManga = { titre, auteur, genre, img };
      return updatedManga;
    },
  );
  return infoThumbnail;
};

// get list of anime + to specific manga by title
export const formatMangaAnime = (
  mangasAnime: MangaAnime,
  mangas: ListMangas,
) => {
  const { anime } = mangasAnime;

  //refacto here
  const dictnNime: MangaAndAnimeDict = createDictionary(anime);

  const updateManga: MangaAndAnime[] = mangas.map((manga) => {
    const key = sanitizeString(manga.titre);
    const isAnime = dictnNime?.[key]?.isAnime;

    return { ...manga, isAnime };
  });
  return updateManga;
};

export const sanitizeString = (text: string): string => {
  return slugify(text, { lower: true, replacement: '' });
};

// Add Manga
export const createDictionary = (arr: Anime[]) => {
  const dic = arr.reduce((acc: MangaAndAnimeDict, item) => {
    const key: string = sanitizeString(item.titre);
    acc[key] = { ...item };
    return acc;
  }, {});
  return dic;
};
