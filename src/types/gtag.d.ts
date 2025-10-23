// Google Analytics gtag types
declare global {
  function gtag(
    command: 'config' | 'event' | 'js' | 'set',
    targetId: string | Date,
    config?: {
      event_category?: string;
      event_label?: string;
      value?: number;
      custom_parameters?: Record<string, any>;
      [key: string]: any;
    }
  ): void;

  interface Window {
    gtag?: typeof gtag;
  }
}

export {};
