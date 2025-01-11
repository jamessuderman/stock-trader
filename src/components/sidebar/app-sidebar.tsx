import * as React from "react";
import {
  ArrowDownUp,
  AlignHorizontalDistributeCenterIcon,
  ChartSpline,
  Settings2,
  List,
  House,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Nathan Suderman",
    email: "natesuderman@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Trader",
      logo: ChartSpline,
      plan: "Enterprise",
      url: "",
    },
    {
      name: "API",
      logo: ArrowDownUp,
      plan: "",
      url: "https://sudcosolutions.com/swagger/",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: House,
      isActive: true,
    },
    {
      title: "Stocks",
      url: "/stocks",
      icon: List,
    },
    {
      title: "Charts",
      url: "/charts",
      icon: AlignHorizontalDistributeCenterIcon,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
