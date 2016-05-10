import R from 'ramda';
import camelize from 'camelize';

function parse(text, renderer) {
  var lines = R.split('\n', text);
  R.forEach(line => parseLine(line, renderer), lines);
}

function parseLine(line, renderer) {
  if(isComment(line)) {
    renderer.comment(parseComment(line));
  } else if(isDirective(line)) {
    var directive = parseDirective(line);
    renderDirective(renderer, directive);
  } else {
    renderer.lyrics(parseLyrics(line));
    var chords = parseChords(line);
    renderer.chords(chords);
  }
 }

function renderDirective(renderer, directive) {
  var functionName = camelize(directive.name);
  var target = renderer[functionName];
  if (target !== undefined) {
    var converted = convertArgs(directive.args);
    renderer[functionName].apply(this, converted);
  }
}

function convertArgs(args) {
  var asInt = parseInt(args);
  return Number.isNaN(asInt) ? args : [asInt];
}

var commentRegex = /^\s*#(.*)/;

function isComment(line) {
  return line.match(commentRegex)
}

function parseComment(line) {
  return commentRegex.exec(line)[1];
}

var directiveRegex = /^\s*\{(.*)\}/;

function isDirective(line) {
  return line.match(directiveRegex);
}

function resolveAliases(directiveName) {
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

function parseDirective(line) {
  var result = directiveRegex.exec(line);
  var elements = R.split(':', result[1]);
  return {
    name: resolveAliases(elements[0]),
    args: R.slice(1, R.length(elements), elements)
  }
}

var chordsRegex = /\[([a-zA-Z0-9#+])*\]/g;

function parseLyrics(line) {
  return line.replace(chordsRegex, '').trim();
}

function parseChords(line) {
  var result = '';
  var inChord = false;
  for(var i = 0; i < line.length; i++) {
    var current = line[i];
    if (current === '[') {
      inChord = true;
    } else if (current === ']') {
      inChord = false;
    } else if (inChord) {
      result += current;
    } else {
      result += ' ';
    }
  }
  return result.trim();
}

export default parse;
