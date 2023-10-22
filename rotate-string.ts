// https://leetcode.com/problems/rotate-string/description/

function rotateString(s: string, goal: string): boolean {
    return s.length === goal.length && (s + s).indexOf(goal) !== -1
};
