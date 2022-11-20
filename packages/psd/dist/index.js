class ye {
  constructor(e, g) {
    this.layerFrame = e, this.parent = g, this.type = "Group", this.children = [];
  }
  get isHidden() {
    var e;
    return ((e = this.layerFrame) === null || e === void 0 ? void 0 : e.layerProperties.hidden) || !0;
  }
  get name() {
    var e, g;
    return (g = (e = this.layerFrame) === null || e === void 0 ? void 0 : e.layerProperties.name) !== null && g !== void 0 ? g : "";
  }
  get opacity() {
    var e, g;
    return (g = (e = this.layerFrame) === null || e === void 0 ? void 0 : e.layerProperties.opacity) !== null && g !== void 0 ? g : 0;
  }
  get composedOpacity() {
    return this.parent.composedOpacity * (this.opacity / 255);
  }
  get hidden() {
    var e;
    return ((e = this.layerFrame) === null || e === void 0 ? void 0 : e.layerProperties.hidden) || !1;
  }
  addChild(e) {
    this.children.push(e);
  }
  hasChildren() {
    return this.children.length !== 0;
  }
  freeze() {
    this.children.forEach((e) => {
      var g, t;
      return (t = (g = e).freeze) === null || t === void 0 ? void 0 : t.call(g);
    }), Object.freeze(this.children);
  }
}
var w;
(function(A) {
  A.SectionDividerSetting = "lsct", A.TypeToolObjectSetting = "TySh", A.UnicodeLayerName = "luni", A.VectorStrokeData = "vstk", A.ObjectBasedEffects = "lfx2", A.GradientFillSetting = "GdFl", A.SolidColorSheetSetting = "SoCo", A.PatternFillSetting = "PtFl", A.VectorStrokeContentData = "vscg", A.BlendOptionsCapacity = "iOpa", A.VectorMaskSetting1 = "vmsk", A.VectorMaskSetting2 = "vsms", A.HueSaturation = "hue2", A.NestedSectionDividerSetting = "lsdk", A.LayerId = "lyid", A.ArtboardData = "artb", A.SmartObjectPlacedLayerData = "SoLE", A.PlacedLayerData = "SoLd", A.LinkedLayer = "lnkD", A.LinkedLayer2 = "lnk2", A.LinkedLayer3 = "lnk3";
})(w || (w = {}));
var fA;
(function(A) {
  A[A.Normal = 0] = "Normal", A[A.SceneGroup = 1] = "SceneGroup";
})(fA || (fA = {}));
var U;
(function(A) {
  A[A.ClosedSubpathLength = 0] = "ClosedSubpathLength", A[A.ClosedSubpathBezierKnotLinked = 1] = "ClosedSubpathBezierKnotLinked", A[A.ClosedSubpathBezierKnotUnlinked = 2] = "ClosedSubpathBezierKnotUnlinked", A[A.OpenSubpathLength = 3] = "OpenSubpathLength", A[A.OpenSubpathBezierKnotLinked = 4] = "OpenSubpathBezierKnotLinked", A[A.OpenSubpathBezierKnotUnlinked = 5] = "OpenSubpathBezierKnotUnlinked", A[A.PathFillRule = 6] = "PathFillRule", A[A.Clipboard = 7] = "Clipboard", A[A.InitialFillRule = 8] = "InitialFillRule";
})(U || (U = {}));
const yA = (A, e) => {
  const g = Math.max(A.length, e.length);
  for (let t = 0; t < g; t++)
    if (A[t] !== e[t])
      return !1;
  return !0;
};
class s extends Error {
  constructor(e) {
    super(e), Object.setPrototypeOf(this, new.target.prototype), this.name = new.target.name;
  }
}
class Ge extends s {
}
class WA extends s {
}
class Ne extends s {
}
class Se extends s {
}
class ke extends s {
}
class pe extends s {
}
class Fe extends s {
}
class Ye extends s {
}
class Je extends s {
}
class Le extends s {
}
class PA extends s {
}
class _A extends s {
}
class Re extends s {
}
class Ue extends s {
}
class Me extends s {
}
class me extends s {
}
class be extends s {
}
class He extends s {
}
class ve extends s {
}
class xe extends s {
}
class Ze extends s {
}
class qe extends s {
}
class Ke extends s {
}
class Xe extends s {
}
class nA extends s {
}
class $A extends s {
}
class je extends s {
}
class MA extends s {
}
class cA extends s {
}
class Ve extends s {
}
class Oe extends s {
}
class ze extends s {
}
class Te extends s {
}
class We extends s {
}
class Pe extends s {
}
class _e extends s {
}
class $e extends s {
}
class Ag extends s {
}
class eg extends s {
}
class gg extends s {
}
class mA extends s {
}
class dA extends s {
}
class tg extends s {
}
class Ig extends s {
}
function Ae(A, e) {
  const g = A.getUint32(e), t = A.getUint32(e + 4);
  if (g >= 2097152)
    throw new $A();
  return g * 4294967296 + t;
}
function Bg(A, e) {
  const g = A.getInt32(e), t = A.getUint32(e + 4);
  if (g >= 2097152 || g < -2097152 || g === -2097152 && t === 0)
    throw new $A();
  return g * 4294967296 + t;
}
const ng = {
  u8: 1,
  i8: 1,
  u16: 2,
  i16: 2,
  u32: 4,
  i32: 4,
  f32: 4,
  u64: 8,
  i64: 8,
  f64: 8
};
class j {
  constructor(e, g = 0) {
    this.dataView = e, this.position = g;
  }
  static from(e) {
    return new j(new DataView(e.buffer, e.byteOffset, e.byteLength));
  }
  get length() {
    return this.dataView.byteLength;
  }
  clone(e) {
    const g = e !== void 0 ? e : this.position;
    return new j(new DataView(this.dataView.buffer, this.dataView.byteOffset, this.dataView.byteLength), g);
  }
  pass(e) {
    this.position += e;
  }
  unpass(e) {
    this.position -= e;
  }
  extract(e) {
    if (this.position + e > this.dataView.byteLength)
      throw new xe();
    return new Uint8Array(this.dataView.buffer, this.dataView.byteOffset + this.position, e);
  }
  iter() {
    return new Uint8Array(this.dataView.buffer, this.dataView.byteOffset + this.position);
  }
  take(e) {
    const g = this.extract(e);
    return this.pass(e), g;
  }
  peek() {
    return this.dataView.getUint8(this.position);
  }
  one() {
    const e = this.dataView.getUint8(this.position);
    return this.position += 1, e;
  }
  read(e) {
    const { dataView: g, position: t } = this;
    switch (this.pass(ng[e]), e) {
      case "u8":
        return g.getUint8(t);
      case "u16":
        return g.getUint16(t);
      case "u32":
        return g.getUint32(t);
      case "u64":
        return Ae(g, t);
      case "i8":
        return g.getInt8(t);
      case "i16":
        return g.getInt16(t);
      case "i32":
        return g.getInt32(t);
      case "i64":
        return Bg(g, t);
      case "f32":
        return g.getFloat32(t);
      case "f64":
        return g.getFloat64(t);
      default:
        throw new TypeError(`Invalid ReadType: ${e}`);
    }
  }
  readString(e) {
    const g = this.take(e);
    return new TextDecoder().decode(g);
  }
  readUnicodeString(e = 4) {
    const t = this.read("u32") * 2, I = this.take(t), B = new TextDecoder("utf-16be").decode(I);
    return this.padding(4 + t, e), B.charCodeAt(B.length - 1) === 0 ? B.slice(0, -1) : B;
  }
  readFixedPoint32bit() {
    return this.read("u32") / (1 << 16);
  }
  readIdString() {
    const e = this.read("u32");
    return this.readString(e || 4);
  }
  padding(e, g) {
    const t = e % g;
    t > 0 && this.pass(g - t);
  }
}
const lA = (A, e, g) => e <= A && A <= g;
function aA(A) {
  return A.bottom - A.top;
}
function ig(A) {
  return A.right - A.left;
}
function bA(A) {
  return ig(A) * aA(A);
}
var CA;
(function(A) {
  A.PassThrough = "pass", A.Normal = "norm", A.Dissolve = "diss", A.Darken = "dark", A.Multiply = "mul ", A.ColorBurn = "idiv", A.LinearBurn = "lbrn", A.DarkerColor = "dkCl", A.Lighten = "lite", A.Screen = "scrn", A.ColorDodge = "div ", A.LinearDodge = "lddg", A.LighterColor = "lgCl", A.Overlay = "over", A.SoftLight = "sLit", A.HardLight = "hLit", A.VividLight = "vLit", A.LinearLight = "lLit", A.PinLight = "pLit", A.HardMix = "hMix", A.Difference = "diff", A.Exclusion = "smud", A.Subtract = "fsub", A.Divide = "fdiv", A.Hue = "hue ", A.Saturation = "sat ", A.Color = "colr", A.Luminosity = "lum ";
})(CA || (CA = {}));
function ee(A) {
  const e = Object.keys(CA);
  for (const g of e)
    if (CA[g] === A)
      return A;
  throw new Le();
}
var P;
(function(A) {
  A[A.Base = 0] = "Base", A[A.NonBase = 1] = "NonBase";
})(P || (P = {}));
function ag(A) {
  if (A === P.Base)
    return P.Base;
  if (A === P.NonBase)
    return P.NonBase;
  throw new me();
}
var GA;
(function(A) {
  A[A.Bitmap = 0] = "Bitmap", A[A.Grayscale = 1] = "Grayscale", A[A.Indexed = 2] = "Indexed", A[A.Rgb = 3] = "Rgb", A[A.Cmyk = 4] = "Cmyk", A[A.Multichannel = 7] = "Multichannel", A[A.Duotone = 8] = "Duotone", A[A.Lab = 9] = "Lab";
})(GA || (GA = {}));
var NA;
(function(A) {
  A[A.One = 1] = "One", A[A.Eight = 8] = "Eight", A[A.Sixteen = 16] = "Sixteen", A[A.ThirtyTwo = 32] = "ThirtyTwo";
})(NA || (NA = {}));
var c;
(function(A) {
  A.Alias = "alis", A.Boolean = "bool", A.Class = "type", A.Descriptor = "Objc", A.Double = "doub", A.Enumerated = "enum", A.GlobalClass = "GlbC", A.GlobalObject = "GlbO", A.Integer = "long", A.LargeInteger = "comp", A.List = "VlLs", A.RawData = "tdta", A.Reference = "obj ", A.String = "TEXT", A.UnitFloat = "UntF", A.UnitFloats = "UnFl", A.ObjectArray = "ObAr";
})(c || (c = {}));
var SA;
(function(A) {
  A.Angle = "#Ang", A.Density = "#Rsl", A.Distance = "#Rlt", A.Millimeters = "#Mlm", A.None = "#Nne", A.Percent = "#Prc", A.Pixels = "#Pxl", A.Points = "#Pnt";
})(SA || (SA = {}));
function W(A, e, g) {
  const t = A.items.get(e);
  if (!t)
    throw new We(`Cannot find key "${e}" in descriptor`);
  if (t.type !== g)
    throw new Pe(`Unexpected descriptor value type: expected "${g}" but got "${t.type}"`);
  return t;
}
var gA;
(function(A) {
  A[A.PSD = 1] = "PSD", A[A.PSB = 2] = "PSB";
})(gA || (gA = {}));
const Cg = [56, 66, 80, 83], Qg = [0, 0, 0, 0, 0, 0], Eg = [1, 8, 16, 32], sg = 1, og = 56, HA = 1;
function rg(A) {
  const e = new j(A), g = e.take(4);
  if (!yA(g, Cg))
    throw new Ge();
  const t = e.read("u16");
  if (!(t === gA.PSD || t === gA.PSB))
    throw new WA();
  const I = UA(t), B = e.take(6);
  if (!yA(B, Qg))
    throw new Ne();
  const n = e.read("u16");
  if (!lA(n, sg, og))
    throw new pe();
  const a = e.read("u32"), i = e.read("u32");
  if (!lA(a, HA, I.maxPixels) || !lA(i, HA, I.maxPixels))
    throw new Fe();
  const Q = e.read("u16");
  if (!Eg.includes(Q))
    throw new ke();
  const E = e.read("u16");
  if (!(E in GA))
    throw new Se();
  return {
    channelCount: n,
    version: t,
    width: i,
    height: a,
    depth: Q,
    colorMode: E
  };
}
function cg(A, e, g) {
  const t = (A.length - 2) / g, I = A.extract(t), B = g >= 2 ? A.extract(t) : void 0, n = g >= 3 ? A.extract(t) : void 0, a = g >= 4 ? A.extract(t) : void 0;
  if (e === NA.Eight)
    return { red: I, green: B, blue: n, alpha: a };
  throw new Re(`Unsupported image bit depth: ${e}`);
}
function dg(A, e, g, t) {
  let I = 0, B = 0, n = 0, a = 0;
  const i = t.rleScanlineLengthFieldReadType;
  for (let r = 0; r < g; r++)
    I += A.read(i);
  if (e >= 2)
    for (let r = 0; r < g; r++)
      B += A.read(i);
  if (e >= 3)
    for (let r = 0; r < g; r++)
      n += A.read(i);
  if (e === 4)
    for (let r = 0; r < g; r++)
      a += A.read(i);
  const Q = 2 + e * g * t.rleScanlineLengthFieldSize, E = A.clone(Q), G = E.take(I), d = B ? E.take(B) : void 0, l = n ? E.take(n) : void 0, N = a ? E.take(a) : void 0;
  return { red: G, green: d, blue: l, alpha: N };
}
function lg(A, e, g, t, I) {
  const B = new j(A), n = B.read("u16");
  if (!(n in v))
    throw new PA();
  const { red: a, green: i, blue: Q, alpha: E } = (() => {
    switch (n) {
      case v.RawData:
        return cg(B, e, t);
      case v.RleCompressed:
        return dg(B, t, g, I);
      default:
        throw new _A();
    }
  })();
  return {
    compression: n,
    red: a,
    green: i,
    blue: Q,
    alpha: E
  };
}
function hg(A) {
  const e = A.read("u32");
  if (e !== 1)
    throw new Ze();
  const g = A.read("u32"), t = A.read("u32"), I = A.read("u32"), B = [];
  for (let n = 0; n < I; ++n) {
    const a = A.read("i32"), i = ut(A.read("u8"));
    B.push({ position: a, direction: i });
  }
  return { version: e, gridSizeX: g, gridSizeY: t, guides: B };
}
function wg(A, e) {
  return A.take(e - A.position);
}
function Dg(A) {
  const e = A.readFixedPoint32bit(), g = A.read("u16"), t = A.read("u16"), I = A.readFixedPoint32bit(), B = A.read("u16"), n = A.read("u16");
  return {
    horizontal: e,
    horizontalUnit: g,
    widthUnit: t,
    vertical: I,
    verticalUnit: B,
    heightUnit: n
  };
}
function ug(A, e) {
  const g = A.read("u32");
  if (g === 6) {
    const t = A.read("i32"), I = A.read("i32"), B = A.read("i32"), n = A.read("i32"), a = A.readUnicodeString(0), i = A.read("u32"), Q = [];
    for (; Q.length < i; ) {
      const G = A.read("u32"), d = A.read("u32"), l = ft(A.read("u32")), N = l === 1 ? A.read("u32") : void 0;
      Q.push({
        id: G,
        groupId: d,
        origin: l,
        associatedLayerId: N,
        name: A.readUnicodeString(0),
        type: A.read("u32"),
        left: A.read("i32"),
        top: A.read("i32"),
        right: A.read("i32"),
        bottom: A.read("i32"),
        url: A.readUnicodeString(0),
        target: A.readUnicodeString(0),
        message: A.readUnicodeString(0),
        altTag: A.readUnicodeString(0),
        isCellTextHtml: Boolean(A.read("u8")),
        cellText: A.readUnicodeString(0),
        horizontalAlignment: A.read("i32"),
        verticalAlignment: A.read("i32"),
        alpha: A.read("u8"),
        red: A.read("u8"),
        green: A.read("u8"),
        blue: A.read("u8")
      });
    }
    const E = A.position < e ? M(A) : void 0;
    return {
      version: g,
      boundTop: t,
      boundLeft: I,
      boundBottom: B,
      boundRight: n,
      sliceGroupName: a,
      slices: Q,
      descriptor: E
    };
  } else if (g === 7 || g === 8) {
    const t = M(A);
    return { version: g, descriptor: t };
  } else
    throw new Ke(`Invalid Slices section version: ${g}`);
}
const fg = [56, 66, 73, 77];
function yg(A) {
  const e = new j(A), g = [], t = e.read("u32");
  for (; e.position < t; ) {
    const I = Gg(e);
    g.push(I);
  }
  return { resources: g };
}
function Gg(A) {
  const e = A.take(4);
  if (!yA(e, fg))
    throw new ve();
  const g = A.read("i16"), t = Ng(A, 2), I = A.read("u32"), B = A.position + I, n = I + I % 2, a = A.position;
  let i = null;
  switch (g) {
    case Y.GridAndGuides:
      i = hg(A);
      break;
    case Y.Slices:
      i = ug(A, B);
      break;
    case Y.ICCProfile:
      i = wg(A, B);
      break;
    case Y.ResolutionInfo:
      i = Dg(A);
      break;
    case Y.GlobalLightAltitude:
      i = A.read("i32");
      break;
    case Y.GlobalLightAngle:
      i = A.read("i32");
      break;
  }
  const Q = A.position, E = a + n - Q;
  return E > 0 && A.pass(E), { id: g, name: t, resource: i };
}
function Ng(A, e = 0) {
  const g = A.read("u8"), t = A.readString(g);
  if (e) {
    const I = (g + 1) % e;
    I > 0 && A.pass(e - I);
  }
  return t;
}
const ge = (A, e, g) => {
  const { top: t, left: I, bottom: B, right: n, opacity: a, clipping: i, hidden: Q, transparencyLocked: E, blendMode: G, layerText: d, engineData: l, maskData: N, additionalLayerInfos: r } = e;
  return {
    name: A,
    top: t,
    left: I,
    bottom: B,
    right: n,
    opacity: a,
    clippingMask: i,
    hidden: Q,
    transparencyLocked: E,
    blendMode: G,
    groupId: g,
    text: d,
    textProperties: l,
    maskData: N,
    additionalLayerProperties: r
  };
};
class LA {
  constructor(e, g) {
    this.channels = e, this.layerProperties = g;
  }
  static create(e, g, t) {
    const I = ge(e.name, e, t);
    return new LA(g, I);
  }
  get red() {
    const e = this.channels.get(F.Red);
    if (e === void 0)
      throw new Me();
    return e;
  }
  get green() {
    return this.channels.get(F.Green);
  }
  get blue() {
    return this.channels.get(F.Blue);
  }
  get alpha() {
    return this.channels.get(F.TransparencyMask);
  }
  get userMask() {
    return this.channels.get(F.UserSuppliedLayerMask);
  }
  get realUserMask() {
    return this.channels.get(F.RealUserSuppliedLayerMask);
  }
  get width() {
    const { right: e, left: g } = this.layerProperties;
    return e - g + 1;
  }
  get height() {
    const { bottom: e, top: g } = this.layerProperties;
    return e - g + 1;
  }
}
class RA {
  constructor(e, g) {
    this.id = e, this.layerProperties = g;
  }
  static create(e, g, t, I) {
    const B = ge(e, t, I);
    return new RA(g, B);
  }
}
function Sg(A) {
  return { data: M(A) };
}
function kg(A) {
  return { fillOpacity: A.read("u8") };
}
function pg(A) {
  return { data: M(A) };
}
function kA(A) {
  const e = A.read("i16"), g = A.read("i16"), t = A.read("i16");
  return {
    hue: e,
    saturation: g,
    lightness: t
  };
}
function Fg(A) {
  const e = A.read("i16"), g = A.read("i16"), t = A.read("i16"), I = A.read("i16");
  return {
    beginRamp: e,
    beginSustain: g,
    endSustain: t,
    endRamp: I,
    ...kA(A)
  };
}
function Yg(A) {
  return Array.from(Array(6), () => Fg(A));
}
function Jg(A) {
  const e = A.read("u16"), g = A.read("u8");
  A.pass(1);
  const t = kA(A), I = kA(A);
  return {
    version: e,
    colorize: g,
    colorization: t,
    master: I,
    adjustment: g ? void 0 : Yg(A)
  };
}
function Lg(A) {
  return { value: A.read("u32") };
}
function Rg(A, e) {
  const g = [];
  let t = 0;
  const I = A.position + e;
  for (; A.position < I && (t = A.read("u64")); ) {
    const B = A.position, n = Ug(A);
    g.push(n);
    const a = A.position - B, i = t - a;
    A.pass(i), A.padding(A.position, 4);
  }
  return { layers: g };
}
function Ug(A) {
  const e = A.readString(4);
  if (e !== "liFD")
    throw new Ve(`unknown layer type: '${e}'`);
  const g = A.read("i32"), t = Mg(A), I = A.readUnicodeString(0), B = A.readString(4), n = A.readString(4), a = A.read("u64"), Q = A.read("u8") ? M(A) : void 0, E = A.take(a), G = g > 5 ? A.readUnicodeString() : void 0;
  return {
    layerType: e,
    version: g,
    uniqueId: t,
    filename: I,
    filetype: B,
    creator: n,
    data: Q,
    contents: E,
    uuid: G
  };
}
function Mg(A) {
  const e = A.read("u8");
  return A.readString(e);
}
function mg(A) {
  const e = A.read("u32"), g = A.read("u32"), t = QA(A);
  return { version: e, descriptor: t, descriptorVersion: g };
}
function bg(A) {
  return { data: M(A) };
}
function Hg(A, e) {
  const g = Dt(A.read("u32"));
  if (e < 12)
    return { dividerType: g };
  const t = A.readString(4);
  if (t !== "8BIM")
    throw new MA(`Invalid Section Divider Setting signature: ${t}`);
  const I = ee(A.readString(4));
  if (e < 16)
    return { dividerType: g, dividerSignature: t, blendMode: I };
  const B = A.read("u32");
  if (!(B in fA))
    throw new MA(`Invalid Section Divider Setting subtype: ${B}`);
  return { dividerType: g, dividerSignature: t, blendMode: I, subType: B };
}
function vg(A) {
  const e = A.readString(4), g = A.read("u32");
  return { data: M(A), version: g, identifier: e };
}
function xg(A) {
  const e = A.read("u32"), g = QA(A);
  return { version: e, data: g };
}
function Zg(A) {
  const e = A.read("u16");
  if (e !== 1)
    throw new cA(`Invalid type tool object setting version: ${e}`);
  const g = A.read("f64"), t = A.read("f64"), I = A.read("f64"), B = A.read("f64"), n = A.read("f64"), a = A.read("f64"), i = A.read("u16");
  if (i !== 50)
    throw new cA(`Invalid text version: ${i}`);
  const Q = M(A), E = A.read("u16");
  if (E !== 1)
    throw new cA(`Invalid warp version: ${E}`);
  const G = M(A), d = A.read("f64"), l = A.read("f64"), N = A.read("f64"), r = A.read("f64");
  return {
    version: e,
    transformXX: g,
    transformXY: t,
    transformYX: I,
    transformYY: B,
    transformTX: n,
    transformTY: a,
    textVersion: i,
    textData: Q,
    warpVersion: E,
    warpData: G,
    left: d,
    top: l,
    right: N,
    bottom: r
  };
}
function qg(A) {
  return { name: A.readUnicodeString(0) };
}
function vA(A) {
  const [e, ...g] = A.take(4), t = g[0] * 2 ** 16 + g[1] * 2 ** 8 + g[2];
  return e + t / 2 ** 24;
}
function hA(A) {
  const e = vA(A), g = vA(A);
  return { vert: e, horiz: g };
}
function Kg(A, e) {
  const g = A.read("i16"), t = A.read("i16"), I = A.read("i16");
  A.pass(6);
  const B = A.read("i16");
  return A.pass(10), {
    type: e,
    length: g,
    operation: t,
    subpathType: I,
    index: B
  };
}
function Xg(A, e) {
  const g = Array(4).map(() => A.read("f32")), t = A.read("f32");
  return A.pass(6), { type: e, bounds: g, resolution: t };
}
function jg(A, e) {
  const g = Boolean(A.read("i16") & 1);
  return A.pass(22), { type: e, fill: g };
}
function Vg(A, e) {
  const g = hA(A), t = hA(A), I = hA(A);
  return { type: e, preceding: g, anchor: t, leaving: I };
}
function Og(A) {
  const e = A.read("u16");
  switch (e) {
    case U.OpenSubpathLength:
    case U.ClosedSubpathLength:
      return Kg(A, e);
    case U.PathFillRule:
      return A.pass(24), { type: e };
    case U.Clipboard:
      return Xg(A, e);
    case U.InitialFillRule:
      return jg(A, e);
    case U.ClosedSubpathBezierKnotLinked:
    case U.ClosedSubpathBezierKnotUnlinked:
    case U.OpenSubpathBezierKnotLinked:
    case U.OpenSubpathBezierKnotUnlinked:
      return Vg(A, e);
    default:
      throw new Error(`Unknown PathRecordType: ${e} (bug in offsets?)`);
  }
}
function zg(A, e) {
  const g = Math.floor(e / 26);
  return Array.from(Array(g), () => Og(A));
}
function Tg(A, e) {
  const g = A.read("u32"), t = A.read("u32"), I = zg(A, e);
  return {
    version: g,
    pathRecords: I,
    invert: Boolean(t & 1),
    notLink: Boolean(t & 2),
    disable: Boolean(t & 4)
  };
}
function Wg(A) {
  const e = A.read("u32"), g = M(A);
  return { version: e, data: g };
}
function Pg(A) {
  return { data: M(A) };
}
function te(A, e, g = 0) {
  const t = A.readString(4);
  if (t !== "8BIM" && t !== "8B64")
    throw new je(`Invalid signature: ${t}`);
  const I = A.readString(4), B = A.read($g(I, e)), n = A.position, a = _g(A, t, I, B), i = B - (A.position - n);
  return A.pass(i), A.padding(B, g), a;
}
function _g(A, e, g, t) {
  switch (g) {
    case w.NestedSectionDividerSetting:
    case w.SectionDividerSetting:
      return {
        signature: e,
        key: g,
        ...Hg(A, t)
      };
    case w.TypeToolObjectSetting:
      return { signature: e, key: g, ...Zg(A) };
    case w.UnicodeLayerName:
      return { signature: e, key: g, ...qg(A) };
    case w.VectorStrokeData:
      return { signature: e, key: g, ...Pg(A) };
    case w.ObjectBasedEffects:
      return { signature: e, key: g, ...mg(A) };
    case w.GradientFillSetting:
      return { signature: e, key: g, ...pg(A) };
    case w.SolidColorSheetSetting:
      return { signature: e, key: g, ...xg(A) };
    case w.PatternFillSetting:
      return { signature: e, key: g, ...bg(A) };
    case w.VectorStrokeContentData:
      return { signature: e, key: g, ...Wg(A) };
    case w.BlendOptionsCapacity:
      return { signature: e, key: g, ...kg(A) };
    case w.VectorMaskSetting1:
    case w.VectorMaskSetting2:
      return { signature: e, key: g, ...Tg(A, t) };
    case w.HueSaturation:
      return { signature: e, key: g, ...Jg(A) };
    case w.LayerId:
      return { signature: e, key: g, ...Lg(A) };
    case w.ArtboardData:
      return { signature: e, key: g, ...Sg(A) };
    case w.PlacedLayerData:
    case w.SmartObjectPlacedLayerData:
      return {
        signature: e,
        key: g,
        ...vg(A)
      };
    case w.LinkedLayer:
    case w.LinkedLayer2:
    case w.LinkedLayer3:
      return {
        signature: e,
        key: g,
        ...Rg(A, t)
      };
    default: {
      const I = A.take(t);
      return { signature: e, key: g, _isUnknown: !0, data: I };
    }
  }
}
function $g(A, e) {
  if (e.aliLengthFieldSizeIsVariable)
    switch (A) {
      case "LMsk":
      case "Lr16":
      case "Lr32":
      case "Layr":
      case "Mt16":
      case "Mt32":
      case "Mtrn":
      case "Alph":
      case "FMsk":
      case "Ink2":
      case "FEid":
      case "FXid":
      case "PxSD":
      case "cinf":
        return "u64";
    }
  return "u32";
}
const At = "8BIM";
function et(A, e, g) {
  const t = [];
  for (; t.length < e; )
    t.push(gt(A, g));
  return t.map((B) => {
    const n = at(A, B.channelInformation, B, g);
    return [B, n];
  }).reverse();
}
function gt(A, e) {
  const [g, t, I, B] = It(A), n = A.read("u16"), a = [];
  for (; a.length < n; ) {
    const b = A.read("i16"), EA = A.read(e.layerRecordSectionChannelLengthFieldReadType) - 2;
    a.push([b, EA]);
  }
  if (A.readString(4) !== At)
    throw new Ye();
  const i = ee(A.readString(4)), Q = A.read("u8"), E = ag(A.read("u8")), { hidden: G, transparencyLocked: d } = Bt(A);
  A.pass(1);
  const l = A.read("u32"), N = A.position, r = Qt(A);
  A.pass(A.read("u32"));
  const m = A.read("u8");
  let q = A.readString(m);
  A.padding(m + 1, 4);
  const L = [];
  for (; A.position - N < l; )
    L.push(te(A, e));
  let x, V, iA;
  for (const S of L)
    if (!S._isUnknown)
      switch (S.key) {
        case w.SectionDividerSetting:
          ({ dividerType: x } = S);
          break;
        case w.TypeToolObjectSetting: {
          const b = S.textData.descriptor.items.get("Txt ");
          b && b.type === c.String && (V = b.value);
          const z = S.textData.descriptor.items.get("EngineData");
          z && z.type === c.RawData && (iA = Mt(z.data));
          break;
        }
        case w.UnicodeLayerName:
          ({ name: q } = S);
          break;
      }
  return {
    name: q,
    channelInformation: a,
    top: g,
    left: t,
    bottom: I,
    right: B,
    hidden: G,
    transparencyLocked: d,
    opacity: Q,
    clipping: E,
    blendMode: i,
    additionalLayerInfos: L,
    dividerType: x,
    layerText: V,
    engineData: iA,
    maskData: r
  };
}
function tt(A, e) {
  const g = [];
  for (; A.position < A.length; )
    g.push(te(A, e, 4));
  return g;
}
function It(A) {
  const e = A.read("i32"), g = A.read("i32");
  let t = A.read("i32");
  t !== 0 && (t -= 1);
  let I = A.read("i32");
  return I !== 0 && (I -= 1), [e, g, t, I];
}
function Bt(A) {
  const e = A.read("u8");
  return {
    transparencyLocked: Boolean(e & 1),
    hidden: Boolean(e & 2)
  };
}
function nt(A) {
  const e = A.maskData.realData;
  if (!e)
    throw new Error("missing real mask data");
  return e;
}
function it(A, e) {
  switch (e) {
    case F.UserSuppliedLayerMask:
      return aA(A.maskData);
    case F.RealUserSuppliedLayerMask:
      return aA(nt(A));
    default:
      return aA(A) + 1;
  }
}
function at(A, e, g, t) {
  const I = /* @__PURE__ */ new Map(), { length: B } = e;
  for (let n = 0; n < B; n++) {
    const [a, i] = e[n], Q = ht(A.read("u16"));
    switch (Q) {
      case v.RawData: {
        const E = A.take(i);
        I.set(a, { compression: Q, data: E });
        break;
      }
      case v.RleCompressed: {
        const E = A.take(
          i > 0 ? Ct(A, it(g, a), t.rleScanlineLengthFieldReadType) : i
        );
        I.set(a, { compression: Q, data: E });
        break;
      }
    }
  }
  return I;
}
function Ct(A, e, g) {
  return Array.from(Array(e), () => A.read(g)).reduce((I, B) => I + B);
}
function Qt(A) {
  const e = A.read("u32"), g = A.position, [t, I, B, n] = Ie(A), a = A.read("u8"), i = Be(A), Q = e >= 36 ? st(A) : void 0, E = i.masksHaveParametersApplied ? Et(A) : void 0, G = e - (A.position - g);
  return A.pass(G), {
    top: t,
    left: I,
    bottom: B,
    right: n,
    backgroundColor: a,
    flags: i,
    parameters: E,
    realData: Q
  };
}
function Ie(A) {
  return Array.from(Array(4), () => A.read("i32"));
}
var O;
(function(A) {
  A[A.PositionRelativeToLayer = 1] = "PositionRelativeToLayer", A[A.LayerMaskDisabled = 2] = "LayerMaskDisabled", A[A.InvertMaskWhenBlending = 4] = "InvertMaskWhenBlending", A[A.UserMaskFromRenderingOtherData = 8] = "UserMaskFromRenderingOtherData", A[A.MasksHaveParametersApplied = 16] = "MasksHaveParametersApplied";
})(O || (O = {}));
function Be(A) {
  const e = A.read("u8");
  return {
    positionRelativeToLayer: Boolean(e & O.PositionRelativeToLayer),
    layerMaskDisabled: Boolean(e & O.LayerMaskDisabled),
    invertMaskWhenBlending: Boolean(e & O.InvertMaskWhenBlending),
    userMaskFromRenderingOtherData: Boolean(e & O.UserMaskFromRenderingOtherData),
    masksHaveParametersApplied: Boolean(e & O.MasksHaveParametersApplied)
  };
}
var _;
(function(A) {
  A[A.UserMaskDensity = 1] = "UserMaskDensity", A[A.UserMaskFeather = 2] = "UserMaskFeather", A[A.VectorMaskDensity = 4] = "VectorMaskDensity", A[A.VectorMaskFeather = 8] = "VectorMaskFeather";
})(_ || (_ = {}));
function Et(A) {
  const e = A.read("u8");
  return {
    userMaskDensity: e & _.UserMaskDensity ? A.read("u8") : void 0,
    userMaskFeather: e & _.UserMaskFeather ? A.read("f64") : void 0,
    vectorMaskDensity: e & _.VectorMaskDensity ? A.read("u8") : void 0,
    vectorMaskFeather: e & _.VectorMaskFeather ? A.read("f64") : void 0
  };
}
function st(A) {
  const e = Be(A), g = A.read("u8"), [t, I, B, n] = Ie(A);
  return { top: t, left: I, bottom: B, right: n, flags: e, backgroundColor: g };
}
function ot(A, e) {
  const g = new j(A);
  g.pass(e.layerAndMaskSectionLengthFieldSize), g.pass(e.layerInfoSectionLengthFieldSize);
  const t = g.read("i16"), I = Math.abs(t), B = et(g, I, e);
  g.padding(g.position, 4), g.pass(g.read("u32"));
  const n = tt(g, e), a = [], i = [], Q = [], G = [{
    startIndex: 0,
    groupId: 0,
    parentGroupId: 0
  }];
  let d = 0;
  for (let l = 0; l < I; l++) {
    const [N, r] = B[l], m = G[G.length - 1].groupId, { dividerType: q } = N;
    if (q === AA.CloseFolder || q === AA.OpenFolder)
      d += 1, G.push({
        startIndex: a.length,
        groupId: d,
        parentGroupId: m,
        layerRecord: N
      }), Q.push("G");
    else if (q === AA.BoundingSection) {
      const L = G.pop();
      if (L === void 0)
        throw new be();
      const x = L.groupId > 0 ? L.groupId : void 0, V = L.layerRecord || N;
      i.push(RA.create(V.name, L.groupId, V, x)), Q.push("D");
    } else
      a.push(LA.create(N, r, m)), Q.push("L");
  }
  return i.sort((l, N) => l.id - N.id), { layers: a, groups: i, orders: Q, globalAdditionalLayerInformation: n };
}
const rt = 26;
function wA(A, e, g = 4) {
  const I = (g === 4 ? A.getUint32(e) : Ae(A, e)) + g;
  return { start: e, end: e + I, size: I };
}
function ct(A) {
  const e = new DataView(A), g = 0, t = rt, I = new DataView(A, g, t), B = rg(I), n = UA(B.version), a = wA(e, g + t), i = wA(e, a.end), Q = wA(e, i.end, n.layerAndMaskSectionLengthFieldSize);
  return {
    fileHeader: B,
    colorModeData: new DataView(A, a.size),
    imageResources: new DataView(A, i.start, i.size),
    layerAndMaskInformation: new DataView(A, Q.start, Q.size),
    imageData: new DataView(A, Q.end)
  };
}
const dt = {
  maxPixels: 3e4,
  rleScanlineLengthFieldSize: 2,
  rleScanlineLengthFieldReadType: "u16",
  layerAndMaskSectionLengthFieldSize: 4,
  layerInfoSectionLengthFieldSize: 4,
  layerRecordSectionChannelLengthFieldReadType: "u32",
  aliLengthFieldSizeIsVariable: !1
}, lt = {
  maxPixels: 3e5,
  rleScanlineLengthFieldSize: 4,
  rleScanlineLengthFieldReadType: "u32",
  layerAndMaskSectionLengthFieldSize: 8,
  layerInfoSectionLengthFieldSize: 8,
  layerRecordSectionChannelLengthFieldReadType: "u64",
  aliLengthFieldSizeIsVariable: !0
};
function UA(A) {
  switch (A) {
    case gA.PSD:
      return dt;
    case gA.PSB:
      return lt;
    default:
      throw new WA();
  }
}
var v;
(function(A) {
  A[A.RawData = 0] = "RawData", A[A.RleCompressed = 1] = "RleCompressed", A[A.ZipWithoutPrediction = 2] = "ZipWithoutPrediction", A[A.ZipWithPrediction = 3] = "ZipWithPrediction";
})(v || (v = {}));
function ht(A) {
  if (!(A in v))
    throw new PA();
  return A;
}
var F;
(function(A) {
  A[A.Red = 0] = "Red", A[A.Green = 1] = "Green", A[A.Blue = 2] = "Blue", A[A.TransparencyMask = -1] = "TransparencyMask", A[A.UserSuppliedLayerMask = -2] = "UserSuppliedLayerMask", A[A.RealUserSuppliedLayerMask = -3] = "RealUserSuppliedLayerMask";
})(F || (F = {}));
function wt(A) {
  switch (A) {
    case F.Red:
      return 0;
    case F.Green:
      return 1;
    case F.Blue:
      return 2;
    case F.TransparencyMask:
      return 3;
    default:
      throw new Ue();
  }
}
var AA;
(function(A) {
  A[A.Other = 0] = "Other", A[A.OpenFolder = 1] = "OpenFolder", A[A.CloseFolder = 2] = "CloseFolder", A[A.BoundingSection = 3] = "BoundingSection";
})(AA || (AA = {}));
function Dt(A) {
  if (A in AA)
    return A;
  throw new Je();
}
var pA;
(function(A) {
  A[A.Vertical = 0] = "Vertical", A[A.Horizontal = 1] = "Horizontal";
})(pA || (pA = {}));
function ut(A) {
  if (!(A in pA))
    throw new qe();
  return A;
}
var Y;
(function(A) {
  A[A.GridAndGuides = 1032] = "GridAndGuides", A[A.Slices = 1050] = "Slices", A[A.ICCProfile = 1039] = "ICCProfile", A[A.GlobalLightAngle = 1037] = "GlobalLightAngle", A[A.GlobalLightAltitude = 1049] = "GlobalLightAltitude", A[A.ResolutionInfo = 1005] = "ResolutionInfo";
})(Y || (Y = {}));
var eA;
(function(A) {
  A[A.AutoGenerated = 0] = "AutoGenerated", A[A.LayerGenerated = 1] = "LayerGenerated", A[A.UserGenerated = 2] = "UserGenerated";
})(eA || (eA = {}));
function ft(A) {
  if (!(A in eA))
    throw new Xe(`Invalid slice origin: ${A}`);
  return A;
}
var xA;
(function(A) {
  A[A.PixelsPerInch = 1] = "PixelsPerInch", A[A.PixelsPerCM = 2] = "PixelsPerCM";
})(xA || (xA = {}));
var ZA;
(function(A) {
  A[A.Inch = 1] = "Inch", A[A.CM = 2] = "CM", A[A.Point = 3] = "Point", A[A.Pica = 4] = "Pica", A[A.Column = 5] = "Column";
})(ZA || (ZA = {}));
var Z;
(function(A) {
  A.Class = "Clss", A.Enumerated = "Enmr", A.Identifier = "Idnt", A.Index = "indx", A.Name = "name", A.Offset = "rele", A.Property = "prop";
})(Z || (Z = {}));
function qA(A, e = 255) {
  if (!(0 <= e && e <= 255))
    throw new He();
  const g = A.length / 4, t = wt(F.TransparencyMask), I = e / 255;
  for (let B = 0; B < g; B++) {
    const n = B * 4 + t;
    A[n] = Math.floor(I * A[n]);
  }
  return A;
}
let KA, XA, jA, VA, OA, ne, ie, ae, Ce, Qe = (async () => {
  const A = "data:application/wasm;base64,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NwIMIAJBvIrAADYCCCACQQhqQZyEwAAQTwALQeyGwABBECACQfyGwABBnIvAABA2AAtBIEEIEH4ACxBNAAsACwNAEA4gAi0AEEUNAAsMAgsgAkEANgIIIAIgAkEIakHIisAAED0AC0Gsh8AAQStB2IrAABBIAAsgAigCCCIBRQ0AIAEgASgCACIBQX9qNgIAIAFBAUcNACACKAIIEEJBlJfAACgCACEBDAELQZSXwAAoAgAhAQwACwAL/QQBCn8jAEEwayIDJAAgA0EkaiABNgIAIANBAzoAKCADQoCAgICABDcDCCADIAA2AiAgA0EANgIYIANBADYCEAJ/AkACQCACKAIIIgpFBEAgAkEUaigCACIARQ0BIAIoAhAhASAAQQN0IQUgAEF/akH/////AXFBAWohByACKAIAIQADQCAAQQRqKAIAIgQEQCADKAIgIAAoAgAgBCADKAIkKAIMEQIADQQLIAEoAgAgA0EIaiABQQRqKAIAEQAADQMgAUEIaiEBIABBCGohACAFQXhqIgUNAAsMAQsgAkEMaigCACIARQ0AIABBBXQhCyAAQX9qQf///z9xQQFqIQcgAigCACEAA0AgAEEEaigCACIBBEAgAygCICAAKAIAIAEgAygCJCgCDBECAA0DCyADIAUgCmoiBEEcai0AADoAKCADIARBBGopAgBCIIk3AwggBEEYaigCACEGIAIoAhAhCEEAIQlBACEBAkACQAJAIARBFGooAgBBAWsOAgACAQsgBkEDdCAIaiIMQQRqKAIAQSRHDQEgDCgCACgCACEGC0EBIQELIAMgBjYCFCADIAE2AhAgBEEQaigCACEBAkACQAJAIARBDGooAgBBAWsOAgACAQsgAUEDdCAIaiIGQQRqKAIAQSRHDQEgBigCACgCACEBC0EBIQkLIAMgATYCHCADIAk2AhggCCAEKAIAQQN0aiIBKAIAIANBCGogASgCBBEAAA0CIABBCGohACALIAVBIGoiBUcNAAsLIAcgAigCBEkEQCADKAIgIAIoAgAgB0EDdGoiACgCACAAKAIEIAMoAiQoAgwRAgANAQtBAAwBC0EBCyADQTBqJAALzQQBBH8gACABEIIBIQICQAJAAkAgABB7DQAgACgCACEDAkAgABBwRQRAIAEgA2ohASAAIAMQgwEiAEHwmsAAKAIARw0BIAIoAgRBA3FBA0cNAkHomsAAIAE2AgAgACABIAIQXQ8LIAEgA2pBEGohAAwCCyADQYACTwRAIAAQHwwBCyAAQQxqKAIAIgQgAEEIaigCACIFRwRAIAUgBDYCDCAEIAU2AggMAQtB2JfAAEHYl8AAKAIAQX4gA0EDdndxNgIACyACEG0EQCAAIAEgAhBdDAILAkBB9JrAACgCACACRwRAIAJB8JrAACgCAEcNAUHwmsAAIAA2AgBB6JrAAEHomsAAKAIAIAFqIgE2AgAgACABEGIPC0H0msAAIAA2AgBB7JrAAEHsmsAAKAIAIAFqIgE2AgAgACABQQFyNgIEIABB8JrAACgCAEcNAUHomsAAQQA2AgBB8JrAAEEANgIADwsgAhB6IgMgAWohAQJAIANBgAJPBEAgAhAfDAELIAJBDGooAgAiBCACQQhqKAIAIgJHBEAgAiAENgIMIAQgAjYCCAwBC0HYl8AAQdiXwAAoAgBBfiADQQN2d3E2AgALIAAgARBiIABB8JrAACgCAEcNAUHomsAAIAE2AgALDwsgAUGAAk8EQCAAIAEQHg8LIAFBeHFB4JfAAGohAgJ/QdiXwAAoAgAiA0EBIAFBA3Z0IgFxBEAgAigCCAwBC0HYl8AAIAEgA3I2AgAgAgshASACIAA2AgggASAANgIMIAAgAjYCDCAAIAE2AggLkgQBBX8jAEEgayIAJAACQAJAAkACQAJAECUiAQRAIAFBGGoiAkEAIAIoAgAiAiACQQJGIgIbNgIAIAJFBEAgAUEcaiICLQAAIQMgAkEBOgAAIAAgA0EBcSIDOgAEIAMNAkEAIQNByJfAACgCAEH/////B3EEQBCBAUEBcyEDCyABLQAdDQMgASABKAIYIgRBASAEGzYCGCAERQ0GIARBAkcNBCABKAIYIQQgAUEANgIYIAAgBDYCBCAEQQJHDQUCQCADDQBByJfAACgCAEH/////B3FFDQAQgQENACABQQE6AB0LIAJBADoAAAsgASABKAIAIgJBf2o2AgAgAkEBRgRAIAEQQgsgAEEgaiQADwtB14fAAEHeAEHUiMAAEHYACyAAQQA2AhwgAEHshsAANgIYIABCATcCDCAAQeiOwAA2AgggAEEEaiAAQQhqEDwACyAAIAM6AAwgACACNgIIQaiGwABBKyAAQQhqQbiPwABB/I/AABA2AAsgAEEcakEANgIAIABB7IbAADYCGCAAQgE3AgwgAEGkkMAANgIIIABBCGpBrJDAABBPAAsgAEEANgIcIABB7IbAADYCGCAAQgE3AgwgAEHckMAANgIIIABBBGogAEEIakHkkMAAED0ACyAAQRxqQQA2AgAgAEHshsAANgIYIABCATcCDCAAQfSNwAA2AgggAEEIakG0jsAAEE8AC6UDAQp/IwBBMGsiASQAIAFBCjYCKCABQoqAgIAQNwMgIAFBAzYCHCABQQA2AhggAUEDNgIUIAFBhJTAADYCECABQQM2AgwgAUEANgIIIAAoAgQhBiAAKAIAIQcgACgCCCEIAn8DQAJAIARFBEACQCACQQNLDQADQCACQYSUwABqIQQCf0EDIAJrIgNBCE8EQCABIAQgAxAdIAEoAgQhACABKAIADAELQQAhAEEAIANFDQAaA0BBASAAIARqLQAAQQpGDQEaIAMgAEEBaiIARw0ACyADIQBBAAtBAUcEQEEDIQIMAgsCQCAAIAJqIgBBAWoiAkUgAkEDS3INACAAQYSUwABqLQAAQQpHDQBBACEEIAIhAyACIQAMBAsgAkEDTQ0ACwtBASEEQQMiACAFIgNHDQELQQAMAgsCQCAILQAABEAgB0GAlMAAQQQgBigCDBECAA0BCyAFQYSUwABqIQkgACAFayEKIAggACAFRwR/IAkgCmpBf2otAABBCkYFQQALOgAAIAMhBSAHIAkgCiAGKAIMEQIARQ0BCwtBAQsgAUEwaiQAC5EDAQF/AkACQAJAAkAgAUECdCIBRQRAQQEhDgwBCyABQX9MDQEgARBUIg5FDQILAkAgBEUEQCADRQ0BQQAhBANAIAQgAU8NBSAEIA5qIAItAAA6AAAgBEEEaiEEIAJBAWohAiADQX9qIgMNAAsMAQsgAiADQQAgDiABECILAkAgB0UEQCAGRQ0BQQEhBANAIAQgAU8NBSAEIA5qIAUtAAA6AAAgBEEEaiEEIAVBAWohBSAGQX9qIgYNAAsMAQsgBSAGQQEgDiABECILAkAgCkUEQCAJRQ0BQQIhBANAIAQgAU8NBSAEIA5qIAgtAAA6AAAgBEEEaiEEIAhBAWohCCAJQX9qIgkNAAsMAQsgCCAJQQIgDiABECILAkAgDUUEQCAMRQ0BQQMhBANAIAQgAU8NBSAEIA5qIAstAAA6AAAgBEEEaiEEIAtBAWohCyAMQX9qIgwNAAsMAQsgCyAMQQMgDiABECILIAAgATYCBCAAIA42AgAPCxBOAAsgAUEBEH4AC0G0gcAAQRlB2IHAABB2AAuBAwEDfwJAAkACQAJAIAFBAnQiCEUEQEEBIQkMAQsgCEF/TA0BIAgQVCIJRQ0CCwJAIARFBEAgA0UNAUEAIQQgAyEKIAIhAQNAIAQgCE8NBSAEIAlqIAEtAAA6AAAgBEEEaiEEIAFBAWohASAKQX9qIgoNAAsgAyEKQQEhBCACIQEDQCAEIAhPDQUgBCAJaiABLQAAOgAAIARBBGohBCABQQFqIQEgCkF/aiIKDQALQQIhBANAIAQgCE8NBSAEIAlqIAItAAA6AAAgBEEEaiEEIAJBAWohAiADQX9qIgMNAAsMAQsgAiADQQAgCSAIECIgAiADQQEgCSAIECIgAiADQQIgCSAIECILAkAgB0UEQCAGRQ0BQQMhBANAIAQgCE8NBSAEIAlqIAUtAAA6AAAgBEEEaiEEIAVBAWohBSAGQX9qIgYNAAsMAQsgBSAGQQMgCSAIECILIAAgCDYCBCAAIAk2AgAPCxBOAAsgCEEBEH4AC0G0gcAAQRlB2IHAABB2AAv7AgEFfwJAAkACQAJAIAFBCU8EQEEQQQgQZSABSw0BDAILIAAQBSEEDAILQRBBCBBlIQELQQhBCBBlIQNBFEEIEGUhAkEQQQgQZSEFQQBBEEEIEGVBAnRrIgZBgIB8IAUgAiADamprQXdxQX1qIgMgBiADSRsgAWsgAE0NACABQRAgAEEEakEQQQgQZUF7aiAASxtBCBBlIgNqQRBBCBBlakF8ahAFIgJFDQAgAhCFASEAAkAgAUF/aiIEIAJxRQRAIAAhAQwBCyACIARqQQAgAWtxEIUBIQJBEEEIEGUhBCAAEHogAkEAIAEgAiAAayAESxtqIgEgAGsiAmshBCAAEHBFBEAgASAEEFkgACACEFkgACACEA0MAQsgACgCACEAIAEgBDYCBCABIAAgAmo2AgALIAEQcA0BIAEQeiICQRBBCBBlIANqTQ0BIAEgAxCCASEAIAEgAxBZIAAgAiADayIDEFkgACADEA0MAQsgBA8LIAEQhAEgARBwGgufAwEGfyMAQdAAayIBJAAgAUEANgIYIAFCATcDECABQSBqIAFBEGoQVwJAIAAgAUEgahAaRQRAIAEoAhQgASgCGCIAa0EJTQRAIAFBEGogAEEKECYgASgCGCEACyABKAIQIABqIgJBhIbAACkAADcAACACQQhqQYyGwAAvAAA7AAAgASAAQQpqNgIYIAFBCGoQACIFEAEgASgCCCEGIAEoAhQgASgCGCIAayABKAIMIgRJBEAgAUEQaiAAIAQQJiABKAIYIQALIAEoAhAgAGogBiAEEIABGiABIAAgBGoiADYCGCABKAIUIABrQQFNBEAgAUEQaiAAQQIQJiABKAIYIQALIAEoAhAgAGpBihQ7AAAgASAAQQJqIgM2AhggASgCECEAAkAgASgCFCICIANNBEAgACECDAELIANFBEBBASECIAAQBgwBCyAAIAJBASADEGYiAkUNAgsgAiADEAIgBARAIAYQBgsgBUEkTwRAIAUQAwsgAUHQAGokAA8LQeCEwABBNyABQcgAakGYhcAAQfSFwAAQNgALIANBARB+AAu3AgEBfyMAQfAAayIGJAAgBiABNgIMIAYgADYCCCAGIAM2AhQgBiACNgIQIAZB6ZLAADYCGCAGQQI2AhwCQCAEKAIARQRAIAZBzABqQSg2AgAgBkHEAGpBKDYCACAGQewAakEDNgIAIAZCBDcCXCAGQcyTwAA2AlggBkEnNgI8IAYgBkE4ajYCaAwBCyAGQTBqIARBEGopAgA3AwAgBkEoaiAEQQhqKQIANwMAIAYgBCkCADcDICAGQewAakEENgIAIAZB1ABqQSk2AgAgBkHMAGpBKDYCACAGQcQAakEoNgIAIAZCBDcCXCAGQaiTwAA2AlggBkEnNgI8IAYgBkE4ajYCaCAGIAZBIGo2AlALIAYgBkEQajYCSCAGIAZBCGo2AkAgBiAGQRhqNgI4IAZB2ABqIAUQTwAL0AIBAn8CQAJAAkACQCABQQJ0IgtFBEBBASEBDAELIAtBf0wNASALQQEQayIBRQ0CCyABQf8BIAsQfyEMAkAgBEUEQCADRQ0BQQAhAQNAIAEgC08NBSABIAxqIAItAAA6AAAgAUEEaiEBIAJBAWohAiADQX9qIgMNAAsMAQsgAiADQQAgDCALECILAkAgB0UEQCAGRQ0BQQEhAQNAIAEgC08NBSABIAxqIAUtAAA6AAAgAUEEaiEBIAVBAWohBSAGQX9qIgYNAAsMAQsgBSAGQQEgDCALECILAkAgCkUEQCAJRQ0BQQIhAQNAIAEgC08NBSABIAxqIAgtAAA6AAAgAUEEaiEBIAhBAWohCCAJQX9qIgkNAAsMAQsgCCAJQQIgDCALECILIAAgCzYCBCAAIAw2AgAPCxBOAAsgC0EBEH4AC0G0gcAAQRlB2IHAABB2AAvWAgECfyMAQRBrIgIkACAAKAIAIQACQAJ/AkAgAUGAAU8EQCACQQA2AgwgAUGAEE8NASACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgwCCyAAKAIIIgMgACgCBEYEQCAAIAMQKSAAKAIIIQMLIAAgA0EBajYCCCAAKAIAIANqIAE6AAAMAgsgAUGAgARPBEAgAiABQT9xQYABcjoADyACIAFBBnZBP3FBgAFyOgAOIAIgAUEMdkE/cUGAAXI6AA0gAiABQRJ2QQdxQfABcjoADEEEDAELIAIgAUE/cUGAAXI6AA4gAiABQQx2QeABcjoADCACIAFBBnZBP3FBgAFyOgANQQMLIQEgAEEEaigCACAAKAIIIgNrIAFJBEAgACADIAEQJyAAKAIIIQMLIAAoAgAgA2ogAkEMaiABEIABGiAAIAEgA2o2AggLIAJBEGokAEEAC9UCAQJ/IwBBEGsiAiQAIAAoAgAhAAJAAn8CQCABQYABTwRAIAJBADYCDCABQYAQTw0BIAIgAUE/cUGAAXI6AA0gAiABQQZ2QcABcjoADEECDAILIAAoAggiAyAAKAIERgR/IAAgAxAoIAAoAggFIAMLIAAoAgBqIAE6AAAgACAAKAIIQQFqNgIIDAILIAFBgIAETwRAIAIgAUE/cUGAAXI6AA8gAiABQQZ2QT9xQYABcjoADiACIAFBDHZBP3FBgAFyOgANIAIgAUESdkEHcUHwAXI6AAxBBAwBCyACIAFBP3FBgAFyOgAOIAIgAUEMdkHgAXI6AAwgAiABQQZ2QT9xQYABcjoADUEDCyEBIAAoAgQgACgCCCIDayABSQRAIAAgAyABECYgACgCCCEDCyAAKAIAIANqIAJBDGogARCAARogACABIANqNgIICyACQRBqJABBAAvAAgEDfwJAAkACQAJAIAFBAnQiBUUEQEEBIQEMAQsgBUF/TA0BIAVBARBrIgFFDQILIAFB/wEgBRB/IQYCQCAERQRAIANFDQFBACEBIAMhByACIQQDQCABIAVPDQUgASAGaiAELQAAOgAAIAFBBGohASAEQQFqIQQgB0F/aiIHDQALIAMhB0EBIQEgAiEEA0AgASAFTw0FIAEgBmogBC0AADoAACABQQRqIQEgBEEBaiEEIAdBf2oiBw0AC0ECIQEDQCABIAVPDQUgASAGaiACLQAAOgAAIAFBBGohASACQQFqIQIgA0F/aiIDDQALDAELIAIgA0EAIAYgBRAiIAIgA0EBIAYgBRAiIAIgA0ECIAYgBRAiCyAAIAU2AgQgACAGNgIADwsQTgALIAVBARB+AAtBtIHAAEEZQdiBwAAQdgALzgIBAn8jAEEQayICJAACQAJ/AkAgAUGAAU8EQCACQQA2AgwgAUGAEE8NASACIAFBP3FBgAFyOgANIAIgAUEGdkHAAXI6AAxBAgwCCyAAKAIIIgMgACgCBEYEfyAAIAMQKCAAKAIIBSADCyAAKAIAaiABOgAAIAAgACgCCEEBajYCCAwCCyABQYCABE8EQCACIAFBP3FBgAFyOgAPIAIgAUEGdkE/cUGAAXI6AA4gAiABQQx2QT9xQYABcjoADSACIAFBEnZBB3FB8AFyOgAMQQQMAQsgAiABQT9xQYABcjoADiACIAFBDHZB4AFyOgAMIAIgAUEGdkE/cUGAAXI6AA1BAwshASAAKAIEIAAoAggiA2sgAUkEQCAAIAMgARAmIAAoAgghAwsgACgCACADaiACQQxqIAEQgAEaIAAgASADajYCCAsgAkEQaiQAQQAL8gIBA38jAEFAaiICJABBASEDAkAgASgCGCIEQaiSwABBDCABQRxqKAIAIgEoAgwRAgANAAJAIAAoAggiAwRAIAIgAzYCDCACQSU2AhQgAiACQQxqNgIQQQEhAyACQQE2AjwgAkICNwIsIAJBuJLAADYCKCACIAJBEGo2AjggBCABIAJBKGoQDEUNAQwCCyAAKAIAIgMgACgCBEEMaigCABEJAELrkZO19tizovQAUg0AIAIgAzYCDCACQSY2AhQgAiACQQxqNgIQQQEhAyACQQE2AjwgAkICNwIsIAJBuJLAADYCKCACIAJBEGo2AjggBCABIAJBKGoQDA0BCyAAKAIMIQAgAkEkakERNgIAIAJBHGpBETYCACACIABBDGo2AiAgAiAAQQhqNgIYIAJBJzYCFCACIAA2AhAgAkEDNgI8IAJCAzcCLCACQZCSwAA2AiggAiACQRBqNgI4IAQgASACQShqEAwhAwsgAkFAayQAIAMLsQIBB38CQCACQQ9NBEAgACEDDAELIABBACAAa0EDcSIGaiEEIAYEQCAAIQMgASEFA0AgAyAFLQAAOgAAIAVBAWohBSADQQFqIgMgBEkNAAsLIAQgAiAGayIIQXxxIgdqIQMCQCABIAZqIgZBA3EiAgRAIAdBAUgNASAGQXxxIgVBBGohAUEAIAJBA3QiCWtBGHEhAiAFKAIAIQUDQCAEIAUgCXYgASgCACIFIAJ0cjYCACABQQRqIQEgBEEEaiIEIANJDQALDAELIAdBAUgNACAGIQEDQCAEIAEoAgA2AgAgAUEEaiEBIARBBGoiBCADSQ0ACwsgCEEDcSECIAYgB2ohAQsgAgRAIAIgA2ohAgNAIAMgAS0AADoAACABQQFqIQEgA0EBaiIDIAJJDQALCyAAC74CAgV/AX4jAEEwayIEJABBJyECAkAgAEKQzgBUBEAgACEHDAELA0AgBEEJaiACaiIDQXxqIAAgAEKQzgCAIgdCkM4Afn2nIgVB//8DcUHkAG4iBkEBdEHClMAAai8AADsAACADQX5qIAUgBkHkAGxrQf//A3FBAXRBwpTAAGovAAA7AAAgAkF8aiECIABC/8HXL1YgByEADQALCyAHpyIDQeMASwRAIAJBfmoiAiAEQQlqaiAHpyIDIANB//8DcUHkAG4iA0HkAGxrQf//A3FBAXRBwpTAAGovAAA7AAALAkAgA0EKTwRAIAJBfmoiAiAEQQlqaiADQQF0QcKUwABqLwAAOwAADAELIAJBf2oiAiAEQQlqaiADQTBqOgAACyABQYCSwABBACAEQQlqIAJqQScgAmsQCiAEQTBqJAALqAIBBH8CQAJAAkACQCABQQNqQXxxIgMgAUYNACADIAFrIgMgAiADIAJJGyIERQ0AQQAhA0EBIQUDQCABIANqLQAAQQpGDQQgBCADQQFqIgNHDQALIAQgAkF4aiIDSw0CDAELIAJBeGohA0EAIQQLA0ACQCABIARqIgUoAgBBipSo0ABzIgZBf3MgBkH//ft3anFBgIGChHhxDQAgBUEEaigCAEGKlKjQAHMiBUF/cyAFQf/9+3dqcUGAgYKEeHENACAEQQhqIgQgA00NAQsLIAQgAk0NACAEIAJBtJbAABB0AAtBACEFIAIgBEcEQANAIAEgBGotAABBCkYEQCAEIQNBASEFDAMLIAIgBEEBaiIERw0ACwsgAiEDCyAAIAM2AgQgACAFNgIAC6QCAQV/IABCADcCECAAAn9BACABQYACSQ0AGkEfIAFB////B0sNABogAUEGIAFBCHZnIgJrdkEBcSACQQF0a0E+agsiAjYCHCACQQJ0QeiZwABqIQMgACEEAkACQAJAAkBB3JfAACgCACIFQQEgAnQiBnEEQCADKAIAIQMgAhBhIQIgAxB6IAFHDQEgAyECDAILQdyXwAAgBSAGcjYCACADIAA2AgAMAwsgASACdCEFA0AgAyAFQR12QQRxakEQaiIGKAIAIgJFDQIgBUEBdCEFIAIiAxB6IAFHDQALCyACKAIIIgEgBDYCDCACIAQ2AgggBCACNgIMIAQgATYCCCAAQQA2AhgPCyAGIAA2AgALIAAgAzYCGCAEIAQ2AgggBCAENgIMC7YCAQV/IAAoAhghBAJAAkAgACAAKAIMRgRAIABBFEEQIABBFGoiASgCACIDG2ooAgAiAg0BQQAhAQwCCyAAKAIIIgIgACgCDCIBNgIMIAEgAjYCCAwBCyABIABBEGogAxshAwNAIAMhBSACIgFBFGoiAygCACICRQRAIAFBEGohAyABKAIQIQILIAINAAsgBUEANgIACwJAIARFDQACQCAAIAAoAhxBAnRB6JnAAGoiAigCAEcEQCAEQRBBFCAEKAIQIABGG2ogATYCACABDQEMAgsgAiABNgIAIAENAEHcl8AAQdyXwAAoAgBBfiAAKAIcd3E2AgAPCyABIAQ2AhggACgCECICBEAgASACNgIQIAIgATYCGAsgAEEUaigCACIARQ0AIAFBFGogADYCACAAIAE2AhgLC2ABDH9BiJvAACgCACICBEBBgJvAACEGA0AgAiIBKAIIIQIgASgCBCEDIAEoAgAhBCABQQxqKAIAGiABIQYgBUEBaiEFIAINAAsLQZibwAAgBUH/HyAFQf8fSxs2AgAgCAvHAgEDfyMAQSBrIgEkACAAKAIAIQIgAEECNgIAAkACQAJAIAIOAwIBAgALIAFBHGpBADYCACABQeyGwAA2AhggAUIBNwIMIAFBkJHAADYCCCABQQhqQZiRwAAQTwALIAAtAAQhAiAAQQE6AAQgASACQQFxIgI6AAcCQAJAIAJFBEAgAEEEaiECAkBByJfAACgCAEH/////B3EEQBCBASEDIAAtAAUEQCADQQFzIQMMAgsgA0UNBAwDCyAALQAFRQ0CCyABIAM6AAwgASACNgIIQaiGwABBKyABQQhqQbiPwABBqJHAABA2AAsgAUEANgIcIAFB7IbAADYCGCABQgE3AgwgAUHojsAANgIIIAFBB2ogAUEIahA8AAtByJfAACgCAEH/////B3FFDQAQgQENACAAQQE6AAULIAJBADoAAAsgAUEgaiQAC58CAQN/IAAgAWohBwJAAkACQAJAA0AgACAHRwRAIAAtAAAhBSAAQQFqIgEhACAFQYABRg0BIAVBGHRBGHVBAE4EQEEAIQYgASEAA0AgACAHRg0EIAIgBE8NBSACIANqIAAtAAA6AAAgAkEEaiECIABBAWohACAGQf8BcSAGQQFqIQYgBUkNAAsMAgsgASAHRg0FQQEgBWshBSABQQFqIQAgAS0AACEGQQAhAQNAIAIgBE8NBSACIANqIAY6AAAgAkEEaiECIAFBAWoiAUH/AXEgBUH/AXFJDQALDAELCw8LQeiBwABBwQBBvILAABB2AAtBtIHAAEEZQayCwAAQdgALQbSBwABBGUGIg8AAEHYAC0HMgsAAQTtBmIPAABB2AAuJAgIEfwF+IwBBMGsiAiQAIAFBBGohBCABKAIERQRAIAEoAgAhAyACQRBqIgVBADYCACACQgE3AwggAiACQQhqNgIUIAJBKGogA0EQaikCADcDACACQSBqIANBCGopAgA3AwAgAiADKQIANwMYIAJBFGpB1IbAACACQRhqEAwaIARBCGogBSgCADYCACAEIAIpAwg3AgALIAJBIGoiAyAEQQhqKAIANgIAIAFBDGpBADYCACAEKQIAIQYgAUIBNwIEIAIgBjcDGEEMQQQQayIBRQRAQQxBBBB+AAsgASACKQMYNwIAIAFBCGogAygCADYCACAAQZCNwAA2AgQgACABNgIAIAJBMGokAAvIAQEDfyMAQRBrIg4kAAJAAkACQCAEDgIBAAILQQEhDwsCQAJAIAcOAgEAAgtBASEQC0EAIQdBACEEAkACQCAKDgIBAAILQQEhBAsCQAJAIA0OAgEAAgtBASEHCyAOQQhqIAEgAiADIA8gBSAGIBAgCCAJIAQgCyAMIAcQECAOKAIMIQEgDigCCCEEIAwEQCALEAYLIAkEQCAIEAYLIAYEQCAFEAYLIAMEQCACEAYLIAAgBDYCACAAIAE2AgQgDkEQaiQADwsQeAALkQICA38DfiMAQRBrIgIkAAJAAkACQEGcm8AAKAIARQRAQZybwABBfzYCAEGgm8AAKAIAIgBFBEBBIEEIEGsiAEUNAiAAQoGAgIAQNwMAIABBEGpBADYCAEHQl8AAKQMAIQMDQCADQgF8IgRQDQRB0JfAACAEQdCXwAApAwAiBSADIAVRIgEbNwMAIAUhAyABRQ0ACyAAQQA7ARwgACAENwMIQaCbwAAgADYCACAAQRhqQQA2AgALIAAgACgCACIBQQFqNgIAIAFBf0wNA0Gcm8AAQZybwAAoAgBBAWo2AgAgAkEQaiQAIAAPC0HshsAAQRAgAkEIakH8hsAAQZyLwAAQNgALQSBBCBB+AAsQTQALAAvMAQECfyMAQSBrIgMkAAJAAkAgASACaiICIAFJDQAgAEEEaigCACIBQQF0IgQgAiAEIAJLGyICQQggAkEISxsiAkF/c0EfdiEEAkAgAQRAIANBATYCGCADIAE2AhQgAyAAKAIANgIQDAELIANBADYCGAsgAyACIAQgA0EQahArIAMoAgQhASADKAIARQRAIAAgATYCACAAQQRqIAI2AgAMAgsgA0EIaigCACIAQYGAgIB4Rg0BIABFDQAgASAAEH4ACxBOAAsgA0EgaiQAC8wBAQJ/IwBBIGsiAyQAAkACQCABIAJqIgIgAUkNACAAQQRqKAIAIgFBAXQiBCACIAQgAksbIgJBCCACQQhLGyICQX9zQR92IQQCQCABBEAgA0EBNgIYIAMgATYCFCADIAAoAgA2AhAMAQsgA0EANgIYCyADIAIgBCADQRBqEC8gAygCBCEBIAMoAgBFBEAgACABNgIAIABBBGogAjYCAAwCCyADQQhqKAIAIgBBgYCAgHhGDQEgAEUNACABIAAQfgALEE4ACyADQSBqJAALygEBA38jAEEgayICJAACQAJAIAFBAWoiAUUNACAAQQRqKAIAIgNBAXQiBCABIAQgAUsbIgFBCCABQQhLGyIBQX9zQR92IQQCQCADBEAgAkEBNgIYIAIgAzYCFCACIAAoAgA2AhAMAQsgAkEANgIYCyACIAEgBCACQRBqECsgAigCBCEDIAIoAgBFBEAgACADNgIAIABBBGogATYCAAwCCyACQQhqKAIAIgBBgYCAgHhGDQEgAEUNACADIAAQfgALEE4ACyACQSBqJAALygEBA38jAEEgayICJAACQAJAIAFBAWoiAUUNACAAQQRqKAIAIgNBAXQiBCABIAQgAUsbIgFBCCABQQhLGyIBQX9zQR92IQQCQCADBEAgAkEBNgIYIAIgAzYCFCACIAAoAgA2AhAMAQsgAkEANgIYCyACIAEgBCACQRBqEC8gAigCBCEDIAIoAgBFBEAgACADNgIAIABBBGogATYCAAwCCyACQQhqKAIAIgBBgYCAgHhGDQEgAEUNACADIAAQfgALEE4ACyACQSBqJAALpAEBA38jAEEQayILJAACQAJAAkAgBA4CAQACC0EBIQwLAkACQCAHDgIBAAILQQEhDQtBACEEAkACQCAKDgIBAAILQQEhBAsgC0EIaiABIAIgAyAMIAUgBiANIAggCSAEEBUgCygCDCEBIAsoAgghBCAJBEAgCBAGCyAGBEAgBRAGCyADBEAgAhAGCyAAIAQ2AgAgACABNgIEIAtBEGokAA8LEHgAC7cBAAJAIAIEQAJAAkACfwJAAkAgAUEATgRAIAMoAggNASABDQJBASECDAQLDAYLIAMoAgQiAkUEQCABRQRAQQEhAgwECyABQQEQawwCCyADKAIAIAJBASABEGYMAQsgAUEBEGsLIgJFDQELIAAgAjYCBCAAQQhqIAE2AgAgAEEANgIADwsgACABNgIEIABBCGpBATYCACAAQQE2AgAPCyAAIAE2AgQLIABBCGpBADYCACAAQQE2AgAL7wEBA38jAEEgayIFJABByJfAAEHIl8AAKAIAIgdBAWo2AgBBpJvAAEGkm8AAKAIAQQFqIgY2AgACQAJAIAdBAEggBkECS3INACAFIAQ6ABggBSADNgIUIAUgAjYCEEG8l8AAKAIAIgJBf0wNAEG8l8AAIAJBAWoiAjYCAEG8l8AAQcSXwAAoAgAiAwR/QcCXwAAoAgAgBSAAIAEoAhARAQAgBSAFKQMANwMIIAVBCGogAygCFBEBAEG8l8AAKAIABSACC0F/ajYCACAGQQFLDQAgBA0BCwALIwBBEGsiAiQAIAIgATYCDCACIAA2AggAC6sBAQN/AkAgAkEPTQRAIAAhAwwBCyAAQQAgAGtBA3EiBGohBSAEBEAgACEDA0AgAyABOgAAIANBAWoiAyAFSQ0ACwsgBSACIARrIgJBfHEiBGohAyAEQQFOBEAgAUH/AXFBgYKECGwhBANAIAUgBDYCACAFQQRqIgUgA0kNAAsLIAJBA3EhAgsgAgRAIAIgA2ohAgNAIAMgAToAACADQQFqIgMgAkkNAAsLIAAL2AEBA38jAEEgayIAJAACQEHIl8AAKAIAQf////8HcQRAEIEBRQ0BC0G8l8AAKAIAQbyXwABBfzYCAEUEQEHEl8AAKAIAIQFBxJfAAEGAgMAANgIAQcCXwAAoAgAhAkHAl8AAQQE2AgBBvJfAAEEANgIAAkAgAUUNACACIAEoAgARBAAgAUEEaigCAEUNACABQQhqKAIAGiACEAYLIABBIGokAA8LAAsgAEEcakEANgIAIABB7IbAADYCGCAAQgE3AgwgAEG8jMAANgIIIABBCGpB4IzAABBPAAurAQEBfwJAIAIEQAJ/AkACQAJAIAFBAE4EQCADKAIIRQ0CIAMoAgQiBA0BIAENAyACDAQLIABBCGpBADYCAAwFCyADKAIAIAQgAiABEGYMAgsgAQ0AIAIMAQsgASACEGsLIgMEQCAAIAM2AgQgAEEIaiABNgIAIABBADYCAA8LIAAgATYCBCAAQQhqIAI2AgAMAQsgACABNgIEIABBCGpBADYCAAsgAEEBNgIAC7wBAQJ/IwBBEGsiAiQAIAACf0EBIAAtAAQNABogACgCACEBIABBBWotAABFBEAgASgCGEGOlMAAQQcgAUEcaigCACgCDBECAAwBCyABLQAAQQRxRQRAIAEoAhhBiJTAAEEGIAFBHGooAgAoAgwRAgAMAQsgAkEBOgAPIAIgASkCGDcDACACIAJBD2o2AghBASACEA8NABogASgCGEGHlMAAQQEgASgCHCgCDBECAAsiADoABCACQRBqJAAgAAusAQEDfyMAQTBrIgIkACABQQRqIQMgASgCBEUEQCABKAIAIQEgAkEQaiIEQQA2AgAgAkIBNwMIIAIgAkEIajYCFCACQShqIAFBEGopAgA3AwAgAkEgaiABQQhqKQIANwMAIAIgASkCADcDGCACQRRqQdSGwAAgAkEYahAMGiADQQhqIAQoAgA2AgAgAyACKQMINwIACyAAQZCNwAA2AgQgACADNgIAIAJBMGokAAuFAQEDfyMAQRBrIggkAAJAAkACQCAEDgICAQALEHgAC0EBIQkLAkACQAJAIAcOAgIBAAsQeAALQQEhCgsgCEEIaiABIAIgAyAJIAUgBiAKEBEgCCgCDCEBIAgoAgghBCAGBEAgBRAGCyADBEAgAhAGCyAAIAQ2AgAgACABNgIEIAhBEGokAAuJAQEDfyMAQYABayIDJAAgACgCACEAA0AgAiADakH/AGpBMEHXACAAQQ9xIgRBCkkbIARqOgAAIAJBf2ohAiAAQQ9LIABBBHYhAA0ACyACQYABaiIAQYEBTwRAIABBgAFBsJTAABB0AAsgAUHAlMAAQQIgAiADakGAAWpBACACaxAKIANBgAFqJAALiAEBA38jAEGAAWsiAyQAIAAoAgAhAANAIAIgA2pB/wBqQTBBNyAAQQ9xIgRBCkkbIARqOgAAIAJBf2ohAiAAQQ9LIABBBHYhAA0ACyACQYABaiIAQYEBTwRAIABBgAFBsJTAABB0AAsgAUHAlMAAQQIgAiADakGAAWpBACACaxAKIANBgAFqJAALsAEBA38jAEEQayIBJAAgACgCACICQRRqKAIAIQMCQAJ/AkACQCACKAIEDgIAAQMLIAMNAkEAIQJB7IbAAAwBCyADDQEgAigCACIDKAIEIQIgAygCAAshAyABIAI2AgQgASADNgIAIAFBxI3AACAAKAIEIgEoAgggACgCCCABLQAQECwACyABQQA2AgQgASACNgIAIAFBsI3AACAAKAIEIgEoAgggACgCCCABLQAQECwAC30BAX8jAEFAaiIFJAAgBSABNgIMIAUgADYCCCAFIAM2AhQgBSACNgIQIAVBLGpBAjYCACAFQTxqQSg2AgAgBUICNwIcIAVB8JPAADYCGCAFQSc2AjQgBSAFQTBqNgIoIAUgBUEQajYCOCAFIAVBCGo2AjAgBUEYaiAEEE8AC3gBA38gACAAEIQBIgBBCBBlIABrIgIQggEhAEHsmsAAIAEgAmsiATYCAEH0msAAIAA2AgAgACABQQFyNgIEQQhBCBBlIQJBFEEIEGUhA0EQQQgQZSEEIAAgARCCASAEIAMgAkEIa2pqNgIEQZCbwABBgICAATYCAAtbAQJ/IwBBIGsiAiQAIAFBHGooAgAhAyABKAIYIAJBGGogACgCACIAQRBqKQIANwMAIAJBEGogAEEIaikCADcDACACIAApAgA3AwggAyACQQhqEAwgAkEgaiQAC18BAn8jAEEQayIFJAACQAJAAkAgBA4CAgEACxB4AAtBASEGCyAFQQhqIAEgAiADIAYQGCAFKAIMIQEgBSgCCCEEIAMEQCACEAYLIAAgBDYCACAAIAE2AgQgBUEQaiQAC1YBAn8jAEEgayICJAAgAUEcaigCACEDIAEoAhggAkEYaiAAQRBqKQIANwMAIAJBEGogAEEIaikCADcDACACIAApAgA3AwggAyACQQhqEAwgAkEgaiQAC2wBAX8jAEEwayIDJAAgAyABNgIEIAMgADYCACADQRxqQQI2AgAgA0EsakERNgIAIANCAjcCDCADQfiWwAA2AgggA0ERNgIkIAMgA0EgajYCGCADIANBBGo2AiggAyADNgIgIANBCGogAhBPAAtmAQF/IwBBIGsiAiQAIAJBxI7AADYCBCACIAA2AgAgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkGMh8AAIAJBBGpBjIfAACACQQhqQaiPwAAQFAALYwEBfyMAQSBrIgMkACADQcSKwAA2AgQgAyAANgIAIANBGGogAUEQaikCADcDACADQRBqIAFBCGopAgA3AwAgAyABKQIANwMIIANBnIfAACADQQRqQZyHwAAgA0EIaiACEBQAC1kBAX8jAEEgayICJAAgAiAAKAIANgIEIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpBkIbAACACQQhqEAwgAkEgaiQAC1kBAX8jAEEgayICJAAgAiAAKAIANgIEIAJBGGogAUEQaikCADcDACACQRBqIAFBCGopAgA3AwAgAiABKQIANwMIIAJBBGpB1IbAACACQQhqEAwgAkEgaiQAC2cAIwBBMGsiASQAQZCXwAAtAAAEQCABQRxqQQE2AgAgAUICNwIMIAFB0IvAADYCCCABQRE2AiQgASAANgIsIAEgAUEgajYCGCABIAFBLGo2AiAgAUEIakH4i8AAEE8ACyABQTBqJAALVgEBfyMAQSBrIgIkACACIAA2AgQgAkEYaiABQRBqKQIANwMAIAJBEGogAUEIaikCADcDACACIAEpAgA3AwggAkEEakGQhsAAIAJBCGoQDCACQSBqJAALUQEBfwJAIABBEGooAgAiAUUNACABQQA6AAAgAEEUaigCAEUNACAAKAIQEAYLAkAgAEF/Rg0AIAAgACgCBCIBQX9qNgIEIAFBAUcNACAAEAYLC1wBA38jAEEQayIBJAACQCAAKAIMIgIEQCAAKAIIIgNFDQEgASACNgIIIAEgADYCBCABIAM2AgAgARBWAAtBrIfAAEErQYCNwAAQSAALQayHwABBK0HwjMAAEEgAC0oBAX8gACgCACIAQQRqKAIAIAAoAggiA2sgAkkEQCAAIAMgAhAnIAAoAgghAwsgACgCACADaiABIAIQgAEaIAAgAiADajYCCEEAC0cBAX8gACgCACIAKAIEIAAoAggiA2sgAkkEQCAAIAMgAhAmIAAoAgghAwsgACgCACADaiABIAIQgAEaIAAgAiADajYCCEEACzoBAX8jAEEQayIAJABBlJfAACgCAEEDRwRAIABBAToACyAAIABBC2o2AgwgAEEMahALCyAAQRBqJAALQgEBfyAAKAIEIAAoAggiA2sgAkkEQCAAIAMgAhAmIAAoAgghAwsgACgCACADaiABIAIQgAEaIAAgAiADajYCCEEAC0cBAX8jAEEgayIDJAAgA0EUakEANgIAIANBgJLAADYCECADQgE3AgQgAyABNgIcIAMgADYCGCADIANBGGo2AgAgAyACEE8AC0cBAX8jAEEgayICJAAgAkEUakEBNgIAIAJCATcCBCACQciSwAA2AgAgAkEnNgIcIAIgADYCGCACIAJBGGo2AhAgAiABEE8AC0QBAn8gASgCBCECIAEoAgAhA0EIQQQQayIBRQRAQQhBBBB+AAsgASACNgIEIAEgAzYCACAAQaCNwAA2AgQgACABNgIACzkBAX8gAUEQdkAAIQIgAEEANgIIIABBACABQYCAfHEgAkF/RiIBGzYCBCAAQQAgAkEQdCABGzYCAAs5AAJAAn8gAkGAgMQARwRAQQEgACACIAEoAhARAAANARoLIAMNAUEACw8LIAAgAyAEIAEoAgwRAgALPwEBfyMAQSBrIgAkACAAQRxqQQA2AgAgAEHshsAANgIYIABCATcCDCAAQZyJwAA2AgggAEEIakGkicAAEE8ACz8BAX8jAEEgayIAJAAgAEEcakEANgIAIABBuJHAADYCGCAAQgE3AgwgAEHokcAANgIIIABBCGpB8JHAABBPAAs+AQF/IwBBIGsiAiQAIAJBAToAGCACIAE2AhQgAiAANgIQIAJB0JLAADYCDCACQYCSwAA2AgggAkEIahBDAAsyAAJAIABB/P///wdLDQAgAEUEQEEEDwsgACAAQf3///8HSUECdBBrIgBFDQAgAA8LAAs9AQF/IAAoAgAhAQJAIABBBGotAAANAEHIl8AAKAIAQf////8HcUUNABCBAQ0AIAFBAToAAQsgAUEAOgAACzsAIAAoAgAhACABLQAAQRBxQQR2RQRAIAEtAABBIHFBBXZFBEAgACABEHUPCyAAIAEQNA8LIAAgARAzCyIAIwBBEGsiACQAIABBCGogARBYIABBCGoQMCAAQRBqJAALJgEBfwJAIABBARASIgFFDQAgARCFARBwDQAgAUEAIAAQfxoLIAELKwAgACgCACIALQAAIABBADoAAEEBcUUEQEGsgMAAQStBpIHAABBIAAsQLgssAQF/IwBBEGsiASQAIAFBCGogAEEIaigCADYCACABIAApAgA3AwAgARA1AAs3ACAAQQM6ACAgAEKAgICAgAQ3AgAgACABNgIYIABBADYCECAAQQA2AgggAEEcakHIhMAANgIACzUBAX8gASgCGEHoisAAQQsgAUEcaigCACgCDBECACECIABBADoABSAAIAI6AAQgACABNgIACycAIAAgACgCBEEBcSABckECcjYCBCAAIAFqIgAgACgCBEEBcjYCBAsgAQF/AkAgACgCBCIBRQ0AIABBCGooAgBFDQAgARAGCwslAQF/IwBBEGsiAyQAIAMgATYCDCADIAA2AgggA0EIaiACEEkACyIAAkAgAUH8////B00EQCAAIAFBBCACEGYiAA0BCwALIAALIwAgAiACKAIEQX5xNgIEIAAgAUEBcjYCBCAAIAFqIAE2AgALHgAgACABQQNyNgIEIAAgAWoiACAAKAIEQQFyNgIECxQAIABBBGooAgAEQCAAKAIAEAYLCxkBAX8gACgCECIBBH8gAQUgAEEUaigCAAsLEgBBAEEZIABBAXZrIABBH0YbCxYAIAAgAUEBcjYCBCAAIAFqIAE2AgALHAAgASgCGEGAksAAQQ4gAUEcaigCACgCDBECAAscACABKAIYQYiXwABBBSABQRxqKAIAKAIMEQIACxAAIAAgAWpBf2pBACABa3ELDAAgACABIAIgAxAJCwsAIAEEQCAAEAYLCw8AIABBAXQiAEEAIABrcgsVACABIAAoAgAiACgCACAAKAIEEAcLFAAgACgCACABIAAoAgQoAgwRAAALCAAgACABEBILEwAgAEGgjcAANgIEIAAgATYCAAsNACAALQAEQQJxQQF2CxAAIAEgACgCACAAKAIEEAcLCgBBACAAayAAcQsLACAALQAEQQNxRQsMACAAIAFBA3I2AgQLDQAgACgCACAAKAIEagsOACAAKAIAGgNADAALAAsLACAAIAEgAhA7AAsLACAANQIAIAEQHAsLACAAIAEgAhBbAAsLACAAIwBqJAAjAAsMAEGshMAAQRkQBAALKQACfyAAKAIALQAARQRAIAFBjpbAAEEFEAcMAQsgAUGKlsAAQQQQBwsLCgAgACgCBEF4cQsKACAAKAIEQQFxCwoAIAAoAgxBAXELCgAgACgCDEEBdgsZACAAIAFBuJfAACgCACIAQRIgABsRAQAACwoAIAAgASACEC0LCgAgACABIAIQGwsLAEGkm8AAKAIARQsHACAAIAFqCwcAIAAgAWsLBwAgAEEIagsHACAAQXhqCwYAIAEQEwsMAELIhfmknrfU2xILDQBC65GTtfbYs6L0AAsMAEK4ic+XicbR+EwLAwABCwuXFwEAQYCAwAALjRcBAAAAAAAAAAEAAAACAAAAAwAAAAQAAAABAAAABAAAAAQAAAAFAAAABgAAAGNhbGxlZCBgT3B0aW9uOjp1bndyYXAoKWAgb24gYSBgTm9uZWAgdmFsdWUvcnVzdGMvODk3ZTM3NTUzYmJhOGI0Mjc1MWM2NzY1ODk2Nzg4OWQxMWVjZDEyMC9saWJyYXJ5L3N0ZC9zcmMvc3luYy9vbmNlLnJzAFcAEABMAAAAFAEAACkAAABvdXRwdXQgc2xpY2UgaXMgdG9vIHNtYWxsc3JjL2xpYi5ycwDNABAACgAAAIYAAAAbAAAAaW5wdXQgdGVybWluYXRlZCB3aGlsZSBkZWNvZGluZyB1bmNvbXByZXNzZWQgc2VnbWVudCBpbiBSTEUgc2xpY2UAAADNABAACgAAAJ0AAAAjAAAAzQAQAAoAAACaAAAAIwAAAGlucHV0IHRlcm1pbmF0ZWQgd2hpbGUgZGVjb2RpbmcgcmVwZWF0IHNlZ21lbnQgaW4gUkxFIHNsaWNlAM0AEAAKAAAAqgAAACMAAADNABAACgAAAKUAAAAbAAAAL1VzZXJzL21hY2llai5ub3dha293c2tpLy5jYXJnby9yZWdpc3RyeS9zcmMvZ2l0aHViLmNvbS0xZWNjNjI5OWRiOWVjODIzL2NvbnNvbGVfZXJyb3JfcGFuaWNfaG9vay0wLjEuNy9zcmMvbGliLnJzAACoARAAcgAAAJUAAAAOAAAAaW52YWxpZCBlbnVtIHZhbHVlIHBhc3NlZAAAAAcAAAAMAAAABAAAAAgAAAAJAAAACgAAAGEgRGlzcGxheSBpbXBsZW1lbnRhdGlvbiByZXR1cm5lZCBhbiBlcnJvciB1bmV4cGVjdGVkbHkACwAAAAAAAAABAAAADAAAAC9ydXN0Yy84OTdlMzc1NTNiYmE4YjQyNzUxYzY3NjU4OTY3ODg5ZDExZWNkMTIwL2xpYnJhcnkvYWxsb2Mvc3JjL3N0cmluZy5ycwCoAhAASwAAAM4JAAAJAAAACgpTdGFjazoKCgAADQAAAAQAAAAEAAAADgAAAA8AAAAQAAAAY2FsbGVkIGBSZXN1bHQ6OnVud3JhcCgpYCBvbiBhbiBgRXJyYCB2YWx1ZQATAAAABAAAAAQAAAAUAAAAFQAAABYAAABhbHJlYWR5IGJvcnJvd2VkEwAAAAAAAAABAAAAFwAAABMAAAAEAAAABAAAABgAAAATAAAABAAAAAQAAAAZAAAAY2FsbGVkIGBPcHRpb246OnVud3JhcCgpYCBvbiBhIGBOb25lYCB2YWx1ZXVzZSBvZiBzdGQ6OnRocmVhZDo6Y3VycmVudCgpIGlzIG5vdCBwb3NzaWJsZSBhZnRlciB0aGUgdGhyZWFkJ3MgbG9jYWwgZGF0YSBoYXMgYmVlbiBkZXN0cm95ZWRsaWJyYXJ5L3N0ZC9zcmMvdGhyZWFkL21vZC5ycwAANQQQAB0AAACyAgAABQAAAGZhaWxlZCB0byBnZW5lcmF0ZSB1bmlxdWUgdGhyZWFkIElEOiBiaXRzcGFjZSBleGhhdXN0ZWQAZAQQADcAAAA1BBAAHQAAABcEAAANAAAAbGlicmFyeS9zdGQvc3JjL3N5bmMvb25jZS5yc2Fzc2VydGlvbiBmYWlsZWQ6IHN0YXRlX2FuZF9xdWV1ZS5hZGRyKCkgJiBTVEFURV9NQVNLID09IFJVTk5JTkdPbmNlIGluc3RhbmNlIGhhcyBwcmV2aW91c2x5IGJlZW4gcG9pc29uZWQAABAFEAAqAAAAAgAAALQEEAAcAAAA/wEAAAkAAAC0BBAAHAAAAAwCAAAeAAAAUG9pc29uRXJyb3JsaWJyYXJ5L3N0ZC9zcmMvc3lzX2NvbW1vbi90aHJlYWRfaW5mby5yc3MFEAApAAAAFgAAADMAAABtZW1vcnkgYWxsb2NhdGlvbiBvZiAgYnl0ZXMgZmFpbGVkCgCsBRAAFQAAAMEFEAAOAAAAbGlicmFyeS9zdGQvc3JjL2FsbG9jLnJz4AUQABgAAABVAQAACQAAAGNhbm5vdCBtb2RpZnkgdGhlIHBhbmljIGhvb2sgZnJvbSBhIHBhbmlja2luZyB0aHJlYWQIBhAANAAAAGxpYnJhcnkvc3RkL3NyYy9wYW5pY2tpbmcucnNEBhAAHAAAAH0AAAAJAAAARAYQABwAAABHAgAADwAAAEQGEAAcAAAARgIAAA8AAAAaAAAADAAAAAQAAAAbAAAAEwAAAAgAAAAEAAAAHAAAAB0AAAAQAAAABAAAAB4AAAAfAAAAEwAAAAgAAAAEAAAAIAAAACEAAABjb25kdmFyIHdhaXQgbm90IHN1cHBvcnRlZAAA2AYQABoAAABsaWJyYXJ5L3N0ZC9zcmMvc3lzL3dhc20vLi4vdW5zdXBwb3J0ZWQvbG9ja3MvY29uZHZhci5yc/wGEAA4AAAAFQAAAAkAAAAAY2Fubm90IHJlY3Vyc2l2ZWx5IGFjcXVpcmUgbXV0ZXgAAABFBxAAIAAAAGxpYnJhcnkvc3RkL3NyYy9zeXMvd2FzbS8uLi91bnN1cHBvcnRlZC9sb2Nrcy9tdXRleC5ycwAAcAcQADYAAAAVAAAACQAAACIAAAAIAAAABAAAACMAAABsaWJyYXJ5L3N0ZC9zcmMvc3lzX2NvbW1vbi90aHJlYWRfcGFya2VyL2dlbmVyaWMucnMAyAcQADMAAAAnAAAAFQAAAGluY29uc2lzdGVudCBwYXJrIHN0YXRlAAwIEAAXAAAAyAcQADMAAAA1AAAAFwAAAHBhcmsgc3RhdGUgY2hhbmdlZCB1bmV4cGVjdGVkbHkAPAgQAB8AAADIBxAAMwAAADIAAAARAAAAaW5jb25zaXN0ZW50IHN0YXRlIGluIHVucGFya3QIEAAcAAAAyAcQADMAAABsAAAAEgAAAMgHEAAzAAAAegAAAA4AAABsaWJyYXJ5L2FsbG9jL3NyYy9yYXdfdmVjLnJzY2FwYWNpdHkgb3ZlcmZsb3cAAADUCBAAEQAAALgIEAAcAAAABgIAAAUAAABCb3Jyb3dNdXRFcnJvcjoAAAkQAAAAAAAOCRAAAQAAAA4JEAABAAAAcGFuaWNrZWQgYXQgJycsIDQJEAABAAAANQkQAAMAAAAACRAAAAAAACoAAAAAAAAAAQAAACsAAABtYXRjaGVzIT09PWFzc2VydGlvbiBmYWlsZWQ6IGAobGVmdCAgcmlnaHQpYAogIGxlZnQ6IGBgLAogcmlnaHQ6IGBgOiAAAABrCRAAGQAAAIQJEAASAAAAlgkQAAwAAACiCRAAAwAAAGAAAABrCRAAGQAAAIQJEAASAAAAlgkQAAwAAADICRAAAQAAADogAAAACRAAAAAAAOwJEAACAAAAICAgIC4uCn0sIC4uIH0geyAuLiB9bGlicmFyeS9jb3JlL3NyYy9mbXQvbnVtLnJzFQoQABsAAABlAAAAFAAAADB4MDAwMTAyMDMwNDA1MDYwNzA4MDkxMDExMTIxMzE0MTUxNjE3MTgxOTIwMjEyMjIzMjQyNTI2MjcyODI5MzAzMTMyMzMzNDM1MzYzNzM4Mzk0MDQxNDI0MzQ0NDU0NjQ3NDg0OTUwNTE1MjUzNTQ1NTU2NTc1ODU5NjA2MTYyNjM2NDY1NjY2NzY4Njk3MDcxNzI3Mzc0NzU3Njc3Nzg3OTgwODE4MjgzODQ4NTg2ODc4ODg5OTA5MTkyOTM5NDk1OTY5Nzk4OTl0cnVlZmFsc2VsaWJyYXJ5L2NvcmUvc3JjL3NsaWNlL21lbWNoci5ycwATCxAAIAAAAGgAAAAnAAAAcmFuZ2Ugc3RhcnQgaW5kZXggIG91dCBvZiByYW5nZSBmb3Igc2xpY2Ugb2YgbGVuZ3RoIEQLEAASAAAAVgsQACIAAABFcnJvcgB7CXByb2R1Y2VycwIIbGFuZ3VhZ2UBBFJ1c3QADHByb2Nlc3NlZC1ieQMFcnVzdGMdMS42NS4wICg4OTdlMzc1NTMgMjAyMi0xMS0wMikGd2FscnVzBjAuMTkuMAx3YXNtLWJpbmRnZW4SMC4yLjgwICg0Y2FhOTgxNjUp", e = async (C = {}, o) => {
    let f;
    if (o.startsWith("data:")) {
      const D = o.replace(/^data:.*?base64,/, "");
      let u;
      if (typeof Buffer == "function" && typeof Buffer.from == "function")
        u = Buffer.from(D, "base64");
      else if (typeof atob == "function") {
        const p = atob(D);
        u = new Uint8Array(p.length);
        for (let h = 0; h < p.length; h++)
          u[h] = p.charCodeAt(h);
      } else
        throw new Error("Cannot decode base64-encoded data URL");
      f = await WebAssembly.instantiate(u, C);
    } else {
      const D = await fetch(o), u = D.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && u.startsWith("application/wasm"))
        f = await WebAssembly.instantiateStreaming(D, C);
      else {
        const p = await D.arrayBuffer();
        f = await WebAssembly.instantiate(p, C);
      }
    }
    return f.instance.exports;
  }, g = new Array(32).fill(void 0);
  g.push(void 0, null, !0, !1);
  function t(C) {
    return g[C];
  }
  let I = g.length;
  function B(C) {
    C < 36 || (g[C] = I, I = C);
  }
  function n(C) {
    const o = t(C);
    return B(C), o;
  }
  const a = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let i = new a("utf-8", { ignoreBOM: !0, fatal: !0 });
  i.decode();
  let Q = null;
  function E() {
    return (Q === null || Q.buffer !== b.buffer) && (Q = new Uint8Array(b.buffer)), Q;
  }
  function G(C, o) {
    return i.decode(E().subarray(C, C + o));
  }
  let d = 0;
  function l(C, o) {
    const f = o(C.length * 1);
    return E().set(C, f / 1), d = C.length, f;
  }
  let N = null;
  function r() {
    return (N === null || N.buffer !== b.buffer) && (N = new Int32Array(b.buffer)), N;
  }
  function m(C, o) {
    return E().subarray(C / 1, C / 1 + o);
  }
  ae = function(C, o, f, D, u, p, h) {
    try {
      const X = K(-16), IA = l(o, R), BA = d, sA = l(D, R), oA = d, rA = l(p, R);
      z(X, C, IA, BA, f, sA, oA, u, rA, d, h);
      var k = r()[X / 4 + 0], J = r()[X / 4 + 1], T = m(k, J).slice();
      return tA(k, J * 1), T;
    } finally {
      K(16);
    }
  }, Ce = function(C, o, f, D, u, p, h, k, J) {
    try {
      const BA = K(-16), sA = l(o, R), oA = d, rA = l(D, R), we = d, De = l(p, R), ue = d, fe = l(k, R);
      EA(BA, C, sA, oA, f, rA, we, u, De, ue, h, fe, d, J);
      var T = r()[BA / 4 + 0], X = r()[BA / 4 + 1], IA = m(T, X).slice();
      return tA(T, X * 1), IA;
    } finally {
      K(16);
    }
  }, ne = function(C, o, f) {
    try {
      const h = K(-16), k = l(o, R);
      ce(h, C, k, d, f);
      var D = r()[h / 4 + 0], u = r()[h / 4 + 1], p = m(D, u).slice();
      return tA(D, u * 1), p;
    } finally {
      K(16);
    }
  }, ie = function(C, o, f, D, u) {
    try {
      const J = K(-16), T = l(o, R), X = d, IA = l(D, R);
      de(J, C, T, X, f, IA, d, u);
      var p = r()[J / 4 + 0], h = r()[J / 4 + 1], k = m(p, h).slice();
      return tA(p, h * 1), k;
    } finally {
      K(16);
    }
  };
  function q(C) {
    I === g.length && g.push(g.length + 1);
    const o = I;
    return I = g[o], g[o] = C, o;
  }
  const L = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let x = new L("utf-8");
  const V = typeof x.encodeInto == "function" ? function(C, o) {
    return x.encodeInto(C, o);
  } : function(C, o) {
    const f = x.encode(C);
    return o.set(f), { read: C.length, written: f.length };
  };
  function iA(C, o, f) {
    if (f === void 0) {
      const k = x.encode(C), J = o(k.length);
      return E().subarray(J, J + k.length).set(k), d = k.length, J;
    }
    let D = C.length, u = o(D);
    const p = E();
    let h = 0;
    for (; h < D; h++) {
      const k = C.charCodeAt(h);
      if (k > 127)
        break;
      p[u + h] = k;
    }
    if (h !== D) {
      h !== 0 && (C = C.slice(h)), u = f(u, D, D = h + C.length * 3);
      const k = E().subarray(u + h, u + D);
      h += V(C, k).written;
    }
    return d = h, u;
  }
  Object.freeze({ Raw: 0, 0: "Raw", RleCompressed: 1, 1: "RleCompressed" }), XA = function() {
    const C = new Error();
    return q(C);
  }, jA = function(C, o) {
    const f = t(o).stack, D = iA(f, R, le), u = d;
    r()[C / 4 + 1] = u, r()[C / 4 + 0] = D;
  }, KA = function(C, o) {
    try {
      console.error(G(C, o));
    } finally {
      tA(C, o);
    }
  }, VA = function(C) {
    n(C);
  }, OA = function(C, o) {
    throw new Error(G(C, o));
  };
  const S = await e({ "./webtoon_psd_decoder_bg.js": { __wbg_new_693216e109162396: XA, __wbg_stack_0ddaca5d1abfb52f: jA, __wbg_error_09919627ac0992f5: KA, __wbindgen_object_drop_ref: VA, __wbindgen_throw: OA } }, A), b = S.memory;
  S.main_js;
  const z = S.decode_rgb, EA = S.decode_rgba, ce = S.decode_grayscale, de = S.decode_grayscale_a, K = S.__wbindgen_add_to_stack_pointer, R = S.__wbindgen_malloc, tA = S.__wbindgen_free, le = S.__wbindgen_realloc, he = S.__wbindgen_start;
  he();
})();
async function yt(A, e, g, t, I, B) {
  const n = A * e;
  if (!(n > 0 && Number.isInteger(n)))
    throw new Error(`Pixel count must be a positive integer, got ${n}`);
  let a;
  if (t && I)
    a = await Gt(n, g, t, I, B);
  else if (!I && !t)
    a = await FA(n, g, B);
  else
    throw new Error(`Missing ${I ? "green" : "blue"} channel in RGB image`);
  return new Uint8ClampedArray(a.buffer, a.byteOffset, a.byteLength);
}
function $(A) {
  switch (A) {
    case v.RawData:
    case v.RleCompressed:
      return;
  }
  throw new _A(`Unsupported compression method: ${A}`);
}
async function Gt(A, e, g, t, I) {
  return await Qe, $(e.compression), $(t.compression), $(e.compression), I && $(I.compression), I ? Ce(A, e.data, e.compression, g.data, g.compression, t.data, t.compression, I.data, I.compression) : ae(A, e.data, e.compression, g.data, g.compression, t.data, t.compression);
}
async function FA(A, e, g) {
  return await Qe, $(e.compression), g && $(g.compression), g ? ie(A, e.data, e.compression, g.data, g.compression) : ne(A, e.data, e.compression);
}
function Nt(A) {
  const e = ct(A), { fileHeader: g } = e, t = UA(g.version), I = yg(e.imageResources), B = ot(e.layerAndMaskInformation, t), n = lg(e.imageData, g.depth, g.height, g.channelCount, t);
  return {
    fileHeader: g,
    colorModeData: void 0,
    imageResources: I,
    layerAndMaskInfo: B,
    imageData: n
  };
}
function QA(A) {
  const e = A.readUnicodeString(0), g = A.readIdString(), t = A.read("u32"), I = /* @__PURE__ */ new Map();
  for (; I.size < t; ) {
    const B = A.readIdString(), n = YA(A);
    if (I.has(B))
      throw new Te(`Duplicate descriptor key: ${B}`);
    I.set(B, n);
  }
  return { name: e, classId: g, items: I };
}
function M(A) {
  const e = A.read("u32");
  if (e !== 16)
    throw new ze(`Invalid descriptor version: ${e}`);
  const g = QA(A);
  return { descriptorVersion: e, descriptor: g };
}
function YA(A) {
  const e = A.readString(4);
  switch (e) {
    case c.Alias: {
      const g = A.read("u32"), t = A.take(g);
      return { type: e, data: t };
    }
    case c.Boolean: {
      const g = Boolean(A.read("u8"));
      return { type: e, value: g };
    }
    case c.Class:
    case c.GlobalClass: {
      const g = A.readUnicodeString(0), t = A.readIdString();
      return { type: e, name: g, classId: t };
    }
    case c.Descriptor:
    case c.GlobalObject: {
      const g = QA(A);
      return { type: e, descriptor: g };
    }
    case c.Double: {
      const g = A.read("f64");
      return { type: e, value: g };
    }
    case c.Enumerated: {
      const g = A.readIdString(), t = A.readIdString();
      return { type: e, enumType: g, enumValue: t };
    }
    case c.Integer: {
      const g = A.read("i32");
      return { type: e, value: g };
    }
    case c.LargeInteger: {
      const g = A.read("i64");
      return { type: e, value: g };
    }
    case c.List: {
      const g = A.read("u32"), t = [];
      for (; t.length < g; )
        t.push(YA(A));
      return { type: e, values: t };
    }
    case c.RawData: {
      const g = A.read("u32"), t = A.take(g);
      return { type: e, data: t };
    }
    case c.Reference: {
      const g = A.read("u32"), t = [];
      for (; t.length < g; )
        t.push(St(A));
      return { type: e, references: t };
    }
    case c.String: {
      const g = A.readUnicodeString(0);
      return { type: e, value: g };
    }
    case c.UnitFloat: {
      const g = zA(A.readString(4)), t = A.read("f64");
      return { type: e, unitType: g, value: t };
    }
    case c.ObjectArray: {
      A.read("u32");
      const g = A.readUnicodeString(0), t = A.readIdString(), I = A.read("u32"), B = Array.from(Array(I), () => {
        const n = A.readIdString(), a = YA(A);
        return { key: n, value: a };
      });
      return { type: e, classObj: { name: g, classId: t }, items: B };
    }
    case c.UnitFloats: {
      const g = zA(A.readString(4)), t = A.read("u32"), I = Array.from(Array(t), () => A.read("f64"));
      return { type: e, unitType: g, values: I };
    }
    default:
      throw new Oe(`Unexpected descriptor type: ${e}`);
  }
}
function St(A) {
  const e = A.readString(4);
  switch (e) {
    case Z.Class: {
      const g = A.readUnicodeString(0), t = A.readIdString();
      return { type: e, name: g, classId: t };
    }
    case Z.Enumerated: {
      const g = A.readUnicodeString(0), t = A.readIdString(), I = A.readIdString(), B = A.readIdString();
      return { type: e, name: g, classId: t, typeId: I, enumValue: B };
    }
    case Z.Identifier: {
      const g = A.readString(4);
      return { type: e, identifier: g };
    }
    case Z.Index: {
      const g = A.read("u32");
      return { type: e, index: g };
    }
    case Z.Name: {
      const g = A.readUnicodeString(0);
      return { type: e, name: g };
    }
    case Z.Offset: {
      const g = A.readUnicodeString(0), t = A.readIdString(), I = A.read("u32");
      return { type: e, name: g, classId: t, offset: I };
    }
    case Z.Property: {
      const g = A.readUnicodeString(0), t = A.readIdString(), I = A.readIdString();
      return { type: e, name: g, classId: t, keyId: I };
    }
    default:
      throw new _e(`Invalid reference type: ${e}`);
  }
}
function zA(A) {
  if (!Object.values(SA).includes(A))
    throw new $e(`Invalid Unit Float type: ${A}`);
  return A;
}
var y;
(function(A) {
  A[A.String = 0] = "String", A[A.DictBeg = 1] = "DictBeg", A[A.DictEnd = 2] = "DictEnd", A[A.ArrBeg = 3] = "ArrBeg", A[A.ArrEnd = 4] = "ArrEnd", A[A.Name = 5] = "Name", A[A.Number = 6] = "Number", A[A.Boolean = 7] = "Boolean";
})(y || (y = {}));
const JA = /* @__PURE__ */ new Set([
  0,
  9,
  12,
  32,
  10,
  13
]), kt = /* @__PURE__ */ new Set([
  102,
  116
]), H = {
  "(": 40,
  ")": 41,
  "<": 60,
  ">": 62,
  "[": 91,
  "]": 93,
  "/": 47,
  "\\": 92
}, Ee = new Set(Object.values(H)), se = [];
for (let A = 0; A < 256; A += 1)
  se[A] = JA.has(A) || Ee.has(A);
