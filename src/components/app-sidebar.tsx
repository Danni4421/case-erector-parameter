import {
  Activity,
  ArrowRightLeft,
  Beaker,
  Box,
  DoorOpen,
  Inbox,
  Timer,
  Wrench,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Mechanic",
    url: "/mechanic",
    icon: Wrench,
  },
  {
    title: "HMI",
    url: "/hmi",
    icon: Inbox,
  },
  {
    title: "Carton",
    url: "/carton",
    icon: Box,
  },
  {
    title: "Transfer",
    url: "/carton-transfer",
    icon: ArrowRightLeft,
  },
  {
    title: "Opening",
    url: "/opening",
    icon: DoorOpen,
  },
  {
    title: "Belts",
    url: "/belts",
    icon: Activity,
  },
  {
    title: "Timers",
    url: "/timers",
    icon: Timer,
  },
  {
    title: "Outfeed Conveyor",
    url: "/outfeed-conveyor",
    icon: Beaker,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Case Erector Parameter</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
