function loadStylesheet() {
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const link = document.createElement('link');
    link.rel = 'stylesheet';

    if (viewportHeight >= viewportWidth) {
        link.href = 'Portrait.css';
    } else {
        link.href = 'Landscape.css';
    }

    document.head.appendChild(link);
}

loadStylesheet();