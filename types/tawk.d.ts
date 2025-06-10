// Add TypeScript declaration for Tawk.to
declare global {
  interface Window {
    Tawk_API: any;
    Tawk_LoadStart: Date;
  }
}

export {};
