function loadStylesheet() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const link = document.createElement('link');
    link.rel = 'stylesheet';

    if (viewportHeight >= viewportWidth) {
        link.href = 'HomeStylesheet.css';
    } else {
        link.href = 'HomeStylesheet.css';
    }

    document.head.appendChild(link);
}

loadStylesheet();