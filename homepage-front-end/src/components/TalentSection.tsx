import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { TrendingUp, Zap, Target, MessageCircle, Star, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

export function TalentSection() {
  const { elementRef: sectionRef, isVisible: sectionVisible } = useScrollAnimation({ triggerOnce: true });

  const talents = [
    {
      icon: TrendingUp,
      title: "성장 마인드셋",
      subtitle: "Growth mindset",
      description: "새로운 경험을 통해 지금보다 한단계 성장하려는 분",
      color: "text-brand-blue",
      bgColor: "bg-brand-light-blue"
    },
    {
      icon: Zap,
      title: "학습 민첩성",
      subtitle: "Learning agility",
      description: "빠르게 배워 바로 적용해 보는 것을 좋아하는 분",
      color: "text-brand-orange",
      bgColor: "bg-orange-50"
    },
    {
      icon: Target,
      title: "주도성과 책임감",
      subtitle: "Initiative & Responsibility",
      description: "문제에 뒷짐지지 않고, 팔 걷고 나서 문제를 해결하려는 분",
      color: "text-brand-red",
      bgColor: "bg-brand-light-red"
    },
    {
      icon: MessageCircle,
      title: "협업과 소통능력",
      subtitle: "Communication & Collaboration",
      description: "상대의 얘기를 경청하고, 효과적으로 말하고 쓰는 분",
      color: "text-brand-success",
      bgColor: "bg-green-50"
    },
    {
      icon: Star,
      title: "스스로 동기부여",
      subtitle: "Self-motivate",
      description: "더 좋은 삶을 위해 '지금, 여기'에 최선을 다하는 분",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section id="careers" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl font-bold text-brand-dark-gray mb-4">
            우리는 이런 분들과 <span className="text-brand-blue">일하고 싶습니다</span>
          </h2>
          <p className="text-large text-gray-600 max-w-3xl mx-auto">
            함께 성장하며 더 나은 내일을 만들어갈 동료를 찾습니다
          </p>
        </div>

        {/* Talent Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {talents.map((talent, index) => (
            <Card 
              key={index} 
              className={`border-0 shadow-lg hover-lift transition-all duration-500 group ${
                sectionVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${talent.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <talent.icon className={`${talent.color} w-8 h-8`} />
                </div>
                
                <h3 className="text-lg font-bold text-brand-dark-gray mb-2">
                  {talent.title}
                </h3>
                
                <p className={`text-xs ${talent.color} font-medium mb-4`}>
                  {talent.subtitle}
                </p>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {talent.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-red rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            팀 모두의코딩과 함께하세요
          </h3>
          
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            SW 개발 교육의 미래를 함께 만들어갈 열정적인 동료를 기다립니다. 
            당신의 성장이 곧 우리의 성장입니다.
          </p>

          <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 group">
            팀 모두의코딩과 함께하기
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}