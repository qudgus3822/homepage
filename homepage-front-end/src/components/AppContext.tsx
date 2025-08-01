import { createContext, useContext, useState, ReactNode } from "react";

interface AppState {
  currentPage: "home" | "barcode" | "codelearn" | "codejourney";
  isContactModalOpen: boolean;
  isPdfDownloading: boolean;
}

interface AppContextType {
  state: AppState;
  setCurrentPage: (page: AppState["currentPage"]) => void;
  openContactModal: () => void;
  closeContactModal: () => void;
  downloadPdf: (solutionName: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    currentPage: "home",
    isContactModalOpen: false,
    isPdfDownloading: false,
  });

  const setCurrentPage = (page: AppState["currentPage"]) => {
    setState((prev) => ({ ...prev, currentPage: page }));
  };

  const openContactModal = () => {
    setState((prev) => ({ ...prev, isContactModalOpen: true }));
  };

  const closeContactModal = () => {
    setState((prev) => ({ ...prev, isContactModalOpen: false }));
  };

  const downloadPdf = async (solutionName: string) => {
    setState((prev) => ({ ...prev, isPdfDownloading: true }));

    // Simulate PDF generation/download
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create a blob and download
    const pdfContent = `휴넷 모두의코딩 - ${solutionName} 솔루션 소개서`;
    const blob = new Blob([pdfContent], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `휴넷모두의코딩_${solutionName}_솔루션소개서.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setState((prev) => ({ ...prev, isPdfDownloading: false }));
  };

  const value: AppContextType = {
    state,
    setCurrentPage,
    openContactModal,
    closeContactModal,
    downloadPdf,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
