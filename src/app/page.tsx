"use client";

import { useState } from 'react';
import ChatAssistant from '@/components/ChatAssistant';
import { ArrowRight, FileText, MapPin, CheckCircle, Award, X, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const steps = [
    {
      id: 'registration',
      title: 'Registration (Form 6)',
      icon: <FileText size={32} />,
      color: 'orange',
      shortDesc: 'Apply online for registration of a new voter using Form 6 on the official portal.',
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">If you are 18 years or older, you can register to vote using <strong>Form 6</strong>.</p>
          <ul className="list-disc pl-5 text-slate-600 space-y-2">
            <li>Keep a passport-sized photograph ready.</li>
            <li>Keep an address proof (Aadhaar, Passport, etc.) ready.</li>
            <li>Keep an age proof (Birth Certificate, PAN Card, etc.) ready.</li>
          </ul>
          <a 
            href="https://voters.eci.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
          >
            Go to Official NVSP Portal <ExternalLink className="ml-2" size={18} />
          </a>
        </div>
      )
    },
    {
      id: 'verify',
      title: 'Verify Electoral Roll',
      icon: <CheckCircle size={32} />,
      color: 'blue',
      shortDesc: 'Already registered? Double check that your name is on the final electoral roll using your EPIC.',
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">You must check if your name exists in the Electoral Roll before polling day to ensure you can cast your vote.</p>
          <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">How to search:</h4>
            <ol className="list-decimal pl-5 text-blue-700 space-y-1">
              <li>Search by your details (Name, Relative's Name, DOB)</li>
              <li>Search by EPIC Number (Voter ID Number)</li>
              <li>Search by Mobile Number</li>
            </ol>
          </div>
          <a 
            href="https://electoralsearch.eci.gov.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Check Electoral Search <ExternalLink className="ml-2" size={18} />
          </a>
        </div>
      )
    },
    {
      id: 'booth',
      title: 'Find Polling Booth',
      icon: <MapPin size={32} />,
      color: 'green',
      shortDesc: 'Election day is here. Locate your exact polling booth and get a checklist of valid ID proofs.',
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">Find out exactly where you need to go to cast your vote on Election Day.</p>
          <p className="text-slate-600 font-semibold mt-4">Visual Booth Finder (Powered by Google Maps):</p>
          <div className="w-full h-48 rounded-xl overflow-hidden border border-slate-200 mt-2">
            <iframe 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=REPLACE_WITH_GOOGLE_MAPS_API_KEY&q=Election+Commission+of+India+New+Delhi"
            ></iframe>
          </div>
          <p className="text-[10px] text-slate-400 mt-1 italic">* Note: Replace API key in code for live production maps.</p>
          <a 
            href="https://electoralsearch.eci.gov.in/pollingstation" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mt-6 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors w-full justify-center"
          >
            Go to ECI Polling Search <ExternalLink className="ml-2" size={18} />
          </a>
        </div>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden text-slate-800">
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-400/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Navbar */}
      <nav className="w-full relative z-10 border-b border-white/40 bg-white/40 backdrop-blur-md px-6 py-4 flex justify-between items-center sticky top-0">
        <div className="flex items-center space-x-2">
          <Award className="text-orange-500" size={32} />
          <h1 className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-green-600">
            Elector IN
          </h1>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-600 absolute left-1/2 -translate-x-1/2">
          <button onClick={() => setActiveModal('registration')} className="hover:text-orange-500 transition-colors">Registration</button>
          <button onClick={() => setActiveModal('verify')} className="hover:text-blue-500 transition-colors">Verify EPIC</button>
          <button onClick={() => setActiveModal('booth')} className="hover:text-green-500 transition-colors">Find Booth</button>
        </div>
        <button onClick={() => setActiveModal('registration')} className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors">
          Get Started
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 pt-20 pb-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Your Voice. <br />
            <span className="text-orange-500">Your Vote.</span>{' '}
            <span className="text-green-600">Your Power.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
            The simplest, smartest way to navigate the Indian election process. 
            From registering as a new voter to finding your exact polling booth and understanding the election cycle.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => setActiveModal('verify')}
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:shadow-xl hover:-translate-y-1 transition-all flex items-center"
            >
              Check Voter Status <ArrowRight className="ml-2" size={20} />
            </button>
          </div>
        </div>

        {/* Guided Wizard Section */}
        <div className="mt-32">
          <h3 className="text-3xl font-bold text-center mb-4 text-slate-800">Your Step-by-Step Election Guide</h3>
          <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">Interactive modules to help you through the most critical stages of the voting process.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => {
              // Map colors to static classes for Tailwind
              const styles = 
                step.color === 'orange' ? { bg: 'bg-orange-100', text: 'text-orange-600' } :
                step.color === 'blue' ? { bg: 'bg-blue-100', text: 'text-blue-600' } :
                { bg: 'bg-green-100', text: 'text-green-600' };

              return (
                <div 
                  key={step.id}
                  onClick={() => setActiveModal(step.id)}
                  className="bg-white/60 backdrop-blur-lg border border-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all group cursor-pointer flex flex-col h-full"
                >
                  <div className={`${styles.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${styles.text} group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {step.shortDesc}
                  </p>
                  <button className={`${styles.text} font-semibold text-sm flex items-center group-hover:underline mt-auto`}>
                    Start Guide <ArrowRight className="ml-1" size={16} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Election Timeline Section */}
        <div className="mt-40 mb-20">
          <h3 className="text-3xl font-bold text-center mb-16 text-slate-800">The Standard Election Cycle</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            
            <div className="space-y-12 relative">
              {[
                { title: '2026 Announcement', desc: 'ECI announces the schedule for the State Assembly elections in Tamil Nadu, Kerala, WB, and Assam.' },
                { title: 'State Nominations', desc: 'Candidates in the respective states file their papers, followed by rigorous scrutiny.' },
                { title: 'Campaign Phase', desc: 'Candidates share their state-specific manifestos and engage with local voters.' },
                { title: 'Polling Day', desc: 'Citizens head to assigned booths to cast their ballots for the 2026 assembly.' },
                { title: 'Results 2026', desc: 'Votes are counted, and new state governments are officially declared and formed.' }
              ].map((item, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content Container */}
                  <div className={`md:w-1/2 p-6 text-center ${index % 2 === 0 ? 'md:text-left md:pl-12' : 'md:text-right md:pr-12'}`}>
                    <div className={`inline-block p-1 px-3 rounded-full bg-slate-100 text-xs font-bold text-slate-500 mb-2`}>
                      PHASE {index + 1}
                    </div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className={`text-slate-600 text-sm max-w-sm mx-auto ${index % 2 === 0 ? 'md:ml-0' : 'md:mr-0'}`}>
                      {item.desc}
                    </p>
                  </div>
                  
                  {/* Dot (Circle) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-orange-500 z-10" />
                  
                  {/* Empty Spacer */}
                  <div className="md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal / Wizard Detail View */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl relative z-10 overflow-hidden"
            >
              {steps.map((step) => step.id === activeModal && (
                <div key={step.id}>
                  <div className={`bg-gradient-to-r ${
                    step.color === 'orange' ? 'from-orange-500 to-orange-600' :
                    step.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    'from-green-500 to-green-600'
                  } p-6 text-white flex justify-between items-center`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-2xl">
                        {step.icon}
                      </div>
                      <h2 className="text-2xl font-bold">{step.title}</h2>
                    </div>
                    <button onClick={() => setActiveModal(null)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                      <X size={24} />
                    </button>
                  </div>
                  <div className="p-8">
                    {step.content}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-slate-200/50">
        <div className="text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Elector IN. All rights reserved.
        </div>
      </footer>

      {/* Mount Chat Assistant here */}
      <ChatAssistant />
    </main>
  );
}
