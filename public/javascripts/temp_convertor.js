window.TempConvertor = {}

TempConvertor.cToF = function(c){
  return Math.round(9/5*c+32);
};
TempConvertor.fToC = function(f){
  return Math.round((f-32)*5/9);
};

(function($){
  $.fn.convertsFToC = function(cselector){
    return this.blur(function(){
      var f = $(this).val();
      console.log('fbox value '+f);
      var c = TempConvertor.fToC(f);
      $(cselector).val(c);
    });
  };
})(jQuery);
