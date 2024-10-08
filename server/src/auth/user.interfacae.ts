import { User } from "../user/user.schema";

export interface AuthenticatedRequest extends Request {
    user?: User; // Extend the Request type with the `user` property
}