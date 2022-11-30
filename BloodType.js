function canGiveBlood(b1, b2) {
    if (b1.charAt(1) == "-"){
      if(b1.charAt(0) == "O"){
        return true;
      }
      else if(b1.charAt(0) == "A"){
        if (b2.charAt(0) == "A" || b2.charAt(1) == "B"){
          return true;
        }
        else{
          return false;
        }
      }
      else if(b1.charAt(0) == "B"){
        if (b2.charAt(0) == "B" || b2.charAt(1) == "B"){
          return true;
        }
        else{
          return false;
        }
      }
  }
  else if (b1.charAt(1) == "+"){
    if(b1.charAt(0) == "O"){
      if (b2.charAt(1) == "+" || b2.charAt(2) == "+"){
      return true;
    }
    else{
      return false;
    }
    }
    else if(b1.charAt(0) == "A"){
      if (b2 == "A+" || b2 == "AB+"){
        return true;
      }
      else{
        return false;
      }
    }
    else if(b1.charAt(0) == "B"){
      if (b2 == "B+" || b2 == "AB+"){
        return true;
      }
      else{
        return false;
      }
    }
  }
  else if (b1 == "AB-" || b1 == "AB+"){
    if (b1 == "AB-"){
      if (b2 == "AB+" || b2 == "AB-"){
              return true;
      }
      else{
        return false;
      }
    }
    else if (b1 == "AB+"){
      if (b2 == "AB+"){
        return true;
    }
    else{
      return false;
    }
  }
}
}
var i = canGiveBlood("O+", "A+");
var j = canGiveBlood("A-", "B-");
var k = canGiveBlood("A-", "AB+");

console.log(i);
console.log(j);
console.log(k);
