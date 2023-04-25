var longestCommonPrefix = function (strs) {
    let pref = strs[0];
    let commPref = ''
    for (let i = 0; i < pref.length; i++) {
        commPref += pref[i]
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j].startsWith(commPref))
                return commPref.substring(0, commPref.length - 1);

        }
    }
    return commPref;
};


console.log(longestCommonPrefix(["flower", "flow", "daflight"]))