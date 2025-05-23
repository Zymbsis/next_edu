import SideNav from '@app/ui/dashboard/sidenav';
import { PropsWithChildren } from 'react';

// type Props = ComponentPropsWithRef<'div'>;

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex flex-col h-screen md:flex-row md:overflow-hidden'>
      <div className='w-full flex-none md:w-64'></div>
      <SideNav />
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  );
};

export default Layout;
