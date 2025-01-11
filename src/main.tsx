import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./providers/theme-provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import DashboardPage from "@/pages/DashboardPage.tsx";
import StocksPage from "@/pages/StocksPage.tsx";
import ChartsPage from "@/pages/ChartsPage.tsx";
import SettingsPage from "@/pages/SettingsPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<DashboardPage />} />
            <Route path="/stocks" element={<StocksPage />} />
            <Route path="/charts" element={<ChartsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
