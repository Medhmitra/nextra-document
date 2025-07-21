"use client";

import React, { useRef, useState, useEffect, JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

interface HelpItem {
  title: string;
  description: string;
  Link: string;
}

interface HelpTopic {
  category: string;
  items: HelpItem[];
}

// Only showing one topic for brevity — include the full list in your real code
const helpTopics: HelpTopic[] = [
  {
    category: "Appointments",
    items: [
      {
        title: "Create appointments",
        description:
          "Start scheduling appointments with detailed client and service information.",
        
        Link: "calendar/Appointment/create-appointment",
      },
      {
        title: "Update appointments",
        description:
          "Make changes to existing appointments, such as updating service details, changing team members, or adjusting duration to reflect client needs.",
        
        Link: "calendar/Appointment/update",
      },
      {
        title: "Reschedule appointments",
        description:
          "Easily move appointments to a different date or time while keeping clients informed and your calendar up to date.",
        
        Link: "calendar/Appointment/reschedule",
      },
      {
        title: "Cancel appointments",
        description:
          "Cancel appointments in just a few clicks with the option to notify clients and track cancellations for better schedule management.",
        
        Link: "calendar/Appointment/cancel",
      },
      {
        title: "Complete appointments",
        description:
          "Mark appointments as complete to finalize the visit, trigger follow-ups, and maintain accurate client records and service history.",
        
        Link: "calendar/Appointment/complete",
      },
      {
        title: "No-Show appointments",
        description:
          "Helps analyze client reliability, avoid no-show patterns, and plan future bookings better.",
        
        Link: "calendar/Appointment/no-show",
      },
      {
        title: "Delete appointments",
        description:
          "Keeps your records clean without losing important business data",
        
        Link: "calendar/Appointment/delete",
      },
    ],
  },
  {
    category: "Calendar",
    items: [
      {
        title: "Filter by Venue, Staff, or Status",
        description:
          "Start scheduling appointments with detailed client and service information.",
        
        Link: "calendar/Appointment/filter",
      },
      {
        title: "Pick Date Range",
        description:
             "See appointments for today, previous days, upcoming days, or pick a custom date range to view past or future bookings.",
        
        Link: "calendar/Appointment/daterange",
      },
      {
        title: "Switch Between Day or Week View",
        description:
          "Zoom into a single day for detailed appointment slots or step back and see the full week’s schedule across your team.",
        
        Link:"calendar/Appointment/day",
      },
      {
        title: "Click Any Appointment for Full Control",
        description:
          "Manage all aspects of an appointment — from editing and rescheduling to canceling, deleting, and checking out.",
        
        Link: "calendar/Appointment/appoint",
      },
    ],
  },
];

export default function CalendarPage(): React.JSX.Element {
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
            .forEach((el) => el.classList.remove("text-black", "font-semibold"));

          const current = document.getElementById(`sidebar-${index}`);
          current?.classList.add("text-black", "font-semibold");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopic = (index: number): void => {
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
          <Menu className="md:hidden w-6 h-6 cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </header>

      {/* Page Content */}
      <main className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-32 xl:px-48">
        <img src="/assets/callendar.png" alt="Calendar GIF" />
        <h1 className="text-3xl font-bold mb-2 text-black">Calendar and schedule</h1>
        <p className="text-gray-600 mb-8 max-w-full">
          Take charge of your schedule with daSalon. Manage appointments, team
          availability, and resources in one place with a flexible calendar
          built for beauty and wellness businesses. </p>
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
                ref={(el) => {
                  topicRefs.current[index] = el;
                }}
                className="scroll-mt-24"
              >
                <h2 className="text-2xl font-semibold mb-4  text-gray-900">{topic.category}</h2>
                <div className="flex flex-col gap-6">
                  {topic.items.length > 0 ? (
                    topic.items.map((item, idx) => (
                      <Link href={item.Link} key={idx}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                          <CardContent className="flex items-start gap-4 p-4">
                            {/*//<img
                             // src={item.image}
                             // alt={item.title}
                             // className="w-24 h-16 rounded-md object-cover border"
                            />*/}
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
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