export class BeerSong {
  static verse(a, b) {
    let minVerse = b || a;
    let maxVerse = a;
    let verse = [];

    for(let i = maxVerse; i >= minVerse; i--) {
      if (i === 0) {
        verse.push(`No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n`);
      } else if (i === 1){
        verse.push(`1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`);
      } else if (i === 2){
        verse.push(`2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`);
      } else {
        verse.push(`${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i - 1} bottles of beer on the wall.\n`);
      }
    }
    return verse.join("\n");
  }

  static sing(max = 99, min = "0") {
    let song = this.verse(max, min);
    return song;
  }
}
