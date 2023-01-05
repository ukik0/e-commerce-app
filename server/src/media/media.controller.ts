import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { MediaService } from './media.service'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post()
  @UseInterceptors(FileInterceptor('upload'))
  async uploadMedia(@UploadedFile() uploadFile: Express.Multer.File) {
    return this.mediaService.uploadMedia(uploadFile)
  }
}
