"use client";

import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

// Types
interface HelpItem {
  title: string;
  description: string;
  Link: string;
}

interface HelpTopic {
  category: string;
  items: HelpItem[];
}

// Data
const helpTopics: HelpTopic[] = [
  {
    category: "Get Featured ",
    items: [
      {
        title: "Add a Get Featured Request",
        description:
          "To increase visibility and attract more bookings by promoting your salon on da Salon's spotlight section.",
        
        Link: "Promote/addgetfeatured",
      },
      {
        title: "Approved Status",
        description:
          "Confirms your campaign is live, so clients start seeing your venue immediately.",
        
        Link: "Promote/approvedgf",
      },
      {
        title: "Completed Status",
        description:
          " Indicates the featured listing period has ended—helps analyze results and plan future campaigns.",
        
        Link: "Promote/completedgf",
      },
      {
        title: "Pending Status",
        description:
          "Lets you plan promotions in advance, ensuring a smooth start when the time comes.",
        
        Link: "Promote/pendinggf",
      },
      {
        title: "In Progress Status",
        description:
          " Notifies that your venue is actively featured and benefiting from increased client visibility.",
        
        Link: "Promote/inprogressgf",
      },
    ],
  },
  {
    category: "Easy Share",
    items: [
      {
        title: "Create Easy Share Link",
        description:
          "To quickly generate links clients can use to book services—ideal for WhatsApp, SMS, or Instagram.",
        
        Link: "Promote/createeasyshare",
      },
      {
        title: "Use Easy Share Link/QR",
        description:
          "Makes it easy to promote your salon offline and online with scannable, sharable codes.",
        
        Link: "Promote/useeasyshare",
      },
    ],
  },
  {
    category: "Creative Studio",
    items: [
      {
        title: "Create New Template",
        description:
          "Allows you to launch a campaign from scratch or a template without hiring a designer.",
        
        Link: "Promote/createcreativestudio",
      },
      {
        title: "Edit Template",
        description:
          "Gives full creative control to personalize campaigns and reflect your brand style.",
        
        Link: "Promote/edittemplatecs",
      },
      {
        title: "Download or Share",
        description:
          "Makes it easy to publish your creatives across platforms for maximum reach.",
        
        Link: "Promote/sharetemplate",
      },
    ],
  },
  {
    category: "Message Center",
    items: [
      {
        title: "Client Engagement",
        description:
          "Automatically send greetings and welcome messages to clients on special occasions.",
        
        Link: "Promote/clientengage",
      },
      {
        title: "Appointment Updates – Client",
        description:
          " Automatically inform clients about appointment status like cancellation, rescheduling, confirmation, and reminders.",
        
        Link: "Promote/appointmentclient",
      },
      {
        title: "Appointment Updates – Partner",
        description:
          "Notify staff about new bookings, cancellations, or rescheduled appointments.",
        
        Link: "Promote/appointmentpartner",
      },
      {
        title: "Sales Update – Partner",
        description:
          "Notify salon staff when a client purchases a gift card, voucher, or membership.",
        
        Link: "Promote/salepartner",
      },
      {
        title: "Sales Update – Client",
        description:
          " Notify clients when they purchase an item like a voucher, gift card, or membership.",
        
        Link: "Promote/salesclient",
      },
      {
        title: "Expiry Reminders – Client",
        description:
          " Remind clients when their gift cards, vouchers, or memberships are nearing expiry.",
        
        Link: "Promote/expiryremainder",
      },
      {
        title: "Campaign Messages",
        description:
          "Launch promotional campaigns for services, offers, and products to a targeted audience.",
        
        Link: "Promote/message",
      },
    ],
  },
  {
    category: " Ad Manager",
    items: [
      {
        title: "Add Ad",
        description:
          "Run targeted social media ads directly from your salon dashboard—no need for external tools.",
        
        Link: "Promote/addAD",
      },
      {
        title: "View Ad Details",
        description:
          "Helps monitor your ad's performance so you can refine strategy and maximize ROI.",
        
        Link: "Promote/ViewAD",
      },
    ],
  },
];

export default function MarketingPage(): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const topicRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      topicRefs.current.forEach((ref, index) => {
        if (
          ref?.offsetTop !== undefined &&
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
          <Menu className="md:hidden w-6 h-6 cursor-pointer" onClick={() => setOpen(true)} />
        </div>
      </header>

      {/* Page Content */}
      <main className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-32 xl:px-48">
        <img src="/assets/promote.png" alt="Marketing" />
        <h1 className="text-3xl font-bold mb-2 text-black">Promote</h1>
        <p className="text-gray-600 mb-8 max-w-full">
          Grow your salon with built-in tools to promote services, engage clients, and drive repeat visits—all in one place. From sending targeted campaigns to offering personalized deals, daSalon helps you stay connected and grow your business effortlessly.
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
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">{topic.category}</h2>
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
