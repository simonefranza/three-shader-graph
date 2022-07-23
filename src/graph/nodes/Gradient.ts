import { Color } from "../utils/Color";

export class Gradient {
  pickers: Picker[];

  interpolation : Interpolation;

  constructor(
      pickers: Picker[],
      interpolation ?: Interpolation,
  ) {
    this.interpolation = interpolation || Interpolation.Linear;
    this.pickers = [ ...pickers ];
  }

  getPickers() : Picker[] {
    return [ ...this.pickers ];
  }

  setPickers(newPickers : Picker[]) {
    console.log(this.pickers.length, newPickers.length);
    this.pickers = [ ...newPickers ];
  }

  getInterpolation() : Interpolation {
    return this.interpolation;
  }

  findSidePickers(pos : number) : [Picker, Picker] {
    let idx = -1;
    if (this.pickers[0].position >= pos) {
      return [ {position : 0, color : this.pickers[0].color}, this.pickers[0] ];
    }
    for (let i = 0; i < this.pickers.length - 1; i++) {
      if (this.pickers[i].position <= pos && this.pickers[i + 1].position >= pos) {
        idx = i;
        break;
      }
    }
    if (idx === -1) {
      return [ this.pickers[this.pickers.length - 1],
        {position : 1, color : this.pickers[this.pickers.length - 1].color} ];
    }
    return [ this.pickers[idx], this.pickers[idx + 1] ];
  }

  handleInterpolationConstant(pickerBefore : Picker) : Color {
    return pickerBefore.color;
  }

  handleInterpolationLinear(pos : number, pickerBefore : Picker, pickerAfter : Picker) : Color{
    const dist = pickerAfter.position - pickerBefore.position;
    if (Math.abs(dist) < 1e-5) {
      return pickerBefore.color;
    }
    const fac = (pos - pickerBefore.position) / dist;

    return Color.interpolateRgba(pickerBefore.color, pickerAfter.color, fac);
  }

  getColorAt(pos : number) : Color {
    if (pos < 0 || pos > 1) {
      throw "[Gradient] Position is outside of bound: " + pos;
    }
    const [ pickerBefore, pickerAfter ] = this.findSidePickers(pos);
    if (this.interpolation === Interpolation.Constant) {
      return this.handleInterpolationConstant(pickerBefore);
    } else if (this.interpolation === Interpolation.Linear) {
      return this.handleInterpolationLinear(pos, pickerBefore, pickerAfter);
    }
    throw "[Gradient] Interpolation not implemented: " + this.interpolation;
  }
}

export enum Interpolation {
  Linear,
  Constant
}

export interface Picker {
  position: number,
  color : Color,
}
