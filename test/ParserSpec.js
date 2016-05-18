import { expect } from 'chai';
import parse from '../src/Parser';
import R from 'ramda';

describe('Parser', () => {

  describe('parse()', () => {


    // it('should render comment for #', () => {
    //   var text = '# this is a commented out';
    //   rendererMock.expects('comment').once(' this is commented out');
    //   parse(text);
    //   rendererMock.verify();
    // });

    it('should parse {title} directive', () => {
      var text = '{title:Shark Fin Blues}';
      var result = parse(text);
      console.log(`result ${R.toString(result)}`);
      expect(result.title).to.be.equal('Shark Fin Blues');
    });


    it('should parse {t} directive', () => {
      var text = '{t:Like a Hurricane}\n{st:This is a test}'
      var result = parse(text)
      console.log(`result: ${R.toString(result)}`);
      expect(result.title).to.be.equal('Like a Hurricane');
    });

    // it('should parse {subtitle} directive', () => {
    //   var text = '{subtitle:by The Drones}';
    //   rendererMock.expects('subtitle').once().withArgs('by The Drones');
    //   parse(text);
    //   rendererMock.verify();
    // });


    // it('should parse {st} directive', () => {
    //   var text = '{st:by Neil Young}'
    //   rendererMock.expects('subtitle').once().withArgs('by Neil Young');
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {comment} directive', () => {
    //   var text = '{comment:now listen here}';
    //   rendererMock.expects('comment').once().withArgs('now listen here');
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse {c} directive', () => {
    //   var text = '{c:something important}'
    //   rendererMock.expects('comment').once().withArgs('something important');
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse lyrics', () => {
    //   var text = 'There is a cat [C]staring at [Am]me'
    //   rendererMock.expects('lyrics').once().withArgs('There is a cat staring at me');
    //   parse(text);
    //   rendererMock.verify();
    // });

    // it('should parse chords', () => {
    //   var text = '[C]Too [Dm]many [G]chords'
    //   rendererMock.expects('chords').once().withArgs('C    Dm     G');
    //   parse(text);
    //   rendererMock.verify();
    // });

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
