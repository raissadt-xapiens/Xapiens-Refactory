// Minimum Number
Math.min(-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98);

// Maximum Number
Math.max(-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98);


// Mean Number
const mean = arr => arr.reduce((sume, el) => sume + el, 0) / arr.length;
mean([-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98]);

// Median Number
const median = arr => {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
median([-6, -4, 0, 1, 2, 2, 3, 10, 12, 44, 52, 72, 98]);