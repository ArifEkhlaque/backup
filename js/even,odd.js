document.write("even:-")
for (var i = 1; i <= 100; i++) {
    
    if (i ==2){
     continue
    }
    if (i % 2 == 0) {
        document.writeln(i + " ")
    }
  
    
}
document.write("<br/>"+"odd:-")
for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0)
        document.write(i + " " )
}
