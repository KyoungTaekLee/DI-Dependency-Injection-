function gettime(){
  const time = new Date();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
}

function set(){
  setInterval(gettime,1000);
}

module.exports.gettime = gettime;
module.exports.set = set;