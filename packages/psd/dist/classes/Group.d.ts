import { GroupFrame } from "../sections";
import { NodeChild, NodeParent } from "./Node";
import { NodeBase } from "./NodeBase";
/**
 * A layer group, which may contain layers and other layer groups.
 * @alpha
 */
export declare class Group implements NodeBase<NodeParent, NodeChild> {
    private layerFrame;
    readonly parent: NodeParent;
    readonly type = "Group";
    readonly children: NodeChild[];
    /** @internal */
    constructor(layerFrame: GroupFrame | undefined, parent: NodeParent);
    get isHidden(): boolean;
    get name(): string;
    get opacity(): number;
    get composedOpacity(): number;
    get hidden(): boolean;
    addChild(node: NodeChild): void;
    hasChildren(): boolean;
    freeze(): void;
}
//# sourceMappingURL=Group.d.ts.map