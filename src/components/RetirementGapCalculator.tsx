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
  const [profit, setProfit] = useState<string>("500000");
  const [multiple, setMultiple] = useState<string>("3");

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
    { label: "£250K profit", profit: "250000", multiple: "3" },
    { label: "£500K profit", profit: "500000", multiple: "3" },
    { label: "£1M profit", profit: "1000000", multiple: "3.5" },
    { label: "£2M profit", profit: "2000000", multiple: "4" },
  ];

  const maxBar = profitNum > 0 ? profitNum : 1;
  const businessHeight = 100;
  const investmentHeight = maxBar > 0 ? (investmentIncome / maxBar) * 100 : 0;

  return (
    <div className="w-full">
      {/* Presets */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => {
              setProfit(preset.profit);
              setMultiple(preset.multiple);
            }}
            className="px-5 py-3 rounded-xl border border-[#3A7BFF]/30 text-[#94a3b8] text-sm font-medium hover:bg-[#3A7BFF]/10 hover:text-white hover:border-[#3A7BFF]/50 transition-all duration-200"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="glass rounded-2xl p-6 md:p-8 border border-[#3A7BFF]/20">
          <label className="block text-[#94a3b8] text-base mb-4 font-medium">
            Average profit over last 3 years
          </label>
          <div className="relative">
            <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#3A7BFF] text-2xl font-serif">£</span>
            <input
              type="text"
              value={profit ? formatNumber(parseFloat(profit)) : ""}
              onChange={handleProfitChange}
              placeholder="500,000"
              className="w-full bg-[#0B0F1A]/60 rounded-xl p-5 pl-12 border border-[#3A7BFF]/30 text-white text-2xl md:text-3xl font-serif text-center bg-transparent focus:outline-none focus:border-[#3A7BFF]/60 focus:ring-2 focus:ring-[#3A7BFF]/10 transition-all"
            />
          </div>
          <p className="text-[#94a3b8]/60 text-sm mt-3">
            Annual business earnings (EBITDA)
          </p>
        </div>
        <div className="glass rounded-2xl p-6 md:p-8 border border-[#3A7BFF]/20">
          <label className="block text-[#94a3b8] text-base mb-4 font-medium">
            Expected EBITDA multiple
          </label>
          <div className="relative">
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[#3A7BFF] text-2xl font-serif">x</span>
            <input
              type="text"
              value={multiple}
              onChange={handleMultipleChange}
              placeholder="3"
              className="w-full bg-[#0B0F1A]/60 rounded-xl p-5 pr-12 border border-[#3A7BFF]/30 text-white text-2xl md:text-3xl font-serif text-center bg-transparent focus:outline-none focus:border-[#3A7BFF]/60 focus:ring-2 focus:ring-[#3A7BFF]/10 transition-all"
            />
          </div>
          <p className="text-[#94a3b8]/60 text-sm mt-3">
            Typical range: 2x–5x for most UK businesses
          </p>
        </div>
      </div>

      {/* Visual Gap Chart */}
      <div className="glass rounded-2xl p-6 md:p-10 border border-[#3A7BFF]/20 mb-10">
        {/* Chart Header Labels */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-6 md:gap-10 mb-4">
          <div className="text-center">
            <div className="text-[#3A7BFF] text-sm tracking-wider uppercase font-semibold mb-1">Your Current Reality</div>
            <div className="text-white text-xl md:text-2xl font-serif font-medium">Annual Business Income</div>
            <div className="text-[#94a3b8] text-sm mt-1">What you take from the business today</div>
          </div>
          <div className="w-14 md:w-16" /> {/* Spacer for arrow */}
          <div className="text-center">
            <div className="text-[#94a3b8]/70 text-sm tracking-wider uppercase font-semibold mb-1">After Selling</div>
            <div className="text-[#94a3b8] text-xl md:text-2xl font-serif font-medium">Annual Investment Income</div>
            <div className="text-[#94a3b8]/70 text-sm mt-1">5% return on your sale proceeds</div>
          </div>
        </div>

        {/* Y-axis scale + bars */}
        <div className="flex items-stretch gap-2 md:gap-4 h-56 md:h-72">
          {/* Y-axis */}
          <div className="flex flex-col justify-between text-right pr-2 text-[#94a3b8]/50 text-xs md:text-sm font-mono w-20 md:w-24 shrink-0">
            <span>{formatCompact(maxBar)}</span>
            <span>{formatCompact(maxBar * 0.75)}</span>
            <span>{formatCompact(maxBar * 0.5)}</span>
            <span>{formatCompact(maxBar * 0.25)}</span>
            <span>£0</span>
          </div>
          
          {/* Bars area */}
          <div className="flex-1 flex items-end justify-between gap-6 md:gap-10 relative">
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 0.75, 0.5, 0.25, 0].map((pct, i) => (
                <div key={i} className="w-full border-t border-[#94a3b8]/10" />
              ))}
            </div>
            
            <div className="flex-1 flex flex-col items-center relative z-10">
              <div className="w-full bg-[#3A7BFF]/40 rounded-t-xl flex items-end justify-center pb-4 transition-all duration-500" style={{ height: `${businessHeight}%` }}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-white">{formatCompact(profitNum)}</div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pb-20 relative z-10">
              <svg className="w-14 h-14 md:w-16 md:h-16 text-[#3A7BFF]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            <div className="flex-1 flex flex-col items-center relative z-10">
              <div className="w-full bg-[#3A7BFF]/10 rounded-t-xl border border-[#3A7BFF]/20 flex items-end justify-center pb-4 transition-all duration-500" style={{ height: `${Math.max(investmentHeight, 15)}%` }}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#94a3b8]">{formatCompact(investmentIncome)}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="inline-block px-8 py-4 bg-[#3A7BFF]/20 rounded-xl border border-[#3A7BFF]/30">
            <span className="text-[#3A7BFF] text-lg md:text-xl font-semibold">Sale Price: {formatCurrency(salePrice)} ({formatCompact(profitNum)} × {multipleNum}x)</span>
          </div>
        </div>
      </div>

      {/* The Gap Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 md:p-8 glass rounded-2xl border border-[#3A7BFF]/20">
          <div className="text-base text-[#94a3b8] mb-3 font-medium">Annual Retirement Gap</div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-red-400">{formatCurrency(annualGap)}</div>
          <div className="text-base text-red-400/70 mt-3">{percentageDrop.toFixed(0)}% income reduction</div>
        </div>
        <div className="text-center p-6 md:p-8 glass rounded-2xl border border-red-500/30">
          <div className="text-base text-[#94a3b8] mb-3 font-medium">Lost Over 10 Years</div>
          <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-red-400">{formatCurrency(tenYearGap)}</div>
          <div className="text-base text-red-400/70 mt-3">Total income you will never see</div>
        </div>
        <div className="text-center p-6 md:p-8 glass rounded-2xl border border-[#3A7BFF]/20 flex flex-col items-center justify-center">
          <div className="text-base text-[#94a3b8] mb-4 font-medium">The Reality</div>
          <p className="text-lg text-[#94a3b8] leading-relaxed">
            Even investing <strong className="text-white">100% of your sale proceeds</strong> at 5% return, you replace a high-performing asset with a fraction of its income.
          </p>
        </div>
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
