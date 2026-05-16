export const projectsData = [
  {
    id: "01",
    slug: "smart-cafe-ordering",
    title: "Smart Cafe Ordering System",
    description: "An online ordering and QR-based menu system built for modern cafes.",
    banner: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=600&fit=crop",
    img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    problem: {
      title: "THE PROBLEM",
      description: "Customers faced long wait times for ordering and billing, causing delays and dissatisfaction during peak hours."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "We developed an online ordering system with QR-based menu access, live order tracking, and digital billing, to streamline the entire process."
    },
    features: [
      { icon: "fa-qrcode", title: "QR Menu Access" },
      { icon: "fa-bell-concierge", title: "Live Order Tracking" },
      { icon: "fa-chart-line", title: "Admin Dashboard" },
      { icon: "fa-boxes-stacked", title: "Inventory Monitoring" },
      { icon: "fa-file-invoice", title: "Digital Billing" }
    ],
    dashboard: {
      actionCard: {
        title: "Scan QR to Order",
        description: "View our menu and place your order instantly",
        buttonText: "Scan Now",
        iconType: "QrCode"
      },
      listCard: {
        title: "Live Orders",
        actionText: "View All Orders",
        items: [
          { id: "#1042", name: "Cappuccino", status: "Preparing", color: "text-orange-400" },
          { id: "#1041", name: "Veg Sandwich", status: "Ready", color: "text-green-400" },
          { id: "#1040", name: "Cold Coffee", status: "Delivered", color: "text-[#3b82f6]" }
        ]
      },
      chartCard: {
        title: "Dashboard Overview",
        stat1Label: "Total Orders",
        stat1Value: "128",
        stat2Label: "Today's Revenue",
        stat2Value: "$512",
        chartData: [20, 40, 30, 60, 50, 80, 65]
      }
    },
    impact: [
      { value: "40%", description: "Faster Order Processing", icon: "fa-bolt" },
      { value: "35%", description: "Increase in Customer Satisfaction", icon: "fa-face-smile" },
      { value: "50%", description: "Reduction in Billing Errors", icon: "fa-file-circle-check" },
      { value: "25%", description: "Increase in Daily Orders", icon: "fa-arrow-trend-up" }
    ]
  },
  {
    id: "02",
    slug: "hostel-management",
    title: "Hostel Management Platform",
    description: "Automated student allocation, fee tracking, and attendance management.",
    banner: "https://res.cloudinary.com/dailxzo10/image/upload/v1778870549/qVP86OUVKBZCch0MrfCgNJbP48_q2rxsn.png",
    img: "https://res.cloudinary.com/dailxzo10/image/upload/v1778870549/qVP86OUVKBZCch0MrfCgNJbP48_q2rxsn.png",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    problem: {
      title: "THE PROBLEM",
      description: "Manual room allocation and fee tracking led to administrative chaos and significant data inaccuracies."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "A comprehensive digital dashboard for administrators to seamlessly manage students, rooms, and payments."
    },
    features: [
      { icon: "fa-bed", title: "Smart Allocation" },
      { icon: "fa-indian-rupee-sign", title: "Fee Tracking" },
      { icon: "fa-clipboard-user", title: "Digital Attendance" },
      { icon: "fa-user-shield", title: "Role-based Access" },
      { icon: "fa-file-export", title: "Automated Reports" }
    ],
    dashboard: {
      actionCard: {
        title: "Allocate Room",
        description: "Auto-assign available rooms based on preferences",
        buttonText: "Assign Now",
        iconType: "Home"
      },
      listCard: {
        title: "Recent Admissions",
        actionText: "View Roster",
        items: [
          { id: "S-201", name: "Rahul Sharma", status: "Allocated", color: "text-green-400" },
          { id: "S-202", name: "Priya Singh", status: "Pending", color: "text-orange-400" },
          { id: "S-203", name: "Amit Kumar", status: "Paid", color: "text-[#3b82f6]" }
        ]
      },
      chartCard: {
        title: "Occupancy Overview",
        stat1Label: "Total Students",
        stat1Value: "450",
        stat2Label: "Available Beds",
        stat2Value: "50",
        chartData: [80, 85, 90, 88, 92, 95, 90]
      }
    },
    impact: [
      { value: "60%", description: "Reduction in Admin Time", icon: "fa-clock" },
      { value: "100%", description: "Digital Record Accuracy", icon: "fa-bullseye" },
      { value: "30%", description: "Faster Payment Collection", icon: "fa-wallet" },
      { value: "15hr", description: "Saved per week", icon: "fa-hourglass-end" }
    ]
  },
  {
    id: "03",
    slug: "gym-membership",
    title: "Gym Membership System",
    description: "Modern fitness center management with automated subscription renewals.",
    banner: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=600&fit=crop",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    techStack: ["Vue.js", "Firebase", "Stripe API"],
    problem: {
      title: "THE PROBLEM",
      description: "Fitness centers struggled to track expiring memberships and manage member attendance efficiently."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "An automated subscription tracking system with biometric integration readiness and auto-reminders."
    },
    features: [
      { icon: "fa-dumbbell", title: "Member Profiles" },
      { icon: "fa-calendar-check", title: "Auto Renewals" },
      { icon: "fa-fingerprint", title: "Biometric Sync" },
      { icon: "fa-message", title: "SMS Reminders" },
      { icon: "fa-chart-pie", title: "Revenue Stats" }
    ],
    dashboard: {
      actionCard: {
        title: "Member Check-in",
        description: "Scan member ID or process biometric entry",
        buttonText: "Check In",
        iconType: "UserCheck"
      },
      listCard: {
        title: "Expiring Memberships",
        actionText: "Send Reminders",
        items: [
          { id: "M-892", name: "David Miller", status: "Expires Today", color: "text-red-400" },
          { id: "M-893", name: "Sarah Connor", status: "3 Days Left", color: "text-orange-400" },
          { id: "M-894", name: "John Wick", status: "Renewed", color: "text-green-400" }
        ]
      },
      chartCard: {
        title: "Weekly Attendance",
        stat1Label: "Active Members",
        stat1Value: "342",
        stat2Label: "Peak Hour",
        stat2Value: "6 PM",
        chartData: [40, 55, 70, 65, 80, 95, 60]
      }
    },
    impact: [
      { value: "85%", description: "Renewal Rate Increase", icon: "fa-arrow-up" },
      { value: "90%", description: "Automated Follow-ups", icon: "fa-robot" },
      { value: "0", description: "Lost Records", icon: "fa-shield" },
      { value: "40%", description: "Growth in Retention", icon: "fa-users" }
    ]
  },
  {
    id: "04",
    slug: "local-store-inventory",
    title: "Local Store Inventory",
    description: "Real-time stock monitoring and POS billing for local retail shops.",
    banner: "https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908129.jpg?semt=ais_hybrid&w=1200&q=80",
    img: "https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908129.jpg?semt=ais_hybrid&w=740&q=80",
    techStack: ["React", "Electron", "SQLite"],
    problem: {
      title: "THE PROBLEM",
      description: "Local shop owners faced stockouts and expired products due to lack of real-time inventory visibility."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "A fast, offline-first POS system with low-stock alerts and expiration tracking."
    },
    features: [
      { icon: "fa-barcode", title: "Barcode Scanning" },
      { icon: "fa-box-open", title: "Low Stock Alerts" },
      { icon: "fa-receipt", title: "Quick POS Billing" },
      { icon: "fa-tags", title: "Discount Engine" },
      { icon: "fa-print", title: "Thermal Printing" }
    ],
    dashboard: {
      actionCard: {
        title: "Fast Billing POS",
        description: "Open the terminal to process customer checkout",
        buttonText: "Open POS",
        iconType: "ShoppingCart"
      },
      listCard: {
        title: "Inventory Alerts",
        actionText: "Order Stock",
        items: [
          { id: "SKU-11", name: "Whole Milk 1L", status: "Low Stock", color: "text-red-400" },
          { id: "SKU-42", name: "Bread Loaf", status: "Expires Tmrw", color: "text-orange-400" },
          { id: "SKU-89", name: "Eggs 12pk", status: "Restocked", color: "text-green-400" }
        ]
      },
      chartCard: {
        title: "Sales Analytics",
        stat1Label: "Items Sold",
        stat1Value: "845",
        stat2Label: "Gross Sales",
        stat2Value: "$1,240",
        chartData: [30, 40, 35, 50, 45, 70, 85]
      }
    },
    impact: [
      { value: "50%", description: "Less Stockouts", icon: "fa-box" },
      { value: "3x", description: "Faster Checkout Time", icon: "fa-cart-shopping" },
      { value: "99%", description: "Inventory Accuracy", icon: "fa-check-double" },
      { value: "20%", description: "Increase in Sales", icon: "fa-chart-bar" }
    ]
  },
  {
    id: "05",
    slug: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description: "Machine learning tool to parse and score resumes against job descriptions.",
    banner: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
    techStack: ["Python", "FastAPI", "React", "OpenAI API"],
    problem: {
      title: "THE PROBLEM",
      description: "HR departments were overwhelmed manually screening hundreds of applications for a single role."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "An AI-powered ATS system that extracts key skills and provides an instant compatibility score."
    },
    features: [
      { icon: "fa-file-pdf", title: "PDF Parsing" },
      { icon: "fa-magnifying-glass-chart", title: "Skill Extraction" },
      { icon: "fa-percent", title: "Match Scoring" },
      { icon: "fa-envelope-open-text", title: "Auto Rejections" },
      { icon: "fa-star", title: "Candidate Ranking" }
    ],
    dashboard: {
      actionCard: {
        title: "Upload Resumes",
        description: "Drag and drop bulk PDF resumes for batch parsing",
        buttonText: "Upload Batch",
        iconType: "UploadCloud"
      },
      listCard: {
        title: "Top Candidates",
        actionText: "View Pipeline",
        items: [
          { id: "JD-Front", name: "Alex Chen", status: "94% Match", color: "text-green-400" },
          { id: "JD-Back", name: "Maria Garcia", status: "88% Match", color: "text-green-400" },
          { id: "JD-Dev", name: "James Wilson", status: "45% Match", color: "text-red-400" }
        ]
      },
      chartCard: {
        title: "Recruitment Funnel",
        stat1Label: "Processed",
        stat1Value: "1,204",
        stat2Label: "Shortlisted",
        stat2Value: "42",
        chartData: [90, 80, 60, 40, 30, 20, 10]
      }
    },
    impact: [
      { value: "80%", description: "Faster Screening", icon: "fa-stopwatch" },
      { value: "10x", description: "Volume Handled", icon: "fa-layer-group" },
      { value: "95%", description: "Parsing Accuracy", icon: "fa-bullseye" },
      { value: "50hr", description: "Saved per Campaign", icon: "fa-calendar" }
    ]
  },
  {
    id: "06",
    slug: "tourist-guide-platform",
    title: "Tourist Guide Platform",
    description: "Interactive travel companion linking tourists with local certified guides.",
    banner: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop",
    img: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    techStack: ["Next.js", "Tailwind CSS", "PostgreSQL"],
    problem: {
      title: "THE PROBLEM",
      description: "Tourists struggled to find authentic, verified local guides without middleman markups."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "A decentralized matching platform where travelers can book verified guides directly."
    },
    features: [
      { icon: "fa-map-location-dot", title: "Live Maps" },
      { icon: "fa-id-card-clip", title: "Verified Guides" },
      { icon: "fa-star-half-stroke", title: "Review System" },
      { icon: "fa-credit-card", title: "Secure Booking" },
      { icon: "fa-language", title: "Multi-language" }
    ],
    dashboard: {
      actionCard: {
        title: "Find a Guide",
        description: "Search available guides in your current location",
        buttonText: "Search Near Me",
        iconType: "MapPin"
      },
      listCard: {
        title: "Upcoming Tours",
        actionText: "My Bookings",
        items: [
          { id: "TR-Par", name: "Eiffel Tower Tour", status: "Tomorrow", color: "text-[#3b82f6]" },
          { id: "TR-Rom", name: "Colosseum Walk", status: "In 3 Days", color: "text-green-400" },
          { id: "TR-Lon", name: "Tower of London", status: "Completed", color: "text-gray-400" }
        ]
      },
      chartCard: {
        title: "Travel Stats",
        stat1Label: "Cities Visited",
        stat1Value: "12",
        stat2Label: "Distance",
        stat2Value: "4.2k km",
        chartData: [10, 20, 15, 30, 25, 40, 35]
      }
    },
    impact: [
      { value: "10k+", description: "Active Users", icon: "fa-users" },
      { value: "4.8", description: "Average App Rating", icon: "fa-star" },
      { value: "30%", description: "More Income for Guides", icon: "fa-arrow-trend-up" },
      { value: "50+", description: "Cities Covered", icon: "fa-city" }
    ]
  },
  {
    id: "07",
    slug: "event-registration",
    title: "Event Registration Portal",
    description: "Seamless QR-based ticketing and check-in system for large scale events.",
    banner: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=600&fit=crop",
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    techStack: ["React", "Firebase", "QR Code API"],
    problem: {
      title: "THE PROBLEM",
      description: "Long lines and confusing manual check-in lists created bottlenecks at event entrances."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "A mobile-friendly ticketing portal that generates unique QR codes for split-second scanning at the door."
    },
    features: [
      { icon: "fa-ticket", title: "E-Ticketing" },
      { icon: "fa-qrcode", title: "QR Check-in" },
      { icon: "fa-users-line", title: "Live Capacity Tracker" },
      { icon: "fa-envelope", title: "Email Invites" },
      { icon: "fa-print", title: "Badge Printing" }
    ],
    dashboard: {
      actionCard: {
        title: "Gate Scanner",
        description: "Open the camera to scan attendee tickets instantly",
        buttonText: "Start Scanning",
        iconType: "Ticket"
      },
      listCard: {
        title: "Live Check-ins",
        actionText: "View Guestlist",
        items: [
          { id: "T-890", name: "Emma Watson", status: "Checked In", color: "text-green-400" },
          { id: "T-891", name: "Rupert Grint", status: "VIP Entry", color: "text-purple-400" },
          { id: "T-892", name: "Daniel R.", status: "Pending", color: "text-orange-400" }
        ]
      },
      chartCard: {
        title: "Attendance Flow",
        stat1Label: "Total Checked In",
        stat1Value: "2,450",
        stat2Label: "Current Gate Speed",
        stat2Value: "42/min",
        chartData: [5, 10, 25, 40, 80, 60, 20]
      }
    },
    impact: [
      { value: "3s", description: "Check-in Time", icon: "fa-bolt" },
      { value: "100%", description: "Eliminated Fake Tickets", icon: "fa-shield-halved" },
      { value: "5k+", description: "Attendees Managed", icon: "fa-users" },
      { value: "0", description: "Queue Bottlenecks", icon: "fa-check" }
    ]
  },
  {
    id: "08",
    slug: "restaurant-booking",
    title: "Restaurant Table Booking",
    description: "Real-time reservation system with visual table layouts and SMS alerts.",
    banner: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=600&fit=crop",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    techStack: ["React", "Node.js", "Twilio API"],
    problem: {
      title: "THE PROBLEM",
      description: "Restaurants double-booked tables and lost reservations due to disorganized phone logs."
    },
    solution: {
      title: "OUR SOLUTION",
      description: "A digital floor plan UI where hosts can drag-and-drop reservations and automate confirmations."
    },
    features: [
      { icon: "fa-table-cells-large", title: "Visual Floor Plan" },
      { icon: "fa-calendar-days", title: "Calendar Sync" },
      { icon: "fa-mobile-screen", title: "SMS Alerts" },
      { icon: "fa-clock", title: "Waitlist Management" },
      { icon: "fa-chart-simple", title: "Peak Hour Stats" }
    ],
    dashboard: {
      actionCard: {
        title: "Floor Plan",
        description: "View real-time table status and drag reservations",
        buttonText: "Manage Tables",
        iconType: "LayoutGrid"
      },
      listCard: {
        title: "Upcoming Reservations",
        actionText: "Full Schedule",
        items: [
          { id: "T-04", name: "Smith Party (4)", status: "Arriving 7 PM", color: "text-green-400" },
          { id: "T-12", name: "Johnson (2)", status: "Seated", color: "text-[#3b82f6]" },
          { id: "T-08", name: "Davis (6)", status: "Running Late", color: "text-red-400" }
        ]
      },
      chartCard: {
        title: "Seating Analytics",
        stat1Label: "Tables Occupied",
        stat1Value: "24/30",
        stat2Label: "Wait Time",
        stat2Value: "15 min",
        chartData: [20, 30, 45, 60, 85, 90, 70]
      }
    },
    impact: [
      { value: "95%", description: "Reduction in No-shows", icon: "fa-user-xmark" },
      { value: "100%", description: "Double-bookings Solved", icon: "fa-check-circle" },
      { value: "20%", description: "Table Turnaround Speed", icon: "fa-gauge-high" },
      { value: "4.9", description: "Host Satisfaction", icon: "fa-star" }
    ]
  }
];
