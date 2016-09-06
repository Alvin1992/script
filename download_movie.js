/**
 * Created by Alvin on 2016/8/27.
 */

// ==UserScript==
// @name         downlaod movie
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  get download link of http://www.dytt8.net/ and call thunder to download
// @author       Alvin
// @include      http://www.dytt8.net/*
// @run-at       document-end
// @grant        unsafeWindow
// @grant        GM_setClipboard
// ==/UserScript==

(function() {
    var oP = unsafeWindow.document.createElement('p');
    var btn = unsafeWindow.document.createElement('button');
    btn.innerHTML = '点此复制';
    btn.id = 'getLink';
    btn.addEventListener('click', function (  ) {
        // 获取所有的table
        var aTable = unsafeWindow.document.querySelectorAll('table');
        for ( var i=0; i < aTable.length; i++ ) {
            // 找到有border的table
            var border = unsafeWindow.getComputedStyle(aTable[i], null).getPropertyValue('border');
            if (border.indexOf('1px') != -1) {
                var link = aTable[i].getElementsByTagName('a')[0];
                var attrs = link.attributes;
                for (var j = 0; j < attrs.length; j++) {
                    if (attrs[j].value && attrs[j].value.indexOf('thunder://') != -1) {
                        try {
                            GM_setClipboard(attrs[j].value);
                            unsafeWindow.alert('复制成功');
                        } catch (err) {
                            console.log(err);
                        }
                        break;
                    }
                }
                break;
            }
        }
    }, false);
    oP.appendChild(btn);
    oP.style.cssText = 'position: fixed;top: 20px; right: 10px;z-index: 9999999;';
    unsafeWindow.document.getElementsByTagName('body')[0].appendChild(oP);
})();
