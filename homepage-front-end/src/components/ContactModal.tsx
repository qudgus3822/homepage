import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useApp } from "./AppContext";
import { useState } from "react";
import { Phone, Mail, Building, User, MessageSquare, CheckCircle, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
}

export function ContactModal() {
  const { state, closeContactModal } = useApp();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = '이름을 입력해주세요.';
    if (!formData.company.trim()) newErrors.company = '회사명을 입력해주세요.';
    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식을 입력해주세요.';
    }
    if (!formData.phone.trim()) newErrors.phone = '연락처를 입력해주세요.';
    if (!formData.inquiryType) newErrors.inquiryType = '상담 유형을 선택해주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        inquiryType: '',
        message: ''
      });
      closeContactModal();
    }, 3000);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const inquiryTypes = [
    "BarCode - SW개발역량 검진",
    "BarCode Plus - 개발 생산성 모니터링", 
    "CodeLearn - 양방향 코딩교육",
    "CodeLearn Plus - AI 교육 솔루션",
    "CodeJourney - 자기주도 학습",
    "전체 솔루션 패키지",
    "기타 문의사항"
  ];

  return (
    <Dialog open={state.isContactModalOpen} onOpenChange={closeContactModal}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-brand-success" />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark-gray mb-4">문의가 접수되었습니다!</h3>
            <p className="text-gray-600 leading-relaxed">
              담당자가 검토 후 영업일 기준 1-2일 내에<br />
              연락드리겠습니다.
            </p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-brand-dark-gray">
                도입 문의하기
              </DialogTitle>
              <DialogDescription className="text-lg text-gray-600">
                전문 컨설턴트가 맞춤 솔루션을 제안해드립니다
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center space-x-2">
                    <User size={16} />
                    <span>이름 *</span>
                  </Label>
                  <Input
                    id="name"
                    placeholder="홍길동"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`transition-all duration-200 ${
                      errors.name ? 'border-red-500 ring-red-500/20' : 'focus:border-brand-blue focus:ring-brand-blue/20'
                    }`}
                  />
                  {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="flex items-center space-x-2">
                    <Building size={16} />
                    <span>회사명 *</span>
                  </Label>
                  <Input
                    id="company"
                    placeholder="(주)회사명"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className={`transition-all duration-200 ${
                      errors.company ? 'border-red-500 ring-red-500/20' : 'focus:border-brand-blue focus:ring-brand-blue/20'
                    }`}
                  />
                  {errors.company && <p className="text-sm text-red-500">{errors.company}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>이메일 *</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@company.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`transition-all duration-200 ${
                      errors.email ? 'border-red-500 ring-red-500/20' : 'focus:border-brand-blue focus:ring-brand-blue/20'
                    }`}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>연락처 *</span>
                  </Label>
                  <Input
                    id="phone"
                    placeholder="010-1234-5678"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`transition-all duration-200 ${
                      errors.phone ? 'border-red-500 ring-red-500/20' : 'focus:border-brand-blue focus:ring-brand-blue/20'
                    }`}
                  />
                  {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center space-x-2">
                  <MessageSquare size={16} />
                  <span>상담 유형 *</span>
                </Label>
                <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                  <SelectTrigger className={`transition-all duration-200 ${
                    errors.inquiryType ? 'border-red-500 ring-red-500/20' : 'focus:border-brand-blue focus:ring-brand-blue/20'
                  }`}>
                    <SelectValue placeholder="상담받고 싶은 솔루션을 선택해주세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.inquiryType && <p className="text-sm text-red-500">{errors.inquiryType}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">추가 문의사항</Label>
                <Textarea
                  id="message"
                  placeholder="도입 규모, 예산, 일정 등 상세한 문의사항을 자유롭게 작성해주세요."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="transition-all duration-200 focus:border-brand-blue focus:ring-brand-blue/20 resize-none"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  개인정보 수집 및 이용에 대한 안내: 입력하신 정보는 문의 응답 목적으로만 사용되며,
                  관련 법령에 따라 안전하게 관리됩니다.
                </p>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={closeContactModal}
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin text-barcode" />
                      전송 중...
                    </>
                  ) : (
                  <span className="text-white">상담 신청하기</span>
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}