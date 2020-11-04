import { serializedNodeWithId, idNodeMap, INode, CallbackArray } from './types';
export declare function addHoverClass(cssText: string): string;
export declare function buildNodeWithSN(n: serializedNodeWithId, doc: Document, map: idNodeMap, cbs: CallbackArray, skipChild?: boolean, HACK_CSS?: boolean): [INode | null, serializedNodeWithId[]];
declare function rebuild(n: serializedNodeWithId, doc: Document, onVisit?: (node: INode) => unknown, HACK_CSS?: boolean): [Node | null, idNodeMap];
export default rebuild;
