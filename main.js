(function(){
  "use strict";
  
  var mqfunc = function(q) {
    var el = window.document.querySelector(q)
    
    el.html = function(v) {
      if (typeof v === "string") {
        this.innerHTML = v
      }else{
        return this.innerHTML
      }
    }.bind(el)
    
    el.val = function(v) {
      if (typeof v === "string") {
        this.value = v
      }else{
        return this.value
      }
    }.bind(el)
    
    el.on = function(n, f, c) {
      this.addEventListener(n, f, c)
    }.bind(el)
    
    return el;
  }
  
  if (!window.$) {
    window.$ = mqfunc
  }else{
    window.miniQuery = mqfunc
  }
})()
