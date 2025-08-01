import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ArrowRight, MessageSquare, Users, Phone, Mail, MapPin } from "lucide-react";

export function FinalCTASection() {
  const contactInfo = [
    {
      icon: Phone,
      label: "전화문의",
      value: "02-1234-5678",
      description: "평일 9:00 - 18:00"
    },
    {
      icon: Mail,
      label: "이메일",
      value: "contact@moducoding.com",
      description: "24시간 접수 가능"
    },
    {
      icon: MapPin,
      label: "오시는 길",
      value: "서울시 강남구 테헤란로",
      description: "지하철 2호선 역삼역"
    }
  ];

  return (
    <>
      {/* Final CTA Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-brand-blue via-purple-600 to-brand-red relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center text-white mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              모두의코딩과 함께 시작해보세요
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              우리의 솔루션이 궁금하시다면, 언제든 문의해주세요
            </p>
          </div>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="border-0 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">솔루션 도입 문의</h3>
                <p className="opacity-90 mb-6 leading-relaxed">
                  BarCode, CodeLearn, CodeJourney<br />
                  솔루션 도입을 검토중이신가요?
                </p>
                
                <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 w-full group">
                  <span className="font-semibold text-barcode">도입 문의하기</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform text-barcode" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold mb-4">채용 정보</h3>
                <p className="opacity-90 mb-6 leading-relaxed">
                  모두의코딩 팀에 합류하여<br />
                  함께 성장하고 싶으신가요?
                </p>
                
                <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 w-full group">
                 <span className="font-semibold text-barcode">채용 정보 보기</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform text-barcode" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon size={20} />
                </div>
                <h4 className="font-semibold mb-2">{info.label}</h4>
                <p className="font-medium mb-1">{info.value}</p>
                <p className="text-sm opacity-80">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex items-center space-x-1">
                  <span className="text-2xl font-bold text-brand-blue">{":"}</span>
                  <span className="text-2xl font-bold text-brand-blue">{"}"}</span>
                </div>
                <span className="text-lg font-semibold">모두의코딩</span>
                <span className="text-sm text-brand-red font-medium">hunet</span>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                SW개발자의 모든 여정을 함께하는 교육 플랫폼. 
                2016년부터 9년간 검증된 솔루션으로 개발자의 성장을 지원합니다.
              </p>
              
              <div className="text-sm text-gray-500">
                <p>© 2024 휴넷 모두의코딩. All rights reserved.</p>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">솔루션</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#barcode" className="hover:text-brand-blue transition-colors">BarCode</a></li>
                <li><a href="#codelearn" className="hover:text-brand-blue transition-colors">CodeLearn</a></li>
                <li><a href="#codejourney" className="hover:text-brand-blue transition-colors">CodeJourney</a></li>
                <li><a href="#enterprise" className="hover:text-brand-blue transition-colors">기업 솔루션</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">회사</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-brand-blue transition-colors">회사소개</a></li>
                <li><a href="#careers" className="hover:text-brand-blue transition-colors">채용정보</a></li>
                <li><a href="#news" className="hover:text-brand-blue transition-colors">보도자료</a></li>
                <li><a href="#contact" className="hover:text-brand-blue transition-colors">문의하기</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6 text-sm text-gray-500">
                <a href="#privacy" className="hover:text-white transition-colors">개인정보처리방침</a>
                <a href="#terms" className="hover:text-white transition-colors">이용약관</a>
                <a href="#sitemap" className="hover:text-white transition-colors">사이트맵</a>
              </div>
              
              <div className="text-sm text-gray-500">
                서울시 강남구 테헤란로 123 | 사업자등록번호: 123-45-67890
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}