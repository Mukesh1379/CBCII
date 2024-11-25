export interface ComplianceRequirement {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'not_applicable';
  priority: 'high' | 'medium' | 'low';
  deadline?: string;
}

export interface Incentive {
  id: string;
  title: string;
  description: string;
  value: string;
  eligibility: string[];
  type: 'tax_rebate' | 'grant' | 'sustainability' | 'other';
}

export interface RiskScore {
  category: string;
  score: number;
  trend: 'up' | 'down' | 'stable';
  factors: string[];
}

export interface Market {
  id: string;
  name: string;
  code: string;
  riskScore: number;
  complianceCount: number;
  incentiveCount: number;
}