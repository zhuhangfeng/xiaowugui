const http = uni.$u.http

export const getList = ()=>http.get('/product/getBaseCategoryLis')