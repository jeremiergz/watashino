import Anchor from '@/components/common/Anchor';
import Conditional from '@/components/common/Conditional';
import useSiteMetadata from '@/components/hooks/data/useSiteMetadata';
import clsx from 'clsx';

type Content = 'whereami' | 'whoami';

const navItems: { label: Content }[] = [{ label: 'whoami' }, { label: 'whereami' }];

function Header({ current, onCurrentChange }: HeaderProps): JSX.Element {
  const { repositoryUrl, version } = useSiteMetadata();

  const sourceCodeUrl = `${repositoryUrl}/tree/${version}`;

  const handleCurrentChange = (newCurrent: Content) => () => {
    if (typeof onCurrentChange === 'function' && newCurrent !== current) {
      onCurrentChange(newCurrent);
    }
  };

  return (
    <header className="fixed top-0 z-50 flex h-12 w-full max-w-5xl bg-gray-900 md:relative md:h-16 md:justify-end md:bg-transparent">
      <nav className="flex w-full justify-between font-semibold">
        <div className="flex items-center">
          <Anchor
            aria-label={`Go to ${sourceCodeUrl}`}
            className="flex flex-col items-center px-4 py-1 leading-none"
            external
            href={sourceCodeUrl}
          >
            <div className="text-2xs text-primary-light">v{version}</div>
          </Anchor>
        </div>
        <div className="flex">
          {navItems.map((item, index) => {
            const labelStart = item.label.substring(0, item.label.length - 3);
            const labelEnd = item.label.substring(item.label.length - 3, item.label.length);

            return (
              <div className={clsx('relative flex items-center', index !== 0 && 'ml-10')} key={item.label}>
                <Conditional
                  condition={item.label === current}
                  wrapper={children => (
                    <>
                      <span className="absolute text-sm font-bold text-accent">&gt;</span>
                      {children}
                    </>
                  )}
                >
                  <button
                    aria-label={`Go to ${item.label}`}
                    className="cursor-pointer rounded py-1 px-4 transition hover:shadow-md hover:brightness-90"
                    onClick={handleCurrentChange(item.label)}
                  >
                    <span className="text-text">{labelStart}</span>
                    <span className="text-accent">{labelEnd}</span>
                  </button>
                </Conditional>
              </div>
            );
          })}
        </div>
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
