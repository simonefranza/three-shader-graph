import {Vector4} from "three";

export class Gradient {
  pickers: Picker[];

  #interpolation : Interpolation;

  constructor(
      pickers: Picker[],
      interpolation ?: Interpolation,
  ) {
    this.#interpolation = interpolation || Interpolation.Linear;
    this.pickers = [ ...pickers ];
  }

  getPickers() : Picker[] {
    return [ ...this.pickers ];
  }

  setPickers(newPickers : Picker[]) {
    this.pickers = [ ...newPickers ];
  }

  getInterpolation() : Interpolation {
    return this.#interpolation;
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

  handleInterpolationConstant(pickerBefore : Picker) : Vector4 {
    return pickerBefore.color;
  }

  handleInterpolationLinear(pos : number, pickerBefore : Picker, pickerAfter : Picker) {
    console.log(pickerBefore, pickerAfter);
    const res = new Vector4(1, 1, 1, 1);
    const dist = pickerAfter.position - pickerBefore.position;
    if (Math.abs(dist) < 1e-5) {
      return pickerBefore.color;
    }
    const fac = (pos - pickerBefore.position) / dist;
    res.x = (1 - fac) * pickerBefore.color.x + fac * pickerAfter.color.x;
    res.y = (1 - fac) * pickerBefore.color.y + fac * pickerAfter.color.y;
    res.z = (1 - fac) * pickerBefore.color.z + fac * pickerAfter.color.z;
    res.w = (1 - fac) * pickerBefore.color.w + fac * pickerAfter.color.w;
    return res;
  }

  getColorAt(pos : number) : Vector4 {
    if (pos < 0 || pos > 1) {
      throw "[Gradient] Position is outside of bound: " + pos;
    }
    const [ pickerBefore, pickerAfter ] = this.findSidePickers(pos);
    if (this.#interpolation === Interpolation.Constant) {
      return this.handleInterpolationConstant(pickerBefore);
    } else if (this.#interpolation === Interpolation.Linear) {
      return this.handleInterpolationLinear(pos, pickerBefore, pickerAfter);
    }
    throw "[Gradient] Interpolation not implemented: " + this.#interpolation;
  }
}

export enum Interpolation {
  Linear,
  Constant
}

export interface Picker {
  position: number,
  color : Vector4,
}
