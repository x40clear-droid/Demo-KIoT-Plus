
import { NavItem, FeatureCard, SectorCard, NewsletterArchive } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: '서비스 개요', href: '#overview' },
  { label: '서비스 특장점', href: '#features' },
  { label: '주요 적용 분야', href: '#sectors' },
  { label: '고객 지원', href: '#support' },
];

export const FEATURES: FeatureCard[] = [
  {
    title: '지능형 스마트 진단 룰',
    description: '독자적 알고리즘으로 오탐 방지 및 정확한 설비 진단',
    icon: 'fa-microchip',
  },
  {
    title: '디지털 이력 자산화',
    description: '모든 점검 기록의 디지털 데이터 누적 및 체계적 관리',
    icon: 'fa-database',
  },
  {
    title: '분석 기반 예지보전',
    description: '고장 발생 전 선제적 정비 권고로 유휴 시간 및 손실 차단',
    icon: 'fa-chart-line',
  },
  {
    title: '실시간 감시 및 즉각 대응',
    description: '24/7 중단 없는 모니터링 및 이상 발생 시 즉각 대응 체계',
    icon: 'fa-tower-broadcast',
  },
  {
    title: '맞춤형 구성을 통한 비용 절감',
    description: '정밀 진단 결과를 기반으로 한 건물별 최적의 서비스 구성',
    icon: 'fa-coins',
  },
  {
    title: '안정적인 서비스 지속성',
    description: '장기적인 관점의 건물 관리 파트너로서 지속 가능한 가치 제공',
    icon: 'fa-handshake-angle',
  },
];

export const SECTORS: SectorCard[] = [
  {
    title: '전기 설비 진단',
    description: '배전반, UPS 등 핵심 전기 설비의 상태를 실시간 모니터링합니다.',
    details: '배전 시스템 판넬 및 전력 품질 정밀 진단',
    image: 'https://images.unsplash.com/photo-1558484663-962a03a85024?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '기계 설비 안정화',
    description: '공조기, 펌프 등 기계 설비의 진동과 상태를 정밀 감시합니다.',
    details: '펌프/공조기 예지보전 센서 데이터 분석',
    image: 'https://images.unsplash.com/photo-1581094281212-499055d936cb?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '통합 소방 경보',
    description: '방재실 소방 제어반과 연동하여 발화 위치를 정확히 식별합니다.',
    details: '지능형 소방 수신기 통합 원격 관제',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '보안 및 미화 관리',
    description: '누수 감지 및 보안 취약 지구 모니터링으로 안정적 환경을 유지합니다.',
    details: '사각지대 누수 및 출입 보안 실시간 감지',
    image: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: '실내 환경 및 기타 진단',
    description: '스마트 오피스의 공기질, 온습도를 감지하여 쾌적한 환경을 조성합니다.',
    details: 'IoT 기반 통합 환경 센싱 및 제어 시스템',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
  },
];

export const NEWSLETTER_ARCHIVE: NewsletterArchive[] = [
  { vol: 12, date: '2024.12', title: '스마트 빌딩 자산 가치 상승 전략' },
  { vol: 11, date: '2024.11', title: '예지보전 시스템 도입 성공 사례 분석' },
  { vol: 10, date: '2024.10', title: 'K-IoT Plus 디지털 트랜스포메이션 가이드' },
];
