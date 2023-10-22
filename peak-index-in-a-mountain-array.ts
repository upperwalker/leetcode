// https://leetcode.com/problems/peak-index-in-a-mountain-array/description/

function peakIndexInMountainArray(arr: number[]): number {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    while (leftIndex !== rightIndex) {
        const segmentLength = rightIndex - leftIndex
        const halfOfSegment = (segmentLength + segmentLength % 2) / 2
        if (arr[leftIndex] < arr[leftIndex + 1]) {
            leftIndex += halfOfSegment
        } else {
            rightIndex = leftIndex
            leftIndex = rightIndex - halfOfSegment
        }
    }
    
    return leftIndex
};
