function expressionMatter(a, b, c) {
    const res1 = a * (b+c);
    const res2 = a * b * c;
    const res3 = a + b * c;
    const res4 = (a + b) * c;
    const res5 = (a * c) + b;
    const res6 = (b * c) + a;
    const res7 = a + b + c;
    
    const max = Math.max(res1, res2, res3, res4, res5, res6, res7);
    return max;
  }