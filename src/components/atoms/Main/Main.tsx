import type { ReactNode } from 'react';

import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface MainPropsType {
  children: ReactNode;
  className?: string;
  padding?: 'normal' | 'wide' | 'dense';
}

const mainVariants = cva(['flex-1'], {
  variants: {
    padding: {
      dense: ['px-2', 'md:px-4'],
      normal: ['px-2', 'md:px-12'],
      wide: ['px-24'],
    },
  },
  defaultVariants: {
    padding: 'normal',
  },
});

function Main(props: MainPropsType) {
  const { children, padding, className } = props;
  const classes = mainVariants({ padding });
  return <main className={cn(classes, className)}>{children}</main>;
}

export default Main;
