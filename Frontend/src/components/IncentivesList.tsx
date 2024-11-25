import React from 'react';
import { DollarSign, Leaf, Receipt } from 'lucide-react';
import type { Incentive } from '../types';

const incentives: Incentive[] = [
  {
    id: '1',
    title: 'RoDTEP Export Benefit',
    description: '5% rebate on total export value for eco-friendly packaging',
    value: '5% of export value',
    eligibility: ['Registered exporter', 'Eco-certified products'],
    type: 'tax_rebate'
  },
  {
    id: '2',
    title: 'Green Sustainability Grant',
    description: 'Government grant for sustainable packaging solutions',
    value: '$10,000',
    eligibility: ['Biodegradable materials', 'Carbon footprint reduction'],
    type: 'sustainability'
  },
  {
    id: '3',
    title: 'Innovation Tax Credit',
    description: 'R&D tax credit for innovative packaging solutions',
    value: '15% of R&D expenses',
    eligibility: ['Research documentation', 'Patent filing'],
    type: 'grant'
  }
];

export default function IncentivesList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Available Incentives</h2>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {incentives.map((incentive) => (
          <div
            key={incentive.id}
            className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {incentive.type === 'tax_rebate' ? (
                  <Receipt className="h-6 w-6 text-blue-500" />
                ) : incentive.type === 'sustainability' ? (
                  <Leaf className="h-6 w-6 text-green-500" />
                ) : (
                  <DollarSign className="h-6 w-6 text-purple-500" />
                )}
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-slate-900">{incentive.title}</h3>
                  <span className="text-sm font-semibold text-slate-900">{incentive.value}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{incentive.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {incentive.eligibility.map((criteria, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-200 text-slate-800"
                    >
                      {criteria}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}