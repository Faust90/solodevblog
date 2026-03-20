/**
 * Loads url
 * 
 * @param {*} url 
 */
async function loadUrl(url) {
    const page = await fetch(url);
    const pageText = await page.text();
    document.getElementById('mainContent').innerHTML = pageText;

}

/**
 * Show last post on main content, or introduzione.html instead
 */
async function loadLatest() {
    loadUrl('posts/LAST_POST_DATE');
}

/**
 * Handle browser back and forward on navigation
 */
window.addEventListener("popstate", (event) => {
    if (event.target.location.hash)
        loadUrl(event.target.location.hash.slice(1))
    else loadLatest()
});