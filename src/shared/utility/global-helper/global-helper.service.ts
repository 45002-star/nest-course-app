import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
    globalhelperFunc(): string {
        return ' use global module';
    }
}
