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
  BarChart3,
  Shield,
  Activity,
  Brain,
  Target,
  Zap,
  CheckCircle,
  Users,
  Download,
  Sparkles,
  Monitor,
  ChevronLeft,
  TrendingUp,
  Gauge,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useApp } from "../AppContext";

export function BarCodePage() {
  const { setCurrentPage, openContactModal, downloadPdf } =
    useApp();
  const { elementRef: heroRef, isVisible: heroVisible } =
    useScrollAnimation({ triggerOnce: true });
  const {
    elementRef: featuresRef,
    isVisible: featuresVisible,
  } = useScrollAnimation({ triggerOnce: true });

  const assessmentTools = [
    {
      icon: Shield,
      title: "코딩 역량 진단",
      description:
        "알고리즘, 데이터 구조, 언어별 실무 능력을 종합 평가",
      features: [
        "실제 코딩 환경에서 평가",
        "다양한 언어 지원",
        "난이도별 문제 제공",
        "실시간 코드 분석",
      ],
      color: "text-barcode",
      bgColor: "bg-barcode-light",
    },
    {
      icon: Brain,
      title: "문제 해결 능력 평가",
      description:
        "논리적 사고력과 창의적 문제 해결 능력을 측정",
      features: [
        "시나리오 기반 평가",
        "단계별 해결 과정 분석",
        "다각도 접근법 평가",
        "실무 연계 문제",
      ],
      color: "text-moducoding-blue",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      title: "소프트 스킬 측정",
      description:
        "협업, 의사소통, 리더십 등 개발팀에서 필요한 역량 평가",
      features: [
        "팀워크 시뮬레이션",
        "의사소통 능력 측정",
        "갈등 해결 능력",
        "프레젠테이션 스킬",
      ],
      color: "text-moducoding-green",
      bgColor: "bg-green-50",
    },
    {
      icon: Target,
      title: "업무 시뮬레이션 테스트",
      description:
        "실제 개발 환경과 유사한 상황에서의 종합 평가",
      features: [
        "프로젝트 관리 능력",
        "코드 리뷰 스킬",
        "버그 해결 능력",
        "기술 문서 작성",
      ],
      color: "text-moducoding-orange",
      bgColor: "bg-orange-50",
    },
  ];

  const monitoringFeatures = [
    {
      title: "개발 생산성 실시간 모니터링",
      description:
        "코드 작성량, 커밋 빈도, 리뷰 참여도 등을 실시간으로 추적",
      metrics: [
        "코드 품질 지수 87%",
        "개발 속도 +23%",
        "협업 참여도 92%",
        "기술 부채 -15%",
      ],
      icon: Activity,
    },
    {
      title: "스텔스 모니터링 시스템",
      description:
        "개발자의 업무 흐름을 방해하지 않는 자동 데이터 수집",
      metrics: [
        "작업 집중도 85%",
        "도구 사용 효율 91%",
        "학습 시간 추적",
        "문제 해결 속도",
      ],
      icon: Monitor,
    },
    {
      title: "AI 기반 성과 예측",
      description:
        "축적된 데이터를 바탕으로 개발자의 성장 패턴과 잠재력 분석",
      metrics: [
        "성장 예측 정확도",
        "적합 업무 매칭",
        "교육 필요 영역",
        "팀 시너지 분석",
      ],
      icon: Brain,
    },
  ];

  // Floating assessment elements for header animation
  const floatingElements = [
    {
      text: "95%",
      x: "15%",
      y: "25%",
      delay: "0s",
      icon: "accuracy",
    },
    {
      text: "87%",
      x: "75%",
      y: "30%",
      delay: "1s",
      icon: "quality",
    },
    {
      text: "92%",
      x: "20%",
      y: "60%",
      delay: "2s",
      icon: "efficiency",
    },
    {
      text: "78%",
      x: "70%",
      y: "65%",
      delay: "1.5s",
      icon: "satisfaction",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section - 600px height for better spacing */}
      <section
        className="relative bg-barcode-gradient text-white overflow-hidden"
        style={{ height: "600px" }}
      >
        {/* Animated Assessment Background */}
        <div className="absolute inset-0 opacity-30">
          {/* Floating skill assessment wheels */}
          <div
            className="absolute top-16 left-16 w-20 h-20 border-4 border-white rounded-full animate-spin"
            style={{ animationDuration: "8s" }}
          >
            <div className="w-3 h-3 bg-white rounded-full absolute top-1 left-1/2 transform -translate-x-1/2"></div>
          </div>

          {/* Floating percentage indicators */}
          {floatingElements.map((element, index) => (
            <div
              key={index}
              className="absolute text-2xl font-bold text-white animate-float"
              style={{
                left: element.x,
                top: element.y,
                animationDelay: element.delay,
                animationDuration: "6s",
              }}
            >
              {element.text}
            </div>
          ))}

          {/* Moving progress bars */}
          <div className="absolute top-20 right-20 space-y-2">
            <div className="w-24 h-2 bg-white/20 rounded-full">
              <div
                className="h-2 bg-white rounded-full animate-pulse"
                style={{ width: "85%" }}
              ></div>
            </div>
            <div className="w-24 h-2 bg-white/20 rounded-full">
              <div
                className="h-2 bg-white rounded-full animate-pulse"
                style={{ width: "92%", animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          {/* Assessment icons */}
          <div className="absolute bottom-20 left-20 opacity-60">
            <TrendingUp
              className="w-8 h-8 text-white animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
          <div className="absolute top-32 right-32 opacity-60">
            <Gauge
              className="w-8 h-8 text-white animate-float"
              style={{ animationDelay: "2s" }}
            />
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
            <span className="text-white">BARCODE</span>
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
              Assessment & Monitoring Solution
            </Badge>

            <div className="flex items-center justify-center mb-6">
              <BarChart3 size={64} className="mr-4" />
              <h1 className="text-white">BARCODE</h1>
            </div>

            <h2 className="text-3xl font-semibold mb-6 text-white/90">
              SW개발역량 검진센터 & 생산성 모니터링
            </h2>

            <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-3xl mx-auto">
              종합건강검진처럼 SW개발역량을 확인하고,
              <br />
              실시간 생산성 모니터링으로 개발 효율성을 높입니다
            </p>

            {/* CTAs with improved visibility */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                onClick={openContactModal}
                className="bg-white text-barcode hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base"
              >
                <span className="font-semibold text-barcode">
                  무료 데모 신청
                </span>
                <ArrowRight
                  size={20}
                  className="ml-2 text-barcode"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => downloadPdf("BARCODE")}
                className="bg-white text-barcode hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base"
              >
                <Download
                  size={20}
                  className="mr-2 text-barcode"
                />
                <span className="font-semibold text-barcode">
                  솔루션 소개서
                </span>
              </Button>
            </div>
          </div>

          {/* Success Badge - Bottom with adequate spacing */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
              <CheckCircle size={20} className="mr-2" />
              <span className="font-semibold">
                국내 100+ 기업이 선택한 검증된 솔루션
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Dual Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              검진과 모니터링,{" "}
              <span className="text-barcode">
                두 가지 핵심 기능
              </span>
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              개발자의 현재 역량을 정확히 진단하고, 지속적인
              성장을 실시간으로 지원합니다
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* BARCODE (Left Card) */}
            <div
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover-lift transition-all duration-300"
              style={{ minHeight: "400px" }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-barcode-light rounded-2xl flex items-center justify-center mr-4 shadow-sm border border-gray-200">
                  <Shield size={32} className="text-barcode" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    BARCODE
                  </h3>
                  <p className="text-barcode font-semibold">
                    SW개발역량 검진센터
                  </p>
                </div>
              </div>

              <div className="bg-barcode-light rounded-2xl p-6 mb-6 shadow-sm border border-gray-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white rounded-xl">
                    <div className="text-2xl font-bold text-barcode mb-1">
                      95%
                    </div>
                    <div className="text-sm text-gray-600">
                      진단 정확도
                    </div>
                  </div>
                  <div className="p-4 bg-white rounded-xl">
                    <div className="text-2xl font-bold text-barcode mb-1">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">
                      평가 항목
                    </div>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                {[
                  "Technical & Soft Skill 종합 검진",
                  "기업 맞춤형 평가센터 구축",
                  "다양한 진단도구 제공",
                  "종합 역량 리포트 생성",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700"
                  >
                    <CheckCircle
                      size={16}
                      className="text-barcode mr-3 flex-shrink-0"
                    />
                    <span className="font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* BARCODE Plus (Right Card - Enhanced) */}
            <div
              className="bg-gradient-to-br from-barcode-light to-white rounded-3xl p-8 border-2 border-barcode relative shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ minHeight: "400px" }}
            >
              <Badge className="absolute -top-3 -right-3 bg-barcode-gradient text-white animate-pulse font-semibold shadow-lg">
                <Sparkles size={12} className="mr-1" />
                NEW Plus
              </Badge>

              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-4 shadow-lg border-2 border-barcode/20">
                  <Activity
                    size={32}
                    className="text-barcode"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    BARCODE Plus
                  </h3>
                  <p className="text-barcode font-semibold">
                    개발생산성 모니터링 센터
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 font-medium">
                    실시간 생산성 지수
                  </span>
                  <span className="text-barcode font-bold text-lg">
                    87%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-barcode-gradient h-3 rounded-full transition-all duration-1000"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>

              <ul className="space-y-3 flex-1">
                {[
                  "기존 개발 프로세스 맞춤 모니터링",
                  "스텔스 모니터링 구현",
                  "생산성 지표 정량 측정",
                  "실시간 개발 데이터 분석",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700"
                  >
                    <Zap
                      size={16}
                      className="text-barcode mr-3 flex-shrink-0"
                    />
                    <span className="font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Tools Deep Dive */}
      <section
        ref={featuresRef}
        className="section-padding bg-gray-50"
      >
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              4가지 특화된{" "}
              <span className="text-barcode">진단 영역</span>
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              개발자의 다양한 역량을 체계적으로 측정하는 전문
              진단 도구
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {assessmentTools.map((tool, index) => (
              <Card
                key={index}
                className={`
                  hover-lift shadow-sm border-gray-200 bg-white transition-all duration-500 rounded-2xl
                  ${featuresVisible ? "animate-slide-up" : "opacity-0"}
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 ${tool.bgColor} rounded-2xl flex items-center justify-center mr-4 border border-gray-200`}
                    >
                      <tool.icon
                        className={`${tool.color} w-8 h-8`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 font-bold">
                        {tool.title}
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2">
                    {tool.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${tool.color.replace("text-", "bg-")} rounded-full mr-3`}
                        ></div>
                        <span className="font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring Architecture */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              <span className="text-barcode">BARCODE Plus</span>{" "}
              생산성 모니터링 시스템
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              개발팀의 생산성을 실시간으로 측정하고 개선점을
              제시하는 지능형 모니터링
            </p>
          </div>

          <div className="space-y-12">
            {monitoringFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-barcode-light rounded-xl flex items-center justify-center mr-4 border border-gray-200">
                        <feature.icon className="text-barcode w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-large mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {feature.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-white rounded-xl p-4 text-center shadow-sm hover-lift border border-gray-200"
                      >
                        <div className="text-barcode font-bold text-lg mb-1">
                          {typeof metric === "string" &&
                          metric.includes("%")
                            ? metric
                            : "94%"}
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {typeof metric === "string"
                            ? metric.replace(/\d+%/, "").trim()
                            : metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with improved button visibility */}
      <section className="section-padding bg-barcode-gradient text-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8 text-center">
          <h2 className="text-white mb-6">
            BARCODE로 개발팀의 잠재력을 발견하세요
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            정확한 진단과 지속적인 모니터링으로 개발팀의
            생산성을 한 단계 끌어올리세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openContactModal}
              className="bg-white text-barcode hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base"
            >
              <span className="font-semibold text-barcode">
                무료 데모 체험하기
              </span>
              <ArrowRight
                size={20}
                className="ml-2 text-barcode"
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => downloadPdf("BARCODE")}
              className="border-2 border-white text-white hover:bg-white hover:text-barcode hover:border-white hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base transition-all duration-300"
            >
              <Download
                size={20}
                className="mr-2 text-barcode"
              />
              <span className="font-semibold text-barcode">
                상세 자료 다운로드
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}