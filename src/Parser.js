import R from 'ramda';
import camelize from 'camelize';
import treis from 'treis';

const normaliseDirectiveName = (directiveName) => {
  switch(directiveName) {
  case "t":
    return 'title';
  case "st":
    return 'subtitle';
  case "c":
    return 'comment';
  case "soc":
    return "start_of_chorus";
  case "eoc":
    return "end_of_chorus";
  case "sot":
    return "start_of_tab";
  case "eot":
    return "end_of_tab";
  default:
    return directiveName;
  }
}

const metadataDirectives = ['title', 'subtitle', 'artist'];

const directiveRegex = /^\s*\{(.*)\}/;

const isDirective = R.test(directiveRegex);

const parseDirective = (line) => {
  let result = directiveRegex.exec(line);
  let elements = R.split(':', result[1]);
  let normalisedDirectiveName = normaliseDirectiveName(elements[0]);
  return {
    type: normalisedDirectiveName,
    value: R.slice(1, R.length(elements), elements)[0]
  }
}

var sourceCommentRegex = /^\s*#(.*)/;

const isSourceComment = R.test(sourceCommentRegex);

function parseSourceComment(line) {
  return {
    type: 'sourceComment',
    value: sourceCommentRegex.exec(line)[1]
  }
}

var chordsRegex = /\[([a-zA-Z0-9#+])*\]/g;

function parseLyrics(line) {
  return {
    type: 'lyrics',
    value: line.replace(chordsRegex, '').trim()
  }
}

const isChords = R.test(chordsRegex);

function parseChords(line) {
  var result = '';
  var inChord = false;
  var currentChord = '';
  for(var i = 0; i < line.length; i++) {
    var current = line[i];
    if (current === '[') {
      inChord = true;
      currentChord = '';
    } else if (current === ']') {
      i += currentChord.length;
      inChord = false;
      result += currentChord;
    } else if (inChord) {
      currentChord += current;
    } else {
      result += ' ';
    }
  }
  return {
    type: 'chords',
    value: result.trim()
  }
}

const parseChordsAndLyrics = R.juxt([parseChords, parseLyrics]);

const splitIntoLines = R.split('\n');

const parseLine = R.cond([
  [isDirective, parseDirective],
  [isSourceComment, parseSourceComment],
  [isChords, parseChordsAndLyrics],
  [R.T, parseLyrics]
]);

const parseLines = R.map(parseLine);

const parseChordPro = R.pipe(splitIntoLines, treis(parseLines), R.flatten);

function convertArgs(args) {
  var asInt = parseInt(args);
  return Number.isNaN(asInt) ? args : [asInt];
}

export default parseChordPro;
