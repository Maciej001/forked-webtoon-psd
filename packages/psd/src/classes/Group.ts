// @webtoon/psd
// Copyright 2021-present NAVER WEBTOON
// MIT License

import {GroupFrame} from "../sections";
import {NodeChild, NodeParent} from "./Node";
import {NodeBase} from "./NodeBase";

/**
 * A layer group, which may contain layers and other layer groups.
 * @alpha
 */
export class Group implements NodeBase<NodeParent, NodeChild> {
  readonly type = "Group";
  readonly children: NodeChild[] = [];

  /** @internal */
  constructor(
    private layerFrame: GroupFrame | undefined,
    public readonly parent: NodeParent
  ) {}

  get isHidden(): boolean {
    return this.layerFrame?.layerProperties.hidden || true;
  }

  get name(): string {
    return this.layerFrame?.layerProperties.name ?? "";
  }
  get opacity(): number {
    return this.layerFrame?.layerProperties.opacity ?? 0;
  }
  get composedOpacity(): number {
    return this.parent.composedOpacity * (this.opacity / 255);
  }

  get hidden(): boolean {
    return this.layerFrame?.layerProperties.hidden || false;
  }

  addChild(node: NodeChild): void {
    this.children.push(node);
  }
  hasChildren(): boolean {
    return this.children.length !== 0;
  }

  freeze(): void {
    this.children.forEach((node) => (node as NodeBase).freeze?.());
    Object.freeze(this.children);
  }
}
