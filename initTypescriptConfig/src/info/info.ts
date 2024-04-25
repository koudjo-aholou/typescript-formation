// ReadOnly

// array amd tuple

// type Label = 'bmw';
// type Person = {
//   name: string;
// };

// const arraySym = (arr: readonly number[], label: Label, object: Person) => {
//   const sum = 0;
//   // Readonly not working for string and object
//   // label = 'toto';

//   const newObj = { ...object } as const;

//   // Arr.push(22);
// };

// Index signature for dynamic data

// type Mag = {
//   titre: string;
//   perso: string;
//   mangaka: string;
// };
// type Manga = Record<string, string>; // Index signature
// type Manga2 = Record<string, string>;

// type OptionsKeys = keyof Mag; // Titre, perso, mangaka

// type ObjetOptionnel = {
//   [Propriete in keyof ObjetA]?: ObjetA[Propriete];
// };

// const _manga: Manga | Manga2 = {
//   titre: 'Berserk',
//   perso: 'Guts',
//   mangaka: 'Kentaro Miura',
// };

// Typeof

// const x: any = 10;
// const y: typeof x = 12;

// const xx = 10;
// Const yy: typeof x;
const testAny: any = 22;
