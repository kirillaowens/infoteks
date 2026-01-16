import { RouterProvider } from "./providers/RouterProvider";
import { QueryProvider } from "./providers/QueryProvider";

export const App = () => {
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
};
