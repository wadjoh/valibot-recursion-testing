import * as v from 'valibot';
import { AuthSchema } from './authSchema.js';
import { UserSchema } from './userSchema.js';
export const UserToAuthRelationSchema = v.lazy(() => v.pipe(v.object({
    from: v.lazy(() => UserSchema),
    to: v.lazy(() => AuthSchema),
}), v.check((input) => !!input && typeof input === 'object')));
//# sourceMappingURL=userToAuthSchema.js.map