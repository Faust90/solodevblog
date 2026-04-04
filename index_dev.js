/**
 * Loads url
 * 
 * @param {*} url 
 */
async function loadUrl(url) {
    try {
        const page = await fetch(url);
        if (page.status !== 200)
            throw new Error()
        const pageText = await page.text();
        document.getElementById('mainContent').innerHTML = pageText;
    } catch (_) {
        loadUrl("not_found.html")
    }

}

/**
 * Show last post on main content, or introduzione.html instead
 */
async function loadLatest() {// Get the current URL

    const url = new URL(window.location.href);
    // load latest if no page is in url
    if (!url.hash) {
        loadUrl('posts/LAST_POST_DATE');
    } else {
        loadUrl(url.hash.slice(1))
    }
}

/**
 * Handle browser back and forward on navigation
 */
window.addEventListener("popstate", (event) => {
    if (event.target.location.hash)
        loadUrl(event.target.location.hash.slice(1))
    else loadLatest()
});