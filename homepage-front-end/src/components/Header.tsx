import { Button } from "./ui/button";
import { Menu, X, Download, Loader2 } from "lucide-react";
import { useState } from "react";
import { useApp } from "./AppContext";
import { useHeaderContent } from "../hooks/usePageContent";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, setCurrentPage, openContactModal, downloadPdf } = useApp();
  const { content } = useHeaderContent();

  const handlePdfDownload = async () => {
    await downloadPdf('전체솔루션');
  };

  // 2025-07-28, 김병현 수정 - header.jsonc에서 네비게이션 데이터 로드
  const navItems = content?.navigation.map(item => ({
    ...item,
    onClick: () => {
      if (item.id === 'contact') {
        openContactModal();
      } else {
        setCurrentPage(item.id as any);
      }
      setIsMenuOpen(false);
    }
  })) || [];

  const isActive = (pageId: string) => {
    if (pageId === 'home' && state.currentPage === 'home') return true;
    if (pageId === state.currentPage) return true;
    return false;
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isMenuOpen ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-xl border-b border-gray-200'
    }`}>
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex h-16 items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
          >
            <div className="flex items-center space-x-1 transition-transform duration-200 group-hover:scale-105">
              <span className="text-2xl font-bold text-moducoding-blue transition-colors duration-200 group-hover:opacity-80">
                {":"}
              </span>
              <span className="text-2xl font-bold text-moducoding-blue transition-colors duration-200 group-hover:opacity-80">
                {"}"}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold text-gray-900">{content?.logo || '모두의코딩'}</span>
              <span className="text-sm text-moducoding-red font-medium bg-red-50 px-2 py-0.5 rounded-full">
                {content?.logoSubtext || 'hunet'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={item.onClick}
                className={`
                  text-gray-700 hover:text-moducoding-blue transition-colors duration-200 
                  font-semibold relative group text-base
                  ${isActive(item.id) ? 'text-moducoding-blue' : ''}
                `}
              >
                {item.label}
                <span 
                  className={`
                    absolute -bottom-1 left-0 h-0.5 bg-moducoding-blue transition-all duration-200 
                    ${isActive(item.id) ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                ></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button
              variant="outline"
              onClick={handlePdfDownload}
              disabled={state.isPdfDownloading}
              className="
                border-gray-200 text-gray-900 hover:bg-gray-50 
                transition-all duration-200 hover:scale-105 rounded-lg
                font-semibold text-base h-11 px-6
              "
            >
              {state.isPdfDownloading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <span className="font-semibold text-gray-900">다운로드 중...</span>
                </>
              ) : (
                <>
                  <Download size={16} className="mr-2" />
                  <span className="font-semibold text-gray-900">{content?.ctaButtons.download || '솔루션 소개서'}</span>
                </>
              )}
            </Button>
            <Button
              onClick={openContactModal}
              className="
                bg-moducoding-blue hover:opacity-90 text-white transition-all duration-200 
                hover:scale-105 shadow-sm hover:shadow-md rounded-lg
                font-semibold text-base h-11 px-6
              "
            >
              <span className="font-semibold text-white">{content?.ctaButtons.contact || '도입문의'}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="
                transition-transform duration-200 hover:scale-110 
                h-10 w-10 p-0 hover:bg-gray-100 rounded-lg
              "
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden animate-slide-up border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.onClick}
                  className={`
                    w-full text-left py-3 px-4 text-gray-700 hover:text-moducoding-blue 
                    hover:bg-gray-50 rounded-lg transition-colors duration-200 font-semibold text-base
                    ${isActive(item.id) ? 'text-moducoding-blue bg-blue-50' : ''}
                  `}
                >
                  {item.label}
                </button>
              ))}
              
              <div className="pt-4 space-y-3 border-t border-gray-200">
                <Button
                  variant="outline"
                  onClick={handlePdfDownload}
                  disabled={state.isPdfDownloading}
                  className="
                    w-full border-gray-200 text-gray-900 hover:bg-gray-50 
                    rounded-lg font-semibold text-base h-12
                  "
                >
                  {state.isPdfDownloading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      <span className="font-semibold text-gray-900">{content?.ctaButtons.downloadLoading || '다운로드 중...'}</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} className="mr-2" />
                      <span className="font-semibold text-gray-900">{content?.ctaButtons.download || '솔루션 소개서'}</span>
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => { openContactModal(); setIsMenuOpen(false); }}
                  className="
                    w-full bg-moducoding-blue hover:opacity-90 text-white 
                    font-semibold text-base h-12 rounded-lg
                  "
                >
                  <span className="font-semibold text-white">{content?.ctaButtons.contact || '도입문의'}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}