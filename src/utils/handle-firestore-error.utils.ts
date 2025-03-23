import { Messages } from '../constants';

export const handleFirestoreError = (error: unknown, defaultMessage: string) => {
    if (typeof error === 'object' && error !== null && 'code' in error) {
        const firestoreError = error as { code: string };
        switch (firestoreError.code) {
            case 'permission-denied':
                return Messages.PERMISSION_DENIED;
            case 'unavailable':
                return Messages.UNAVAILABLE;
            case 'not-found':
                return Messages.NOT_FOUND;
            default:
                return defaultMessage;
        }
    }
    return Messages.UNKNOWN_ERROR;
};
