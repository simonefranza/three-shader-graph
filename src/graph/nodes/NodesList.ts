import { BaseNode} from "./BaseNode";

import { OutputNode } from "./OutputNode";
import { PrincipledBSDF } from "./PrincipledBSDF";
import { NoiseTexture } from "./NoiseTexture";
import { ColorRamp } from "./ColorRamp";

export interface NodesListElement {
  name : string,
  class : new () => BaseNode,
}

export class NodesList {
  static getNodesList() : NodesListElement[] {
    return [
      {
        name: "Material Output",
        class: OutputNode,
      },
      {
        name: "Principled BSDF",
        class: PrincipledBSDF,
      },
      {
        name: "Noise Texture",
        class: NoiseTexture,
      },
      {
        name: "Color Ramp",
        class: ColorRamp,
      },
    ];
  }
}
