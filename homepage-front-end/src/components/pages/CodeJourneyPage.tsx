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
  MapPin,
  Users,
  Zap,
  CheckCircle,
  Star,
  Target,
  BarChart3,
  Globe,
  Download,
  Code2,
  TrendingUp,
  Award,
  BookOpen,
  ChevronLeft,
  UserCheck,
  Lightbulb,
  Network,
  MessageSquare,
} from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useApp } from "../AppContext";

export function CodeJourneyPage() {
  const { setCurrentPage, openContactModal, downloadPdf } =
    useApp();
  const { elementRef: heroRef, isVisible: heroVisible } =
    useScrollAnimation({ triggerOnce: true });
  const { elementRef: valuesRef, isVisible: valuesVisible } =
    useScrollAnimation({ triggerOnce: true });

  const coreValues = [
    {
      icon: Target,
      title: "맞춤형 학습 관리",
      subtitle:
        "셀프 레벨 진단으로 수준에 맞는 알고리즘 문제 제공",
      description: "개인별 학습 통계 및 성과 분석",
      features: [
        "개인 맞춤 문제 추천",
        "학습 패턴 분석",
        "실력 진단 시스템",
        "성과 추적",
      ],
      color: "text-codejourney",
      bgColor: "bg-codejourney-light",
    },
    {
      icon: Users,
      title: "함께 성장하는 학습 공간",
      subtitle: "커뮤니티에서 문제 해결 방식 공유",
      description: "다양한 관점으로 소통하며 함께 성장",
      features: [
        "실시간 Q&A",
        "코드 리뷰",
        "스터디 그룹",
        "지식 공유",
      ],
      color: "text-moducoding-blue",
      bgColor: "bg-blue-50",
    },
    {
      icon: Award,
      title: "게이미피케이션 경쟁 시스템",
      subtitle: "동료와의 건강한 경쟁을 통한 학습 동기 제공",
      description: "레벨업 시스템과 성취 배지",
      features: [
        "레벨 시스템",
        "성취 배지",
        "랭킹 시스템",
        "도전 과제",
      ],
      color: "text-moducoding-orange",
      bgColor: "bg-orange-50",
    },
    {
      icon: TrendingUp,
      title: "취업 경쟁력 강화",
      subtitle: "현업 개발자와의 멘토링 연계",
      description: "최신 개발 트렌드 및 취업 정보 제공",
      features: [
        "멘토링 프로그램",
        "취업 가이드",
        "포트폴리오 관리",
        "현업 정보",
      ],
      color: "text-moducoding-green",
      bgColor: "bg-green-50",
    },
  ];

  const serviceModules = [
    {
      icon: BookOpen,
      title: "학습 지원",
      features: [
        "프로그래밍 강의 제공",
        "알고리즘 학습 자료",
        "코딩 문제 풀이 시스템",
        "북마크 문제 복습 기능",
      ],
      color: "text-codejourney",
    },
    {
      icon: BarChart3,
      title: "학습 분석",
      features: [
        "학습 이력 로그 분석",
        "유형별 패턴 분석",
        "학습 시간 및 진도 추적",
        "개인별 성장 지표",
      ],
      color: "text-moducoding-blue",
    },
    {
      icon: Target,
      title: "맞춤 추천",
      features: [
        "레벨 기반 문제 추천",
        "유형별 퀴즈 추천",
        "연습 문제 개인화",
        "AI 기반 학습 경로 설계",
      ],
      color: "text-moducoding-purple",
    },
    {
      icon: Network,
      title: "커뮤니티 기능",
      features: [
        "실시간 문제 Q&A 커뮤니티",
        "개발 트렌드 정보 공유",
        "취업 정보 및 가이드",
        "현업 멘토링 시스템",
      ],
      color: "text-moducoding-orange",
    },
  ];

  const roadmapPhases = [
    {
      phase: "1단계",
      period: "24년 11-12월",
      title: "베타 버전 서비스 지원",
      status: "완료",
      statusColor: "bg-moducoding-green",
      achievements: [
        "멀티테넌트 구조 설계 방식",
        "학생 맞춤형 학습 시스템",
        "관리자 대시보드 구축",
      ],
      icon: CheckCircle,
    },
    {
      phase: "2단계",
      period: "25년 1-5월",
      title: "고객 맞춤 기능 구축",
      status: "진행 중",
      statusColor: "bg-codejourney",
      achievements: [
        "학습 분석 및 지원 체계",
        "AI 기반 서비스 고도화",
        "솔루션 내 소통 시스템 구축",
      ],
      icon: Zap,
    },
    {
      phase: "3단계",
      period: "25년 하반기",
      title: "피드백 기반 고도화",
      status: "예정",
      statusColor: "bg-gray-400",
      achievements: [
        "코딩 대회/라이브러리 구축",
        "취업 도움 시스템 완성",
        "실시간 대회 운영 시스템",
      ],
      icon: Star,
    },
  ];

  // Learning journey animation elements
  const journeyElements = [
    {
      text: "📚 기초 학습",
      x: "10%",
      y: "20%",
      delay: "0s",
      type: "milestone",
    },
    {
      text: "👥 커뮤니티 참여",
      x: "70%",
      y: "25%",
      delay: "2s",
      type: "community",
    },
    {
      text: "🏆 성취 달성",
      x: "15%",
      y: "60%",
      delay: "4s",
      type: "achievement",
    },
    {
      text: "💼 취업 성공",
      x: "75%",
      y: "65%",
      delay: "6s",
      type: "career",
    },
    {
      text: "🚀 성장 중...",
      x: "40%",
      y: "40%",
      delay: "1s",
      type: "progress",
    },
    {
      text: "💡 아이디어 공유",
      x: "25%",
      y: "80%",
      delay: "3s",
      type: "idea",
    },
    {
      text: "🔗 네트워킹",
      x: "65%",
      y: "15%",
      delay: "5s",
      type: "network",
    },
    {
      text: "📈 실력 향상",
      x: "85%",
      y: "45%",
      delay: "7s",
      type: "improvement",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section - 500px height */}
      <section
        className="relative bg-codejourney-gradient text-white overflow-hidden"
        style={{ height: "500px" }}
      >
        {/* Learning Journey Animation Background */}
        <div className="absolute inset-0 opacity-30">
          {/* Learning path elements */}
          {journeyElements.map((element, index) => (
            <div
              key={index}
              className={`absolute text-lg animate-float ${
                element.type === "milestone"
                  ? "text-yellow-200"
                  : element.type === "community"
                    ? "text-blue-200"
                    : element.type === "achievement"
                      ? "text-green-200"
                      : element.type === "career"
                        ? "text-orange-200"
                        : "text-white"
              }`}
              style={{
                left: element.x,
                top: element.y,
                animationDelay: element.delay,
                animationDuration: "10s",
              }}
            >
              {element.text}
            </div>
          ))}

          {/* Animated learning path lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.3 }}
          >
            <path
              d="M 100 200 Q 300 100 500 200 Q 700 300 900 200"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeDasharray="10,5"
              className="animate-pulse"
            />
            <path
              d="M 150 300 Q 350 200 550 300 Q 750 400 950 300"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="8,4"
              className="animate-pulse"
              style={{ animationDelay: "2s" }}
            />
          </svg>

          {/* Student avatars moving along paths */}
          <div
            className="absolute top-32 left-20 w-8 h-8 bg-white/20 rounded-full animate-float flex items-center justify-center"
            style={{ animationDelay: "1s" }}
          >
            <UserCheck size={16} className="text-white" />
          </div>
          <div
            className="absolute bottom-40 right-32 w-8 h-8 bg-white/20 rounded-full animate-float flex items-center justify-center"
            style={{ animationDelay: "3s" }}
          >
            <Lightbulb size={16} className="text-white" />
          </div>

          {/* Achievement badges sparkle */}
          <div
            className="absolute top-1/2 left-1/3 animate-ping"
            style={{ animationDelay: "4s" }}
          >
            <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
          </div>
          <div
            className="absolute top-1/4 right-1/4 animate-ping"
            style={{ animationDelay: "6s" }}
          >
            <div className="w-4 h-4 bg-green-300 rounded-full"></div>
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
            <span className="text-white">CodeJourney</span>
          </div>

          {/* Main Content - Centered */}
          <div
            ref={heroRef}
            className={`text-center transition-all duration-700 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Badge className="bg-white/20 text-white border-white/30 mb-6 text-sm font-semibold">
              Self-Directed Learning Solution
            </Badge>

            <div className="flex items-center justify-center mb-6">
              <MapPin size={64} className="mr-4" />
              <h1 className="text-white">CodeJourney</h1>
            </div>

            <h2 className="text-3xl font-semibold mb-6 text-white/90">
              자기주도 코딩학습 솔루션
            </h2>

            <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
              지방대학생의 SW개발 취업경쟁력 향상을 위한
              <br />
              커뮤니티 기반 맞춤 성장 여정 솔루션입니다
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <Badge className="bg-white/20 text-white border-white/30 text-sm">
                #맞춤학습
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-sm">
                #취업경쟁력
              </Badge>
              <Badge className="bg-white/20 text-white border-white/30 text-sm">
                #피어러닝
              </Badge>
            </div>

            {/* CTAs - Fixed Visibility */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={openContactModal}
                className="bg-codejourney hover:bg-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base"
              >
                <span className="font-semibold text-white">
                  무료 체험 신청
                </span>
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => downloadPdf("CodeJourney")}
                className="border-2 border-white text-white hover:bg-white hover:text-codejourney hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base transition-all duration-300"
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
        </div>
      </section>

      {/* Core Values Section */}
      <section
        ref={valuesRef}
        className="section-padding bg-white"
      >
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              함께 성장하는{" "}
              <span className="text-codejourney">
                학습 생태계
              </span>
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              개인 맞춤형 학습과 커뮤니티 협력이 만나는 완벽한
              성장 환경
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className={`
                  border-gray-200 shadow-sm hover-lift transition-all duration-500 bg-white rounded-2xl
                  ${valuesVisible ? "animate-slide-up" : "opacity-0"}
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mr-4 border border-gray-200`}
                    >
                      <value.icon
                        className={`${value.color} w-8 h-8`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {value.title}
                      </CardTitle>
                      <p
                        className={`${value.color} font-semibold text-sm`}
                      >
                        {value.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {value.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {value.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={14}
                          className={`${value.color} mr-2 flex-shrink-0`}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Architecture Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              종합{" "}
              <span className="text-codejourney">
                학습 지원 시스템
              </span>
            </h2>
            <p className="text-large text-gray-700 max-w-3xl mx-auto">
              학습부터 분석, 추천, 커뮤니티까지 통합된 학습
              생태계
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceModules.map((module, index) => (
              <Card
                key={index}
                className="border-gray-200 shadow-sm hover-lift bg-white rounded-2xl"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-codejourney-light rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-200">
                    <module.icon
                      className={`${module.color} w-8 h-8`}
                    />
                  </div>
                  <CardTitle className="text-lg text-gray-900">
                    {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start text-sm text-gray-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${module.color.replace("text-", "bg-")} rounded-full mr-3 mt-2 flex-shrink-0`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* User Perspectives Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              사용자별 최적화된{" "}
              <span className="text-codejourney">기능</span>
            </h2>
            <p className="text-large text-gray-700">
              학습자와 교육자 모두를 위한 맞춤형 솔루션
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Student Perspective */}
            <Card className="border-gray-200 shadow-sm bg-white rounded-2xl">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-codejourney-light rounded-2xl flex items-center justify-center mr-4 border border-gray-200">
                    <Users className="text-codejourney w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    학습자를 위한 기능
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    맞춤 학습 활동
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      프로그래밍 강의 수강
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      알고리즘 학습 및 문제 풀이
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CheckCircle
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      북마크를 통한 복습 시스템
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    소통 참여 활동
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageSquare
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      실시간 문제 질의응답
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Globe
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      다양한 해결법 공유
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      취업 관련 정보 교환
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    선후배 네트워킹
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Network
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      지식 체계 공유
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Code2
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      문제 리뷰 및 피드백
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users
                        size={14}
                        className="text-codejourney mr-2"
                      />
                      현업/취업 멘토링
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Admin Perspective */}
            <Card className="border-gray-200 shadow-sm bg-white rounded-2xl">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mr-4 border border-gray-200">
                    <BarChart3 className="text-moducoding-blue w-8 h-8" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">
                    교육자를 위한 기능
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    평가 및 현황 파악
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <BarChart3
                        size={14}
                        className="text-moducoding-blue mr-2"
                      />
                      개인/그룹별 학생 관리
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Target
                        size={14}
                        className="text-moducoding-blue mr-2"
                      />
                      실시간 학습 모니터링
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TrendingUp
                        size={14}
                        className="text-moducoding-blue mr-2"
                      />
                      레벨 분포 및 수준 체크
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Award
                        size={14}
                        className="text-moducoding-blue mr-2"
                      />
                      진도 기반 등급 평가
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    소통 활동 관리
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <MessageSquare
                        size={14}
                        className="text-moducoding-blue mr-2"
                      />
                      질문/답변 활동 모니터링
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Lightbulb
                        size={14}
                        className="text-moducoding-blue mr-2"
                      />
                      실시간 방향성 가이드 제공
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Network
                        size={14}
                        className="text-moducoding-blue mr-2"
                      />
                      선후배 지식 전수 환경 조성
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Roadmap Section with Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              지속적인{" "}
              <span className="text-codejourney">
                서비스 발전
              </span>
            </h2>
            <p className="text-large text-gray-700">
              단계별 발전 계획으로 더 나은 서비스를 제공합니다
            </p>
          </div>

          <div className="relative">
            {/* Timeline Connection Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-moducoding-green via-codejourney to-gray-400 rounded-full transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {roadmapPhases.map((phase, index) => (
                <Card
                  key={index}
                  className="border-gray-200 shadow-sm hover-lift bg-white rounded-2xl relative"
                >
                  {/* Timeline Connector Dot */}
                  <div
                    className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-4 ${phase.statusColor} rounded-full border-4 border-white shadow-lg z-20`}
                  ></div>

                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 ${phase.statusColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <phase.icon className="text-white w-8 h-8" />
                    </div>
                    <Badge
                      className={`${phase.statusColor} text-white mb-2 font-semibold`}
                    >
                      {phase.status}
                    </Badge>
                    <CardTitle className="text-lg text-gray-900 mb-2">
                      {phase.phase} ({phase.period})
                    </CardTitle>
                    <p className="font-semibold text-gray-700">
                      {phase.title}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {phase.achievements.map(
                        (achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-center text-sm text-gray-600"
                          >
                            <CheckCircle
                              size={14}
                              className="text-codejourney mr-2 flex-shrink-0"
                            />
                            {achievement}
                          </div>
                        ),
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Tenant Architecture Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-6">
              기관별{" "}
              <span className="text-codejourney">
                맞춤 서비스
              </span>
            </h2>
            <p className="text-large text-gray-700">
              대학과 기관의 특성에 맞는 독립적인 학습 환경 제공
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-gray-200 shadow-sm hover-lift bg-white rounded-2xl">
              <CardHeader className="text-center">
                <Globe className="w-16 h-16 text-codejourney mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">
                  독립된 도메인 제공
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  대학/기관별 독립된 도메인 환경과 각 기관
                  맞춤형 브랜딩 적용
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover-lift bg-white rounded-2xl">
              <CardHeader className="text-center">
                <CheckCircle className="w-16 h-16 text-codejourney mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">
                  데이터 분리 및 보안
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  완전한 데이터 분리 정책과 기관별 보안 요구사항
                  충족
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 shadow-sm hover-lift bg-white rounded-2xl">
              <CardHeader className="text-center">
                <TrendingUp className="w-16 h-16 text-codejourney mx-auto mb-4" />
                <CardTitle className="text-lg text-gray-900">
                  유연한 확장성
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center text-sm">
                  기관별 요구사항에 맞는 기능 확장과 사용자
                  규모에 따른 자동 스케일링
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-codejourney-gradient text-white">
        <div className="container mx-auto max-w-screen-xl px-4 md:px-8 text-center">
          <h2 className="text-white mb-6">
            CodeJourney와 함께 성장의 여정을 시작하세요
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            자기주도 학습과 커뮤니티 협력으로 개발자의 꿈을
            현실로 만들어보세요
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={openContactModal}
              className="bg-white text-codejourney hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base"
            >
              <span className="font-semibold">
                무료 체험 신청하기
              </span>
              <ArrowRight size={20} className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => downloadPdf("CodeJourney")}
              className="border-2 border-white text-white hover:bg-white hover:text-codejourney hover:scale-105 rounded-xl h-12 px-8 font-semibold text-base transition-all duration-300"
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