const pt = new TextDecoder("utf-8");
function Ft(A) {
  const e = A.position;
  let g = A.position;
  for (const I of A.iter()) {
    if (se[I])
      break;
    g += 1;
  }
  return pt.decode(A.take(g - e));
}
class Yt {
  constructor(e) {
    this.cursor = j.from(e);
  }
  tokens() {
    const e = [];
    for (; !this.done(); ) {
      const g = this.cursor.one();
      if (JA.has(g)) {
        for (; !this.done() && JA.has(this.cursor.peek()); )
          this.cursor.pass(1);
        continue;
      }
      if (Ee.has(g)) {
        if (g === H["("]) {
          e.push({ type: y.String, value: this.text() });
          continue;
        }
        if (g === H["["]) {
          e.push({ type: y.ArrBeg });
          continue;
        }
        if (g === H["]"]) {
          e.push({ type: y.ArrEnd });
          continue;
        }
        if (g === H["<"]) {
          this.cursor.pass(1), e.push({ type: y.DictBeg });
          continue;
        }
        if (g === H[">"]) {
          this.cursor.pass(1), e.push({ type: y.DictEnd });
          continue;
        }
        if (g === H["/"]) {
          e.push({ type: y.Name, value: this.string() });
          continue;
        }
        console.assert(!1, "Unhandled delimiter: '%s'", String.fromCharCode(g));
        continue;
      }
      this.cursor.unpass(1), kt.has(g) ? e.push({ type: y.Boolean, value: this.boolean() }) : e.push({ type: y.Number, value: this.number() });
    }
    return e;
  }
  done() {
    return this.cursor.position >= this.cursor.length;
  }
  text() {
    const e = this.cursor.peek();
    if (e === H[")"])
      return this.cursor.pass(1), "";
    const g = e === 255 || e === 254;
    let t = new TextDecoder("utf-16be");
    g && (t = this.textDecoderFromBOM());
    const I = [], B = this.cursor.clone();
    for (; B.peek() !== H[")"]; )
      if (B.pass(1), B.peek() === H["\\"]) {
        const i = B.position - this.cursor.position;
        I.push(t.decode(this.cursor.take(i), { stream: !0 })), B.pass(2), this.cursor.pass(1), I.push(t.decode(this.cursor.take(1), { stream: !0 }));
      }
    const n = B.position - this.cursor.position, a = this.cursor.take(n);
    return I.push(t.decode(a)), this.cursor.pass(1), I.join("");
  }
  textDecoderFromBOM() {
    const e = this.cursor.one(), g = this.cursor.one();
    if (e === 255 && g === 254)
      return new TextDecoder("utf-16le");
    if (e === 254 && g === 255)
      return new TextDecoder("utf-16be");
    throw new tg(`Unknown BOM value: [${e}, ${g}]`);
  }
  string() {
    return Ft(this.cursor);
  }
  number() {
    const e = this.string(), g = Number(e);
    if (Number.isNaN(g))
      throw new eg(`parsing '${e}' as Number failed`);
    return g;
  }
  boolean() {
    const e = this.string();
    if (e === "true")
      return !0;
    if (e === "false")
      return !1;
    throw new Ag(`'${e}' is neither 'true' nor 'false'`);
  }
}
const DA = Symbol(y[y.ArrBeg]), uA = Symbol(y[y.DictBeg]);
class Jt {
  constructor(e) {
    this.tokens = e, this.stack = [];
  }
  parse() {
    this.runParser();
    const [e] = this.stack;
    if (typeof e == "object" && !Array.isArray(e))
      return e;
    throw new gg(`EngineData top-level value is not a dict; is ${typeof e}`);
  }
  runParser() {
    for (const e of this.tokens)
      switch (e.type) {
        case y.Name:
        case y.Number:
        case y.Boolean:
        case y.String:
          this.stack.push(e.value);
          continue;
        case y.DictBeg:
          this.stack.push(uA);
          continue;
        case y.ArrBeg:
          this.stack.push(DA);
          continue;
        case y.DictEnd:
          this.stack.push(this.dict());
          continue;
        case y.ArrEnd:
          this.stack.push(this.array().reverse());
          continue;
      }
  }
  dict() {
    const e = {};
    for (; ; ) {
      const g = this.stack.pop();
      if (g === void 0)
        throw new mA("Stack empty when parsing dict");
      if (g === uA)
        return e;
      if (g === DA)
        throw new dA("Got ArrBeg while parsing a dict");
      const t = this.stack.pop();
      if (typeof t != "string")
        throw new dA(`Dict key is not Name; is ${typeof t}`);
      e[t] = g;
    }
  }
  array() {
    const e = [];
    for (; ; ) {
      const g = this.stack.pop();
      if (g === void 0)
        throw new mA("Stack empty when parsing array");
      if (g === uA)
        throw new dA("Got DictBeg while parsing array");
      if (g === DA)
        return e;
      e.push(g);
    }
  }
}
const Lt = /* @__PURE__ */ new Set([
  "DocumentResources",
  "EngineDict",
  "ResourceDict"
]);
function Rt(A, e) {
  return Object.prototype.hasOwnProperty.call(A, e);
}
function Ut(A) {
  let e = !0;
  if (typeof A != "object" || !A)
    return !1;
  for (const g of Lt)
    if (Rt(A, g)) {
      const t = A[g];
      e = e && typeof t == "object" && !Array.isArray(t) && Boolean(t);
    } else
      return !1;
  return e;
}
function Mt(A) {
  const e = new Jt(new Yt(A).tokens()).parse();
  if (Ut(e))
    return e;
  throw new Ig(`Object with keys ${JSON.stringify(Object.keys(e))} is not valid EngineData`);
}
class oe {
  async composite(e = !0, g = !0) {
    const { red: t, green: I, blue: B, alpha: n } = this.imageData, { width: a, height: i } = this, Q = await yt(a, i, t, I, B, n);
    if (e === !0)
      if (g === !0) {
        const E = this.composedOpacity * 255;
        return qA(Q, E);
      } else
        return qA(Q, this.opacity);
    return Q;
  }
}
class mt extends oe {
  constructor(e, g) {
    super(), this.layerFrame = e, this.parent = g, this.type = "Layer";
  }
  get name() {
    return this.layerFrame.layerProperties.name;
  }
  get width() {
    return this.layerFrame.width;
  }
  get height() {
    return this.layerFrame.height;
  }
  get top() {
    return this.layerFrame.layerProperties.top;
  }
  get left() {
    return this.layerFrame.layerProperties.left;
  }
  get opacity() {
    return this.layerFrame.layerProperties.opacity;
  }
  get composedOpacity() {
    return this.parent.composedOpacity * (this.opacity / 255);
  }
  get maskData() {
    return this.layerFrame.layerProperties.maskData;
  }
  async userMask() {
    const e = this.layerFrame.userMask;
    if (!!e)
      return FA(bA(this.maskData), e);
  }
  async realUserMask() {
    const e = this.maskData.realData, g = this.layerFrame.realUserMask;
    if (!(!e || !g))
      return FA(bA(e), g);
  }
  get isHidden() {
    return this.layerFrame.layerProperties.hidden;
  }
  get isTransparencyLocked() {
    return this.layerFrame.layerProperties.transparencyLocked;
  }
  get additionalProperties() {
    return this.layerFrame.layerProperties.additionalLayerProperties;
  }
  get text() {
    return this.layerFrame.layerProperties.text;
  }
  get textProperties() {
    return this.layerFrame.layerProperties.textProperties;
  }
  get imageData() {
    const { red: e, green: g, blue: t, alpha: I } = this.layerFrame;
    return { red: e, green: g, blue: t, alpha: I };
  }
}
function bt(A) {
  return A.type === "Psd" || A.type === "Group";
}
function TA(A) {
  if (!bt(A))
    throw new s(`Node (name = '${A.name}', type: '${A.type}') cannot be a parent node`);
}
class Ht {
  constructor(e, g, t, I, B) {
    this.origin = e, this.left = g, this.top = t, this.right = I, this.bottom = B;
  }
}
function vt(A) {
  if (A.resource.descriptor) {
    const e = A.resource.descriptor.descriptor.items.get("slices");
    if (!(e && e.type === c.List))
      throw new nA('Missing key "slices" in slice descriptor');
    return e.values.reduce((g, t) => {
      if (t.type !== c.Descriptor)
        throw new nA(`Slice list contains a non-descriptor (type: ${t.type})`);
      return g.push(xt(t.descriptor)), g;
    }, []);
  } else
    throw new nA("No slice descriptor in slice resource block");
}
function xt(A) {
  const e = Zt(A), g = W(A, "bounds", c.Descriptor).descriptor, t = W(g, "Top ", c.Integer).value, I = W(g, "Left", c.Integer).value, B = W(g, "Btom", c.Integer).value, n = W(g, "Rght", c.Integer).value;
  return new Ht(e, I, t, n, B);
}
function Zt(A) {
  const e = W(A, "origin", c.Enumerated);
  if (e.enumType !== "ESliceOrigin")
    throw new nA(`Unexpected enum type for slice origin: got "${e.enumType}"`);
  switch (e.enumValue) {
    case "layerGenerated":
      return eA.LayerGenerated;
    case "userGenerated":
      return eA.UserGenerated;
    case "autoGenerated":
      return eA.AutoGenerated;
    default:
      throw new nA(`Unexpected enum value for slice origin: got "${e.enumValue}"`);
  }
}
class re extends oe {
  constructor(e) {
    super(), this.parsingResult = e, this.name = "ROOT", this.type = "Psd", this.opacity = 255, this.composedOpacity = 1, this.children = [], this.layers = [], this.guides = [], this.slices = [], this.icc_profile = void 0, this.globalLightAngle = void 0, this.globalLightAltitude = void 0, this.resolutionInfo = void 0, this.additionalLayerProperties = [], this.buildTreeStructure(), this.additionalLayerProperties = e.layerAndMaskInfo.globalAdditionalLayerInformation;
    for (const g of e.imageResources.resources)
      if (g.resource !== null)
        switch (g.id) {
          case Y.GridAndGuides:
            this.guides = g.resource.guides;
            break;
          case Y.Slices:
            this.slices = vt(g);
            break;
          case Y.ICCProfile:
            this.icc_profile = g.resource;
            break;
          case Y.GlobalLightAltitude:
            this.globalLightAltitude = g.resource;
            break;
          case Y.GlobalLightAngle:
            this.globalLightAngle = g.resource;
            break;
          case Y.ResolutionInfo:
            this.resolutionInfo = g.resource;
            break;
        }
  }
  static parse(e) {
    const g = Nt(e);
    return new re(g);
  }
  get width() {
    return this.parsingResult.fileHeader.width;
  }
  get height() {
    return this.parsingResult.fileHeader.height;
  }
  get channelCount() {
    return this.parsingResult.fileHeader.channelCount;
  }
  get depth() {
    return this.parsingResult.fileHeader.depth;
  }
  get colorMode() {
    return this.parsingResult.fileHeader.colorMode;
  }
  get imageData() {
    const { compression: e, red: g, green: t, blue: I, alpha: B } = this.parsingResult.imageData;
    return {
      red: { compression: e, data: g },
      green: t ? { compression: e, data: t } : void 0,
      blue: I ? { compression: e, data: I } : void 0,
      alpha: B ? { compression: e, data: B } : void 0
    };
  }
  buildTreeStructure() {
    const { groups: e, layers: g, orders: t } = this.parsingResult.layerAndMaskInfo, I = [this];
    let B = 0, n = 0;
    t.forEach((a) => {
      const i = I[I.length - 1];
      switch (a) {
        case "G": {
          const Q = e[B];
          TA(i);
          const E = new ye(Q, i);
          I.push(E), i.children.push(E), B += 1;
          break;
        }
        case "L": {
          const Q = g[n];
          TA(i);
          const E = new mt(Q, i);
          this.layers.push(E), i.children.push(E), n += 1;
          break;
        }
        case "D":
          I.pop();
      }
    }), I.length = 0, this.children.forEach((a) => {
      var i, Q;
      return (Q = (i = a).freeze) === null || Q === void 0 ? void 0 : Q.call(i);
    }), Object.freeze(this.children);
  }
}
export {
  GA as ColorMode,
  NA as Depth,
  ZA as DimensionUnit,
  pA as GuideDirection,
  xA as ResolutionUnit,
  eA as SliceOrigin,
  re as default
};
//# sourceMappingURL=index.js.map
