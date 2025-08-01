import { Button } from "./ui/button";
import {
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Code2,
  Zap,
  Monitor,
  Brain,
} from "lucide-react";
import { useScrollAnimation, useCountUp } from "./hooks/useScrollAnimation";
import { useApp } from "./AppContext";
import { useHomeContent } from "../hooks/usePageContent";
import { useEffect, useState } from "react";

export function HeroSection() {
  const { openContactModal } = useApp();
  const { content } = useHomeContent();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({
    triggerOnce: true,
  });
  const { elementRef: statsRef } = useCountUp(4000);
  const [typewriterVisible, setTypewriterVisible] = useState(false);

  useEffect(() => {
    if (heroVisible) {
      setTimeout(() => setTypewriterVisible(true), 500);
    }
  }, [heroVisible]);

  // 2025-07-28, 김병현 수정 - home.jsonc에서 achievements 데이터 로드
  const achievements = content?.hero.achievements.map((achievement, index) => ({
    icon: [Star, CheckCircle, TrendingUp][index] || Star,
    label: achievement.label,
    description: achievement.description,
  })) || [
    { icon: Star, label: "4.8/5.0", description: "고객 만족도" },
    { icon: CheckCircle, label: "4,000+", description: "교육 완료" },
    { icon: TrendingUp, label: "9년", description: "검증된 경험" },
  ];

  const floatingElements = [
    {
      text: "const developer = {",
      x: "10%",
      y: "15%",
      delay: "0s",
      duration: "8s",
    },
    {
      text: "skills: ['JavaScript', 'React']",
      x: "80%",
      y: "20%",
      delay: "2s",
      duration: "10s",
    },
    {
      text: "function assessSkills() {",
      x: "15%",
      y: "70%",
      delay: "4s",
      duration: "9s",
    },
    {
      text: "return progress.map(skill => skill.level)",
      x: "75%",
      y: "75%",
      delay: "1s",
      duration: "11s",
    },
    { text: "}", x: "20%", y: "85%", delay: "3s", duration: "7s" },
    { text: "0101010011", x: "5%", y: "40%", delay: "5s", duration: "12s" },
    { text: "1100101010", x: "85%", y: "45%", delay: "6s", duration: "8s" },
    { text: "{ }", x: "90%", y: "10%", delay: "2.5s", duration: "9s" },
    { text: "[ ]", x: "25%", y: "25%", delay: "4.5s", duration: "10s" },
    { text: "=>", x: "70%", y: "60%", delay: "1.5s", duration: "11s" },
  ];

  // 2025-07-28, 김병현 수정 - home.jsonc에서 skillMetrics 데이터 로드
  const skillMetrics = content?.hero.dashboard.skillMetrics.map((skill, index) => ({
    label: skill.label,
    value: skill.value,
    color: ["text-barcode", "text-codelearn", "text-codejourney", "text-apple-green"][index] || "text-barcode",
    bgColor: ["bg-barcode", "bg-codelearn", "bg-codejourney", "bg-apple-green"][index] || "bg-barcode",
  })) || [
    {
      label: "코딩 역량",
      value: 87,
      color: "text-barcode",
      bgColor: "bg-barcode",
    },
    {
      label: "문제 해결",
      value: 92,
      color: "text-codelearn",
      bgColor: "bg-codelearn",
    },
    {
      label: "협업 능력",
      value: 78,
      color: "text-codejourney",
      bgColor: "bg-codejourney",
    },
    {
      label: "학습 진도",
      value: 95,
      color: "text-apple-green",
      bgColor: "bg-apple-green",
    },
  ];

  return (
    <section className="relative section-padding bg-gray-50 overflow-hidden min-h-screen flex items-center">
      {/* Animated Coding Background */}
      <div className="absolute inset-0 opacity-20">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className="absolute text-xs font-mono text-gray-400 animate-float"
            style={{
              left: element.x,
              top: element.y,
              animationDelay: element.delay,
              animationDuration: element.duration,
            }}
          >
            {element.text}
          </div>
        ))}

        {/* Particle System */}
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-apple-blue rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-3 h-3 bg-apple-green rounded-full animate-ping"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-30 left-1/4 w-2 h-2 bg-apple-orange rounded-full animate-ping"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute top-60 right-1/3 w-2 h-2 bg-apple-purple rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Developer Icons */}
        <div className="absolute top-32 left-20 opacity-30">
          <Code2
            className="w-6 h-6 text-apple-blue animate-float"
            style={{ animationDelay: "0s" }}
          />
        </div>
        <div className="absolute bottom-40 right-32 opacity-30">
          <Monitor
            className="w-6 h-6 text-apple-green animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="absolute top-1/2 left-32 opacity-30">
          <Brain
            className="w-6 h-6 text-apple-purple animate-float"
            style={{ animationDelay: "4s" }}
          />
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div
            ref={heroRef}
            className={`lg:col-span-7 text-center lg:text-left transition-all duration-700 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-700 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-apple-green rounded-full mr-3 animate-pulse"></div>
              <span className="font-semibold text-sm">
                {content?.hero.badge || '2016년부터 9년간 검증된 솔루션'}
              </span>
            </div>

            {/* Main Headline with Typewriter Effect */}
            <h1
              className={`text-gray-900 mb-6 leading-tight ${
                typewriterVisible ? "typewriter" : ""
              }`}
            >
              {content?.hero.title || 'SW개발자의 모든 여정을 함께합니다'}
            </h1>

            {/* Subtext */}
            <div className="text-large text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {content?.hero.subtitle || '2016년부터 9년간, 코딩교육부터 SW개발역량진단까지 혁신적인 솔루션으로 개발자 성장을 지원해온 휴넷 모두의코딩입니다'}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("solutions")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="
                  bg-apple-blue hover:opacity-90 text-white group shadow-lg hover:shadow-xl 
                  transition-all duration-300 hover:scale-105 rounded-lg h-12 px-8 font-semibold text-base
                "
              >
                <span className="font-semibold text-white">
                  {content?.hero.ctaButtons.primary || '솔루션 둘러보기'}
                </span>
                <ArrowRight
                  size={20}
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openContactModal}
                className="
                  border-apple-blue text-apple-blue hover:bg-blue-50 transition-all duration-300 
                  hover:scale-105 shadow-sm rounded-lg h-12 px-8 font-semibold text-base
                "
              >
                <span className="font-semibold text-apple-blue">
                  {content?.hero.ctaButtons.secondary || '무료 상담 신청'}
                </span>
              </Button>
            </div>

            {/* Achievement Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center lg:text-left group">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <achievement.icon className="w-5 h-5 text-apple-blue mr-2" />
                    <div className="font-bold text-xl text-gray-900 group-hover:scale-110 transition-transform duration-300">
                      {achievement.label}
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Central Animated Dashboard */}
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <div className="relative">
              {/* Main Dashboard Container */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200 hover-lift">
                <div className="space-y-6">
                  {/* Dashboard Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {content?.hero.dashboard.title || '실시간 개발자 역량 대시보드'}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {content?.hero.dashboard.subtitle || 'AI 기반 종합 분석 결과'}
                    </p>
                  </div>

                  {/* Skill Assessment Progress */}
                  <div className="space-y-4">
                    {skillMetrics.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-gray-700">
                            {skill.label}
                          </span>
                          <span className={`text-sm font-bold ${skill.color}`}>
                            {skill.value}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all duration-1000 ease-out ${skill.bgColor}`}
                            style={{
                              width: heroVisible ? `${skill.value}%` : "0%",
                              transitionDelay: `${index * 0.2}s`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Real-time Code Quality Metrics */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      실시간 코드 품질
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-apple-green mb-1">
                          A+
                        </div>
                        <div className="text-xs text-gray-600">코드 품질</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-apple-blue mb-1">
                          92%
                        </div>
                        <div className="text-xs text-gray-600">
                          테스트 커버리지
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Growth Trajectory */}
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-apple-blue/10 to-apple-green/10 rounded-xl">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        성장 추세
                      </div>
                      <div className="text-xs text-gray-600">지난 30일</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-5 h-5 text-apple-green" />
                      <span className="font-bold text-apple-green">+15%</span>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Star
                        size={16}
                        className="text-apple-orange fill-current"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        4.8/5.0
                      </span>
                    </div>
                    <div className="w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle size={16} className="text-apple-green" />
                      <span className="text-sm font-medium text-gray-700">
                        국무총리 표창
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Action Elements */}
              <div className="absolute -top-4 -right-4 bg-apple-green/10 rounded-full p-4 animate-float">
                <CheckCircle className="w-6 h-6 text-apple-green" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-apple-blue/10 rounded-full p-4 animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Code2 className="w-6 h-6 text-apple-blue" />
              </div>
              <div
                className="absolute top-1/2 -right-6 bg-apple-purple/10 rounded-full p-3 animate-float"
                style={{ animationDelay: "1s" }}
              >
                <Zap className="w-5 h-5 text-apple-purple" />
              </div>

              {/* Award Badge */}
              <div
                className="absolute -bottom-6 right-4 bg-white rounded-full px-4 py-2 text-xs font-semibold text-apple-orange shadow-lg border border-gray-200 animate-float"
                style={{ animationDelay: "3s" }}
              >
                🏆 과학기술의 날 표창
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-sm text-gray-400 mb-2">더 많은 정보 보기</div>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
