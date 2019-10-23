export class NucleotideCounts {
  static parse(arg) {
    let dnaString = arg.split("");
    let nucleotides = ["A", "C", "G", "T"];
    checkForBadData(dnaString, nucleotides);
    return nucleotides.map(nucleotide => filterDNA(dnaString, nucleotide)).join(" ");
  }
}

const checkForBadData = (dnaString, nucleotides) => {
  return dnaString.map(d => {
    if (!nucleotides.includes(d)) throw "Invalid nucleotide in strand"
  });
}

const filterDNA = (dnaString, nucleotide) => {
  return dnaString.filter(d => d === nucleotide).length
}