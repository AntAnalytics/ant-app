import ModernHeader from 'components/headers/ModernHeader';
import ModernSideBar from 'components/headers/ModernSideBar';
import { FunctionComponent, useState } from 'react';

interface ModernLayoutProps {}

const ModernLayout: FunctionComponent<ModernLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <ModernHeader />
      <ModernSideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}>
        {children}
      </ModernSideBar>
    </>
  );
};

export default ModernLayout;
