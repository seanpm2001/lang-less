import {styleTags, tags as t} from "@lezer/highlight"

export const lessHighlighting = styleTags({
  "import charset namespace keyframes media supports when": t.definitionKeyword,
  "from to selector": t.keyword,
  NamespaceName: t.namespace,
  KeyframeName: t.labelName,
  TagName: t.tagName,
  ClassName: t.className,
  PseudoClassName: t.constant(t.className),
  IdName: t.labelName,
  "FeatureName PropertyName PropertyVariable": t.propertyName,
  AttributeName: t.attributeName,
  NumberLiteral: t.number,
  KeywordQuery: t.keyword,
  UnaryQueryOp: t.operatorKeyword,
  "CallTag ValueName": t.atom,
  VariableName: t.variableName,
  "AtKeyword Interpolation": t.special(t.variableName),
  Callee: t.operatorKeyword,
  Unit: t.unit,
  "UniversalSelector NestingSelector": t.definitionOperator,
  MatchOp: t.compareOperator,
  "ChildOp SiblingOp, LogicOp": t.logicOperator,
  BinOp: t.arithmeticOperator,
  Important: t.modifier,
  "Comment LineComment": t.blockComment,
  ColorLiteral: t.color,
  "ParenthesizedContent StringLiteral": t.string,
  Escape: t.special(t.string),
  ": ...": t.punctuation,
  "PseudoOp #": t.derefOperator,
  "; ,": t.separator,
  "( )": t.paren,
  "[ ]": t.squareBracket,
  "{ }": t.brace
})
