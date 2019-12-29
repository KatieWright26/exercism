const MAX_PHONE_LENGTH = 10;

export class PhoneNumber {
  constructor(num) {
    this.phone = num;
  }

  number() {
    let safeNum = this.phone.match(/[0-9]+/g).join("");
    if (safeNum.length < 10) return null;
    if (safeNum.length >= 11 && safeNum[0] != "1") return null;
    if (safeNum.length === 11) {
      safeNum = safeNum.slice(1, safeNum.length);
    }
    let areaCode = safeNum.slice(0, 1);
    let exchangeCode = safeNum.slice(3, 4);

    if (areaCode <= "1") return null;
    if (exchangeCode<= "1") return null;

    return safeNum;
  }
}
