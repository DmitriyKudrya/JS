var a = [1, 2, 3, 4, 5];

for (var i = 0; i<a.length; i++) {
  console.info(a[i]);
}





var a = [1, 2, 3, 4, 5];
a.forEach (function(i) {
  console.info(i);
})





var a = [1, 2, 3, 4, 5]
var i = 0
while(i < a.length){
console.info(a[i]);
i++;
}





var a = [1, 2, 3, 4, 5]
var i = 0
do {
  console.info(a[i]);
  i++;
} while(i < a.length)





var a = [1, 2, 3, 4, 5]
for (var i = 0; i<a.length; i++) {
  if (i===2) {continue}
  console.info(a[i]);





var a = [1, 2, 3, 4, 5]
for (var i = 0; i<a.length; i++) {
  if (i===2) {break}
  console.info(a[i]);