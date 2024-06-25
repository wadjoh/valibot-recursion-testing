import * as v from 'valibot';
import { AuthSchema } from './authSchema.js';
import { UserSchema } from './userSchema.js';

export type TUserToAuthRelationSchema = {
  from: v.InferOutput<typeof UserSchema>;
  to: v.InferOutput<typeof AuthSchema>;
};

export const UserToAuthRelationSchema: v.GenericSchema<TUserToAuthRelationSchema> =
  v.pipe(
    v.object({
      from: v.lazy(() => UserSchema),
      to: v.lazy(() => AuthSchema),
    }),
    // attempt at preventing stack overflow when running `v.safeParse`
    v.check((input) => !!input && typeof input === 'object')
  );
