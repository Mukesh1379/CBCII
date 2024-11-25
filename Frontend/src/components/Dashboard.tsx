import React from 'react';
import { BarChart3, Shield, Gift, Globe2 } from 'lucide-react';
import MarketOverview from './MarketOverview';
import RiskAssessment from './RiskAssessment';
import ComplianceChecklist from './ComplianceChecklist';
import IncentivesList from './IncentivesList';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Globe2 className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-slate-800">CBCII</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                New Analysis
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard
            icon={<Shield className="h-6 w-6 text-emerald-600" />}
            title="Compliance Score"
            value="92%"
            trend="+5%"
            trendUp={true}
          />
          <StatCard
            icon={<BarChart3 className="h-6 w-6 text-blue-600" />}
            title="Risk Level"
            value="Low"
            subtitle="Based on 15 factors"
          />
          <StatCard
            icon={<Gift className="h-6 w-6 text-purple-600" />}
            title="Available Incentives"
            value="12"
            subtitle="$50,000 potential value"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <MarketOverview />
          <RiskAssessment />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <ComplianceChecklist />
          <IncentivesList />
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, title, value, trend, trendUp, subtitle }: {
  icon: React.ReactNode;
  title: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  subtitle?: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between">
        <div className="bg-slate-50 p-3 rounded-lg">{icon}</div>
        {trend && (
          <span className={`text-sm font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
            {trend}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-lg font-medium text-slate-800">{title}</h3>
      <div className="mt-2">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
        {subtitle && (
          <p className="text-sm text-slate-600 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
}