import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    productFunc(): string {
        return 'helllo from product service';
    }

    productFunc2(): string {
        return 'helllo from product service2';
    }
}
