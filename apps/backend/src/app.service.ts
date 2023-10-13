import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAll(): string {
    const places = [
      {
        id: '1',
        name: 'Apartament Kraków Stare Miasto',
        location: {
          name: 'Kraków, ul. Grodzka 34/4',
          lat: 50,
          lon: 20,
        },
        price: 400,
        currency: 'PLN',
      },
      {
        id: '2',
        name: 'Apartament Warszawa Centrum',
        location: {
          name: 'Warszawa, Aleje Jerozolimskie 1/7',
          lat: 50.5,
          lon: 19.9,
        },
        price: 500,
        currency: 'EUR',
      },
      {
        id: '3',
        name: 'Zakopane, mały Domek przy lesie',
        location: {
          name: 'Zakopane, ul. Nowa 20',
          lat: 49.7,
          lon: 20.2,
        },
        price: 300,
        currency: 'PLN',
      },
    ];
    return JSON.stringify(places);
  }
}
