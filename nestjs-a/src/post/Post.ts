import { ApiProperty } from '@nestjs/swagger';


export class CreatePostDTO implements PostAPI {
    @ApiProperty()
    id: number;

    @ApiProperty()
    title: string;

    @ApiProperty()
    idPost: string;

}

export interface PostAPI {
  id: number;
  title: string;
  idPost: string;
  idUser?: string;
}

export interface OptionalPostAPI {
  id?: number;
  title?: string;
  idPost?: string;
  idUser?: string;
}


// Trouve un exemple
export type Patch<T> = {
  [K in keyof T]?: T[K];
};

export type PatchPost<PostAPI> = {
  [K in keyof PostAPI]?: PostAPI[K];
};