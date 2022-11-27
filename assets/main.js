'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var $ = function $(v) {
    var p = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
    return p.querySelector(v);
};
var $$ = function $$(v) {
    var p = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
    return [].concat(_toConsumableArray(p.querySelectorAll(v)));
};

var qrCodeEditInfoBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:first-child');
var qrCodeEditDesignBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(2)');
var qrCodeDeleteDesignBtns = $$('.generated-link-item .badge-btn.edit .popup-btn-link:nth-child(3)');
var addNewFolderBtn = $('.add-new-folder-btn');

var editInfoModal = $('.edit-info-modal-wrapper');
var editDesignModal = $('.edit-design-modal-wrapper');
var deleteQRCodesModal = $('.delete-modal-wrapper');
var addNewFolderModal = $('.add-new-folder-modal-wrapper');

$$('.close-btn', editInfoModal).forEach(function (btn) {
    btn.addEventListener('click', function () {
        editInfoModal.classList.add('hidden');
    });
});
$$('.close-btn', editDesignModal).forEach(function (btn) {
    btn.addEventListener('click', function () {
        editDesignModal.classList.add('hidden');
    });
});
$$('.close-btn', deleteQRCodesModal).forEach(function (btn) {
    btn.addEventListener('click', function () {
        deleteQRCodesModal.classList.add('hidden');
    });
});
$$('.close-btn', addNewFolderModal).forEach(function (btn) {
    btn.addEventListener('click', function () {
        addNewFolderModal.classList.add('hidden');
    });
});

qrCodeEditInfoBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        editInfoModal.classList.remove('hidden');
    });
});
qrCodeEditDesignBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        editDesignModal.classList.remove('hidden');
    });
});
qrCodeDeleteDesignBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        deleteQRCodesModal.classList.remove('hidden');
    });
});
addNewFolderBtn.addEventListener('click', function () {
    addNewFolderModal.classList.remove('hidden');
});

$('.info-item.delete').addEventListener('click', function () {
    deleteQRCodesModal.classList.remove('hidden');
});