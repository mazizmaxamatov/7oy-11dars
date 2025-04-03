"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

const Providers = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;












//  "use client";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";

// const Providers = ({ children }) => {
//   return <Provider store={store}>{children}</Provider>;
// };

// export default Providers;