declare global {
  interface Window {
    dataLayer?: Record<string, any>[];
  }
}

/**
 * Pushes custom booking success event to GTM dataLayer for Google Ads & GA4 conversion tracking.
 */
export function trackBookingSuccess(pujaType?: string, bookingId?: string) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "puja_booking_success",
      puja_type: pujaType || "General Puja",
      booking_id: bookingId || `BK-${Date.now()}`,
      timestamp: new Date().toISOString()
    });
  }
}

/**
 * Pushes WhatsApp link click event to GTM dataLayer.
 */
export function trackWhatsAppClick(source: string = "floating_button") {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "puja_whatsapp_click",
      click_url: "https://wa.me/919546308950",
      link_location: source,
      timestamp: new Date().toISOString()
    });
  }
}

/**
 * Pushes Phone Call link click event to GTM dataLayer.
 */
export function trackPhoneCallClick(source: string = "floating_button") {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "puja_call_click",
      click_url: "tel:+919546308950",
      link_location: source,
      timestamp: new Date().toISOString()
    });
  }
}
