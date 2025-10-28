import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Zap, 
  TrendingUp, 
  Globe, 
  Lock, 
  Coins, 
  Users, 
  ArrowRight,
  Battery,
  Sun,
  Wind,
  Leaf,
  Target,
  BarChart3,
  Shield
} from "lucide-react";
import heroImage from "@/assets/vertical.png";
import bgImage from "@/assets/bg.png";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import { GlowCard } from "@/components/ui/spotlight-card";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Scroll Expansion */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={heroImage}
        bgImageSrc={bgImage}
        title="Aethera DePIN Network"
        date="Tokenized Energy"
        scrollToExpand="Scroll to Explore"
        textBlend
      >
        <div className="space-y-8 text-center max-w-3xl mx-auto pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-6 py-2 bg-energy/20 border border-energy/30 rounded-full backdrop-blur-sm"
          >
            <span className="text-white font-semibold">Powered by DePIN Technology</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            The DePIN for Renewable Power Generation & Storage
          </h2>

          <p className="text-xl text-foreground/80">
            <span className="font-semibold text-primar">Tokenized.</span>{" "}
            <span className="font-semibold text-accent">Climate-neutral.</span>{" "}
            Bridging the $350B financing gap for renewable energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a href="https://aethera-staking.vercel.app/">
              <Button variant="hero" size="lg" className="group">
                Explore the Network
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://aethera-staking.vercel.app/">
              <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm border-energy/30 hover:bg-energy/10">
                Join Now
              </Button>
            </a>
          </div>

          {/*<motion.div
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-energy">2,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Renewable Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-solar">12+</div>
              <div className="text-sm text-muted-foreground mt-1">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-energy">$50M+</div>
              <div className="text-sm text-muted-foreground mt-1">Tokenized Financing</div>
            </div>
          </motion.div>*/}
        </div>
      </ScrollExpandMedia>

      {/* Problem Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-solar">$350B</span> Renewable Financing Gap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Solar & wind projects can't scale because traditional capital can't keep up.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-destructive/20 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-destructive/10 rounded-lg">
                    <Target className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-destructive">Traditional Financing</h3>
                    <p className="text-muted-foreground">Slow, limited, and costly</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    <span className="text-muted-foreground">Months-long approval processes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    <span className="text-muted-foreground">Limited to institutional investors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    <span className="text-muted-foreground">High overhead and bureaucracy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2" />
                    <span className="text-muted-foreground">Geographic limitations</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-gradient-to-br from-energy/10 to-solar/10 backdrop-blur-sm border-energy/20 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-energy/10 rounded-lg">
                    <Zap className="w-6 h-6 text-energy" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-energy">Aethera Tokenized Financing</h3>
                    <p className="text-muted-foreground">Instant, global, and efficient</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-energy rounded-full mt-2" />
                    <span className="text-foreground font-medium">Instant on-chain deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-energy rounded-full mt-2" />
                    <span className="text-foreground font-medium">Accessible to all investors globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-energy rounded-full mt-2" />
                    <span className="text-foreground font-medium">Minimal overhead costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-energy rounded-full mt-2" />
                    <span className="text-foreground font-medium">Borderless infrastructure</span>
                  </li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Aethera Bridges <span className="bg-gradient-to-r from-energy to-solar bg-clip-text text-transparent">Energy & DePIN</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three simple steps to power the future of clean energy financing
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-energy/20 relative overflow-hidden group hover:border-energy/40 transition-colors h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-energy/5 rounded-full blur-2xl group-hover:bg-energy/10 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 bg-energy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-energy/20 transition-colors">
                    <Coins className="w-6 h-6 text-energy" />
                  </div>
                  <div className="text-6xl font-bold text-energy/20 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4">Tokenize Renewable Assets</h3>
                  <p className="text-muted-foreground">
                    Each solar or wind node becomes an on-chain asset, enabling fractional ownership and instant liquidity.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-solar/20 relative overflow-hidden group hover:border-solar/40 transition-colors h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-solar/5 rounded-full blur-2xl group-hover:bg-solar/10 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 bg-solar/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-solar/20 transition-colors">
                    <Globe className="w-6 h-6 text-solar" />
                  </div>
                  <div className="text-6xl font-bold text-solar/20 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Connect to Aethera Network</h3>
                  <p className="text-muted-foreground">
                    Energy nodes join a decentralized financing grid, creating a global marketplace for clean energy investments.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-energy/20 relative overflow-hidden group hover:border-energy/40 transition-colors h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-energy/5 rounded-full blur-2xl group-hover:bg-energy/10 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 bg-energy/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-energy/20 transition-colors">
                    <TrendingUp className="w-6 h-6 text-energy" />
                  </div>
                  <div className="text-6xl font-bold text-energy/20 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Earn, Trade, Power</h3>
                  <p className="text-muted-foreground">
                    Investors and communities earn from real-world clean energy returns while supporting climate goals.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div 
            className="mt-16 max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-energy/20 rounded-full flex items-center justify-center animate-pulse">
                    <Sun className="w-8 h-8 text-energy" />
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-energy to-solar relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-solar rounded-full animate-pulse" />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-solar/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <Wind className="w-8 h-8 text-solar" />
                  </div>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-solar to-energy relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-energy rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-16 h-16 bg-energy/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                    <Battery className="w-8 h-8 text-energy" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Powering <span className="text-energy">Climate-Neutral</span> Growth
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real impact, real numbers, real change
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="green" 
                customSize 
                className="w-full h-auto aspect-auto p-8"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <Sun className="w-12 h-12 text-energy mb-4" />
                  <div className="text-5xl font-bold text-energy mb-2">2,000+</div>
                  <div className="text-foreground mb-4 font-medium">Decentralized Renewable Network</div>
                  <div className="text-sm text-muted-foreground">
                    Building the foundation for on-chain solar, wind, and storage nodes.
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="blue" 
                customSize 
                className="w-full h-auto aspect-auto p-8"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <Globe className="w-12 h-12 text-solar mb-4" />
                  <div className="text-5xl font-bold text-solar mb-2">12+</div>
                  <div className="text-foreground mb-4 font-medium">Global by Design</div>
                  <div className="text-sm text-muted-foreground">
                    Connecting clean energy projects and investors across continents.
                  </div>
                </div>
              </GlowCard>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <GlowCard 
                glowColor="orange" 
                customSize 
                className="w-full h-auto aspect-auto p-8"
              >
                <div className="flex flex-col items-center justify-center text-center h-full">
                  <BarChart3 className="w-12 h-12 text-energy mb-4" />
                  <div className="text-5xl font-bold text-energy mb-2">$50M+</div>
                  <div className="text-foreground mb-4 font-medium">Tokenized Climate Financing</div>
                  <div className="text-sm text-muted-foreground">
                    Enabling transparent, accessible and climate-neutral capital flows.
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </motion.div>

          {/* World Map Placeholder */}
          <motion.div {...fadeInUp}>
            <Card className="p-12 bg-card/30 backdrop-blur-sm border-energy/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-energy/5 via-transparent to-solar/5" />
              <div className="relative text-center">
                <Globe className="w-24 h-24 text-energy/30 mx-auto mb-6 animate-float" />
                <h3 className="text-2xl font-bold mb-4">Global Energy Network</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Aethera nodes are deployed across North America, Europe, Asia, and emerging markets, 
                  creating a truly decentralized renewable energy infrastructure.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Token Utility Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-energy via-solar to-energy bg-clip-text text-transparent">Aethera Tokens</span>: Energy Meets Incentives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aethera's token powers node participation, governance, and rewards
            </p>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <Card className="p-12 bg-gradient-to-br from-energy/5 via-card/50 to-solar/5 backdrop-blur-sm border-energy/20 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-energy/10 rounded-full blur-3xl animate-glow-pulse" />
              
              <div className="relative">
                {/* Central Token Icon */}
                <div className="flex justify-center mb-12">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-energy to-solar rounded-full flex items-center justify-center animate-float">
                      <Coins className="w-16 h-16 text-background" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-energy to-solar rounded-full animate-ping opacity-20" />
                  </div>
                </div>

                {/* Token Flow Cycle */}
                <div className="grid md:grid-cols-5 gap-6 text-center">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-energy/10 rounded-full flex items-center justify-center mx-auto">
                      <Lock className="w-8 h-8 text-energy" />
                    </div>
                    <h4 className="font-semibold">Stake</h4>
                    <p className="text-sm text-muted-foreground">Lock tokens to secure the network</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-energy" />
                  </div>

                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-solar/10 rounded-full flex items-center justify-center mx-auto">
                      <Zap className="w-8 h-8 text-solar" />
                    </div>
                    <h4 className="font-semibold">Fund</h4>
                    <p className="text-sm text-muted-foreground">Support renewable projects</p>
                  </div>

                  <div className="flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-energy" />
                  </div>

                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-energy/10 rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-8 h-8 text-energy" />
                    </div>
                    <h4 className="font-semibold">Earn</h4>
                    <p className="text-sm text-muted-foreground">Receive energy returns</p>
                  </div>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-solar/10 rounded-full flex items-center justify-center">
                      <Coins className="w-8 h-8 text-solar" />
                    </div>
                    <h4 className="font-semibold text-lg">Redeem</h4>
                    <p className="text-muted-foreground">Convert rewards to real-world energy or trade on markets</p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-16 h-16 bg-energy/10 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-energy" />
                    </div>
                    <h4 className="font-semibold text-lg">Govern</h4>
                    <p className="text-muted-foreground">Vote on network upgrades and new node deployments</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the <span className="text-energy">Decentralized Climate</span> Movement
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Be part of the first tokenized clean energy network
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="p-8 md:p-12 bg-gradient-to-br from-energy/10 via-card/50 to-solar/10 backdrop-blur-sm border-energy/20 text-center">
                <Users className="w-16 h-16 text-energy mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-4">Early Access Program</h3>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get exclusive access to node deployment opportunities, governance rights, 
                  and early investor benefits. Join the future of renewable energy financing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a href="https://aethera-staking.vercel.app/">
                    <Button size="lg" variant="hero" className="w-full sm:w-auto">
                      Check Now
                    </Button>
                  </a>
                  <a href="https://x.com/aetheraFi">
                  <Button size="lg" variant="outline" className="border-solar text-solar hover:bg-solar/10 w-full sm:w-auto">
                    Follow @aetheraFi
                  </Button>
                  </a>
                </div>

                {/*<div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
                  <div>
                    <div className="text-3xl font-bold text-energy mb-1">5,000+</div>
                    <div className="text-sm text-muted-foreground">Community Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-solar mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-energy mb-1">100%</div>
                    <div className="text-sm text-muted-foreground">Transparent</div>
                  </div>
                </div>*/}
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StackedCircularFooter />
    </div>
  );
};

export default Index;
