// readOnly

// const arraySym = (arr: readonly number[]) => {
//   let sum = 0;
//   arr.push(22);
// };

// index signature for dynamic data

// interface Mag {
//   titre: string;
//   perso: string;
//   mangaka: string;
// }
// type Manga = { [property: string]: string };
// type Manga2 = Record<string, string>;

// type OptionsKeys = keyof Mag; //titre, perso, mangaka

// const _manga: Manga | Manga2 = {
//   titre: 'Berserk',
//   perso: 'Guts',
//   mangaka: 'Kentaro Miura',
// };

//typeof

const x = 10;
let y: typeof x;
