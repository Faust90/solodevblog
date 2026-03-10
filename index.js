/**
 * Loads html in mainContent
 * 
 * @param {*} pageFile 
 */
async function loadContent(pageFile) {
    const page = await fetch(`./posts/${pageFile}`);
    const pageText = await page.text();
    document.getElementById('mainContent').innerHTML = pageText;
}