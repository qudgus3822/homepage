import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BarChart3, BookOpen, MapPin, ArrowRight, Target, Users, Zap, Plus, Sparkles, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import { useApp } from "./AppContext";

export function SolutionsSection() {
  const { setCurrentPage } = useApp();
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: ecosystemRef, isVisible: ecosystemVisible } = useScrollAnimation({ triggerOnce: true });

  const solutions = [
    {
      id: "barcode",
      icon: BarChart3,
      title: "BARCODE",
      subtitle: "SW개발역량 검진 & 생산성 모니터링",
      description: "종합건강검진처럼 SW개발역량을 확인하고, 실시간 생산성 모니터링으로 개발 효율성을 높입니다",
      features: [
        "SW개발역량 종합 검진",
        "기업 맞춤형 평가센터",
        "NEW: 스텔스 생산성 모니터링",
        "NEW: 정량적 개발 지표 측정"
      ],
      target: "B2B",
      color: "barcode",
      bgGradient: "bg-barcode-gradient",
      lightBg: "bg-barcode-light",
      textColor: "text-barcode",
      hasPlus: true,
      stats: { accuracy: "95%", companies: "100+" },
      onClick: () => setCurrentPage('barcode')
    },
    {
      id: "codelearn",
      icon: BookOpen,
      title: "CodeLearn",
      subtitle: "양방향 코딩실습 & AI교육 솔루션",
      description: "오프라인 강의장 교육에 준하는 실시간 코드코칭과 AI 기반 개인맞춤 교육으로 학습 효과를 극대화합니다",
      features: [
        "실시간 양방향 코딩 실습",
        "교사-학생 상호작용 플랫폼",
        "NEW: AI교사 보조 시스템",
        "NEW: 개인화 학습 경로 & 코칭모드"
      ],
      target: "B2G",
      color: "codelearn",
      bgGradient: "bg-codelearn-gradient",
      lightBg: "bg-codelearn-light",
      textColor: "text-codelearn",
      hasPlus: true,
      stats: { satisfaction: "4.8/5", partner: "KT Aivle" },
      onClick: () => setCurrentPage('codelearn')
    },
    {
      id: "codejourney",
      icon: MapPin,
      title: "CodeJourney",
      subtitle: "자기주도 코딩학습 솔루션",
      description: "지방대학생의 SW개발 취업경쟁력 향상을 위한 커뮤니티 기반 맞춤 성장 여정 솔루션입니다",
      features: [
        "자기주도 맞춤 학습",
        "커뮤니티 기반 피어러닝",
        "개인별 성장 로드맵",
        "취업 경쟁력 강화 프로그램"
      ],
      target: "B2E",
      color: "codejourney",
      bgGradient: "bg-codejourney-gradient",
      lightBg: "bg-codejourney-light",
      textColor: "text-codejourney",
      hasPlus: false,
      stats: { completion: "78%", universities: "50+" },
      onClick: () => setCurrentPage('codejourney')
    }
  ];

  const ecosystem = [
    {
      icon: Target,
      title: "정확한 진단",
      description: "개발자의 현재 역량을 정확히 측정하고 분석합니다",
      color: "text-barcode",
      bgColor: "bg-barcode-light"
    },
    {
      icon: Zap,
      title: "효과적인 학습",
      description: "맞춤형 커리큘럼으로 빠르고 효과적인 성장을 지원합니다",
      color: "text-codelearn",
      bgColor: "bg-codelearn-light"
    },
    {
      icon: Users,
      title: "지속적인 성장",
      description: "커뮤니티와 함께하는 지속가능한 개발자 성장 생태계",
      color: "text-codejourney",
      bgColor: "bg-codejourney-light"
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-white">
      <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="text-gray-900 mb-6">
            3가지 핵심 솔루션으로 완성하는<br />
            <span className="bg-gradient-to-r from-moducoding-blue to-moducoding-purple bg-clip-text text-transparent">
              SW개발 생태계
            </span>
          </h2>
          <p className="text-large text-gray-700 max-w-4xl mx-auto leading-relaxed">
            검진부터 교육, 성장까지 - 개발자의 전체 여정을 지원합니다
          </p>
        </div>

        {/* Solutions Cards - 상위 마진 추가로 Plus 배지가 잘리지 않도록 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{ marginTop: '32px' }}>
          {solutions.map((solution, index) => (
            <div key={solution.id} className="relative" style={{ margin: '0 auto' }}>
              {/* Plus 배지를 카드 외부에 배치 */}
              {solution.hasPlus && (
                <div className="absolute -top-4 -right-4 z-20">
                  <Badge className="bg-moducoding-red text-white shadow-lg animate-pulse rounded-lg font-semibold px-3 py-1">
                    <Plus size={12} className="mr-1" />
                    Plus 기능
                  </Badge>
                </div>
              )}
              
              <Card 
                className={`
                  relative group hover-lift border-gray-200 bg-white 
                  transition-all duration-500 rounded-2xl shadow-sm hover:shadow-xl
                  ${sectionVisible ? 'animate-slide-up' : 'opacity-0'}
                `}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  width: '380px',
                  height: '460px'
                }}
              >
                {/* Background Pattern */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${solution.lightBg} rounded-full -translate-y-8 translate-x-8 opacity-50 group-hover:scale-150 transition-transform duration-700`}></div>
                
                <CardHeader className="pb-4 relative z-10 flex flex-col items-center">
                  {/* Icon Container - Perfect 64px positioning */}
                  <div 
                    className="flex items-center justify-center mb-6"
                    style={{ width: '80px', height: '80px', marginTop: '32px' }}
                  >
                    <div className={`w-16 h-16 ${solution.lightBg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm border border-gray-200`}>
                      <solution.icon className={`${solution.textColor} w-8 h-8`} style={{ width: '32px', height: '32px' }} />
                    </div>
                  </div>
                  
                  {/* Title and Badge */}
                  <div className="flex items-center justify-between mb-3 w-full">
                    <CardTitle className="text-2xl font-bold text-gray-900 group-hover:scale-105 transition-transform duration-300">
                      {solution.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs font-semibold bg-gray-100 text-gray-700">
                      {solution.target}
                    </Badge>
                  </div>
                  
                  {/* Subtitle */}
                  <CardDescription className="text-lg font-semibold text-gray-700 mb-4 text-center">
                    {solution.subtitle}
                  </CardDescription>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base mb-6 text-center">
                    {solution.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 p-3 bg-gray-50 rounded-xl w-full">
                    {Object.entries(solution.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`font-bold text-lg ${solution.textColor}`}>{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0 relative z-10 px-6">
                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 group/feature">
                        <CheckCircle size={16} className={`${solution.textColor} mt-0.5 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-200`} />
                        <span className={`text-sm ${feature.includes('NEW:') ? 'font-semibold text-gray-900' : 'text-gray-600'} leading-relaxed`}>
                          {feature.includes('NEW:') && (
                            <span className="inline-flex items-center text-moducoding-orange mr-2">
                              <Sparkles size={12} className="mr-1" />
                              NEW:
                            </span>
                          )}
                          {feature.replace('NEW: ', '')}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    onClick={solution.onClick}
                    className={`
                      w-full justify-between group/btn ${solution.bgGradient} text-white 
                      hover:opacity-90 transition-all duration-300 hover:scale-105 
                      rounded-xl font-semibold text-base shadow-lg
                    `}
                  >
                    <span className="font-semibold text-white">자세히 알아보기</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Ecosystem Section - 레이아웃 개선 */}
        <div 
          ref={ecosystemRef}
          className={`relative bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 transition-all duration-700 ${
            ecosystemVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ marginTop: '80px' }} // 명시적인 상단 마진으로 겹침 방지
        >
          {/* 제목 섹션 - 고정 높이와 적절한 여백 */}
          <div className="text-center relative z-10" style={{ marginBottom: '48px' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              완성된 개발자 성장 생태계
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto text-large leading-relaxed">
              각 솔루션이 유기적으로 연결되어 개발자의 전체 여정을 완벽하게 지원합니다
            </p>
          </div>

          {/* 카드 그리드 - 적절한 간격과 명확한 배치 */}
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {ecosystem.map((item, index) => (
              <div 
                key={index} 
                className={`
                  text-center group hover-lift bg-white rounded-2xl shadow-sm border border-gray-200
                  transition-all duration-500
                  ${ecosystemVisible ? 'animate-slide-up' : 'opacity-0'}
                `}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  padding: '32px',
                  minHeight: '280px'
                }}
              >
                {/* 아이콘 컨테이너 */}
                <div className="flex justify-center mb-6">
                  <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-sm border border-gray-200`}>
                    <item.icon className={`${item.color} w-8 h-8`} />
                  </div>
                </div>
                
                {/* 제목 */}
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.title}
                </h4>
                
                {/* 설명 */}
                <p className="text-gray-600 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}