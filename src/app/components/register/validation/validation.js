export function isValidEmail(email) {
  let isCorrectFormat = false;
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regex.test(email) ? isCorrectFormat = true : isCorrectFormat = false;
  return isCorrectFormat;
}

export function isEmpty(item) {
  return item === "" || item === undefined;
}

export function isObjectEmpty(obj) {
  console.log('loop beginning');
  for(let property in obj) {
    console.log('prop', property);
    if(obj[property] === "") return true;
  }
  return false;
}
