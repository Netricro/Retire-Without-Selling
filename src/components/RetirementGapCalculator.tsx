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

  return (
    <div className="glass rounded-2xl p-8 md:p-12 glow-blue border border-[#3A7BFF]/20">
      {/* Presets */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {presets.map((preset) => (
          <button
            key={preset.label}
            onClick={() => {
              setProfit(preset.profit);
              setMultiple(preset.multiple);
            }}
            className="px-4 py-2 rounded-lg border border-[#3A7BFF]/30 text-[#94a3b8] text-sm hover:bg-[#3A7BFF]/10 hover:text-white transition-all duration-200"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <label className="block text-[#94a3b8] text-sm mb-3">
            Average profit over last 3 years (EBITDA)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8] text-lg">£</span>
            <input
              type="text"
              value={profit ? formatNumber(parseFloat(profit)) : ""}
              onChange={handleProfitChange}
              placeholder="500,000"
              className="w-full glass rounded-lg p-4 pl-10 border border-[#3A7BFF]/20 text-white text-xl font-serif text-center bg-transparent focus:outline-none focus:border-[#3A7BFF]/50 transition-colors"
            />
          </div>
          <p className="text-[#94a3b8]/60 text-xs mt-2">
            Your annual business earnings before interest, tax, depreciation and amortisation
          </p>
        </div>
        <div>
          <label className="block text-[#94a3b8] text-sm mb-3">
            Expected EBITDA multiple
          </label>
          <div className="relative">
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8] text-lg">x</span>
            <input
              type="text"
              value={multiple}
              onChange={handleMultipleChange}
              placeholder="3"
              className="w-full glass rounded-lg p-4 pr-10 border border-[#3A7BFF]/20 text-white text-xl font-serif text-center bg-transparent focus:outline-none focus:border-[#3A7BFF]/50 transition-colors"
            />
          </div>
          <p className="text-[#94a3b8]/60 text-xs mt-2">
            Typical range: 2x–5x for most UK businesses. Owner-dependent businesses often sell for less.
          </p>
        </div>
      </div>

      <div className="section-divider max-w-2xl mx-auto my-8" />

      {/* Results */}
      <div className="space-y-8">
        {/* Sale Price */}
        <div className="text-center">
          <p className="text-sm text-[#94a3b8] mb-2">Your estimated business sale price</p>
          <p className="text-3xl md:text-4xl font-serif text-[#3A7BFF]">
            {formatCurrency(salePrice)}
          </p>
          <p className="text-xs text-[#94a3b8]/60 mt-1">
            {formatCurrency(profitNum)} × {multipleNum}x = {formatCurrency(salePrice)}
          </p>
        </div>

        <div className="section-divider max-w-xl mx-auto" />

        {/* The Gap Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 glass rounded-xl border border-[#3A7BFF]/10">
            <div className="text-sm text-[#94a3b8] mb-2">Current Annual Income</div>
            <div className="text-2xl font-serif text-[#3A7BFF]">{formatCurrency(profitNum)}</div>
            <div className="text-xs text-[#94a3b8]/60 mt-1">From your business</div>
          </div>
          <div className="text-center p-4 glass rounded-xl border border-[#94a3b8]/10">
            <div className="text-sm text-[#94a3b8] mb-2">Investment Income</div>
            <div className="text-2xl font-serif text-[#94a3b8]">{formatCurrency(investmentIncome)}</div>
            <div className="text-xs text-[#94a3b8]/60 mt-1">5% return on {formatCurrency(salePrice)}</div>
          </div>
          <div className="text-center p-4 glass rounded-xl border border-red-500/20">
            <div className="text-sm text-red-400 mb-2">Annual Retirement Gap</div>
            <div className="text-2xl font-serif text-red-400">{formatCurrency(annualGap)}</div>
            <div className="text-xs text-red-400/60 mt-1">{percentageDrop.toFixed(0)}% income reduction</div>
          </div>
          <div className="text-center p-4 glass rounded-xl border border-red-500/20">
            <div className="text-sm text-red-400 mb-2">10-Year Gap</div>
            <div className="text-2xl font-serif text-red-400">{formatCurrency(tenYearGap)}</div>
            <div className="text-xs text-red-400/60 mt-1">Total lost income over a decade</div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-[#94a3b8] text-sm">
          Based on 100% of sale proceeds invested at 5% annual return after fees and taxes. 
          Does not include net asset value — multiples typically reflect asset value already.
        </p>
      </div>
    </div>
  );
}
