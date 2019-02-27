export function announce(message) {
   return alert(message);
}
export function log(message) {
  return console.log(message);
}

export default {
  announce: announce,
  log: log
};
/*
Teine viis
module.exports = function (message){
    alert(message);
}*/
