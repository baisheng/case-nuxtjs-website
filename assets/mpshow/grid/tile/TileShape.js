/* eslint-disable no-undef,no-floating-decimal,new-cap,prefer-reflect,func-style,no-whitespace-before-property */
// import {TweenLite, Sine, Back, Power2, Power1} from 'gsap'
import { TweenLite } from 'gsap/TweenLite'
import { Power2, Power1, Sine, Back } from 'gsap/TweenMax'

import loop from '../../../fz/core/loop'
import * as uColors from '../../../fz/utils/colors'
import GridConfig from '../GridConfig'
import gridLayers from '../GridLayers'
import SimplexNoise from 'simplex-noise'
// import {createShaderPluginSprite} from '../../../pixi-custom/createShaderPlugin'
// import bubbleVert from '~/assets/bubble.vert'
// import bubbleFrag from '~/assets/bubble.frag'
//
// const shader = createShaderPlugin(
//   'bubble',                                           // name
//   bubbleVefrt,
//   bubbleFrag,
//   {
//     noiseScale: {
//       type: "1f",
//       value: 5
//     },
//     noiseTime: {type: "1f", value: 0},
//     noiseTimeScale: {type: "1f", value: .002},
//     noiseValue: {type: "1f", value: 1},
//     mapNoise: {type: "sampler2D", value: null},
//     px: {type: "1f", value: 1},
//     py: {type: "1f", value: 1},
//     dx: {type: "1f", value: 1},
//     dy: {type: "1f", value: 1},
//     rad: {type: "1f", value: 0},
//     rectMask: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]},
//     tint: {type: "3f", value: [0, 0, 0]},
//     alpha: {type: "1f", value: 0},
//     translationMatrix: {type: "mat3", value: new Float32Array(9)},
//     projectionMatrix: {type: "mat3", value: new Float32Array(9)}
//   }
// );

// function exampleFilter (texture) {
//
//   PIXI.Filter.call(this,
//     // vs
//     bubbleVefrt,
//     bubbleFrag
//     // fs
//     // 'varying vec2 vTextureCoord;' +
//     // 'uniform sampler2D uSampler;' +
//     // 'uniform sampler2D bgTexture;' +
//     //
//     // 'void main(void)' +
//     // '{' +
//     // 'gl_FragColor = texture2D(bgTexture, vTextureCoord);' +
//     // '}'
//   );
//   // this.uniforms.noiseScale
//   // console.log(texture)
//   // this.uniforms.mapNoise = texture;
// }
//
// exampleFilter.prototype = Object.create(PIXI.Filter.prototype);
// exampleFilter.prototype.constructor = exampleFilter;

// const _createBubbleShader = function (shape) {

// const filter = new PIXI.Filter(bubbleVefrt, bubbleFrag)
// filter.apply = function(filterManager, input, output, clear) {
//   filterManager.applyFilter(this, input, output)
//   return filter
// }
// }
// let filter = _createBubbleShader()


