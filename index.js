

/**
 * Loads html in mainContent
 * 
 * @param {*} pageFile 
 */
async function loadContent(pageFile, isPost = true) {
    const page = await fetch(isPost ? `./posts/${pageFile}` : `./${pageFile}`);
    const pageText = await page.text();
    document.getElementById('mainContent').innerHTML = pageText;
}

/**
 * Show last post on main content, or introduzione.html instead
 */
async function loadLatest() {
    loadContent(LAST_POST_DATE);
}
