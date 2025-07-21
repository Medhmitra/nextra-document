"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

interface HelpItem {
  title: string;
  description: string;
  image: string;
  Link: string;
}

interface HelpTopic {
  category: string;
  items: HelpItem[];
}

const helpTopics: HelpTopic[] = [
  {
    category: "Your workspace",
    items: [
      {
        title: "Create a new workspace ",
        description:
          "Set up a dedicated workspace for your salon or business in just a few clicks. Customize it with your branding, team, and service offerings to start managing operations from day one",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/create-repeatappointment",
      },
      {
        title: "Update your business details",
        description:
          "Easily edit your salon name, contact information, business category, and other key details to keep your profile accurate and professional across client touchpoints.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/create-repeatappointment",
      },
      {
        title: "Update your business opening hours ",
        description:
          "Adjust your business hours anytime to reflect seasonal changes, staff availability, or special events. Ensure clients can always book at the right times.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/update",
      },
    ],
  },
  {
    category: "Locations",
    items: [
      {
        title: "Create and manage business locations",
        description:
          "Whether you’re expanding to a second branch or organizing services by location, daSalon helps you create, manage, and monitor multiple business addresses under one account.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/update",
      },
    ],
  },
  {
    category: "Workspace access",
    items: [
      {
        title: "Join a workspace",
        description:
          "Accept an invitation to join your team’s workspace as a staff member. Gain access to appointments, clients, and settings based on your assigned role.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/create",
      },
      {
        title: "Leave a workspace as a team member",
        description:
          "Step away from a workspace when you no longer need access. Your account remains intact, and you can always join another team or create your own workspace.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/create",
      },
    ],
  },
  {
    category: "Ownership and controls",
    items: [
      {
        title: "Change ownership of your workspaces",
        description:
          "Easily transfer ownership of your daSalon workspace to another team member. Ideal for business transitions or when responsibilities shift within your team.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/create",
      },
      {
        title: "Delete a workspace as an owner",
        description:
          "Permanently remove a workspace when it's no longer needed. Be sure to export any data beforehand—this action can't be undone.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "/create",
      },
    ],
  },
];

export default function WorkSettingsPage() {
  const [open, setOpen] = useState<boolean>(false);
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      topicRefs.current.forEach((ref, index) => {
        if (
          ref &&
          ref.offsetTop - 100 <= scrollPosition &&
          ref.offsetTop + ref.offsetHeight > scrollPosition
        ) {
          document
            .querySelectorAll(".sidebar-item")
            .forEach((el) =>
              el.classList.remove("text-black", "font-semibold")
            );
          const current = document.getElementById(`sidebar-${index}`);
          current?.classList.add("text-black", "font-semibold");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopic = (index: number) => {
    topicRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b shadow-sm bg-white w-full">
        <div className="flex items-center space-x-2">
          <img src="/assets/logo.png" alt="Logo" className="h-6" />
          <span className="font-semibold text-lg text-black">Help Center</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <a href="/main" className="text-sm font-medium text-black">Home</a>
          <a href="/main" className="text-sm font-medium text-black border-b-2 border-black">Info dock</a>
          <a href="#" className="text-sm font-medium text-black">Academy</a>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:flex items-center border rounded px-2">
            <Search className="h-4 w-4 text-gray-500" />
            <Input
              type="text"
              placeholder="Search our help center"
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-64"
            />
          </div>
          <Menu
            className="md:hidden w-6 h-6 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        </div>
      </header>

      {/* Page Content */}
      <main className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-32 xl:px-48">
        <img src="/assets/settings.png" alt="Workspace settings visual" />
        <h1 className="text-3xl font-bold mb-2 text-black">Workspace settings</h1>
        <p className="text-gray-600 mb-8 max-w-full">
          Customize your daSalon environment to fit your business needs. From configuring staff roles and permissions to adjusting business hours and notification preferences,
          workspace settings help you maintain control and consistency across your entire team.
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Sidebar */}
          <aside className="md:w-1/4 w-full bg-white border rounded-xl shadow-sm p-4 h-fit md:h-[calc(100vh-6rem)] sticky top-24 overflow-y-auto">
            <ul className="space-y-2">
              {helpTopics.map((topic, index) => (
                <li
                  key={topic.category}
                  id={`sidebar-${index}`}
                  className="sidebar-item text-sm font-medium text-gray-700 hover:text-black cursor-pointer"
                  onClick={() => scrollToTopic(index)}
                >
                  {topic.category}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <section className="flex-1 space-y-16">
            {helpTopics.map((topic, index) => (
              <div
                key={topic.category}
                ref={(el) => {topicRefs.current[index] = el}}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  {topic.category}
                </h2>
                <div className="flex flex-col gap-6">
                  {topic.items.length > 0 ? (
                    topic.items.map((item, idx) => (
                      <Link href={item.Link} key={idx}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="flex items-start gap-4 p-4">
                            {/*<img
                              src={item.image}
                              alt={item.title}
                              className="w-24 h-16 rounded-md object-cover border"
                            />*/}
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">
                                {item.title}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">No content available.</p>
                  )}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Mobile Sidebar */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[250px]">
          <div className="p-4 space-y-4">
            <div className="font-bold text-lg">Help Center</div>
            <ul className="space-y-2">
              {helpTopics.map((topic, index) => (
                <li
                  key={topic.category}
                  className="text-sm font-medium text-gray-700 hover:text-black cursor-pointer"
                  onClick={() => {
                    scrollToTopic(index);
                    setOpen(false);
                  }}
                >
                  {topic.category}
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
