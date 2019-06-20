describe('Calculate bill', function() {
it("should return the cost for call ", function(){
var instances = FactoryCalculateBill();
let total=  instances.billString('call,call,call,call,call,call,call,call');

assert.equal(total,"22");
});
it("should return the cost for sms ", function(){

var instances = FactoryCalculateBill();
let total=  instances.billString('sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms');

assert.equal(total,"11.25");


 });

it ("if total cost  0f sms,call exceed 20 it will  indicate warningLevel", function(){
 var instances = FactoryCalculateBill();
 let total=  instances.billString('sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms');
    assert.equal(total,"25.25");
 });

 it ("if total cost  0f sms,call exceed 20 it will  indicate cricallevel", function(){
   var instances = FactoryCalculateBill();
 
   let total=  instances.billString('sms,call,call,call,sms,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms,call,sms');
   assert.equal(total,"35");
});

});
  