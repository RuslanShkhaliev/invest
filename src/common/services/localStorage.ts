export class LocalStorageService {
    static set(key: string, value: any) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    static get(key: string) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    static remove(key: string) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    static clear() {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
