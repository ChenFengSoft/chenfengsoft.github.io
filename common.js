(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            //请使用 CSS Rem 12rem 原型图
            if (clientWidth === 375) {
                docEl.style.fontSize = '12px';
            } else {
                docEl.style.fontSize = 12 * (clientWidth / 375) + 'px';
            }
            window.rem = docEl.style.fontSize.substring(0, docEl.style.fontSize.length - 2);
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


// const BASE_URL = "https://chenfengsoft.github.io/huatech";

// function download(fileName) {
//     window.open(BASE_URL + '/apps/' + fileName);
// }

function renderAppContainer(apps) {

    let list = document.getElementById("list");

    for (let i = 0; i < apps.length; i++) {
        let appContainer = document.createElement("div");
        appContainer.setAttribute('class', 'appContainer');

        let appIcon = document.createElement("img");
        // appIcon.className = 'appIcon';
        appIcon.setAttribute('class', 'appIcon');
        // appIcon.attributes['class'] = 'appIcon';
        appIcon.setAttribute('src', './apps/' + apps[i].name + '.png');
        appContainer.appendChild(appIcon);

        let appInfo = document.createElement("div");


        let spanTitle = document.createElement("span");
        spanTitle.setAttribute('class', 'appTitle');
        spanTitle.innerText = apps[i].title;

        let spanSize = document.createElement("span");
        spanSize.setAttribute('class', 'appSize');
        spanSize.innerText = apps[i].size;

        let spanVersion = document.createElement("span");
        spanVersion.setAttribute('class', 'appVersion');
        spanVersion.innerText = apps[i].version;

        appInfo.appendChild(spanTitle);
        appInfo.appendChild(spanSize);
        appInfo.appendChild(spanVersion);
        appInfo.setAttribute('class', 'appInfo');
        appContainer.appendChild(appInfo);


        let appDownload = document.createElement("div");
        appDownload.innerText = 'Download';
        appDownload.setAttribute('class', 'appDownload');
        appDownload.setAttribute('onclick', "window.open('./apps/" + apps[i].name + ".jar')");
        appContainer.appendChild(appDownload);

        list.appendChild(appContainer);
    }
}