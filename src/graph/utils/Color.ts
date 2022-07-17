import { Vector3 } from "three";
import { clamp } from "./General";

export enum ColorSpace {
  HSV,
  HSL,
  RGB,
  HEX,
}

export class Color {
  hsv : Vector3;

  hsl : Vector3;

  rgb : Vector3;

  hex : Vector3;

  alpha : number;

  constructor(colorSpace : ColorSpace,
      val1: number | string,
      val2 : number | string, val3: number | string, val4 : number | string ) {
    let numberValues : [number, number, number, number] = [ 0, 0, 0, 0 ];
    this.hsv = new Vector3();
    this.hsl = new Vector3();
    this.rgb = new Vector3();
    this.hex = new Vector3();
    this.alpha = 0;
    switch (colorSpace) {
    case ColorSpace.HSV:
      numberValues = this.convertToNumber(val1, val2, val3, val4, false);
      this.setHSV(numberValues);
      break;
    case ColorSpace.HSL:
      numberValues = this.convertToNumber(val1, val2, val3, val4, false);
      this.setHSL(numberValues);
      break;
    case ColorSpace.RGB:
      numberValues = this.convertToNumber(val1, val2, val3, val4, false);
      this.setRGB(numberValues);
      break;
    case ColorSpace.HEX:
      numberValues = this.convertToNumber(val1, val2, val3, val4, false, 16);
      this.setHEX(numberValues);
      break;
    default:
      throw "[Color:constructor] Invalid colorspace";
    }
  }

  isValidHSVorHSL(values : [number, number, number, number?]) : boolean {
    if (values[0] < 0 || values[0] >= 360) {
      return false;
    } else if (values[1] < 0 || values[1] > 1) {
      return false;
    } else if (values[2] < 0 || values[2] > 1) {
      return false;
    } else if (values.length >= 4 && values[3] !== undefined && (values[3] < 0 || values[3] > 1)) {
      return false;
    }
    return true;
  }

  isValidRGBorHEX(values : [number, number, number, number?]) {
    if (values[0] < 0 || values[0] > 255) {
      return false;
    } else if (values[1] < 0 || values[1] > 255) {
      return false;
    } else if (values[2] < 0 || values[2] > 255) {
      return false;
    } else if (values.length >= 4 && values[3] !== undefined && (values[3] < 0 || values[3] > 1)) {
      return false;
    }
    return true;
  }

  convertToNumber( val1: number | string,
      val2 : number | string,
      val3: number | string,
      val4 : number | string,
      toInt : boolean,
      base ?: number) : [number, number, number, number] {
    if (toInt && base === undefined) {
      throw "[Color:convertToNumber] toInt is true and base undefined";
    }
    const input = [ val1, val2, val3, val4 ];
    const output : [number, number, number, number] = [ 0, 0, 0, 0 ];
    for (let i = 0 ; i < 4; i++) {
      let val = input[i];
      if (typeof val === "string") {
        if (val.includes("%")) {
          val = val.replace("%", "");
        }
        if (toInt) {
          output[i] = parseInt(val, base);
        } else {
          output[i] = parseFloat(val);
        }
      } else {
        output[i] = val;
      }
    }
    return [ ...output ];
  }

  setHSV(values : [number, number, number] | [number, number, number, number]) {
    if (!this.isValidHSVorHSL(values)) {
      throw "[Color:setHSV] Invalid hsv values: " + values;
    }
    console.log("set hsv", values.length, values[3], this.alpha);
    if (values.length === 4) {
      this.alpha = values[3];
    }
    this.hsv.x = values[0];
    this.hsv.y = values[1];
    this.hsv.z = values[2];
    const hslValues = [ ...Color.hsvToHsl(values[0], values[1], values[2]) ];
    this.hsl.x = hslValues[0];
    this.hsl.y = hslValues[1];
    this.hsl.z = hslValues[2];
    const rgbValues = [ ...Color.hsvToRgb(values[0], values[1], values[2]) ];
    this.rgb.x = rgbValues[0];
    this.rgb.y = rgbValues[1];
    this.rgb.z = rgbValues[2];
    this.hex.x = rgbValues[0];
    this.hex.y = rgbValues[1];
    this.hex.z = rgbValues[2];
    console.log("new hsv", this.hsv, this.rgb);
  }

  setHSL(values : [number, number, number] | [number, number, number, number]) {
    if (!this.isValidHSVorHSL(values)) {
      throw "[Color:setHSV] Invalid hsv values";
    }
    if (values.length === 4) {
      this.alpha = values[3];
    }
    this.hsl.x = values[0];
    this.hsl.y = values[1];
    this.hsl.z = values[2];
    const rgbValues = [ ...Color.hslToRgb(values[0], values[1], values[2]) ];
    this.rgb.x = rgbValues[0];
    this.rgb.y = rgbValues[1];
    this.rgb.z = rgbValues[2];
    this.hex.x = rgbValues[0];
    this.hex.y = rgbValues[1];
    this.hex.z = rgbValues[2];
    const hsvValues = [ ...Color.rgbToHsv(rgbValues[0], rgbValues[1], rgbValues[2]) ];
    this.hsv.x = hsvValues[0];
    this.hsv.y = hsvValues[1];
    this.hsv.z = hsvValues[2];
  }

