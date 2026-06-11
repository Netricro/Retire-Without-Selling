"use client";

import { useState, useCallback } from "react";

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-GB").format(value);
}

function formatCompact(value: number): string {
  if (value >= 1000000) {
    return "£" + (value / 1000000).toFixed(1) + "M";
  }
  if (value >= 1000) {
    return "£" + (value / 1000).toFixed(0) + "K";
  }
  return "£" + value.toFixed(0);
}

export default function RetirementGapCalculator() {
  const [profit, setProfit] = useState<string>("");
  const [multiple, setMultiple] = useState<string>("");

  const profitNum = parseFloat(profit.replace(/[^0-9.]/g, "")) || 0;
  const multipleNum = parseFloat(multiple) || 0;

  const salePrice = profitNum * multipleNum;
  const investmentIncome = salePrice * 0.05;
  const annualGap = profitNum - investmentIncome;
  const tenYearGap = annualGap * 10;
  const percentageDrop = profitNum > 0 ? ((profitNum - investmentIncome) / profitNum) * 100 : 0;

  const handleProfitChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    setProfit(raw);
  }, []);

  const handleMultipleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^(\d*\.?\d*)$/.test(value)) {
      setMultiple(value);
    }
  }, []);

  const presets = [
    { label: "£250K profit", profit: "250000", multiple: "3", desc: "Small business" },
    { label: "£500K profit", profit: "500000", multiple: "3", desc: "Mid-sized business" },
    { label: "£1M profit", profit: "1000000", multiple: "3.5", desc: "Large business" },
    { label: "£2M profit", profit: "2000000", multiple: "4", desc: "Enterprise" },
  ];

  const isPresetActive = (p: string, m: string) => profit === p && multiple === m;

  return (
    <div className="w-full">
      {/* Quick Start Selector */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[#3A7BFF]/20 flex items-center justify-center text-[#3A7BFF] text-sm font-bold">1</div>
          <span className="text-white font-medium text-lg">Pick a scenario or enter your own figures below</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {presets.map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setProfit(preset.profit);
                setMultiple(preset.multiple);
              }}
              className={`p-4 rounded-xl border text-left transition-all duration-200 relative ${
                isPresetActive(preset.profit, preset.multiple)
                  ? "bg-[#3A7BFF]/20 border-[#3A7BFF] text-white"
                  : "bg-[#0B0F1A]/40 border-[#3A7BFF]/20 text-[#94a3b8] hover:bg-[#3A7BFF]/10 hover:border-[#3A7BFF]/40 hover:text-white"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#3A7BFF] text-xs tracking-wider uppercase font-semibold">Use this scenario</span>
                <svg className="w-4 h-4 text-[#3A7BFF]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="font-serif text-xl md:text-2xl mb-1">{preset.label}</div>
              <div className="text-sm opacity-70">{preset.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Divider arrow */}
      <div className="flex justify-center mb-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#94a3b8]/50 text-sm">or adjust your own figures</span>
          <svg className="w-6 h-6 text-[#3A7BFF]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="glass rounded-2xl p-6 md:p-8 border border-[#3A7BFF]/20 relative">
          <div className="absolute -top-3 left-6 px-3 bg-[#0B0F1A]">
            <span className="text-[#3A7BFF] text-sm font-semibold tracking-wider uppercase">Enter your profit</span>
          </div>
          <label className="block text-[#94a3b8] text-sm mt-2 mb-4">
            Average annual profit over last 3 years (EBITDA)
          </label>
          <div className="relative">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#3A7BFF] text-2xl font-serif">£</span>
            <input
              type="text"
              value={profit ? formatNumber(parseFloat(profit)) : ""}
              onChange={handleProfitChange}
              placeholder="Type your profit..."
              className="w-full bg-[#0B0F1A]/60 rounded-xl p-5 pl-12 border-2 border-[#3A7BFF]/30 text-white text-2xl md:text-3xl font-serif text-center bg-transparent focus:outline-none focus:border-[#3A7BFF] focus:ring-2 focus:ring-[#3A7BFF]/20 transition-all cursor-text"
            />
          </div>
          <p className="text-[#94a3b8]/60 text-sm mt-3">
            Annual business earnings (EBITDA) — before interest, tax, depreciation and amortisation
          </p>
        </div>
        <div className="glass rounded-2xl p-6 md:p-8 border border-[#3A7BFF]/20 relative">
          <div className="absolute -top-3 left-6 px-3 bg-[#0B0F1A]">
            <span className="text-[#3A7BFF] text-sm font-semibold tracking-wider uppercase">Enter your multiple</span>
          </div>
          <label className="block text-[#94a3b8] text-sm mt-2 mb-4">
            Expected sale multiple (industry standard 2x–5x)
          </label>
          <div className="relative">
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#3A7BFF] text-2xl font-serif">x</span>
            <input
              type="text"
              value={multiple}
              onChange={handleMultipleChange}
              placeholder="Enter your multiple here"
              className="w-full bg-[#0B0F1A]/60 rounded-xl p-5 pr-12 border-2 border-[#3A7BFF]/30 text-white text-2xl md:text-3xl font-serif text-center bg-transparent focus:outline-none focus:border-[#3A7BFF] focus:ring-2 focus:ring-[#3A7BFF]/20 transition-all cursor-text"
            />
          </div>
          <p className="text-[#94a3b8]/60 text-sm mt-3">
            Typical range: 2x–5x for most UK businesses. Owner-dependent businesses often sell for less.
          </p>
        </div>
      </div>

      {/* Results connector */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center gap-3 bg-[#3A7BFF]/10 px-6 py-3 rounded-full border border-[#3A7BFF]/20">
          <svg className="w-5 h-5 text-[#3A7BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[#3A7BFF] font-semibold">Results update automatically</span>
          <svg className="w-5 h-5 text-[#3A7BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* The Results — Four Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="text-center p-6 md:p-8 glass rounded-2xl border border-[#3A7BFF]/30">
          <div className="text-sm text-[#3A7BFF] tracking-wider uppercase font-semibold mb-3">Sale Price</div>
          <div className="text-4xl md:text-5xl font-serif text-[#3A7BFF]">{formatCurrency(salePrice)}</div>
          <div className="text-base text-[#94a3b8]/70 mt-3">{formatCompact(profitNum)} × {multipleNum}x</div>
        </div>
        <div className="text-center p-6 md:p-8 glass rounded-2xl border border-[#3A7BFF]/30">
          <div className="text-sm text-[#3A7BFF] tracking-wider uppercase font-semibold mb-3">Investment Income (5% pa)</div>
          <div className="text-4xl md:text-5xl font-serif text-[#94a3b8]">{formatCurrency(investmentIncome)}</div>
          <div className="text-base text-[#94a3b8]/70 mt-3">What your sale proceeds generate</div>
        </div>
        <div className="text-center p-6 md:p-8 glass rounded-2xl border border-red-500/30">
          <div className="text-sm text-red-400 tracking-wider uppercase font-semibold mb-3">Annual Retirement Gap</div>
          <div className="text-4xl md:text-5xl font-serif text-red-400">{formatCurrency(annualGap)}</div>
          <div className="text-base text-red-400/70 mt-3">{percentageDrop.toFixed(0)}% income reduction</div>
        </div>
        <div className="text-center p-6 md:p-8 glass rounded-2xl border border-red-500/30">
          <div className="text-sm text-red-400 tracking-wider uppercase font-semibold mb-3">Lost Over 10 Years</div>
          <div className="text-4xl md:text-5xl font-serif text-red-400">{formatCurrency(tenYearGap)}</div>
          <div className="text-base text-red-400/70 mt-3">Total income you will never see</div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 md:p-8 border border-[#3A7BFF]/20 mb-8">
        <p className="text-lg text-[#94a3b8] leading-relaxed text-center">
          Even investing <strong className="text-white">100% of your sale proceeds</strong> at 5% return, you replace a high-performing asset with a fraction of its income.
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[#94a3b8]/60 text-sm max-w-2xl mx-auto">
          Based on 100% of sale proceeds invested at 5% annual return after fees and taxes. 
          Multiples typically reflect asset value already. Does not include net asset value.
        </p>
      </div>
    </div>
  );
}
