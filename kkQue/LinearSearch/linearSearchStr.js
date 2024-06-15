function linearSearchStr(str, t) {
  if (!str) {
    return false;
  }
  //   let found = false;
  //   str.split("").forEach((element) => {
  //     console.log(element, t);
  //     if (element == t) found = true;
  //   });

  //   return found;
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (element == t) return true;
  }

  return false;
}

console.log(linearSearchStr("ahmed", "o"));
