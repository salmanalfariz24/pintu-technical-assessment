declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const png: string;
  export default png;
}

declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}
