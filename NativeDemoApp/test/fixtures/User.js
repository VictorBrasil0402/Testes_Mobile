import { faker } from '@faker-js/faker';

export default class User{

    static gerarUsuario(){

        const password = faker.internet.password()

        return{

            email: faker.internet.email(),

            password,

            passwordConfirmation: password
        };
    }
}