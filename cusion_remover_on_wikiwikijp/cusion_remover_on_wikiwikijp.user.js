// ==UserScript==
// @name         Cusion remover on wikiwiki.jp
// @namespace    https://wikiwiki.jp
// @version      0.1
// @description  Remove cushion page on wikiwiki.jp
// @author       hizakurage
// @homepage     http://github.com/hizakurage/userscripts/
// @match        https://wikiwiki.jp/*
// @grant        none
// @require      http://code.jquery.com/jquery-2.1.1.min.js
// @copyright    2019+, hizakurage
// @license      MIT License
// ==/UserScript==

(function() {
    'use strict';
    $('a.ext').each(function() {
        var url=$(this).attr('href');
        $(this).attr('href', url.replace(/^https:\/\/re.wikiwiki.jp\/\?/, ''));
        $(this).attr('target', '_blank');
    })
})();
