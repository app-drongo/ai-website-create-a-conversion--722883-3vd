// Features Component
// Generated: 2025-09-04T08:15:22.831Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Palette,
  Code2,
  Headphones,
  Lock,
  Cpu,
  Database,
  GitBranch
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Rapid Deployment",
      description: "Deploy applications 10x faster with automated CI/CD pipelines and intelligent code optimization.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Military-grade security protocols with SOC 2 compliance and advanced threat detection.",
      badge: "Security"
    },
    {
      icon: Code2,
      title: "Smart Code Generation",
      description: "AI-powered code completion and generation that understands your project context.",
      badge: "AI-Powered"
    },
    {
      icon: Database,
      title: "Scalable Architecture",
      description: "Auto-scaling infrastructure that grows with your application demands seamlessly.",
      badge: "Infrastructure"
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Advanced performance analytics with predictive insights and automated alerts.",
      badge: "Analytics"
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamless Git integration with advanced branching strategies and conflict resolution.",
      badge: "DevOps"
    },
    {
      icon: Cpu,
      title: "Cloud-Native Solutions",
      description: "Built for modern cloud environments with microservices and containerization support.",
      badge: "Cloud"
    },
    {
      icon: Headphones,
      title: "Expert Developer Support",
      description: "24/7 technical support from experienced software architects and engineers.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Data Privacy Compliance",
      description: "GDPR, CCPA compliant with zero-trust security model and encrypted data handling.",
      badge: "Compliance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Enterprise-Grade Tools for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Modern Development
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive development ecosystem designed for tech professionals who demand 
            performance, security, and scalability in their software solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to revolutionize your development workflow?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Request Developer Access
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Technical Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}