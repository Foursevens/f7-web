declare module 'csstype' {
  interface Properties {
    [index: string]: unknown;
  }
}

declare module '*.png' {
  const filepath: string;
  export default filepath;
}

declare module '*.svg' {
  const ReactComponent: React.FunctionComponent<
    React.SVGAttributes<SVGElement>
  >;
  export default ReactComponent;
}
