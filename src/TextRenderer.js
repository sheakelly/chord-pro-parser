let TextRenderer = {

  titleText: '',
  subtitleText: '',
  artistText: '',
  body: [],

  comment: function(text) {
    this.body.push(text);
  },

  title: function(text) {
    this.titleText = text;
  },

  subtitle: function(text) {
    this.subtitleText = text;
  },

  chords: function(chords) {
    this.body.push(chords);
  },

  lyrics: function (text) {
    this.body.push(text);
  },

  artist: function(text) {
    this.artistText = text;
  },

  output: function() {
    let output = '';
    this.output += this.title;
    if(this.artist) {
      output += ` - ${artist}`;
    }
  }
}

export default TextRenderer;
