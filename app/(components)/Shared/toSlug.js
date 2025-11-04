import he from 'he';

export const stripHTML = (html) => {
    if (!html) return ""
    const text1 = html
        .replace(/<[^>]*>/g, "") // 1. HTML taglarını sil (örn: <b>, <p>)
        .replace(/&nbsp;/g, " ") // 2. &nbsp; karakterlerini boşlukla değiştir
        .replace(/&quot;/g, "") // 3. &quot; karakterlerini tamamen sil (istenen bu)
        .replace(/&amp;/g, "&") // 4. &amp; karakterlerini & ile değiştir
        .replace(/&#39;/g, "'") // 5. &#39; karakterlerini ' ile değiştir
        .replace(/\s+/g, " ") // 6. Birden fazla boşluğu tek boşluğa indirge
        .trim();

    const text2 = he.decode(text1);

    return text2
};

export const generateKeywordsFromWords = (text) => {
    if (!text) return "";

    // 1. Mətni ilkin təmizləmədən keçiririk (HTML taglar və s.)
    let cleanText = stripHTML(text)

    let decodedText = he.decode(cleanText);

    decodedText = decodedText.replace(/".*?"/g, '');

    // 3. Qalan mətni boşluq və ya vergülə görə sözlərə bölürük.
    // filter(Boolean) boş elementləri silir.
    const words = decodedText.split(/[ ,]+/).filter(Boolean);

    // 4. Nəticəni aralarına vergül qoyaraq birləşdiririk.
    return words.join(',');
}