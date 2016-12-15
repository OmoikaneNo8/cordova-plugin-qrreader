module.exports = {
  sayHello: function(name, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "qrreader", "sayHello", [name]);
  }
};
