/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MapPin,
  Scan,
  Bot,
  Mic,
  Stethoscope,
  Pill,
  Truck,
  ClipboardList,
  Video,
  Activity,
  ShieldPlus,
  Home,
  MessageCircle,
  FileText,
  User,
  ChevronRight,
  Search,
  Sparkles,
  ArrowLeft,
  Star,
  Clock,
  ThumbsUp,
  Calendar,
  AlertCircle,
  CheckCircle2,
  X
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'consultation' | 'followup'>('home');
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleConfirmFollowup = () => {
    setShowConfirmModal(false);
    setCurrentView('home');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans text-gray-900">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-[#F5F7FA] min-h-screen relative pb-24 shadow-2xl overflow-x-hidden">
        
        {currentView === 'home' && (
          <>
            {/* Header */}
            <header className="px-5 pt-12 pb-4 bg-white sticky top-0 z-10 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                    <img src="https://picsum.photos/seed/avatar/100/100" alt="User Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold leading-tight">早上好，张先生</h1>
                    <div className="flex items-center text-gray-500 text-xs mt-0.5">
                      <MapPin size={12} className="mr-1" />
                      <span>北京市第一人民医院</span>
                    </div>
                  </div>
                </div>
                <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                  <Scan size={20} />
                </button>
              </div>
              
              {/* Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-2.5 border border-transparent rounded-xl leading-5 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#007AFF] focus:border-transparent sm:text-sm transition-all" 
                  placeholder="搜索医生、科室、疾病、药品" 
                />
              </div>
            </header>

            <main className="px-5 py-6 space-y-6">
              
              {/* Hero Section (AI Feature) */}
              <section>
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#007AFF] to-[#0056b3] text-white shadow-lg shadow-blue-500/30">
                  {/* Decorative background elements */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
                  
                  <div className="p-5 relative z-10 flex justify-between items-center">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles size={18} className="text-yellow-300" />
                        <h2 className="text-lg font-bold tracking-wide">AI 辅助诊疗</h2>
                      </div>
                      <p className="text-blue-100 text-sm mb-4 leading-relaxed pr-4">
                        描述您的症状，AI 智能助手将为您推荐科室并解答疑问。
                      </p>
                      <button className="bg-white text-[#007AFF] text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:bg-blue-50 transition-colors flex items-center">
                        立即体验 <ChevronRight size={16} className="ml-1" />
                      </button>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-3 shadow-inner border border-white/30">
                        <Bot size={32} className="text-white" />
                      </div>
                      <button className="w-12 h-12 bg-[#34C759] rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:bg-green-500 transition-transform active:scale-95">
                        <Mic size={20} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Main Grid (Quick Actions) */}
              <section>
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setCurrentView('consultation')}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007AFF] flex items-center justify-center mb-3">
                      <Stethoscope size={22} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">在线咨询</h3>
                    <p className="text-xs text-gray-500">图文/视频问诊</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                      <Pill size={22} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">慢病复诊</h3>
                    <p className="text-xs text-gray-500">一键续方开药</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-3">
                      <Truck size={22} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">处方配送</h3>
                    <p className="text-xs text-gray-500">送药上门服务</p>
                  </div>
                  
                  <div 
                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => setCurrentView('followup')}
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                      <ClipboardList size={22} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">诊后随访</h3>
                    <p className="text-xs text-gray-500">康复进度追踪</p>
                  </div>
                </div>
              </section>

              {/* Special Care Widgets */}
              <section>
                <div className="flex justify-between items-end mb-3">
                  <h2 className="text-lg font-bold text-gray-900">特色关怀</h2>
                  <span className="text-xs text-gray-500 flex items-center cursor-pointer">全部 <ChevronRight size={14} /></span>
                </div>
                
                <div className="flex space-x-3 overflow-x-auto pb-2 no-scrollbar -mx-5 px-5">
                  {/* Remote Visitation */}
                  <div className="min-w-[160px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex-shrink-0">
                    <div className="h-20 bg-gray-200 relative">
                      <img src="https://picsum.photos/seed/hospital/300/150" alt="Hospital Room" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                          <Video size={16} className="text-white" />
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded-full flex items-center">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-1 animate-pulse"></span>
                        直播中
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm text-gray-900">远程探视</h3>
                      <p className="text-xs text-gray-500 mt-0.5">ICU病房在线探视</p>
                    </div>
                  </div>

                  {/* Fetal Heart Monitoring */}
                  <div className="min-w-[160px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex-shrink-0">
                    <div className="h-20 bg-rose-50 relative flex items-center justify-center overflow-hidden">
                      {/* Simulated Waveform */}
                      <svg className="w-full h-12 text-rose-400 opacity-70" viewBox="0 0 100 30" preserveAspectRatio="none">
                        <path d="M0,15 L10,15 L15,5 L20,25 L25,15 L40,15 L45,5 L50,25 L55,15 L70,15 L75,5 L80,25 L85,15 L100,15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                      <div className="absolute top-2 right-2 bg-white/80 text-rose-500 text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">
                        142 bpm
                      </div>
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm text-gray-900">远程胎心监测</h3>
                        <Activity size={14} className="text-rose-500" />
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">居家安心测胎心</p>
                    </div>
                  </div>

                  {/* Public Health */}
                  <div className="min-w-[160px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex-shrink-0">
                    <div className="h-20 bg-emerald-50 relative flex items-center justify-center">
                      <ShieldPlus size={32} className="text-emerald-500 opacity-80" />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium text-sm text-gray-900">公共卫生随访</h3>
                      <p className="text-xs text-gray-500 mt-0.5">社区健康管理</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Feed (Medical Popular Science) */}
              <section>
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-lg font-bold text-gray-900">医学科普</h2>
                  <span className="text-xs text-gray-500 flex items-center cursor-pointer">更多 <ChevronRight size={14} /></span>
                </div>
                
                <div className="space-y-3">
                  {/* Article 1 */}
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex space-x-3 active:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug mb-2">
                        春季流感高发期，如何正确区分普通感冒与甲流？
                      </h3>
                      <div className="flex items-center text-[11px] text-gray-400 space-x-2">
                        <span className="bg-blue-50 text-[#007AFF] px-1.5 py-0.5 rounded">呼吸内科</span>
                        <span>李建国 主任医师</span>
                        <span>1.2w 阅读</span>
                      </div>
                    </div>
                    <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <img src="https://picsum.photos/seed/flu/200/150" alt="Article Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>

                  {/* Article 2 */}
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex space-x-3 active:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug mb-2">
                        高血压患者日常饮食指南：这5种食物建议多吃
                      </h3>
                      <div className="flex items-center text-[11px] text-gray-400 space-x-2">
                        <span className="bg-orange-50 text-orange-500 px-1.5 py-0.5 rounded">心血管科</span>
                        <span>王芳 副主任医师</span>
                        <span>8540 阅读</span>
                      </div>
                    </div>
                    <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <img src="https://picsum.photos/seed/food/200/150" alt="Article Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                  
                  {/* Article 3 */}
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex space-x-3 active:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-snug mb-2">
                        经常熬夜掉头发？皮肤科医生教你科学防脱
                      </h3>
                      <div className="flex items-center text-[11px] text-gray-400 space-x-2">
                        <span className="bg-purple-50 text-purple-500 px-1.5 py-0.5 rounded">皮肤科</span>
                        <span>张伟 主治医师</span>
                        <span>2.1w 阅读</span>
                      </div>
                    </div>
                    <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                      <img src="https://picsum.photos/seed/hair/200/150" alt="Article Thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                  </div>
                </div>
              </section>
              
            </main>

            {/* Bottom Navigation */}
            <nav className="absolute bottom-0 w-full bg-white border-t border-gray-100 px-6 py-2 pb-safe flex justify-between items-center z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col items-center justify-center text-[#007AFF] cursor-pointer">
                <Home size={24} className="mb-1" />
                <span className="text-[10px] font-medium">首页</span>
              </div>
              <div className="flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <MessageCircle size={24} className="mb-1" />
                <span className="text-[10px] font-medium">消息</span>
              </div>
              <div className="flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <FileText size={24} className="mb-1" />
                <span className="text-[10px] font-medium">病历</span>
              </div>
              <div className="flex flex-col items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                <User size={24} className="mb-1" />
                <span className="text-[10px] font-medium">我的</span>
              </div>
            </nav>
          </>
        )}

        {currentView === 'consultation' && (
          <div className="bg-gray-50 min-h-screen pb-6">
            {/* Consultation Header */}
            <header className="px-5 pt-12 pb-4 bg-white sticky top-0 z-10 shadow-sm flex items-center">
              <button 
                onClick={() => setCurrentView('home')}
                className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <h1 className="text-lg font-semibold flex-1 text-center pr-8">在线咨询</h1>
            </header>

            <main className="px-5 py-4 space-y-6">
              {/* Search */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  className="block w-full pl-10 pr-3 py-2.5 border border-transparent rounded-xl leading-5 bg-white shadow-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent sm:text-sm transition-all" 
                  placeholder="搜索医生姓名、科室、疾病" 
                />
              </div>

              {/* Departments Grid */}
              <section>
                <h2 className="text-base font-bold text-gray-900 mb-3">按科室找医生</h2>
                <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                  {[
                    { name: '内科', icon: '🫀' },
                    { name: '外科', icon: '🦴' },
                    { name: '儿科', icon: '👶' },
                    { name: '妇产科', icon: '🤰' },
                    { name: '皮肤科', icon: '🧴' },
                    { name: '眼科', icon: '👁️' },
                    { name: '耳鼻喉', icon: '👂' },
                    { name: '全科', icon: '🏥' },
                  ].map((dept, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer group">
                      <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-xl mb-1 group-hover:bg-blue-50 transition-colors">
                        {dept.icon}
                      </div>
                      <span className="text-xs text-gray-600">{dept.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Recommended Doctors */}
              <section>
                <div className="flex justify-between items-end mb-3">
                  <h2 className="text-base font-bold text-gray-900">推荐医生</h2>
                  <span className="text-xs text-gray-500 flex items-center cursor-pointer">筛选 <ChevronRight size={14} /></span>
                </div>

                <div className="space-y-3">
                  {/* Doctor 1 */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img src="https://picsum.photos/seed/doc1/150/150" alt="Doctor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-gray-900 text-base">王建国 <span className="text-xs font-normal text-gray-500 ml-1">主任医师</span></h3>
                            <p className="text-xs text-gray-500 mt-0.5">心血管内科 | 北京市第一人民医院</p>
                          </div>
                          <div className="flex items-center text-orange-500 text-xs font-medium bg-orange-50 px-1.5 py-0.5 rounded">
                            <Star size={12} className="mr-0.5 fill-current" /> 4.9
                          </div>
                        </div>
                        
                        <div className="mt-2 flex items-center text-xs text-gray-500 space-x-3">
                          <span className="flex items-center"><ThumbsUp size={12} className="mr-1" /> 98% 好评</span>
                          <span className="flex items-center"><MessageCircle size={12} className="mr-1" /> 2340 问诊量</span>
                        </div>

                        <div className="mt-3 flex space-x-2">
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">高血压</span>
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">冠心病</span>
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">心律失常</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-gray-500">图文问诊 </span>
                        <span className="text-rose-500 font-semibold">¥49</span>
                      </div>
                      <button className="bg-[#007AFF] text-white text-sm font-medium px-5 py-1.5 rounded-full hover:bg-blue-600 transition-colors">
                        去问诊
                      </button>
                    </div>
                  </div>

                  {/* Doctor 2 */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img src="https://picsum.photos/seed/doc2/150/150" alt="Doctor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-gray-900 text-base">李雪梅 <span className="text-xs font-normal text-gray-500 ml-1">副主任医师</span></h3>
                            <p className="text-xs text-gray-500 mt-0.5">呼吸内科 | 北京市第一人民医院</p>
                          </div>
                          <div className="flex items-center text-orange-500 text-xs font-medium bg-orange-50 px-1.5 py-0.5 rounded">
                            <Star size={12} className="mr-0.5 fill-current" /> 4.8
                          </div>
                        </div>
                        
                        <div className="mt-2 flex items-center text-xs text-gray-500 space-x-3">
                          <span className="flex items-center"><ThumbsUp size={12} className="mr-1" /> 96% 好评</span>
                          <span className="flex items-center"><MessageCircle size={12} className="mr-1" /> 1850 问诊量</span>
                        </div>

                        <div className="mt-3 flex space-x-2">
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">哮喘</span>
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">慢性支气管炎</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-gray-500">图文问诊 </span>
                        <span className="text-rose-500 font-semibold">¥39</span>
                      </div>
                      <button className="bg-[#007AFF] text-white text-sm font-medium px-5 py-1.5 rounded-full hover:bg-blue-600 transition-colors">
                        去问诊
                      </button>
                    </div>
                  </div>
                  
                  {/* Doctor 3 */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                        <img src="https://picsum.photos/seed/doc3/150/150" alt="Doctor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-gray-900 text-base">张伟 <span className="text-xs font-normal text-gray-500 ml-1">主治医师</span></h3>
                            <p className="text-xs text-gray-500 mt-0.5">皮肤科 | 北京市第一人民医院</p>
                          </div>
                          <div className="flex items-center text-orange-500 text-xs font-medium bg-orange-50 px-1.5 py-0.5 rounded">
                            <Star size={12} className="mr-0.5 fill-current" /> 4.9
                          </div>
                        </div>
                        
                        <div className="mt-2 flex items-center text-xs text-gray-500 space-x-3">
                          <span className="flex items-center"><ThumbsUp size={12} className="mr-1" /> 99% 好评</span>
                          <span className="flex items-center"><MessageCircle size={12} className="mr-1" /> 3200 问诊量</span>
                        </div>

                        <div className="mt-3 flex space-x-2">
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">皮炎</span>
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">湿疹</span>
                          <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded">痤疮</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-50 flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-gray-500">图文问诊 </span>
                        <span className="text-rose-500 font-semibold">¥29</span>
                      </div>
                      <button className="bg-[#007AFF] text-white text-sm font-medium px-5 py-1.5 rounded-full hover:bg-blue-600 transition-colors">
                        去问诊
                      </button>
                    </div>
                  </div>

                </div>
              </section>
            </main>
          </div>
        )}

        {currentView === 'followup' && (
          <div className="bg-gray-50 min-h-screen pb-6">
            {/* Followup Header */}
            <header className="px-5 pt-12 pb-4 bg-white sticky top-0 z-10 shadow-sm flex items-center">
              <button 
                onClick={() => setCurrentView('home')}
                className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft size={24} />
              </button>
              <h1 className="text-lg font-semibold flex-1 text-center pr-8">诊后随访</h1>
            </header>

            <main className="px-5 py-4 space-y-6">
              {/* Follow-up Application Prompt */}
              <section>
                <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl p-5 text-white shadow-md relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertCircle size={20} className="text-emerald-100" />
                      <h2 className="text-lg font-bold">需要随访申请？</h2>
                    </div>
                    <p className="text-emerald-50 text-sm mb-4 leading-relaxed">
                      如果您近期有就诊记录，可以向主治医生发起诊后随访申请，以便医生跟进您的康复情况。
                    </p>
                    <button 
                      onClick={() => setShowConfirmModal(true)}
                      className="bg-white text-teal-600 text-sm font-medium px-5 py-2 rounded-full shadow-sm hover:bg-teal-50 transition-colors w-full flex justify-center items-center"
                    >
                      发起随访申请
                    </button>
                  </div>
                </div>
              </section>

              {/* Follow-up History */}
              <section>
                <h2 className="text-base font-bold text-gray-900 mb-3">随访历史</h2>
                
                <div className="space-y-4">
                  {/* History Item 1 */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-50">
                      <div className="flex items-center space-x-2">
                        <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-0.5 rounded font-medium">已完成</span>
                        <span className="text-sm text-gray-500">2023-10-15</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">高血压常规随访</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://picsum.photos/seed/doc1/100/100" alt="Doctor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">王建国 <span className="text-xs text-gray-500 font-normal ml-1">心血管内科</span></p>
                        <p className="text-xs text-gray-500 mt-0.5">北京市第一人民医院</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-xl text-sm text-gray-600">
                      <p className="line-clamp-2">医生建议：血压控制良好，请继续保持当前用药方案，注意低盐饮食，适量运动。下个月复查肝肾功能。</p>
                    </div>
                  </div>

                  {/* History Item 2 */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-3 pb-3 border-b border-gray-50">
                      <div className="flex items-center space-x-2">
                        <span className="bg-emerald-100 text-emerald-600 text-xs px-2 py-0.5 rounded font-medium">已完成</span>
                        <span className="text-sm text-gray-500">2023-08-22</span>
                      </div>
                      <span className="text-sm font-medium text-gray-900">出院后一周随访</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                        <img src="https://picsum.photos/seed/doc2/100/100" alt="Doctor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">李雪梅 <span className="text-xs text-gray-500 font-normal ml-1">呼吸内科</span></p>
                        <p className="text-xs text-gray-500 mt-0.5">北京市第一人民医院</p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-xl text-sm text-gray-600">
                      <p className="line-clamp-2">医生建议：咳嗽症状明显减轻，肺部听诊清晰。继续服用止咳化痰药物3天，注意保暖，避免受凉。</p>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          </div>
        )}

        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowConfirmModal(false)}></div>
            <div className="bg-white rounded-3xl w-full max-w-sm p-6 relative z-10 shadow-2xl transform transition-all">
              <button 
                onClick={() => setShowConfirmModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col items-center text-center mb-6 mt-2">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                  <ClipboardList size={32} className="text-[#007AFF]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">确认随访申请</h3>
                <p className="text-sm text-gray-500 mt-2">请确认以下随访信息</p>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-4 mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <User size={16} className="mr-2" />
                    <span>随访医生</span>
                  </div>
                  <span className="font-medium text-gray-900">王建国 (心血管内科)</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>随访类型</span>
                  </div>
                  <span className="font-medium text-gray-900">高血压复诊随访</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>预计时间</span>
                  </div>
                  <span className="font-medium text-[#007AFF]">明天 14:00 - 16:00</span>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowConfirmModal(false)}
                  className="flex-1 py-3 rounded-xl text-gray-600 font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  取消
                </button>
                <button 
                  onClick={handleConfirmFollowup}
                  className="flex-1 py-3 rounded-xl text-white font-medium bg-[#007AFF] hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/30"
                >
                  确认申请
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Safe area padding for modern iPhones */}
        <div className="absolute bottom-0 w-full h-6 bg-white z-10"></div>
      </div>
    </div>
  );
}
