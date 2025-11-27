export const getAPIData = async (code, endpoint) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_MAIN_URL}/${code}/${endpoint}`, {
                cache: "no-store"
            }
        );
        if (!res.ok) throw new Error(`Fetch failed for endpoint: ${endpoint}`);
        return await res.json();
    } catch (error) {
        return null;
    }
}
export const getAPIData2 = async (endpoint) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_MAIN_URL}/${endpoint}`, {
                cache: "no-store"
            }
        );
        if (!res.ok) throw new Error(`Fetch failed for endpoint: ${endpoint}`);
        return await res.json();
    } catch (error) {
        return null;
    }
}


export const getTrData = async (code) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_MAIN_URL}/lang/${code}`, {
                cache: "no-store"
            }
        );
        if (!res.ok) throw new Error("Translations fetch failed");
        return await res.json();
    } catch (error) {

        return null;
    }
};