  setRGB(values : [number, number, number] | [number, number, number, number]) {
    if (!this.isValidRGBorHEX(values)) {
      throw "[Color:setRGB] Invalid rgb values";
    }
    if (values.length === 4) {
      this.alpha = values[3];
    }
    this.rgb.x = values[0];
    this.rgb.y = values[1];
    this.rgb.z = values[2];
    this.hex.x = values[0];
    this.hex.y = values[1];
    this.hex.z = values[2];
    const hsvValues = [ ...Color.rgbToHsv(values[0], values[1], values[2]) ];
    this.hsv.x = hsvValues[0];
    this.hsv.y = hsvValues[1];
    this.hsv.z = hsvValues[2];
    const hslValues = [ ...Color.hsvToHsl(hsvValues[0], hsvValues[1], hsvValues[2]), ];
    this.hsl.x = hslValues[0];
    this.hsl.y = hslValues[1];
    this.hsl.z = hslValues[2];
  }

  setHEX(values : [number, number, number] | [number, number, number, number]) {
    this.setRGB(values);
  }

  setAlpha(value : number) {
    if (value < 0 || value > 1) {
      throw "[Color:setAlpha] Value invalid";
    }
    this.alpha = value;
  }

  getColorStringHex() : string {
    return Color.getColorStringHex(this.rgb.x, this.rgb.y, this.rgb.z, this.alpha);
  }

  getColorStringRgba() : string {
    return Color.getColorStringRgba(this.rgb.x, this.rgb.y, this.rgb.z, this.alpha);
  }

  getColorStringHsla() : string {
    return Color.getColorStringHsla(this.hsl.x, this.hsl.y, this.hsl.z, this.alpha);
  }

  getRgb() : Vector3 {
    return this.rgb;
  }

  getHex() : Vector3 {
    return this.hex;
  }

  getHsl() : Vector3 {
    return this.hsl;
  }

  getHsv() : Vector3 {
    return this.hsv;
  }

  getAlpha() : number {
    return this.alpha;
  }

  clone(color: Color) {
    console.log("clone", color);
    const alpha = color.getAlpha();
    this.alpha = alpha;
    console.log("clone", alpha);
    const hsv = color.getHsv();
    const hsl = color.getHsl();
    const rgb = color.getRgb();
    const hex = color.getHex();
    this.hsv.x = hsv.x;
    this.hsv.y = hsv.y;
    this.hsv.z = hsv.z;

    this.hsl.x = hsl.x;
    this.hsl.y = hsl.y;
    this.hsl.z = hsl.z;

    this.rgb.x = rgb.x;
    this.rgb.y = rgb.y;
    this.rgb.z = rgb.z;

    this.hex.x = hex.x;
    this.hex.y = hex.y;
    this.hex.z = hex.z;
  }

  static rgbToHsv (R : number, G : number, B : number) : [number, number, number] {
    if (R < 0 || R > 255) {
      throw "[rgbToHsv] R value invalid: " + R;
    } else if (G < 0 || G > 255) {
      throw "[rgbToHsv] G value invalid: " + G;
    } else if (B < 0 || B > 255) {
      throw "[rgbToHsv] B value invalid: " + B;
    }
    const R_ = R / 255;
    const G_ = G / 255;
    const B_ = B / 255;
    const Cmax = Math.max(R_, Math.max(G_, B_));
    const Cmin = Math.min(R_, Math.min(G_, B_));
    const delta = Cmax - Cmin;
    let H = 0;
    if (delta === 0) {
      H = 0;
    } else if (Cmax === R_) {
      H = 60 * (((G_ - B_) / delta) % 6);
    } else if (Cmax === G_) {
      H = 60 * (((B_ - R_) / delta) + 2);
    } else if (Cmax === B_) {
      H = 60 * (((R_ - G_) / delta) + 4);
    }
    const S = Cmax === 0 ? 0 : delta / Cmax;
    const V = Cmax;
    if (H < 0 || H >= 360) {
      H = (H + 3600) % 360;
    }

    return [ H, S, V ];
  }

