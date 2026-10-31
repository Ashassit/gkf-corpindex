/**
 * Performance optimization utilities to reduce forced reflows and improve metrics
 */

/**
 * Batch DOM reads and writes to prevent layout thrashing
 */
export class DOMBatcher {
  private readQueue: Array<() => void> = [];
  private writeQueue: Array<() => void> = [];
  private scheduled = false;

  read(fn: () => void) {
    this.readQueue.push(fn);
    this.scheduleFlush();
  }

  write(fn: () => void) {
    this.writeQueue.push(fn);
    this.scheduleFlush();
  }

  private scheduleFlush() {
    if (!this.scheduled) {
      this.scheduled = true;
      requestAnimationFrame(() => this.flush());
    }
  }

  private flush() {
    // Execute all reads first
    this.readQueue.forEach((fn) => fn());
    this.readQueue = [];

    // Then execute all writes
    this.writeQueue.forEach((fn) => fn());
    this.writeQueue = [];

    this.scheduled = false;
  }
}

export const domBatcher = new DOMBatcher();

/**
 * Debounce function for resize/scroll handlers
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Throttle function for high-frequency events
 */
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function (...args: Parameters<T>) {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Request idle callback wrapper for non-critical work
 */
export function runWhenIdle(fn: () => void, timeout = 2000) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(fn, { timeout });
  } else {
    setTimeout(fn, 1);
  }
}

/**
 * Preload critical resources
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Preconnect to external domains
 */
export function addPreconnect(url: string) {
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = url;
  document.head.appendChild(link);
}
