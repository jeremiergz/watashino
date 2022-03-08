import Conditional from '@/components/common/Conditional';
import clsx from 'clsx';
import React from 'react';

type Content = 'whereami' | 'whoami';

const navItems: { label: Content }[] = [{ label: 'whoami' }, { label: 'whereami' }];

function Header({ current, onCurrentChange }: HeaderProps): JSX.Element {
  const handleCurrentChange = (newCurrent: Content) => () => {
    if (typeof onCurrentChange === 'function' && newCurrent !== current) {
      onCurrentChange(newCurrent);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-12 w-full max-w-5xl justify-center bg-gray-900 md:relative md:h-16 md:justify-end md:bg-transparent">
      <nav className="flex font-semibold">
        {navItems.map((item, index) => {
          const labelStart = item.label.substring(0, item.label.length - 3);
          const labelEnd = item.label.substring(item.label.length - 3, item.label.length);

          return (
            <div className={clsx('relative flex items-center', index !== 0 && 'ml-10')} key={item.label}>
              <Conditional
                condition={item.label === current}
                wrapper={children => (
                  <>
                    <span className="absolute text-sm font-bold text-cyan-600">&gt;</span>
                    {children}
                  </>
                )}
              >
                <button
                  aria-label={`Go to ${item.label}`}
                  className="cursor-pointer rounded py-1 px-4 transition hover:shadow-md hover:brightness-90"
                  onClick={handleCurrentChange(item.label)}
                >
                  <span>{labelStart}</span>
                  <span className="text-cyan-600">{labelEnd}</span>
                </button>
              </Conditional>
            </div>
          );
        })}
      </nav>
    </header>
  );
}

export type { Content };
export type HeaderProps = {
  current: Content;
  onCurrentChange?: (value: Content) => void;
};
export default Header;
