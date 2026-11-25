import {faker} from '@faker-js/faker';

export default class User{

    static gerarUsuario(){

        return{

            username: 'bod@example.com',

            password: '10203040',

            fullName: faker.person.fullName(),

            address: faker.location.streetAddress(),

            city: faker.location.city(),

            state: faker.location.state(),
            
            zipCode: faker.location.zipCode(),

            country: faker.location.country(),

            cardNumber: faker.finance.creditCardNumber(),

            cardDate: `${faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0')}/${faker.number.int({ min: 25, max: 35 })}`,

            cardCode: faker.finance.creditCardCVV()
        };
    }
}