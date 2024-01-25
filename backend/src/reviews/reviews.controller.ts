import { Controller, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('/reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get(':id')
  getReview(@Param('id') id: string) {
    return this.reviewsService.getReview(parseInt(id));
  }
}
