export function tryCallQuery(queryFunction, resCallback, next) {
    // try {
    //     const result = await queryFunction();
    //     return resCallback(result);
    // } catch (error) {
    //     return next(error);
    // }
    return queryFunction().then(resCallback).catch(next);
}