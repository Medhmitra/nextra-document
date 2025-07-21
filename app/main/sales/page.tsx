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
    category: "Point of Sale",
    items: [
      {
        title: "Create a sale",
        description:
          "Quickly create a new sale by selecting services, assigning staff, and adding client details—all from one simple checkout interface.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/createsale",
      },
      {
        title: "Search & Filter Options",
        description:
          "Quickly find any sale using ID, status, price range, or date.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/Searchfilter",
      },
      {
        title: "Refund a sale",
        description:
          "Process full or partial refunds effortlessly, with options to return services, products, or adjust payment methods.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/refundsale",
      },
      {
        title: "Void a sale",
        description:
          "Remove an incorrect sale permanently from reports. Cannot be undone.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/voidsale",
      },
      {
        title: "Edit a sale",
        description:
          "Change the assigned staff or update sale details post-creation.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/editsale",
      },
      {
        title: "Share Invoice",
        description:
          "Share sale receipts via email, download, or view invoice.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/shareinvoice",
      },
      {
        title: "View Sale & Client Details",
        description:
          "Check sale history and client activity in detail.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/viewsale",
      },
    ],
  },
  {
    category: "Sales-Category",
    items: [
      {
        title: "Sales-Services",
        description:
          "To record and manage all service-related sales like spa treatments, haircuts, or other service offerings, including edits, refunds, and invoice tracking.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/servicesale",
      },
      {
        title: "Sales-Packages",
        description:
          "To handle bundled service offerings like bridal or facial packages, allowing users to sell, edit, refund, or void packages and track client info.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/packagesale",
      },
      {
        title: "Sales–Book A Look",
        description:
          " To manage sales of consultation or visual preview services where clients book styling previews or consultations before a full service.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/bookalooksale",
      },
      {
        title: "Sales–Products",
        description:
          " To track and process sales of retail products such as shampoos, conditioners, and other beauty-related merchandise, including refunds and inventory checks.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/productsale",
      },
    ],
  },
  {
    category: "Sales-Offer",
    items: [
      {
        title: "Sales–Vouchers",
        description:
          "To manage the sale of promotional or prepaid vouchers that clients can redeem for services, including tracking usage and handling edits or refunds.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/vouchersale",
      },
      {
        title: "Sales–Memberships",
        description:
          "To handle membership plan purchases and renewals, monitor benefit usage, and manage changes such as refunds or cancellations.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/membershipsale",
      },
      {
        title: "Sales – Gift Cards",
        description:
          "To issue and manage gift card sales, including tracking card usage, expiry dates, and making adjustments like refunds or voids.",
        image: "https://cdn.fresha.com/business/help/appointments/create-repeat-appointment.png",
        Link: "sales/giftcardsale",
      },
    ],
  },
];

export default function SalesPage(): React.JSX.Element {
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
          <a href="/main" className="text-sm font-medium text-black">
            Home
          </a>
          <a
            href="/main"
            className="text-sm font-medium text-black border-b-2 border-black"
          >
            Info dock
          </a>
          <a href="#" className="text-sm font-medium text-black">
            Academy
          </a>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="relative hidden md:flex items-center border rounded px-2">
            <Search className="h-4 w-4 text-gray-800" />
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
      <main className="w-full min-h-screen bg-gray-50 py-10 px-4 md:px-12 lg:px-32 xl:px-48 ">
        <img src="/assets/sales.png"/>
        <h1 className="text-3xl font-bold mb-2 text-black">Sales and checkout</h1>
        <p className="text-gray-600 mb-8 max-w-full">
        Streamline your front-desk with daSalon. Track sales, apply discounts, manage payment methods, 
        and complete checkouts seamlessly—all in one smart system designed for salons and wellness businesses.
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
                      <Card
                        key={idx}
                        className="hover:shadow-lg transition-shadow cursor-pointer"
                      >
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
                    <p className="text-sm text-gray-500">
                      No content available.
                    </p>
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
