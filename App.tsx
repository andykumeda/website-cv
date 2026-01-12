import React, { useState, useEffect } from 'react';
import resumeData from './resume.json';
import { LandingPage } from './components/LandingPage';
import { CVPage } from './components/CVPage';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToCV = () => {
    window.history.pushState({}, '', '/cv');
    setCurrentPath('/cv');
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo(0, 0);
  };

  // Determine which page to show based on URL path
  // Show CV if: on /cv path OR on cv.kumeda.com subdomain (even at root)
  const isOnCVSubdomain = window.location.hostname === 'cv.kumeda.com';
  const isCV = currentPath === '/cv' || currentPath.startsWith('/cv/') || (isOnCVSubdomain && currentPath === '/');

  if (isCV) {
    return <CVPage onNavigateHome={navigateToHome} />;
  }

  return (
    <LandingPage
      onNavigateToCV={navigateToCV}
      profileData={resumeData.profile}
    />
  );
};

export default App;
