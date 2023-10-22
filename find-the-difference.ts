// https://leetcode.com/problems/find-the-difference/description/

function findTheDifference(s: string, t: string): string {
   return String.fromCharCode(Array.from((s + t)).reduce((acc,char) => acc ^ char.charCodeAt(0), 0))
};
