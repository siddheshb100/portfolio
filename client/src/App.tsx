import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Terminal from "@/pages/terminal";
import NotFound from "@/pages/not-found";

// Get the base path for GitHub Pages
const basePath = import.meta.env.BASE_URL || "/";

function AppRouter() {
  return (
    <Router base={basePath}>
      <Switch>
        <Route path="/" component={Terminal}/>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppRouter />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
