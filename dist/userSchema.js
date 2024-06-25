import * as v from 'valibot';
import { UserToAuthRelationSchema } from './userToAuthSchema.js';
export const UserSchema = v.lazy(() => v.object({
    firstName: v.string(),
    $relations: v.object({
        UserToCredentials: v.lazy(() => UserToAuthRelationSchema),
    }),
}));
//# sourceMappingURL=userSchema.js.map