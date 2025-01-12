export * from "./ColorModeData";
export * from "./FileHeader";
export * from "./ImageData";
export * from "./ImageResource";
export * from "./LayerAndMaskInformation";
import { FileHeaderSection } from "./FileHeader";
/**
 * Structure of a partially-parsed PSD file, generated by parsing only the file
 * header section.
 */
export declare type FileStructure = {
    fileHeader: FileHeaderSection;
    colorModeData: DataView;
    imageResources: DataView;
    layerAndMaskInformation: DataView;
    imageData: DataView;
};
export declare function getFileStructure(buffer: ArrayBuffer): FileStructure;
//# sourceMappingURL=index.d.ts.map