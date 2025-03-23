import { Messages } from '../constants';

export const handleAuthError = (error: unknown, defaultMessage: string) => {
    if (typeof error === 'object' && error !== null && 'code' in error) {
        const firebaseError = error as { code: string };
        switch (firebaseError.code) {
            case 'auth/email-already-in-use':
                return Messages.EMAIL_IN_USE;
            case 'auth/invalid-email':
                return Messages.INVALID_EMAIL;
            case 'auth/wrong-password':
                return Messages.WRONG_PASSWORD;
            case 'auth/network-request-failed':
                return Messages.NETWORK_ERROR;
            default:
                return defaultMessage;
        }
    }
    return Messages.UNKNOWN_ERROR;
};
