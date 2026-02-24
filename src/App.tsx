/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  Sparkles
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center font-sans text-gray-900">
      {/* Mobile Container */}
      <div className="w-full max-w-md bg-[#F5F7FA] min-h-screen relative pb-24 shadow-2xl overflow-x-hidden">
        
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
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer">
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
              
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start hover:shadow-md transition-shadow cursor-pointer">
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
        
        {/* Safe area padding for modern iPhones */}
        <div className="absolute bottom-0 w-full h-6 bg-white z-10"></div>
      </div>
    </div>
  );
}
