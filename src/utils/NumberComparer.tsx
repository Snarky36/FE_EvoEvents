class NumberComparer {
  constructor(private readonly value: number) {}

  getValue() {
    return this.value;
  }

  isBigger(integer: number) {
    return this.value > integer;
  }

  isSmaller(integer: number) {
    return this.value < integer;
  }

  isBetween(min: number, max: number) {
    return this.value > min && this.value < max;
  }
}

export default NumberComparer;
