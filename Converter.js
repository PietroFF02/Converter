function co1() { document.querySelector("#b1").setAttribute("value",  document.querySelector("#a1").value*1.609344 )
}
function co2() { document.querySelector("#b2").setAttribute("value",  document.querySelector("#a2").value*3.6 )
}
function co3() { document.querySelector("#b3").setAttribute("value",  document.querySelector("#a3").value*1.609344 )
}
function co4() { document.querySelector("#b4").setAttribute("value",  (document.querySelector("#a4").value-32)*5/9 )
}
function co5() { document.querySelector("#b5").setAttribute("value",  document.querySelector("#a5").value*0.453592 )
}
function co6() { document.querySelector("#b6").setAttribute("value",  document.querySelector("#a6").value*29.5735 )
}

function do1() { document.querySelector("#a1").setAttribute("placeholder", "Km"),
               document.querySelector("#b1").setAttribute("placeholder", "miles"),
      document.querySelector("#c1").setAttribute("onclick", "eo1()"),
    document.querySelector("#d1").setAttribute("onclick", "fo1()")
}
function do2() { document.querySelector("#a2").setAttribute("placeholder", "Km/h"),
               document.querySelector("#b2").setAttribute("placeholder", "m/s"),
     document.querySelector("#c2").setAttribute("onclick", "eo2()"),
    document.querySelector("#d2").setAttribute("onclick", "fo2()")
}
function do3() { document.querySelector("#a3").setAttribute("placeholder", "Km/h"),
               document.querySelector("#b3").setAttribute("placeholder", "miles/h"),
     document.querySelector("#c3").setAttribute("onclick", "eo3()"),
    document.querySelector("#d3").setAttribute("onclick", "fo3()")
}
function do4() { document.querySelector("#a4").setAttribute("placeholder", "C°"),
               document.querySelector("#b4").setAttribute("placeholder", "fahrenheit"),
     document.querySelector("#c4").setAttribute("onclick", "eo4()"),
    document.querySelector("#d4").setAttribute("onclick", "fo4()")
}
function do5() { document.querySelector("#a5").setAttribute("placeholder", "Kg"),
               document.querySelector("#b5").setAttribute("placeholder", "pounds"),
     document.querySelector("#c5").setAttribute("onclick", "eo5()"),
    document.querySelector("#d5").setAttribute("onclick", "fo5()")
}
function do6() { document.querySelector("#a6").setAttribute("placeholder", "ml"),
               document.querySelector("#b6").setAttribute("placeholder", "oz"),
     document.querySelector("#c6").setAttribute("onclick", "eo6()"),
    document.querySelector("#d6").setAttribute("onclick", "fo6()")
}

function eo1() { document.querySelector("#b1").setAttribute("value",  document.querySelector("#a1").value/1.609344 )
}
function eo2() { document.querySelector("#b2").setAttribute("value",  document.querySelector("#a2").value/3.6 )
}
function eo3() { document.querySelector("#b3").setAttribute("value",  document.querySelector("#a3").value/1.609344 )
}
function eo4() { document.querySelector("#b4").setAttribute("value",  (document.querySelector("#a4").value*9/5)+32 )
}
function eo5() { document.querySelector("#b5").setAttribute("value",  document.querySelector("#a5").value/0.453592 )
}
function eo6() { document.querySelector("#b6").setAttribute("value",  document.querySelector("#a6").value/29.5735 )
}

function fo1() { document.querySelector("#a1").setAttribute("placeholder", "miles"),
               document.querySelector("#b1").setAttribute("placeholder", "Km"),
      document.querySelector("#c1").setAttribute("onclick", "co1()"),
     document.querySelector("#d1").setAttribute("onclick", "do1()")
}
function fo2() { document.querySelector("#a2").setAttribute("placeholder", "m/s"),
               document.querySelector("#b2").setAttribute("placeholder", "Km/h"),
      document.querySelector("#c2").setAttribute("onclick", "co2()"),
     document.querySelector("#d2").setAttribute("onclick", "do2()")
}
function fo3() { document.querySelector("#a3").setAttribute("placeholder", "miles/h"),
               document.querySelector("#b3").setAttribute("placeholder", "Km/h"),
      document.querySelector("#c3").setAttribute("onclick", "co3()"),
     document.querySelector("#d3").setAttribute("onclick", "do3()")
}
function fo4() { document.querySelector("#a4").setAttribute("placeholder", "fahrenheit"),
               document.querySelector("#b4").setAttribute("placeholder", "C°"),
      document.querySelector("#c4").setAttribute("onclick", "co4()"),
     document.querySelector("#d4").setAttribute("onclick", "do4()")
}
function fo5() { document.querySelector("#a5").setAttribute("placeholder", "pounds"),
               document.querySelector("#b5").setAttribute("placeholder", "Kg"),
      document.querySelector("#c5").setAttribute("onclick", "co5()"),
     document.querySelector("#d5").setAttribute("onclick", "do5()")
}
function fo6() { document.querySelector("#a6").setAttribute("placeholder", "oz"),
               document.querySelector("#b6").setAttribute("placeholder", "ml"),
      document.querySelector("#c6").setAttribute("onclick", "co6()"),
     document.querySelector("#d6").setAttribute("onclick", "do6()")
}