class TileShape extends PIXI.Container {
  constructor (size) {
    super()
    this._vertShader = [
      '#define GLSLIFY 1',
      '#ifndef HALF_PI',
      '#define HALF_PI 1.5707963267948966',
      '#endif', 'float sineOut(float t) {',
      '  return sin(t * HALF_PI);',
      '}',
      'float sineIn(float t) {',
      '  return sin((t - 1.0) * HALF_PI) + 1.0;',
      '}',
      '#ifndef X',
      '#define X .211324865405187',
      '#define Y .36602540378443',
      '#define Z -.577350269189626',
      '#define W .024390243902439',
      '#endif',
      'vec3 permute(vec3 x) { return mod( x*x*34.+x, 289.); }',
      'float pnoise(vec2 v) {',
      '  vec2 i = floor(v + (v.x+v.y)*Y),',
      '      x0 = v -   i + (i.x+i.y)*X,',
      '       j = step(x0.yx, x0),',
      '      x1 = x0+X-j, ',
      '      x3 = x0+Z; ',
      '  i = mod(i,289.);',
      '  vec3 p = permute( permute( i.y + vec3(0, j.y, 1 ))',
      '                           + i.x + vec3(0, j.x, 1 )   ),',
      '       m = max( .5 - vec3( x0.x * x0.x + x0.y * x0.y,',
      '                           x1.x * x1.x + x1.y * x1.y,',
      '                           x3.x * x3.x + x3.y * x3.y ), 0.),',
      '       x = 2. * fract(p * W) - 1.,',
      '       h = abs(x) - .5,',
      '      a0 = x - floor(x + .5),',
      '       g = a0 * vec3(x0.x,x1.x,x3.x) ',
      '          + h * vec3(x0.y,x1.y,x3.y);',
      '  m = m*m*m*m* ( 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ) );  ',
      '  return .5 + 65. * dot(m, g);',
      '}',


      'attribute vec2 aVertexPosition;',
      'attribute vec2 aTextureCoord;',
      'attribute vec4 aColor;',

      'uniform mat3 projectionMatrix;',
      'uniform mat3 translationMatrix;',
      'uniform float noiseScale;',
      'uniform float noiseTime;',
      'uniform float noiseValue;',
      'uniform float noiseTimeScale;',
      'uniform sampler2D mapNoise;',
      'uniform float px;',
      'uniform float py;',
      'uniform float dx;',
      'uniform float dy;',
      'uniform float rad;',
      'uniform vec4 rectMask;',
      'uniform float alpha;',
      'uniform float flipY;',
      'uniform vec3 tint;',
      'varying vec2 vTextureCoord;',
      'varying vec4 vColor;',
      'float ease( float p ) {',
      '   return 1.0 - pow( 2.0, -10.0 * p );',
      '}', 'float rand(vec2 co){',
      'return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);',
      '}',
      'void main(void) {',
      '   float x = mod( aVertexPosition.x * noiseScale * 100. + noiseTime + noiseTime * noiseTimeScale + aVertexPosition.x * noiseScale, 512. ) / 512.;',
      '   float y = mod( aVertexPosition.y * noiseScale * 100. + noiseTime + noiseTime * noiseTimeScale + aVertexPosition.y * noiseScale, 512. ) / 512.;',
      '   vec4 dataNoise = texture2D( mapNoise, vec2( x, y ) );',
      '   float dir = atan( aVertexPosition.y, aVertexPosition.x );',
      '   float dis = noiseValue * dataNoise.r;',
      '   vec2 newPosition = vec2( aVertexPosition );',
      '   newPosition.x += cos( dir ) * ( dis + rad );',
      '   newPosition.y += sin( dir ) * ( dis + rad );',
      '   newPosition.x += dx;',
      '   newPosition.y += dy;',
      '   newPosition.x = clamp( newPosition.x, rectMask.x, rectMask.z );',
      '   newPosition.y = clamp( newPosition.y, rectMask.y, rectMask.w );',
      // '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(newPosition, 1.0)).xy, 0.0, 1.0);',
      'gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
      // 'gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);',
      // '   vColor = aColor * vec4(tint * alpha, alpha);',
      // '   vColor = aColor * vec4(tint * alpha, alpha);',
      '   vColor = vec4(0, 0.5450980392156862, 0.9333333333333333, 1.0) * 0.7;',
      // 'vColor = aColor * vec4(tint * alpha, alpha);',
      'vTextureCoord = aTextureCoord;',
      // '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(newPosition, 1.0)).xy, 0.0, 1.0);',
      // '   vColor = aColor * vec4(tint * alpha, alpha);'
      '}'
    ].join('\n');
    this.fragShader = `
      precision mediump float;
      uniform sampler2D mapNoise;
      varying vec4 vColor;
      void main(void){
         gl_FragColor = vColor;
      }
    `;
    this._filter = new PIXI.Filter(this._vertShader, this.fragShader, {
      customUniform: {
        type: '1f',
        value: 0.05
      },
      noiseScale: {
        type: "1f",
        value: 5
      },
      noiseTime: {type: "1f", value: 0},
      noiseTimeScale: {type: "1f", value: .002},
      noiseValue: {type: "1f", value: 1},
      mapNoise: {type: "sampler2D", value: PIXI.Texture.fromImage("/perlin_512.jpg")},
      px: {type: "1f", value: 1},
      py: {type: "1f", value: 1},
      dx: {type: "1f", value: 1},
      dy: {type: "1f", value: 1},
      rad: {type: "1f", value: 0},
      rectMask: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]},
      tint: {
        type: "3f",
        value: [0, 0, 0]
      },
      alpha: {type: "1f", value: 0.7},
      translationMatrix: {type: "mat3", value: new Float32Array(9)},
      projectionMatrix: {type: "mat3", value: new Float32Array(9)},
      aVertexPosition: {x: 0, y: 0},
      aColor: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]}
    })

    this._color = 15329769
    this._size = GridConfig.dimensions.tileBig
    this._radius = 140
    this._noiseScale = 0.008
    this._noiseValue = 25
    this._countPoints = 100
    this._toScale = 1.5
    this._dx = -1
    this._dy = -14
    if (size === 'medium') {
      this._radius = 120
      this._noiseScale = 0.0045
      this._noiseValue = 25
      this._countPoints = 70
      this._toScale = 1.8
      this._dx = -1
      this._dy = -14
      //
      // this.filter.uniforms.size = GridConfig.dimensions.tileBig
      // this.filter.uniforms.rad = 120
      // this.filter.uniforms.noiseScale = 0.0045
      // this.filter.uniforms.noiseValue = 25
      // this.filter.uniforms.countPoints = 70
      // this.filter.uniforms.toScale = 1.8
      // this.filter.uniforms.dx = -1
      // this.filter.uniforms.dy = -14
    }

    if (size === 'small') {
      this._size = GridConfig.dimensions.tile
      this._radius = 60
      this._noiseScale = 0.0099
      this._noiseValue = 20
      this._countPoints = 50
      this._toScale = 2.5
      this._dx = -1
      this._dy = -9
      //
      // this.filter.uniforms.size = GridConfig.dimensions.tileBig
      // this.filter.uniforms.radius = 60
      // this.filter.uniforms.noiseScale = 0.0099
      // this.filter.uniforms.noiseValue = 20
      // this.filter.uniforms.countPoints = 50
      // this.filter.uniforms.toScale = 2.5
      // this.filter.uniforms.dx = -1
      // this.filter.uniforms.dy = -9
    }
    this._timeAdd = 1
    this._isOver = false
    // this.fragShader = `
