var infoDiv = document.querySelector('div#allrecords[data-tilda-page-id]');
if (infoDiv) {
    var pageId = infoDiv.getAttribute('data-tilda-page-id');
    if (pageId) {
        var pageUrl = 'https://tilda.cc/page/?pageid=' + pageId;
        window.open(pageUrl, "_blank")
    }
}