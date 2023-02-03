//ipv4 validation
function isValidIP(ip) {
    const octets = ip.split(".");
    if (octets.length !== 4) {
      return false;
    }
    for (const octet of octets) {
      if (!/^\d{1,3}$/.test(octet)) {
        return false;
      }
      if (octet < 0 || octet > 255) {
        return false;
      }
    }
    return true;
  }
  console.log(isValidIP("1.2.3.4")) //output true
  console.log(isValidIP("1.2.3")) //output false
  console.log(isValidIP("1.2.3.4.5")) //output false
  console.log(isValidIP("123.43.67.89")) //output false
  console.log(isValidIP("123.456.78.96")) //output false
  console.log(isValidIP("123.849.067.089")) //output false
  