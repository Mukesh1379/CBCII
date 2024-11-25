import React from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';
import type { ComplianceRequirement } from '../types';

const requirements: ComplianceRequirement[] = [
  {
    id: '1',
    title: 'FDA Approval',
    description: 'Complete FDA registration and documentation',
    status: 'completed',
    priority: 'high',
    deadline: '2024-04-15'
  },
  {
    id: '2',
    title: 'ASTM D6400 Standards',
    description: 'Obtain certification for biodegradable materials',
    status: 'pending',
    priority: 'high',
    deadline: '2024-05-01'
  },
  {
    id: '3',
    title: 'Tariff Documentation',
    description: 'Prepare documentation for tariff exemptions',
    status: 'pending',
    priority: 'medium',
    deadline: '2024-05-15'
  }
];

export default function ComplianceChecklist() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-slate-800">Compliance Requirements</h2>
        <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
          Add Requirement
        </button>
      </div>

      <div className="space-y-4">
        {requirements.map((req) => (
          <div
            key={req.id}
            className="flex items-start p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition"
          >
            <div className="flex-shrink-0 mt-1">
              {req.status === 'completed' ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : req.status === 'pending' ? (
                <Clock className="h-5 w-5 text-yellow-500" />
              ) : (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-900">{req.title}</h3>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${req.priority === 'high' ? 'bg-red-100 text-red-800' :
                    req.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'}`}>
                  {req.priority.charAt(0).toUpperCase() + req.priority.slice(1)}
                </span>
              </div>
              <p className="mt-1 text-sm text-slate-600">{req.description}</p>
              {req.deadline && (
                <p className="mt-2 text-xs text-slate-500">
                  Deadline: {new Date(req.deadline).toLocaleDateString()}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}