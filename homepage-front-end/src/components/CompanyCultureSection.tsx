import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Award, Building2, Users2, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export function CompanyCultureSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: true });

  const achievements = [
    {
      icon: Building2,
      title: "2016년 설립",
      subtitle: "9년의 검증된 경험",
      description: "안정적이고 지속가능한 성장"
    },
    {
      icon: Users2,
      title: "4,000+ 명",
      subtitle: "교육 완료",
      description: "검증된 교육 노하우"
    },
    {
      icon: Award,
      title: "과학기술의 날",
      subtitle: "국무총리 표창",
      description: "국가적 인정과 신뢰"
    },
    {
      icon: TrendingUp,
      title: "KT Aivle School",
      subtitle: "3년 연속 파트너십",
      description: "지속적인 혁신과 발전"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <Badge className="bg-brand-light-blue text-brand-blue mb-4">
            Company Trust
          </Badge>
          <h2 className="text-4xl font-bold text-brand-dark-gray mb-4">
            9년간 성장해온 <span className="text-brand-blue">든든한 파트너</span>
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            깊이 있는 전문성과 지속적인 혁신으로 함께 만들어가는 성장 이야기
          </p>
        </div>

        {/* Company Stats & Achievements */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover-lift transition-all duration-500 ${
                sectionVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-brand-light-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="text-brand-blue w-8 h-8" />
                </div>
                <div className="font-bold text-brand-dark-gray mb-1 text-lg">{achievement.title}</div>
                <div className="font-semibold text-brand-blue text-sm mb-2">{achievement.subtitle}</div>
                <div className="text-xs text-gray-600">{achievement.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Highlights */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-red text-white rounded-3xl p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">휴넷 그룹의 안정적인 기반</h3>
            <p className="text-lg opacity-90 leading-relaxed">
              대한민국 대표 교육 전문 기업 휴넷의 계열사로서, 
              안정적인 기반 위에서 SW 개발 교육 분야의 전문성을 발휘하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}