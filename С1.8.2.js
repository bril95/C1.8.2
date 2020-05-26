jQuery.prototype.text = function(){
    this.each(element => element.innerText())
  return this;
}