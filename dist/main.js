import * as v from 'valibot';
import { AuthSchema } from './authSchema.js';
// Test input:
const userInput = {
    firstName: 'joe',
};
const authInput = {
    email: 'joe@example.com',
    password: '12345678',
};
userInput.$relations = {};
userInput.$relations.UserToCredentials = {
    from: userInput,
    to: authInput,
};
authInput.$relations = {};
authInput.$relations.UserToCredentials = {
    from: userInput,
    to: authInput,
};
console.log('-- after test input definitions');
// Testing:
const result = v.safeParse(AuthSchema, authInput);
console.log('-- after safeParse');
if (result.success) {
    const firstName = result.output.$relations.UserToCredentials.from.$relations.UserToCredentials
        .from.firstName;
    console.log(firstName);
}
else {
    console.log('something went wrong');
}
//# sourceMappingURL=main.js.map