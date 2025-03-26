import Image from "next/image"
import { Calendar, Clock, Globe, CheckCircle, Users, Award, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CountdownTimer from "@/components/countdown-timer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-[#ff6e30]">Kozker</span> Tech
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#learn" className="text-sm font-medium hover:text-[#ff6e30] transition-colors">
              What You'll Learn
            </a>
            <a href="#agenda" className="text-sm font-medium hover:text-[#ff6e30] transition-colors">
              Agenda
            </a>
            <a href="#instructors" className="text-sm font-medium hover:text-[#ff6e30] transition-colors">
              Instructors
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-[#ff6e30] transition-colors">
              FAQ
            </a>
          </nav>
          <Button className="bg-[#ff6e30] hover:bg-[#e05a20] text-white">Register Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-[#ff6e30] hover:bg-orange-200">Limited Time Offer</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Data Analytics 101: <span className="text-[#ff6e30]">Learn the Skills That Matter Most!</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Master Data Analytics in 50 Minutes! Gain essential skills with practical insights, real-world case
                studies, and hands-on experience.
              </p>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-[#ff6e30]" />
                  <span>March 30, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#ff6e30]" />
                  <span>10:00 AM IST</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-[#ff6e30]" />
                  <span>Online Webinar</span>
                </div>
              </div>

              <div className="space-y-4">
                <Button size="lg" className="bg-[#ff6e30] hover:bg-[#e05a20] text-white w-full sm:w-auto">
                  Register Now
                </Button>
                <div className="text-sm text-gray-500">
                  <CountdownTimer targetDate="2025-03-30T10:00:00" />
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dashboard.png"
                  alt="Data Analytics Dashboard"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-lg shadow-lg border border-gray-100">
                <div className="text-[#ff6e30] font-bold">1000+</div>
                <div className="text-xs">Professionals Trained</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section id="learn" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum designed to give you practical skills in data analytics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Core Concepts</h3>
                <p className="text-gray-600">
                  Understand the fundamentals of data analytics and its types—Descriptive, Diagnostic, Predictive &
                  Prescriptive.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Practical Demonstration</h3>
                <p className="text-gray-600">
                  Live demo using Excel & Power BI—from importing data to creating visual dashboards.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Interactive Hands-On Activity</h3>
                <p className="text-gray-600">Work with real datasets to create insights-driven visualizations.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Best Practices & Industry Insights</h3>
                <p className="text-gray-600">
                  Learn how businesses use data analytics to increase efficiency & gain a competitive edge.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Exclusive Resources</h3>
                <p className="text-gray-600">Get access to free tools, learning materials, and industry events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Should Attend?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This webinar is perfect for anyone looking to leverage data for better decision-making
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#ff6e30]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Aspiring Data Analysts</h3>
                <p className="text-gray-600">Kickstart your career with data-driven insights.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#ff6e30]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Business Owners & Managers</h3>
                <p className="text-gray-600">Leverage data for smarter decision-making.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#ff6e30]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Students & Professionals</h3>
                <p className="text-gray-600">Upskill and boost your career opportunities.</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#ff6e30]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Anyone Interested in Analytics</h3>
                <p className="text-gray-600">Learn practical data analytics skills in a simple, engaging way!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agenda Section */}
      <section id="agenda" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/data-analyst.png"
                alt="Data Analyst with Charts"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Agenda Breakdown</h2>

              <div className="space-y-8">
                <div className="border-l-4 border-[#ff6e30] pl-6">
                  <h3 className="text-2xl font-semibold mb-4">Day 1: Understanding Data Analytics (25 min)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Introduction to Kozker Tech & our mission in analytics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Interactive poll – What challenges do you face with data analytics?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Core concepts of data analytics & its business impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Real-world examples: Sales trends, Customer Satisfaction & Performance Metrics</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-[#ff6e30] pl-6">
                  <h3 className="text-2xl font-semibold mb-4">Day 2: Practical & Hands-On Session (25 min)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Live Demo: Working with datasets in Excel & Power BI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Hands-on Activity: Clean, analyze & visualize real-world data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Q&A session: Get answers to your analytics challenges</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#ff6e30]"></div>
                      </div>
                      <span>Next Steps: Exclusive resources, upcoming events & community access</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Your Expert Instructors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals with years of experience in data analytics
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">John Smith</h3>
                <p className="text-[#ff6e30] mb-4">Data Analytics Expert | Kozker Tech</p>
                <p className="text-gray-600">
                  10+ years of experience helping businesses transform their data into actionable insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
                <p className="text-[#ff6e30] mb-4">Power BI Specialist | Kozker Tech</p>
                <p className="text-gray-600">
                  Visualization expert specializing in creating intuitive dashboards that drive business decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-100 to-orange-50 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
                <p className="text-[#ff6e30] mb-4">Business Intelligence Consultant | Kozker Tech</p>
                <p className="text-gray-600">
                  Specializes in helping organizations implement data-driven strategies for growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">What You'll Get</h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-[#ff6e30]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Free Access to Webinar Materials & Data Sets</h3>
                    <p className="text-gray-600">
                      Download all resources to practice and improve your skills after the webinar.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Award className="h-5 w-5 text-[#ff6e30]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Certificate of Participation</h3>
                    <p className="text-gray-600">Add this credential to your resume and LinkedIn profile.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Users className="h-5 w-5 text-[#ff6e30]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Lifetime Access to Kozker Tech's Analytics Community</h3>
                    <p className="text-gray-600">Connect with peers and experts to continue your learning journey.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-[#ff6e30]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Bonus: Exclusive Learning Roadmap for Beginners</h3>
                    <p className="text-gray-600">A step-by-step guide to becoming proficient in data analytics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Image
                src="/images/data-extraction.png"
                alt="Data Extraction Process"
                width={600}
                height={500}
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Limited Seats Available – Register Now!</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss this opportunity to learn essential data analytics skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-[#ff6e30] shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#ff6e30] text-white px-4 py-1 text-sm font-medium">
                BEST VALUE
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">First 100 Seats</h3>
                <div className="text-4xl font-bold mb-6 text-[#ff6e30]">FREE</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Full Webinar Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Webinar Materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Certificate of Participation</span>
                  </li>
                </ul>
                <Button className="w-full bg-[#ff6e30] hover:bg-[#e05a20] text-white">Register Now</Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">100-200 Seats</h3>
                <div className="text-4xl font-bold mb-6">₹499</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Bonus Gifts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Community Access</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-[#ff6e30] text-[#ff6e30] hover:bg-orange-50">
                  Register Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">200-300 Seats</h3>
                <div className="text-4xl font-bold mb-6">₹999</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Everything in Previous</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>Full Course Access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-[#ff6e30]" />
                    <span>1:1 Mentoring Session</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full border-[#ff6e30] text-[#ff6e30] hover:bg-orange-50">
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-medium mb-6">🕒 Offer Ends Soon – Save Your Spot Today!</p>
            <Button size="lg" className="bg-[#ff6e30] hover:bg-[#e05a20] text-white">
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Get answers to common questions about the webinar</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">Who can join this webinar?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Anyone interested in learning data analytics, from beginners to professionals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Do I need prior experience?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                No! This webinar is designed for beginners and intermediate learners.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">Will I receive a recording?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Yes, all participants will get access to the recorded session & additional resources.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">How do I access the webinar?</AccordionTrigger>
              <AccordionContent className="text-gray-600">
                You'll receive a confirmation email with the joining link upon registration.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                Can I ask questions during the session?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                We'll have an interactive Q&A session at the end.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-[#ff6e30] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Data Analytics Revolution & Take Control of Your Career!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to learn essential skills that will set you apart in today's data-driven world.
          </p>
          <Button size="lg" className="bg-white text-[#ff6e30] hover:bg-gray-100">
            Reserve Your Spot Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 lg:px-8 bg-gray-900 text-gray-300">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 font-bold text-xl text-white mb-4">
                <span className="text-[#ff6e30]">Kozker</span> Tech
              </div>
              <p className="max-w-md">
                Empowering professionals with the skills they need to succeed in a data-driven world.
              </p>
            </div>

            <div className="flex flex-col md:items-end gap-4">
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-[#ff6e30]">
                  Terms & Conditions
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ff6e30]">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-[#ff6e30]">
                  Contact Us
                </a>
              </div>
              <p>© {new Date().getFullYear()} Kozker Tech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

