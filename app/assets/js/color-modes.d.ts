/**
 * Declaração de tipos para color-mode.js
 */

declare function getStoredTheme(): string | null;
declare function setStoredTheme(theme: string): void;
declare function getPreferredTheme(): string;
declare function setTheme(theme: string): void;
declare function showActiveTheme(theme: string, focus?: boolean): void;