  // h 0 <=360, s,v,a 0<=1
  static hsvToRgb(H : number, S : number, V : number) : [number, number, number] {
    if (H < 0 || H >= 360) {
      throw "[hsvToRgb] H value invalid: " + H;
    } else if (S < 0 || S > 1) {
      throw "[hsvToRgb] S value invalid: " + S;
    } else if (V < 0 || V > 1) {
      throw "[hsvToRgb] V value invalid: " + V;
    }
    const C = V * S;
    const X = C * (1 - Math.abs(((H / 60) % 2) - 1));
    const m = V - C;
    let R_, G_, B_;
    if (H < 60) {
      [ R_, G_, B_ ] = [ C, X, 0 ];
    } else if (H < 120) {
      [ R_, G_, B_ ] = [ X, C, 0 ];
    } else if (H < 180) {
      [ R_, G_, B_ ] = [ 0, C, X ];
    } else if (H < 240) {
      [ R_, G_, B_ ] = [ 0, X, C ];
    } else if (H < 300) {
      [ R_, G_, B_ ] = [ X, 0, C ];
    } else {
      [ R_, G_, B_ ] = [ C, 0, X ];
    }
    return [ (R_ + m) * 255, (G_ + m) * 255, (B_ + m) * 255 ];
  }

  static hsvToHsl(h : number, s : number, v : number) : [number, number, number] {
    // both hsv and hsl values are in [0, 1]
    const l = (2 - s) * v / 2;
    if (l != 0) {
      if (l == 1) {
        s = 0;
      } else if (l < 0.5) {
        s = s * v / (l * 2);
      } else {
        s = s * v / (2 - l * 2);
      }
    }
    let hue = clamp(0, 360, h);
    if (hue === 360) {
      hue = 0;
    }
    return [ hue, clamp(0, 1, s), clamp(0, 1, l) ];
  }

  static hslToRgb(H : number, S : number, L : number) : [number, number, number] {
    if (H < 0 || H >= 360) {
      throw "[hsvToRgb] H value invalid: " + H;
    } else if (S < 0 || S > 1) {
      throw "[hsvToRgb] S value invalid: " + S;
    } else if (L < 0 || L > 1) {
      throw "[hsvToRgb] L value invalid: " + L;
    }
    const C = (1 - Math.abs(2 * L - 1)) * S;
    const X = C * (1 - Math.abs((H / 60) % 2 - 1));
    const m = L - C / 2;
    let R_, G_, B_;
    if (H < 60) {
      [ R_, G_, B_ ] = [ C, X, 0 ];
    } else if (H < 120) {
      [ R_, G_, B_ ] = [ X, C, 0 ];
    } else if (H < 180) {
      [ R_, G_, B_ ] = [ 0, C, X ];
    } else if (H < 240) {
      [ R_, G_, B_ ] = [ 0, X, C ];
    } else if (H < 300) {
      [ R_, G_, B_ ] = [ X, 0, C ];
    } else {
      [ R_, G_, B_ ] = [ C, 0, X ];
    }
    return [ (R_ + m) * 255, (G_ + m) * 255, (B_ + m) * 255 ];
  }

  static getColorStringHex(r : number, g : number, b : number, a : number) {
    if (r < 0 || r > 255) {
      throw "[genColorStringHex] r is invalid: " + r;
    } else if (g < 0 || g > 255) {
      throw "[genColorStringHex] g is invalid: " + g;
    } else if (b < 0 || b > 255) {
      throw "[genColorStringHex] b is invalid: " + b;
    } else if (a < 0 || a > 1) {
      throw "[genColorStringHex] a is invalid: " + a;
    }
    return `#${Math.round(r).toString(16)}` +
      `${Math.round(g).toString(16)}${Math.round(b).toString(16)}` +
      `${Math.round(a * 255).toString(16)}`;
  }

  static getColorStringRgba(r : number, g : number, b : number, a : number) : string {
    if (r < 0 || r > 255) {
      throw "[genColorStringRgba] r is invalid: " + r;
    } else if (g < 0 || g > 255) {
      throw "[genColorStringRgba] g is invalid: " + g;
    } else if (b < 0 || b > 255) {
      throw "[genColorStringRgba] b is invalid: " + b;
    } else if (a < 0 || a > 1) {
      throw "[genColorStringRgba] a is invalid: " + a;
    }
    return `rgba(${r}, ${g}, ${b}, ${a * 100}%)`;
  }

  static getColorStringHsla(h : number, s : number, l : number, a : number) : string {
    if (h < 0 || h >= 360) {
      throw "[genColorStringHsla] h is invalid: " + h;
    } else if (s < 0 || s > 1) {
      throw "[genColorStringHsla] s is invalid: " + s;
    } else if (l < 0 || l > 1) {
      throw "[genColorStringHsla] l is invalid: " + l;
    } else if (a < 0 || a > 1) {
      throw "[genColorStringHsla] a is invalid: " + a;
    }
    return `hsla(${h.toFixed(2)}deg, ` +
      `${(s * 100).toFixed(2)}%, ${(l * 100).toFixed(2)}%, ${(a * 100).toFixed(2)}%)`;
  }
}
