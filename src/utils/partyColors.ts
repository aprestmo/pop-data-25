// Party colors mapping
const colors: Record<string, string> = {
  R: "0.3657 0.1414 27.45",
  SV: "0.498 0.1541 352.47",
  Ap: "0.5074 0.1815 32.09",
  Sp: "0.5703 0.0775 191.8",
  MDG: "0.6134 0.1428 145.49",
  V: "0.7196 0.1018 203.36",
  KrF: "0.8005 0.1174 63.57",
  H: "0.4978 0.1218 243.62",
  Frp: "0.3635 0.1358 277.24",
  A: "0.683 0 0",
};

// Party colors utility function
export function getPartyColor(party: string): string {
  return colors[party] || "oklch(0.8452 0 0)";
}

// Export the colors object as well for components that need it
export const partyColors = colors; 