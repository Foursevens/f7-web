declare module '*.png' {
  const filepath: string;
  export default filepath;
}

declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<React.SVGAttributes<
    SVGElement
  >>;
  export default ReactComponent;
}
