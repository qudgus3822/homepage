import { useState, useEffect } from 'react';
import { parseJSONC } from '../utils/jsonc-parser';

// 2025-07-28, 김병현 수정 - 페이지별 컨텐츠 타입 정의

// 공통 컨텐츠 타입
interface CommonContent {
  companyName: string;
  loading: string;
  error: string;
  buttons: {
    more: string;
    close: string;
    confirm: string;
    cancel: string;
  };
  messages: {
    success: string;
    networkError: string;
    serverError: string;
  };
}

// 헤더 컨텐츠 타입
interface HeaderContent {
  logo: string;
  logoSubtext: string;
  navigation: Array<{
    id: string;
    label: string;
  }>;
  ctaButtons: {
    download: string;
    downloadLoading: string;
    contact: string;
  };
}

// 홈페이지 컨텐츠 타입
interface HomeContent {
  hero: {
    badge: string;
    title: string;
    titleHighlight: string[];
    subtitle: string;
    subtitleHighlight: string[];
    ctaButtons: {
      primary: string;
      secondary: string;
    };
    achievements: Array<{
      label: string;
      description: string;
    }>;
    dashboard: {
      title: string;
      subtitle: string;
      skillMetrics: Array<{
        label: string;
        value: number;
      }>;
      codeQuality: {
        title: string;
        grade: string;
        gradeLabel: string;
        coverage: string;
        coverageLabel: string;
      };
      growth: {
        title: string;
        period: string;
        percentage: string;
      };
      trustIndicators: Array<{
        rating?: string;
        award?: string;
      }>;
      awardBadge: string;
    };
    scrollIndicator: string;
  };
}

// 바코드 페이지 컨텐츠 타입
interface BarcodeContent {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  cta: {
    title: string;
    button: string;
  };
}

// 코드런 페이지 컨텐츠 타입
interface CodeLearnContent {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  stats: Array<{
    number: string;
    label: string;
  }>;
  cta: {
    title: string;
    button: string;
  };
}

// 코드저니 페이지 컨텐츠 타입
interface CodeJourneyContent {
  title: string;
  subtitle: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  journey: Array<{
    step: number;
    title: string;
    description: string;
  }>;
  cta: {
    title: string;
    button: string;
  };
}

// 2025-07-28, 김병현 수정 - 개별 컨텐츠 로더 함수
async function loadContent<T>(filename: string): Promise<T> {
  try {
    const response = await fetch(`/content/${filename}.jsonc`);
    
    if (!response.ok) {
      throw new Error(`${filename} 파일을 불러올 수 없습니다`);
    }
    
    const jsoncText = await response.text();
    return parseJSONC<T>(jsoncText);
  } catch (error) {
    throw new Error(`${filename} 로딩 에러: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
  }
}

// 2025-07-28, 김병현 수정 - 공통 컨텐츠 훅
export function useCommonContent() {
  const [content, setContent] = useState<CommonContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent<CommonContent>('common')
      .then(setContent)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

// 2025-07-28, 김병현 수정 - 헤더 컨텐츠 훅
export function useHeaderContent() {
  const [content, setContent] = useState<HeaderContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent<HeaderContent>('header')
      .then(setContent)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

// 2025-07-28, 김병현 수정 - 홈페이지 컨텐츠 훅
export function useHomeContent() {
  const [content, setContent] = useState<HomeContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent<HomeContent>('home')
      .then(setContent)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

// 2025-07-28, 김병현 수정 - 바코드 페이지 컨텐츠 훅
export function useBarcodeContent() {
  const [content, setContent] = useState<BarcodeContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent<BarcodeContent>('barcode')
      .then(setContent)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

// 2025-07-28, 김병현 수정 - 코드런 페이지 컨텐츠 훅
export function useCodeLearnContent() {
  const [content, setContent] = useState<CodeLearnContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent<CodeLearnContent>('codelearn')
      .then(setContent)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

// 2025-07-28, 김병현 수정 - 코드저니 페이지 컨텐츠 훅
export function useCodeJourneyContent() {
  const [content, setContent] = useState<CodeJourneyContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContent<CodeJourneyContent>('codejourney')
      .then(setContent)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { content, loading, error };
}

// 타입 내보내기
export type {
  CommonContent,
  HeaderContent,
  HomeContent,
  BarcodeContent,
  CodeLearnContent,
  CodeJourneyContent
};