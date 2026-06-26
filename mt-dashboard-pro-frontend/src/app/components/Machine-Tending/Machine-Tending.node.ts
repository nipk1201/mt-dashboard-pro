import { ApplicationNode } from '@universal-robots/contribution-api';

export interface MachineTendingNode extends ApplicationNode {
  type: string;
  version: string;
}
