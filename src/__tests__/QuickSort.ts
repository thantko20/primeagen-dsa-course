import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    const arr2 = [1, 2, 3, 4, 5];
    const arr3 = [5, 4, 3, 2, 1];

    debugger;
    quick_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);

    quick_sort(arr2);
    expect(arr2).toEqual([1, 2, 3, 4, 5]);

    quick_sort(arr3);
    expect(arr3).toEqual([1, 2, 3, 4, 5]);
});
