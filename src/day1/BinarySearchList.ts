export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        let midpoint = Math.floor(low + (high - low) / 2);
        let value = haystack[midpoint];
        if (value === needle) return true;

        if (value > needle) {
            high = midpoint;
        } else {
            low = midpoint + 1;
        }
    } while (low < high);
    return false;
}
