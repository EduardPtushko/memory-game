export function getFromLocalStorage(
    item: string
): { username: string | null; token: string | null } {
    const data = localStorage.getItem(item);

    if (data) {
        const newData = JSON.parse(data);

        return {
            username: newData.username,
            token: newData.token
        };
    }

    return {
        username: null,
        token: null
    };
}
