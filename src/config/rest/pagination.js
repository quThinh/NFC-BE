"use strict";
exports.__esModule = true;
exports.Pagination = void 0;
var Pagination = /** @class */ (function () {
    function Pagination(paginationMeta) {
        this.itemCount = paginationMeta.itemCount;
        this.totalItems = paginationMeta.totalItems;
        this.itemsPerPage = paginationMeta.itemsPerPage;
        this.totalPages = paginationMeta.totalPages;
        this.currentPage = paginationMeta.currentPage;
    }
    return Pagination;
}());
exports.Pagination = Pagination;
