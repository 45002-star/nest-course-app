import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService,
                private readonly utilityService: UtilityService
    ) {}
        @Get('/shared')
        sharedFunc(): string {
            return this.utilityService.shareFunc();
        }

        @Get()
        productFunc(): string {
            return this.productService.productFunc();
        }

        @Get('/function2')
        productFunc2(): string {
            return this.productService.productFunc2();
        }
}
