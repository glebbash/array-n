/**
 * Creates multidimensional array.
 * @param dimens Dimensions of array
 * @param elem Function to create element, accepts all indices as args
 */
export const array = <T>(
    dimens: number[],
    elem: (...args: number[]) => T,
    args: number[] = [],
): any =>
    Array(dimens[0])
        .fill(0)
        .map(
            dimens.length === 1
                ? (_: T, i: number) => elem(...args, i)
                : (_: T, i: number) =>
                      array(dimens.slice(1), elem, [...args, i]),
        )
