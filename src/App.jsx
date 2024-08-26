import React, { Suspense } from 'react';

const Header = React.lazy(() =>
  import('http://localhost:3001/src/components/Header').then(module => ({
    default: module.default,  // Ensure you are using `module.default`
  }))
);

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main>
        <p>This is the main application content.</p>
      </main>
    </div>
  );
};

export default App;
