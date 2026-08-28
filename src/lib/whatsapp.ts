import { WHATSAPP_CONTACTS, DIVISION_CONTACT_MAP } from '../config/contact';

export function openWhatsApp(phone: string, message: string) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function getWhatsAppForRoute(pathname: string, hash?: string): keyof typeof WHATSAPP_CONTACTS {
  const fullPath = hash ? `${pathname}${hash}` : pathname;
  
  for (const [route, division] of Object.entries(DIVISION_CONTACT_MAP)) {
    if (fullPath.includes(route) || pathname === route.split('#')[0]) {
      return division;
    }
  }

  if (pathname.includes('scrap') || pathname.includes('capabilities#site-transformation')) return 'SCRAP';
  if (pathname.includes('scaffolding') || pathname.includes('capabilities#project-materials')) return 'SCAFFOLDING';
  if (pathname.includes('supply') || pathname.includes('capabilities#steel-engineering')) return 'MATERIAL_SUPPLY';
  if (pathname.includes('fabrication') || pathname.includes('civil') || pathname.includes('capabilities#fabrication-civil')) return 'FABRICATION_CIVIL';

  return 'GENERAL';
}

export function getWhatsAppNumber(division: keyof typeof WHATSAPP_CONTACTS): string {
  return WHATSAPP_CONTACTS[division];
}
