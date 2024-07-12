import type { ReactNode } from 'react';

interface AppWrapperPropsType {
  children: ReactNode;
}

function AppWrapper(props: AppWrapperPropsType) {
  const { children } = props;
  return <div className="relative flex min-h-screen flex-col bg-background">{children}</div>;
}

export default AppWrapper;
