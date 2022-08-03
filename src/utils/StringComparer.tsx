class StringComparer {
  constructor(private readonly value: string) {}

  hasLengthBetween(min: number, max: number) {
    return this.value.length < min || this.value.length > max;
  }

  isSmaller(integer: number) {
    return this.value.length < integer;
  }
}

export default StringComparer;
