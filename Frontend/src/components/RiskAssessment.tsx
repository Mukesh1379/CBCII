import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { RiskScore } from '../types';

const riskScores: RiskScore[] = [
  {
    category: 'Regulatory Compliance',
    score: 85,
    trend: 'up',
    factors: ['Updated documentation', 'Certification renewal']
  },
  {
    category: 'Market Stability',
    score: 72,
    trend: 'down',
    factors: ['Economic fluctuations', 'Political changes']
  },
  {
    category: 'Supply Chain',
    score: 90,
    trend: 'stable',
    factors: ['Reliable partners', 'Multiple suppliers']
  }
];

export default function RiskAssessment() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Risk Assessment</h2>
        <AlertTriangle className="h-5 w-5 text-yellow-500" />
      </div>

      <div className="space-y-6">
        {riskScores.map((risk) => (
          <div key={risk.category} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">{risk.category}</span>
              <span className="text-sm text-slate-600">{risk.score}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  risk.score >= 80 ? 'bg-green-500' :
                  risk.score >= 60 ? 'bg-yellow-500' :
                  'bg-red-500'
                }`}
                style={{ width: `${risk.score}%` }}
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className={`text-xs ${
                risk.trend === 'up' ? 'text-green-600' :
                risk.trend === 'down' ? 'text-red-600' :
                'text-slate-600'
              }`}>
                {risk.trend === 'up' ? '↑' :
                 risk.trend === 'down' ? '↓' :
                 '→'}
              </span>
              <span className="text-xs text-slate-500">
                {risk.factors.join(' • ')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}