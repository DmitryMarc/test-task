export class LocalStorageHelper {
    public static getData(key: string) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    public static setData(key: string, value: unknown) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public static pushDataToList(key: string, value: unknown) {
        let items = this.getData(key);
        !items && (items = []);

        if (Array.isArray(items)) {
            items.push(value);
            this.setData(key, items);
        }
    }

    public static deleteDataFromList(key: string, value: unknown) {
        let items = this.getData(key);
        if (Array.isArray(items)) {
            items = items.filter(item => item !== value);
            items.length
                ? this.setData(key, items)
                : this.deleteDataByKey(key)
        }
    }

    public static deleteDataByKey(key: string) {
        localStorage.removeItem(key);
    }

    public static findItemFromList(key: string, value: unknown) {
        let items = this.getData(key);
        if (Array.isArray(items)) {
            return items.find(item => item === value) || null;
        }
    }

    public static addDeleteDataFlow(key: string, value: unknown) {
        const action = this.findItemFromList(key, value) ? 'delete' : 'add';
        if (action === 'add') {
            this.pushDataToList(key, value);
        } else {
            this.deleteDataFromList(key, value);
        }
    }
}
