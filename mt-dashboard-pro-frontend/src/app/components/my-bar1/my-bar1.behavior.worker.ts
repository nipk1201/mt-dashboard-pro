import {
  registerSidebarBehavior,
  SidebarItemBehaviors,
} from "@universal-robots/contribution-api";

const behaviors: SidebarItemBehaviors = {
  factory: () => {
    return {
      type: "universal-robots-mt-dashboard-pro-my-bar1",
      version: "1.0.0",
    };
  },
};

registerSidebarBehavior(behaviors);
