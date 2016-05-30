import { expect } from 'chai';
import parse from '../src/Parser';
import R from 'ramda';

describe('Parser', () => {

  describe('parse()', () => {

    it('should render comment for #', () => {
      var result = parse('# this is a commented out')[0];
      expect(result.type).be.equal('sourceComment');
      expect(result.value).be.equal(' this is a commented out');
    });

    it('should parse {title} directive', () => {
      var result = parse('{title:Shark Fin Blues}')[0];
      expect(result.type).to.be.equal('title');
      expect(result.value).to.be.equal('Shark Fin Blues');
    });

    it('should parse {t} directive', () => {
      var result = parse('{t:Like a Hurricane}\n{st:This is a test}')[0];
      expect(result.type).to.be.equal('title');
      expect(result.value).to.be.equal('Like a Hurricane');
    });

    it('should parse {subtitle} directive', () => {
      var result = parse('{subtitle:by The Drones}')[0];
      expect(result.type).to.be.equal('subtitle');
      expect(result.value).to.be.equal('by The Drones');
    });

    it('should parse {st} directive', () => {
      var result = parse('{st:by Neil Young}')[0];
      expect(result.type).to.be.equal('subtitle');
      expect(result.value).to.be.equal('by Neil Young');
    });

    it('should parse {comment} directive', () => {
      var result = parse('{comment:now listen here}')[0];
      expect(result.type).to.be.equal('comment');
      expect(result.value).to.be.equal('now listen here');
    });

    // it('should parse {c} directive', () => {
    //   var text = '{c:something important}'
    //   rendererMock.expects('comment').once().withArgs('something important');
    //   parse(text);
    //   rendererMock.verify();
    // });

    it('should parse lyrics', () => {
      var result = parse('There is a cat [C]staring at [Am]me')[1];
      expect(result.type).to.be.equal('lyrics');
      expect(result.value).to.be.equal('There is a cat staring at me');
    });

    it('should parse chords', () => {
      var result = parse('[C]Too [Dm]many [G]chords');
      console.log(R.toString(result[0]));
      expect(result[0].type).to.be.equal('chords');
      expect(result[0].value).to.be.equal('C    Dm     G');
    });

    // it('should parse {start_of_chorus}', () => {
    //   var text = '{start_of_chorus}'
    //   rendererMock.expects('startOfChorus').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {end_of_chorus}', () => {
    //   var text = '{end_of_chorus}'
    //   rendererMock.expects('endOfChorus').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {soc}', () => {
    //   var text = '{soc}'
    //   rendererMock.expects('startOfChorus').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {eoc}', () => {
    //   var text = '{eoc}'
    //   rendererMock.expects('endOfChorus').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {start_of_tab}', () => {
    //   var text = '{start_of_tab}'
    //   rendererMock.expects('startOfTab').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {end_of_tab}', () => {
    //   var text = '{end_of_tab}'
    //   rendererMock.expects('endOfTab').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {sot}', () => {
    //   var text = '{sot}'
    //   rendererMock.expects('startOfTab').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {eot}', () => {
    //   var text = '{eot}'
    //   rendererMock.expects('endOfTab').once();
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {capo}', () => {
    //   var text = '{capo:5}'
    //   rendererMock.expects('capo').once().withArgs(5);
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {define}', () => {
    // });

    // it('should parse {artist}', () => {
    //   var text = '{artist:Neil Young}'
    //   rendererMock.expects('artist').once().withArgs('Neil Young');
    //   parse(text);
    //   rendererMock.verify();
    // });

 
 });

});
