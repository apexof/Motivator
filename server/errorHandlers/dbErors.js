const prefix = "DB ERR: ";
function dbHandleErrors(err, insertObj) {
  if (err) {
    return console.log(prefix, err.message);
  }
  return insertObj;
}

module.exports = dbHandleErrors;
