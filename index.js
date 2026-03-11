

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

/**
 * Show last post on main content, or introduzione.html instead
 */
async function loadLatest() {
    loadContent(LAST_POST_DATE);
}
