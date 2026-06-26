/// <reference lib="webworker" />
import {
  OperatorScreenBehaviors,
  registerOperatorScreenBehavior
} from '@universal-robots/contribution-api';

const behaviors: OperatorScreenBehaviors = {
  factory: () => {
    return {
      type: "universal-robots-mt-dashboard-pro-my-os1",
      version: "1.0.0",
    };
  },
};

registerOperatorScreenBehavior(behaviors);
