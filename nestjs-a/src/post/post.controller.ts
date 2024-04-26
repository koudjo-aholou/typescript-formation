import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDTO, PatchPost, PostAPI } from './Post';
import { PostService } from './post.service';


@ApiTags('post')
@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}
  @Get()
  @ApiResponse({ status: 200, description: 'Returns posts from external API.', type: CreatePostDTO })
    async getPosts(): Promise<PostAPI> {
        try {
            return await this.postService.getPostsFromExternalAPI();
        } catch (error) {
            console.error('Error getting posts:', error);
            throw new Error('Error getting posts');
        }
  }
  
  @Get('/:id')
  @ApiResponse({ status: 200, description: 'Returns a post Id from external API.', type: CreatePostDTO })
  async getPostbyId(  @Param('id') id: number,): Promise<PostAPI> {
        try {
            return await this.postService.getPostByIdFromExternalAPI(id);
        } catch (error) {
            console.error('Error getting posts:', error);
            throw new Error('Error getting posts');
        }
  }
  
  @Post()
  async postPost(  @Body() createPostDTO: PostAPI): Promise<PostAPI> {
    try {
        return await this.postService.createPostToExternalAPI(createPostDTO);
    } catch (error) {
        console.error('Error getting posts:', error);
        throw new Error('Error getting posts');
    }
  }
  
  @Delete('/:id')
  async deleteByIdPost(@Param('id') id:number): Promise<void> {
    try {
        return await this.postService.deletePostFromExternalAPI(id);
    } catch (error) {
        console.error('Error getting posts:', error);
        throw new Error('Error getting posts');
    }
  }
  
  @Patch(':id')
  async update<T>(@Param('id') id: number, @Body() updatePostDto: PatchPost<T>): Promise<PostAPI> {
    return this.postService.updatePostToExternalAPI(id, updatePostDto);
  }
}


