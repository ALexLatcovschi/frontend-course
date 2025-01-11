function openShareWindow(url) {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;

    const pageUrl = encodeURIComponent(window.location.href);

    window.open(
        url + pageUrl,
        'ShareWindow',
        `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
}