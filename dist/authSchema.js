import * as v from 'valibot';
import { UserToAuthRelationSchema } from './userToAuthSchema.js';
export const AuthSchema = v.lazy(() => v.object({
    email: v.pipe(v.string(), v.email()),
    password: v.pipe(v.string(), v.minLength(8)),
    $relations: v.object({
        UserToCredentials: v.lazy(() => UserToAuthRelationSchema),
    }),
}));
//# sourceMappingURL=authSchema.js.map