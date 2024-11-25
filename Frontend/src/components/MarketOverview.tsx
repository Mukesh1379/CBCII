import React from 'react';
import { Globe } from 'lucide-react';
import type { Market } from '../types';

const markets: Market[] = [
  {
    id: '1',
    name: 'United States',
    code: 'US',
    riskScore: 82,
    complianceCount: 15,
    incentiveCount: 8
  },
  {
    id: '2',
    name: 'European Union',
    code: 'EU',
    riskScore: 78,
    complianceCount: 22,
    incentiveCount: 12
  },
  {
    id: '3',
    name: 'United Kingdom',
    code: 'UK',
    riskScore: 85,
    complianceCount: 18,
    incentiveCount: 6
  }
];

export default function MarketOverview() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Market Overview</h2>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          View All Markets
        </button>
      </div>
      
      <div className="space-y-4">
        {markets.map((market) => (
          <div
            key={market.id}
            className="flex items-center p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition cursor-pointer"
          >
            <div className="flex-shrink-0">
              <Globe className="h-6 w-6 text-slate-600" />
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-sm font-medium text-slate-900">{market.name}</h3>
              <div className="mt-1 flex items-center space-x-4 text-sm text-slate-600">
                <span>Risk Score: {market.riskScore}</span>
                <span>•</span>
                <span>{market.complianceCount} Requirements</span>
                <span>•</span>
                <span>{market.incentiveCount} Incentives</span>
              </div>
            </div>
            <div className="ml-4">
              <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                ${market.riskScore >= 80 ? 'bg-green-100 text-green-800' :
                  market.riskScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'}`}>
                {market.riskScore >= 80 ? 'Low Risk' :
                 market.riskScore >= 60 ? 'Medium Risk' :
                 'High Risk'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}