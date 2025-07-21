'use client';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import Link from "next/link";
interface CardData {
  title: string;
  text: string;
  icon: string;
  link: string;
}

const cards: CardData[] = [
  {
    title: "Calendar and schedule",
    text: "Effortlessly manage appointments and staff availability with a flexible, intuitive calendar designed to optimize scheduling and boost efficiency.",
    icon: "/assets/callendar.png",
    link: "/main/calendar",
  },
  {
    title: "Sales and checkout",
    text: "Streamline the checkout process with tools to manage taxes, apply discounts, issue receipts, and handle refunds—ensuring smooth, professional transactions.",
    icon: "/assets/sales.png",
    link: "/main/sales",
  },
  {
    title: "Clients",
    text: "Centralize client management with tools to track interactions, build loyalty through rewards, and deliver a personalized experience.",
    icon: "/assets/clientt.png",
    link: "/main/client",
  },
  {
    title: "Staffs",
    text: "Discover powerful tools to efficiently manage your team and independent professionals—organize schedules, assign roles, and simplify payroll all in one place.",
    icon: "/assets/staff.png",
    link: "/main/staff",
  },
  {
    title: "Catalog",
    text: "Easily create and customize your service menu with tailored pricing, durations, and booking rules to match your unique business needs.",
    icon: "/assets/catalog.png",
    link: "/main/catalog",
  },
  {
    title: "MarketPlace",
    text: "Optimize your daSalon marketplace profile to increase your visibility, attract more clients, and grow your online presence effectively.",
    icon: "/assets/marketplace.png",
    link: "/main/marketplace",
  },
  {
    title: "Payments",
    text: "Unlock daSalon’s seamless payment system—offer flexible client payment options, manage transaction policies, and stay on top of your earnings effortlessly.",
    icon: "/assets/pyment.png",
    link: "/main/payments",
  },
  {
    title: "Promote",
    text: "Launch impactful campaigns, run special promotions, and manage targeted offers that drive client engagement and boost retention.",
    icon: "/assets/appointment.png",
    link: "/main/promote",
  },
  {
    title: "Offer",
    text: "Drive repeat business by offering prepaid packages, flexible memberships, and gift cards—making it easier for clients to stay engaged.",
    icon: "/assets/promote.png",
    link: "/main/offer",
  },
  {
    title: "Reports and Insights",
    text: "Make informed decisions with real-time analytics and comprehensive reports that provide deep insights into your business performance.",
    icon: "/assets/report.png",
    link: "/main/report",
  },
  {
    title: "Settings",
    text: "Customize your workspace by managing multiple locations, staff roles, and business preferences to match your operational needs.",
    icon: "/assets/settings.png",
    link: "/main/settings",
  },
];

export default function ResourcesPage(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-16 py-4 border-b bg-white">
        <div className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Logo" className="h-6 w-auto" />
          <span className="text-lg font-semibold">Help Center</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/resources" className="text-gray-600 hover:text-black">Home</a>
          <a href="/resources" className="text-black border-b-2 border-black">Info dock</a>
          <a href="#" className="text-gray-600 hover:text-black">Academy</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="relative hidden md:flex items-center border rounded-lg px-3 py-2 bg-gray-50">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <Input
              type="text"
              placeholder="Search our help center"
              className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 w-64 bg-transparent"
            />
          </div>
          <Menu className="md:hidden w-6 h-6" />
        </div>
      </header>
      {/* Main content */}
      <main className="px-6 md:px-16 py-12 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-10 text-black">daSalon Info dock</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Link href={card.link} key={index} className="block h-full">
              <Card className="hover:shadow-lg transition-shadow h-full bg-white border border-gray-200 rounded-lg">
                <CardContent className="p-6 h-full flex flex-col justify-start">
                  <div className="mb-4">
                    <img src={card.icon} alt={card.title} className="h-12 w-12" />
                  </div>
                  <h2 className="text-lg font-semibold mb-3 text-black">{card.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.text}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
            {/* Footer */}
      <footer className="bg-white border-t mt-12 px-6 md:px-16 py-10 text-sm text-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <img src="/assets/logo.png" alt="da Salon" className="h-6 mb-4" />
            <ul className="space-y-2">
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/support">Help & Support</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/business-associate">Become our Business Associate</Link></li>
            </ul>
            <div className="mt-4">
              <label className="block text-gray-600 mb-1">Select your country</label>
              <div className="inline-flex items-center border rounded px-3 py-1">
                <img src="/assets/icons8-india-48.png" alt="India" className="w-5 h-5 mr-2" />
                <span>India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">da Salon Platforms</h3>
            <ul className="space-y-2">
              <li><Link href="/partner">da Salon Partner</Link></li>
              <li><Link href="/connect">da Salon Connect</Link></li>
              <li><Link href="/market">da Salon Market</Link></li>
              <li><Link href="/associate">Business Associate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Social media</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">Youtube</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/legal/terms-of-use">Terms of use</Link></li>
              <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/legal/cookie-policy">Cookie Policy</Link></li>
              <li><Link href="/legal/terms-of-service">Terms of service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">
          Copyright © 2025 da Salon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
