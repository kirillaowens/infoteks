import { RouterProvider } from "./providers/RouterProvider";
import { QueryProvider } from "./providers/QueryProvider";

export const App = () => {
  console.log("🎯 CRA ENV TEST:");
  console.log("API_KEY:", process.env.REACT_APP_API_KEY);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("ALL:", process.env);
  return (
    <QueryProvider>
      <RouterProvider />
    </QueryProvider>
  );
};