// precision mediump float;
//
// uniform vec2 mouse;
// uniform vec2 resolution;
// uniform float time;
// varying vec4 vColor;
//
// void main() {
//   pixel coords are inverted in framebuffer
    // vec2 pixelPos = vec2(gl_FragCoord.x, resolution.y - gl_FragCoord.y);
    // if (length(mouse - pixelPos) < 25.0) {
    //     gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0) * 0.7; //yellow circle, alpha=0.7
    // } else {
    //     gl_FragColor = vec4( sin(time), mouse.x/resolution.x, mouse.y/resolution.y, 1) * 0.5; // blend with underlying image, alpha=0.5
    // }
// }
// `;


    this.pShader = `
precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D mapNoise;

uniform sampler2D uSampler;
uniform float customUniform;

void main(void)
{
   vec2 uvs = vTextureCoord.xy;

   vec4 fg = texture2D(uSampler, vTextureCoord);


   fg.r = uvs.y + sin(customUniform);

   // fg.r = clamp(fg.r,0.0,0.9);
   gl_FragColor = fg;
   // gl_FragColor = vColor;

}
`
    // this.fragShader = '#define GLSLIFY 1\n';

    this.filter = new PIXI.Filter(this._vertShader, this.pShader, {
      customUniform: {
        type: '1f',
        value: 0.05
      },
      noiseScale: {
        type: "1f",
        value: 5
      },
      noiseTime: {type: "1f", value: 0},
      noiseTimeScale: {type: "1f", value: .002},
      noiseValue: {type: "1f", value: 1},
      // mapNoise: {type: "sampler2D", value: PIXI.Texture.fromImage("/static/perlin_512.jpg")},
      px: {type: "1f", value: 1},
      py: {type: "1f", value: 1},
      dx: {type: "1f", value: 1},
      dy: {type: "1f", value: 1},
      rad: {type: "1f", value: 180},
      rectMask: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]},
      tint: {
        type: "3f",
        value: [1.0, 1.0, 1.0]
      },
      alpha: {type: "1f", value: .7},
      translationMatrix: {type: "mat3", value: new Float32Array(9)},
      // projectionMatrix: {type: "mat3", value: new Float32Array(9)},
      aVertexPosition: {x: 0, y: 0},
      aColor: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]}
    })
    // filter = new PIXI.Filter(null, document.getElementById("frag").innerHTML);
    // filter.uniforms.time = 0;
    // this.filter = new PIXI.Filter([
    //     '#define GLSLIFY 1',
    //
    //     '#ifndef HALF_PI',
    //     '#define HALF_PI 1.5707963267948966',
    //     '#endif', 'float sineOut(float t) {',
    //     '  return sin(t * HALF_PI);',
    //     '}',
    //     'float sineIn(float t) {',
    //     '  return sin((t - 1.0) * HALF_PI) + 1.0;',
    //     '}',
    //     '#ifndef X',
    //     '#define X .211324865405187',
    //     '#define Y .36602540378443',
    //     '#define Z -.577350269189626',
    //     '#define W .024390243902439',
    //     '#endif',
    //     'vec3 permute(vec3 x) { return mod( x*x*34.+x, 289.); }',
    //     'float pnoise(vec2 v) {',
    //     '  vec2 i = floor(v + (v.x+v.y)*Y),',
    //     '      x0 = v -   i + (i.x+i.y)*X,',
    //     '       j = step(x0.yx, x0),',
    //     '      x1 = x0+X-j, ', '      x3 = x0+Z; ',
    //     '  i = mod(i,289.);',
    //     '  vec3 p = permute( permute( i.y + vec3(0, j.y, 1 ))',
    //     '                           + i.x + vec3(0, j.x, 1 )   ),',
    //     '       m = max( .5 - vec3( x0.x * x0.x + x0.y * x0.y,',
    //     '                           x1.x * x1.x + x1.y * x1.y,',
    //     '                           x3.x * x3.x + x3.y * x3.y ), 0.),',
    //     '       x = 2. * fract(p * W) - 1.,',
    //     '       h = abs(x) - .5,',
    //     '      a0 = x - floor(x + .5),',
    //     '       g = a0 * vec3(x0.x,x1.x,x3.x) ',
    //     '          + h * vec3(x0.y,x1.y,x3.y);',
    //     '  m = m*m*m*m* ( 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h ) );  ',
    //     '  return .5 + 65. * dot(m, g);',
    //     '}',
    //
    //     'attribute vec2 aVertexPosition;',
    //     'attribute vec4 aColor;',
    //     'uniform mat3 translationMatrix;',
    //     'uniform mat3 projectionMatrix;',
    //     'uniform float noiseScale;',
    //     'uniform float noiseTime;',
    //     'uniform float noiseValue;',
    //     'uniform float noiseTimeScale;',
    //     'uniform sampler2D mapNoise;',
    //     'uniform float px;',
    //     'uniform float py;',
    //     'uniform float dx;',
    //     'uniform float dy;',
    //     'uniform float rad;',
    //     'uniform vec4 rectMask;',
    //     'uniform float alpha;',
    //     'uniform float flipY;',
    //     'uniform vec3 tint;',
    //     'varying vec4 vColor;',
    //     'float ease( float p ) {',
    //     '   return 1.0 - pow( 2.0, -10.0 * p );',
    //     '}', 'float rand(vec2 co){',
    //     'return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);',
    //     '}',
    //     'void main(void){',
    //     '   float x = mod( aVertexPosition.x * noiseScale * 100. + noiseTime + noiseTime * noiseTimeScale + aVertexPosition.x * noiseScale, 512. ) / 512.;',
    //     '   float y = mod( aVertexPosition.y * noiseScale * 100. + noiseTime + noiseTime * noiseTimeScale + aVertexPosition.y * noiseScale, 512. ) / 512.;',
    //     '   vec4 dataNoise = texture2D( mapNoise, vec2( x, y ) );',
    //     '   float dir = atan( aVertexPosition.y, aVertexPosition.x );',
    //     '   float dis = noiseValue * dataNoise.r;',
    //     '   vec2 newPosition = vec2( aVertexPosition );',
    //     '   newPosition.x += cos( dir ) * ( dis + rad );',
    //     '   newPosition.y += sin( dir ) * ( dis + rad );',
    //     '   newPosition.x += dx;',
    //     '   newPosition.y += dy;',
    //     '   newPosition.x = clamp( newPosition.x, rectMask.x, rectMask.z );',
    //     '   newPosition.y = clamp( newPosition.y, rectMask.y, rectMask.w );',
    //     '   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(newPosition, 1.0)).xy, 0.0, 1.0);',
    //     '   vColor = aColor * vec4(tint * alpha, alpha);', '}',
    //   ].join('\n'),
    //   [
    //     'precision mediump float;',
    //     'uniform sampler2D mapNoise;',
    //     'varying vec4 vColor;',
    //     'void main(void){',
    //     '   gl_FragColor = vColor;',
    //     '}',
    //   ].join('\n'), {
    //     noiseScale: {
    //       type: "1f",
    //       value: 5
    //     },
    //     noiseTime: {type: "1f", value: 0},
    //     noiseTimeScale: {type: "1f", value: .002},
    //     noiseValue: {type: "1f", value: 1},
    //     mapNoise: {type: "sampler2D", value: PIXI.Texture.fromImage("/static/perlin_512.jpg")},
    //     px: {type: "1f", value: 1},
    //     py: {type: "1f", value: 1},
    //     dx: {type: "1f", value: 1},
    //     dy: {type: "1f", value: 1},
    //     rad: {type: "1f", value: 0},
    //     rectMask: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]},
    //     tint: {
    //       type: "3f",
    //       value: [0, 0, 0]
    //     },
    //     alpha: {type: "1f", value: 0},
    //     translationMatrix: {type: "mat3", value: new Float32Array(9)},
    //     projectionMatrix: {type: "mat3", value: new Float32Array(9)},
    //     aVertexPosition: {x: 0, y: 0},
    //     aColor: {type: "4f", value: [-1e3, -1e3, 1e3, 1e3]}
    //   }
    // )
    this._createData()
    this._createShape()
    this._render()
    this._binds = {}
    this._binds.onEnterFrame = this._onEnterFrame.bind(this)
  }

  _createData () {
    // this._points = [];
    // let a = 0;
    // const aAdd = 360 / this._countPoints * Math.PI / 180;
    // for (let i = 0; i < this._countPoints; i++) {
    //   this._points.push({
    //     x: Math.cos(a) * this._radius,
    //     y: Math.sin(a) * this._radius,
    //     a: a
    //   })
    //   a += aAdd
    // }
  }

  _createDataDisplacement () {
    this._displacement = [];
    for (let i = 0; i < this._countPoints; i++) {
      this._displacement.push({
        x: 0,
        y: 0
      })
    }
  }

  _createShape () {


    this._shape = new PIXI.Graphics;


    // this._shape.filters = [this.filter]
    this.addChild(this._shape);
    // const texture = PIXI.Texture.fromImage("/static/perlin_512.jpg")
    // this.filter.uniforms.mapNoise = texture
    const sh = this._size >> 1;
    this._setRectMask(-sh - this._dx + 1, -sh - this._dy + 1, sh - this._dx + 2, sh - this._dy + 2);
  }

  _setRectMask (x, y, w, h) {
    this._shape.rectMask = [x, y, w, h];
    // this.filter.uniforms.rectMask = this._shape.rectMask
  }

  over () {
    if (!this._isOver) {
      this._isOver = true;
      TweenLite.to(this._shape, .4, {
        noiseScale: .009,
        ease: Sine.easeOut
      });
      TweenLite.to(this._shape, .6, {
        rad: this._radius * this._toScale,
        ease: Sine.easeOut
      });
      TweenLite.to(this, .6, {
        _timeAdd: 12
      });
    }
  }

  out () {
    if (this._isOver) {
      this._isOver = false;
      TweenLite.killTweensOf(this._shape);
      TweenLite.to(this._shape, .5, {
        noiseScale: .005,
        rad: 0,
        ease: Sine.easeOut
      });
      TweenLite.to(this, .5, {
        _timeAdd: 1
      })
    }
  }

  _render () {
    this._drawCircle()
  }

  _drawCircle () {
    this._points = [];
    let a = 0;
    const aAdd = 360 / this._countPoints * Math.PI / 180;
    for (let i = 0; i < this._countPoints; i++) {
      this._points.push({
        x: Math.cos(a) * this._radius,
        y: Math.sin(a) * this._radius,
        a: a
      })
      a += aAdd
    }
    // const points = []
    const simplex = new SimplexNoise
    const time = 1e4 * Math.random()
    this._shape.clear()
    this._shape.beginFill(16777215)
    // let p = points[0]
    let p = this._points[0]
    const d = {
      x: 0,
      y: 0
    };
    this._shape.moveTo(p.x + d.x, p.y + d.y);
    let noise = 0
    for (let i = 0; i < this._countPoints; i++) {
      // p = points[i]
      //   this._shape.lineTo(p.x + d.x, p.y + d.y)
      p = this._points[i];
      noise = simplex.noise3D(p.x * this._noiseScale, p.y * this._noiseScale, time)
      // d.x = Math.cos(a) * this._noiseValue * noise
      // d.y = Math.sin(a) * this._noiseValue * noise
      d.x = Math.cos(a) * 8 * noise
      d.y = Math.sin(a) * 8 * noise
      // this._shape.lineTo(p.x + d.x, p.y + d.y)
      i > 0 ? this._shape.lineTo(p.x + d.x, p.y + d.y) : this._shape.moveTo(p.x + d.x, p.y + d.y);
    }

    // this._shape.fillAlpha = 0.5
    // for (var points = [], simplex = new SimplexNoise, a = 0, radius = 306, noiseScale = .0015, noiseValue = 90, time = 1e4 * Math.random(), aAdd = 3.6 * Math.PI / 180, i = 0; i < 100; i++) points.push({
    //   x: Math.cos(a) * radius,
    //   y: Math.sin(a) * radius,
    //   a: a
    // }), a += aAdd;
    // var shape = new PIXI.Graphics;
    // shape.x = engine.width >> 1, shape.y = engine.height >> 1, shape.clear(), shape.beginFill(this._colors.default);
    // var p = points[0], d = {x: 0, y: 0};
    // shape.moveTo(p.x + d.x, p.y + d.y);
    // for (var noise = 0, i = 0; i < 100; i++) p = points[i], noise = simplex.noise3D(p.x * noiseScale, p.y * noiseScale, time), d.x = Math.cos(a) * noiseValue * noise, d.y = Math.sin(a) * noiseValue * noise, i > 0 ? shape.lineTo(p.x + d.x, p.y + d.y) : shape.moveTo(p.x + d.x, p.y + d.y);
    // engine.stage.addChild(shape)
  }

  setColor (color) {
    const self = this;
    const rgbCurr = uColors.extractRGB(this._color)
    const rgbTo = uColors.extractRGB(color)
    const rgb = {
      r: rgbCurr.r,
      g: rgbCurr.g,
      b: rgbCurr.b
    };
    // this.filter.uniforms.tint = rgb
    this.filter.uniforms.tint = uColors.extractRGB(this._color)
    TweenLite.to(rgb, .6, {
      r: rgbTo.r,
      g: rgbTo.g,
      b: rgbTo.b,
      ease: Power2.easeOut,
      onUpdate () {
        self._color = uColors.RGBToHex(rgb)
        this.filter.uniforms.tint = uColors.RGBToHex(rgb)
        self._shape.tint = uColors.RGBToHex(rgb)
      }
    })
  }

  update (data, animate) {
    this.filter.uniforms.tint = PIXI.utils.hex2rgb(0x008bee)
    const self = this
    if (animate) {
      TweenLite.killTweensOf(this._shape)
      TweenLite.killTweensOf(this._shape.scale)
      TweenLite.to(this._shape, .6, {
        rotation: 2,
        ease: Power2.easeIn
      })
      TweenLite.to(this._shape.scale, .6, {
        x: 0,
        y: 0,
        ease: Back.easeIn,
        onComplete () {
          self._shape.tint = data.colors ? data.colors.default : 4473924
          this.filter.uniforms.tint = data.colors ? data.colors.default : 4473924
          TweenLite.to(self._shape, .6, {
            rotation: 0,
            ease: Power2.easeOut
          });
          TweenLite.to(self._shape.scale, .6, {
            x: 1,
            y: 1,
            ease: Back.easeOut
          })
        }
      })
    } else {
      // this.filter.uniforms.tint = data.colors ? data.colors.default : 4473924
      this._shape.tint = data.colors ? data.colors.default : 4473924
    }
  }

  setPosition (x, y) {
    // this._cnt.x = this._size >> 1
    // this._cnt.y = this._size >> 1
    this.x = x + .5 * this._size + this._dx >> 0
    this.y = y + .5 * this._size + this._dy >> 0
    this._shape.px = this.x
    this._shape.py = this.y
    // this.filter.uniforms.px = this.x
    // this.filter.uniforms.py = this.y
  }

  setup () {
    this._shape.noiseTime = 1e4 * Math.random()
    this._shape.noiseScale = this._noiseScale
    this._shape.noiseTimeScale = .002
    this._shape.noiseValue = this._noiseValue
    this._shape.dx = 0
    this._shape.dy = 0

    // this.filter.uniforms.noiseTime = 1e4 * Math.random()
    // this.filter.uniforms.noiseScale = this._noiseScale
    // this.filter.uniforms.noiseTimeScale = .002
    // this.filter.uniforms.noiseValue = this._noiseValue
    // this.filter.uniforms.dx = 0
    // this.filter.uniforms.dy = 0
  }

  excite () {
    TweenLite.to(this, .3, {
      _timeAdd: 10,
      ease: Power1.easeOut
    })
    TweenLite.to(this, .4, {
      delay: .4,
      _timeAdd: 1,
      ease: Power1.easeOut
    })
  }

  exciteConstant () {
    TweenLite.to(this, .3, {
      _timeAdd: 10,
      ease: Power1.easeOut
    })
  }

  add () {
    this.setup()
    gridLayers.get("shape").addChild(this)
  }

  remove () {
    gridLayers.get("shape").removeChild(this)
  }

  activate () {
    loop.add(this._binds.onEnterFrame)
  }

  _onEnterFrame () {
    this._shape.noiseTime += this._timeAdd
    this.filter.uniforms.noiseTime += this._timeAdd
    // this.filter.uniforms.translationMatrix = this._shape.transform.worldTransform.toArray(!0)
    // console.log(this.filter)
  }

  deactivate () {
    loop.remove(this._binds.onEnterFrame)
  }
}

export default TileShape
