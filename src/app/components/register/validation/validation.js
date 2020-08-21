export function isValidEmail(email) {
  let isCorrectFormat = false;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regex.test(email) ? isCorrectFormat = true : isCorrectFormat = false;
  return isCorrectFormat;
}

export function isEmpty(item) {
  return item === "" || item === undefined;
}

export function objectHasEmptyFields(obj) {
  for(let property in obj) {
    if(obj[property] === "") return true;
  }
  return false;
}
