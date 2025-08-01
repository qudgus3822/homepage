import { Badge } from "./ui/badge";
import { Building2, GraduationCap, Users, CheckCircle, Star } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useState, useEffect } from "react";

// 파트너십 데이터 타입 정의 - 2025-07-28, 김병현 수정
interface PartnershipsData {
  sectionTitle: string;
  titleHighlight: string;
  subtitle: string;
  achievements: Array<{
    icon: string;
    label: string;
    color: string;
  }>;
  partnerLogos: Array<{
    name: string;
    category: string;
  }>;
  partnerSectionTitle: string;
  testimonial: {
    badgeText: string;
    company: string;
    role: string;
    content: string;
    metrics: Array<{
      label: string;
      value: string;
    }>;
  };
  recognition: {
    text: string;
  };
}

export function PartnershipsSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: true });
  
  // JSONC 데이터를 위한 상태 관리 - 2025-07-28, 김병현 수정
  const [partnershipsData, setPartnershipsData] = useState<PartnershipsData | null>(null);

  // JSONC 파일에서 데이터 로드 - 2025-07-28, 김병현 수정
  useEffect(() => {
    const loadPartnershipsData = async () => {
      try {
        const response = await fetch('/content/partnerships.jsonc');
        const text = await response.text();
        // JSONC 파싱 (주석 제거)
        const jsonString = text.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
        const data = JSON.parse(jsonString);
        setPartnershipsData(data.partnerships);
      } catch (error) {
        console.error('파트너십 데이터 로딩 실패:', error);
        setPartnershipsData({
          sectionTitle: "함께 성장한",
          titleHighlight: "파트너들",
          subtitle: "다양한 분야의 파트너들과 함께 SW 개발 교육의 새로운 표준을 만들어가고 있습니다",
          achievements: [
            { icon: "CheckCircle", label: "4,000+ 개발자 교육 완료", color: "text-brand-blue" },
            { icon: "Star", label: "평균 만족도 4.8/5.0", color: "text-brand-orange" },
            { icon: "Users", label: "100+ 기업 파트너십", color: "text-brand-success" },
            { icon: "GraduationCap", label: "50+ 대학교 도입", color: "text-brand-red" }
          ],
          partnerLogos: [
            { name: "hunet", category: "주요 파트너" },
            { name: "KT", category: "주요 파트너" },
            { name: "AIVLE", category: "주요 파트너" }
          ],
          partnerSectionTitle: "신뢰받는 파트너사", // 누락된 필드 추가 - 2025-07-28, 김병현 수정
          testimonial: {
            badgeText: "Customer Success Story",
            company: "KT Aivle School",
            role: "교육 운영팀",
            content: "모두의코딩의 CodeLearn 플랫폼 덕분에 수강생들의 학습 효과가 크게 향상되었습니다.",
            metrics: []
          },
          recognition: {
            text: "과학기술의 날 국무총리 표창 수상"
          }
        });
      }
    };

    loadPartnershipsData();
  }, []);

  // 아이콘 매핑 함수 - 2025-07-28, 김병현 수정
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      CheckCircle,
      Star,
      Users,
      GraduationCap
    };
    return iconMap[iconName] || CheckCircle;
  };

  // 데이터 로딩 중일 때
  if (!partnershipsData) {
    return <div className="section-padding bg-white">로딩 중...</div>;
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - JSONC 데이터 사용으로 변경 - 2025-07-28, 김병현 수정 */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl font-bold text-brand-dark-gray mb-4">
            {partnershipsData.sectionTitle} <span className="text-brand-blue">{partnershipsData.titleHighlight}</span>
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            {partnershipsData.subtitle}
          </p>
        </div>

        {/* Achievement Stats - JSONC 데이터 사용으로 변경 - 2025-07-28, 김병현 수정 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {partnershipsData.achievements.map((achievement, index) => {
            const IconComponent = getIconComponent(achievement.icon);
            return (
              <div 
                key={index} 
                className={`text-center group transition-all duration-500 ${
                  sectionVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-brand-light-blue transition-colors duration-300">
                  <IconComponent className={`${achievement.color} w-8 h-8`} />
                </div>
                <p className="text-sm text-gray-600 leading-tight font-medium">
                  {achievement.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Partner Logos Grid - JSONC 데이터 사용으로 변경 - 2025-07-28, 김병현 수정 */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-brand-dark-gray mb-8">{partnershipsData.partnerSectionTitle}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {partnershipsData.partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-brand-light-blue hover:scale-105 transition-all duration-300 group ${
                  sectionVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:bg-brand-blue transition-colors duration-300">
                    <Building2 className="w-6 h-6 text-gray-600 group-hover:text-white" />
                  </div>
                  <div className="text-xs font-semibold text-gray-700 group-hover:text-brand-blue transition-colors duration-300">
                    {partner.name}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {partner.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Testimonial - JSONC 데이터 사용으로 변경 - 2025-07-28, 김병현 수정 */}
        <div className="bg-gradient-to-r from-brand-light-blue to-white rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="bg-brand-blue text-white mb-4">
                {partnershipsData.testimonial.badgeText}
              </Badge>
              
              <blockquote className="text-lg text-brand-dark-gray leading-relaxed mb-6 italic">
                "{partnershipsData.testimonial.content}"
              </blockquote>
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center">
                  <Building2 className="text-white w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-brand-dark-gray">{partnershipsData.testimonial.company}</div>
                  <div className="text-sm text-gray-600">{partnershipsData.testimonial.role}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {partnershipsData.testimonial.metrics.map((metric, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover-lift">
                  <div className="text-2xl font-bold text-brand-blue mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition - JSONC 데이터 사용으로 변경 - 2025-07-28, 김병현 수정 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-orange/10 to-brand-red/10 rounded-full">
            <Star className="text-brand-orange mr-3 w-6 h-6" />
            <span className="font-semibold text-brand-dark-gray">
              {partnershipsData.recognition.text}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}