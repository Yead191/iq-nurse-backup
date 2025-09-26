"use client";

import CircularProgress from "../ui/CircularProgress";

export default function PeerComparison() {
  return (
    <div className="flex justify-center">
      <div className="bg-card rounded-lg  p-8 boxShadow max-w-sm w-full">
        <div className="text-center space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Performance Ranking
            </h3>
            <p className="text-sm text-muted-foreground text-pretty">
              You are in the top 15% of all nursing students using NursePrep
            </p>
          </div>

          <div className="flex justify-center">
            <CircularProgress percentage={85} size={160} />
          </div>

          <div>
            <h4 className="text-xl font-semibold text-foreground">
              Percentile Ranking
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
