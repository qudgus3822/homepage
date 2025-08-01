import { useState, useEffect } from 'react';
import { parseJSONC } from '../utils/jsonc-parser';

// 2025-07-28, 김병현 수정 - Content JSON 타입 정의 추가
interface ContentData {
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
  header: {
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
  };
  common: {
    companyName: string;
    loading: string;
    error: string;
  };
}

// 2025-07-28, 김병현 수정 - useContent 훅 생성
export function useContent() {
  const [content, setContent] = useState<ContentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // public 폴더의 content.jsonc 파일 로드 (주석 지원)
        const response = await fetch('/content.jsonc');
        
        if (!response.ok) {
          throw new Error('Content 파일을 불러올 수 없습니다');
        }
        
        // 2025-07-28, 김병현 수정 - JSONC 파싱으로 주석 제거 후 데이터 로드
        const jsoncText = await response.text();
        const data: ContentData = parseJSONC(jsoncText);
        setContent(data);
      } catch (err) {
        console.error('Content 로딩 에러:', err);
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading, error };
}

export type { ContentData };