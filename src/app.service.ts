import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello BoonNattawat';
  }

  getName(): string {
    return 'Boon';
  }

  getBook(): string {
    return 'Gun Germ and Stell';
  }

  getJson(): object {
    return {
      name: "Boon",
      sure_name: 'Nattawat'
    };
  }
}
