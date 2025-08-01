import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ArrowRight,
  BookOpen,
  Users,
  Zap,
  CheckCircle,
  Star,
  MessageSquare,
  Monitor,
  Brain,
  Target,
  Download,
  Sparkles,
  Code2,
  Bot,
  Globe,
  BarChart3,
  ChevronLeft,
  Cpu,
  Database,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useApp } from "../AppContext";

export function CodeLearnPage() {
  const { setCurrentPage, openContactModal, downloadPdf } =
    useApp();
  const { elementRef: heroRef, isVisible: heroVisible } =
    useScrollAnimation({ triggerOnce: true });
  const {
    elementRef: featuresRef,
    isVisible: featuresVisible,
  } = useScrollAnimation({ triggerOnce: true });
  const { elementRef: plusRef, isVisible: plusVisible } =
    useScrollAnimation({ triggerOnce: true });

  const corePillars = [
    {
      icon: Code2,
      title: "양방향 코딩",
      subtitle: "국내 유일한 양방향 스크래치 실습 기능",
      description: "선생과 학생 간 동시 코딩 및 코드 공유",
      features: [
        "실시간 코드 동기화",
        "양방향 스크래치 실습",
        "즉시 피드백",
        "코드 공유 시스템",
      ],
      color: "text-codelearn",
    },
    {
      icon: MessageSquare,
      title: "상호작용",
      subtitle: "실시간 상호작용을 통한 학습 효과 극대화",
      description: "교사-학생 간 즉각적인 피드백",
      features: [
        "1:1 채팅 시스템",
        "실시간 질의응답",
        "화면 공유",
        "음성/화상 지원",
      ],
      color: "text-moducoding-green",
    },
    {
      icon: Target,
      title: "고객맞춤형",
      subtitle: "고객 시스템에 최적화된 맞춤형 서비스",
      description: "별도 개발과정을 거친 맞춤형 환경",
      features: [
        "맞춤형 커리큘럼",
        "기업 특화 환경",
        "브랜딩 적용",
        "API 연동",
      ],
      color: "text-moducoding-orange",
    },
  ];

  const basicFeatures = [
    {
      icon: Users,
      title: "코칭 모드",
      description:
        "교사가 학생 실습 화면 제어하여 정답 코드 전송",
      details: [
        "1:1 채팅으로 즉각적인 피드백 가능",
        "화면 제어 및 원격 지원",
        "실시간 코드 수정",
        "개별 맞춤 지도",
      ],
      color: "text-codelearn",
    },
    {
      icon: Code2,
      title: "함께 코딩",
      description: "모둠 구성을 통한 역할 분담과 협력 학습",
      details: [
        "서로 협력하며 코딩 실습 진행",
        "팀 프로젝트 관리",
        "역할 분담 시스템",
        "협업 도구 제공",
      ],
      color: "text-moducoding-green",
    },
    {
      icon: BarChart3,
      title: "실습 현황 대시보드",
      description: "학습 진행률과 정오답 현황을 한눈에 파악",
      details: [
        "학습 감정 상태까지 종합적으로 모니터링",
        "실시간 진도 체크",
        "성취도 분석",
        "개별 성과 리포트",
      ],
      color: "text-moducoding-purple",
    },
    {
      icon: Monitor,
      title: "실습 기록 관리",
      description: "작업 중인 실습 코드를 직접 저장",
      details: [
        "이전 실습 내용을 불러와 사용하는 버전 관리",
        "자동 백업",
        "히스토리 추적",
        "포트폴리오 구축",
      ],
      color: "text-moducoding-orange",
    },
  ];

  const aiPlusFeatures = [
    {
      icon: Bot,
      title: "AI교사 보조 시스템",
      description: "실시간 질문 응답 및 개별 맞춤 지도",
      badge: "AI Plus",
      capabilities: [
        "자연어 질의응답",
        "코드 오류 자동 감지",
        "맞춤형 힌트 제공",
        "학습 패턴 분석",
      ],
    },
    {
      icon: Globe,
      title: "실시간 협업 플랫폼",
      description: "다중 사용자 동시 편집 및 실시간 공유",
      badge: "NEW",
      capabilities: [
        "동시 편집",
        "실시간 동기화",
        "충돌 해결",
        "버전 관리",
      ],
    },
    {
      icon: Brain,
      title: "개인화 학습 경로",
      description: "AI 기반 맞춤형 학습 로드맵 제공",
      badge: "AI Plus",
      capabilities: [
        "능력 수준 분석",
        "맞춤 커리큘럼",
        "진도 자동 조절",
        "약점 보완 프로그램",
      ],
    },
    {
      icon: BarChart3,
      title: "교사 역량 강화",
      description: "교사를 위한 분석 도구 및 인사이트",
      badge: "Pro",
      capabilities: [
        "학생 현황 분석",
        "교육 효과 측정",
        "수업 개선 제안",
        "성과 리포팅",
      ],
    },
    {
      icon: Zap,
      title: "지능형 코칭모드",
      description: "지능형 코딩 가이드 및 오류 검출",
      badge: "AI Plus",
      capabilities: [
        "실시간 코드 분석",
        "자동 오류 검출",
        "개선 제안",
        "베스트 프랙티스 안내",
      ],
    },
  ];

  const supportedTools = [
    {
      category: "블록 코딩",
      tools: ["스크래치", "엔트리", "메이크 코드"],
      icon: Target,
      color: "text-moducoding-blue",
      bgColor: "bg-blue-50",
      description: "비주얼 프로그래밍으로 코딩 기초 학습",
    },
    {
      category: "텍스트 코딩",
      tools: ["Python", "Java", "C++", "JavaScript"],
      icon: Code2,
      color: "text-moducoding-green",
      bgColor: "bg-green-50",
      description: "핵심 프로그래밍 언어로 실무 코딩 실습",
    },
    {
      category: "피지컬 컴퓨팅",
      tools: ["micro:bit"],
      icon: Cpu,
      color: "text-moducoding-purple",
      bgColor: "bg-purple-50",
      description: "하드웨어와 소프트웨어 연결 실습",
    },
    {
      category: "데이터 분석",
      tools: ["코답(CODAP)"],
      icon: Database,
      color: "text-moducoding-orange",
      bgColor: "bg-orange-50",
      description: "데이터 시각화 및 통계 분석",
    },
  ];

  // Interactive coding animation elements
  const codingElements = [
    {
      text: "function teachStudent() {",
      x: "15%",
      y: "20%",
      delay: "0s",
      type: "function",
    },
    {
      text: "const feedback = 'Great job!';",
      x: "70%",
      y: "25%",
      delay: "2s",
      type: "variable",
    },
    {
      text: "if (student.isStuck) {",
      x: "20%",
      y: "60%",
      delay: "4s",
      type: "condition",
    },
    {
      text: "  provideFeedback();",
      x: "25%",
      y: "65%",
      delay: "5s",
      type: "method",
    },
    {
      text: "}",
      x: "20%",
      y: "70%",
      delay: "6s",
      type: "bracket",
    },
    {
      text: "return success;",
      x: "75%",
      y: "75%",
      delay: "1s",
      type: "return",
    },
    {
      text: "// AI가 도와드릴게요!",
      x: "10%",
      y: "40%",
      delay: "3s",
      type: "comment",
    },
    {
      text: "▶ 실행 성공",
      x: "80%",
      y: "15%",
      delay: "7s",
      type: "success",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section - 600px height for better spacing */}
      <section
        className="relative bg-codelearn-gradient text-white overflow-hidden"
        style={{ height: "600px" }}
      >
        {/* Interactive Coding Animation Background */}
        <div className="absolute inset-0 opacity-30">
          {/* Code snippets typing animation */}
          {codingElements.map((element, index) => (
            <div
              key={index}
              className={`absolute text-sm font-mono animate-float ${
                element.type === "function"
                  ? "text-blue-200"
                  : element.type === "variable"
                    ? "text-green-200"
                    : element.type === "comment"
                      ? "text-gray-300"
                      : element.type === "success"
                        ? "text-yellow-200"
                        : "text-white"
              }`}
              style={{
                left: element.x,
                top: element.y,
                animationDelay: element.delay,
                animationDuration: "8s",
              }}
            >
              {element.text}
            </div>
          ))}

          {/* Collaborative cursors */}
          <div
            className="absolute top-32 left-32 w-1 h-4 bg-yellow-300 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-52 right-40 w-1 h-4 bg-green-300 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-1/3 w-1 h-4 bg-blue-300 animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>

          {/* Code completion popup simulation */}
          <div
            className="absolute top-40 right-32 bg-white/20 rounded-lg p-2 animate-fade-in"
            style={{ animationDelay: "4s" }}
          >
            <div className="text-xs text-white/80">
              💡 AI 제안: console.log()
            </div>
          </div>

          {/* Screen sharing indicators */}
          <div
            className="absolute bottom-32 left-20 flex items-center space-x-2 animate-slide-up"
            style={{ animationDelay: "5s" }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-xs text-white/70">
              화면 공유 중
            </span>
          </div>
        </div>

        <div className="container mx-auto max-w-screen-xl px-4 md:px-8 relative z-10 h-full flex flex-col justify-center">
          {/* Breadcrumb - Top left */}
          <div className="absolute top-6 left-4 md:left-8 flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center text-white/70 hover:text-white transition-colors duration-200"
            >
              <ChevronLeft size={16} className="mr-1" />
              Home
            </button>
            <span className="text-white/50">/</span>
            <span className="text-white">CodeLearn</span>
          </div>

          {/* Main Content - Centered with better spacing */}
          <div
            ref={heroRef}
            className={`text-center transition-all duration-700 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ marginTop: "40px" }}
          >
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm font-semibold">
              Interactive & AI Education Solution
            </Badge>

            <div className="flex items-center justify-center mb-6">
              <BookOpen size={64} className="mr-4" />
              <h1 className="text-white">CodeLearn</h1>
            </div>

            <h2 className="text-3xl font-semibold mb-6 text-white/90">
              양방향 코딩실습 & AI교육 솔루션
            </h2>

            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              오프라인 강의장 교육에 준하는 실시간 코드코칭과
              <br />
              AI 기반 개인맞춤 교육으로 학습 효과를 극대화합니다
            </p>

            {/* CTAs with more spacing */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={openContactModal}
                className="bg-white text-codelearn hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base"
              >
                <span className="font-semibold text-codelearn">
                  무료 체험 신청
                </span>
                <ArrowRight
                  size={20}
                  className="ml-2 text-codelearn"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => downloadPdf("CodeLearn")}
                className="border-2 border-white text-white hover:bg-white hover:text-codelearn hover:border-white hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base transition-all duration-300"
              >
                <Download
                  size={20}
                  className="mr-2 text-barcode"
                />
                <span className="font-semibold text-barcode">
                  도입 문의
                </span>
              </Button>
            </div>
          </div>

          {/* Success Badge - Bottom with adequate spacing */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <Star className="w-5 h-5 mr-2 text-yellow-300" />
              <span className="font-semibold">
                KT Aivle School 3년 연속 파트너십
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              <span className="text-codelearn">
                실시간 상호작용
              </span>
              의 힘
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              국내 유일의 양방향 실습 환경으로 교육 효과를
              극대화합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, index) => (
              <Card
                key={index}
                className="border-gray-200 shadow-sm hover-lift transition-all duration-300 bg-white rounded-2xl"
              >
                <CardHeader className="text-center pb-4">
                  {/* Circular icon container - Fixed sizing */}
                  <div className="w-20 h-20 bg-codelearn-light rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-200">
                    <pillar.icon
                      className={`${pillar.color} w-10 h-10`}
                    />
                  </div>

                  <CardTitle className="text-2xl text-gray-900 mb-2">
                    {pillar.title}
                  </CardTitle>
                  <p
                    className={`${pillar.color} font-semibold`}
                  >
                    {pillar.subtitle}
                  </p>
                  <p className="text-gray-600 mt-2 leading-relaxed">
                    {pillar.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={14}
                          className={`${pillar.color} mr-2 flex-shrink-0`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CodeLearn Basic Features Section */}
      <section
        ref={featuresRef}
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              검증된{" "}
              <span className="text-codelearn">
                양방향 실습 솔루션
              </span>
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              3년간 4,000명이 경험한 안정적인 교육 플랫폼
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {basicFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`
                  border-gray-200 shadow-sm hover-lift transition-all duration-500 bg-white rounded-2xl
                  ${featuresVisible ? "animate-slide-up" : "opacity-0"}
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-gray-200">
                      <feature.icon
                        className={`${feature.color} w-8 h-8`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {feature.title}
                      </CardTitle>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {feature.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${feature.color.replace("text-", "bg-")} rounded-full mr-3 mt-2 flex-shrink-0`}
                        ></div>
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CodeLearn Plus AI Features Section - Distinctly Separated */}
      <section
        ref={plusRef}
        className="relative section-padding overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(0, 122, 255, 0.08) 0%, rgba(52, 199, 89, 0.08) 100%)",
          borderTop: "4px solid #007AFF",
          marginTop: "80px",
          boxShadow: "0 -4px 20px rgba(0, 123, 255, 0.1)",
        }}
      >
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Section Header with Large Badge */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center mb-6">
              <Badge className="bg-codelearn text-white text-lg px-6 py-2 rounded-3xl font-bold mr-4">
                <Sparkles className="mr-2" size={20} />
                NEW CodeLearn Plus
              </Badge>
            </div>
            <h2 className="text-gray-900 mb-6">
              AI가 만드는{" "}
              <span className="text-codelearn">
                교육의 미래
              </span>
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              인공지능 기술이 더해진 차세대 코딩 교육 플랫폼
            </p>
          </div>

          {/* AI Plus Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {aiPlusFeatures.map((feature, index) => (
              <Card
                key={index}
                className={`
                  border-gray-200 shadow-sm hover-lift transition-all duration-300 relative overflow-hidden bg-white rounded-2xl
                  ${plusVisible ? "animate-slide-up" : "opacity-0"}
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute top-4 right-4">
                  <Badge className="bg-codelearn-gradient text-white text-xs rounded-lg font-semibold">
                    {feature.badge}
                  </Badge>
                </div>
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-codelearn-light rounded-2xl flex items-center justify-center mb-4 border border-gray-200">
                    <feature.icon className="text-codelearn w-8 h-8" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 mb-2">
                    {feature.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {feature.capabilities.map(
                      (capability, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs text-gray-600"
                        >
                          <Sparkles
                            size={12}
                            className="text-codelearn mr-2 flex-shrink-0"
                          />
                          {capability}
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Supported Tools Section - Part of CodeLearn Plus */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                다양한{" "}
                <span className="text-codelearn">
                  학습 환경 지원
                </span>
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto text-large">
                블록 코딩부터 텍스트 코딩까지, 핵심 도구들을
                완벽 지원
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportedTools.map((category, index) => (
                <Card
                  key={index}
                  className="border-gray-200 shadow-sm hover-lift bg-white rounded-2xl"
                  style={{ minHeight: "300px" }}
                >
                  <CardHeader
                    className="text-center pb-4"
                    style={{ height: "80px" }}
                  >
                    <div
                      className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-200`}
                    >
                      <category.icon
                        className={`${category.color} w-8 h-8`}
                      />
                    </div>
                  </CardHeader>
                  <CardContent
                    className="flex flex-col"
                    style={{ minHeight: "220px" }}
                  >
                    <div
                      style={{ height: "40px" }}
                      className="mb-4"
                    >
                      <CardTitle className="text-lg text-gray-900 text-center">
                        {category.category}
                      </CardTitle>
                    </div>
                    <div
                      style={{ height: "120px" }}
                      className="mb-4"
                    >
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="flex-grow overflow-hidden">
                      <div className="space-y-2">
                        {category.tools.map((tool, idx) => (
                          <div
                            key={idx}
                            className="text-sm text-gray-600 text-center py-1 px-2 bg-gray-50 rounded-lg"
                          >
                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              검증된{" "}
              <span className="text-codelearn">교육 효과</span>
            </h2>
            <p className="text-large text-gray-700">
              KT Aivle School과 함께한 성공적인 교육 혁신 사례
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-gray-200 shadow-xl overflow-hidden bg-white rounded-3xl">
              <div className="grid lg:grid-cols-2">
                <div className="bg-codelearn-gradient text-white p-8 lg:p-12">
                  <Badge className="bg-white/20 text-white mb-4 rounded-lg font-semibold">
                    Success Case Study
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    KT Aivle School
                  </h3>
                  <p className="text-lg text-white/90 mb-6">
                    2022-2024년 4,000명 성공적 교육 완료
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Problem
                      </h4>
                      <p className="text-sm text-white/80">
                        기존 플랫폼의 제한적 기능으로 인한 학습
                        효과 한계
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Solution
                      </h4>
                      <p className="text-sm text-white/80">
                        CodeLearn 맞춤형 구축으로 양방향 실습
                        환경 제공
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">
                        Features Used
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge className="bg-white/20 text-white text-xs rounded-lg">
                          양방향 동시코딩
                        </Badge>
                        <Badge className="bg-white/20 text-white text-xs rounded-lg">
                          연습문제
                        </Badge>
                        <Badge className="bg-white/20 text-white text-xs rounded-lg">
                          코딩챌린지
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 lg:p-12 bg-white">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    핵심 성과 지표
                  </h4>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">
                        학습 완료율
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                          <div
                            className="bg-codelearn-gradient h-2 rounded-full"
                            style={{ width: "94%" }}
                          ></div>
                        </div>
                        <span className="font-bold text-codelearn">
                          94%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">
                        학습 만족도
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                          <div
                            className="bg-codelearn-gradient h-2 rounded-full"
                            style={{ width: "96%" }}
                          ></div>
                        </div>
                        <span className="font-bold text-codelearn">
                          4.8/5
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">
                        취업 성공률
                      </span>
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-200 rounded-full h-2 mr-3">
                          <div
                            className="bg-codelearn-gradient h-2 rounded-full"
                            style={{ width: "89%" }}
                          ></div>
                        </div>
                        <span className="font-bold text-codelearn">
                          89%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-codelearn-light rounded-xl">
                    <p className="text-sm text-codelearn italic">
                      "CodeLearn의 실시간 상호작용 기능 덕분에
                      원격 교육임에도 불구하고 오프라인 수업과
                      동일한 학습 효과를 달성할 수 있었습니다."
                    </p>
                    <div className="mt-2 text-xs text-gray-600">
                      - KT Aivle School 교육 운영팀
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-codelearn-gradient text-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8 text-center">
          <h2 className="text-white mb-6">
            CodeLearn으로 교육 혁신을 시작하세요
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            실시간 상호작용과 AI 기술이 결합된 차세대 코딩 교육
            플랫폼으로 학습 효과를 극대화하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openContactModal}
              className="bg-white text-codelearn hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base"
            >
              <span className="font-semibold text-codelearn">
                무료 체험 신청하기
              </span>
              <ArrowRight
                size={20}
                className="ml-2 text-codelearn"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => downloadPdf("CodeLearn")}
              className="border-2 border-white text-white hover:bg-white hover:text-codelearn rounded-xl h-12 px-8 font-semibold text-base transition-all duration-300"
            >
              <Download size={20} className="mr-2" />
              <span className="font-semibold">
                상세 자료 다운로드
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}