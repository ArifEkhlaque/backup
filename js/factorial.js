/*5=5x4x3x2x1
7=7x6x5x4x3x2x1*/
var a= prompt("enter a number")
var product=1
for (var i=1;i<=a;i++){
    product=i*product
}

document.write("factorial:-"+product)