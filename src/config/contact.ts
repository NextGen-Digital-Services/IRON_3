export const WHATSAPP_CONTACTS = {
  SCRAP: '919324448080',
  SCAFFOLDING: '919321028080',
  MATERIAL_SUPPLY: '919231318080',
  GENERAL: '919324448080',
  FABRICATION_CIVIL: '919231318080',
};

export const PHONE_CONTACTS = {
  SCRAP: '+91 9324448080',
  SCAFFOLDING: '+91 9321028080',
  MATERIAL_SUPPLY: '+91 9231318080',
  GENERAL: '+91 9324448080',
};

export const DIVISION_CONTACT_MAP: Record<string, keyof typeof WHATSAPP_CONTACTS> = {
  '/capabilities/scrap': 'SCRAP',
  '/capabilities/scaffolding': 'SCAFFOLDING',
  '/capabilities/steel': 'MATERIAL_SUPPLY',
  '/capabilities/fabrication': 'FABRICATION_CIVIL',
};

export const WHATSAPP_MESSAGES = {
  SCRAP_DEFAULT: 'Hello IRONEX, I would like to discuss an Industrial Scrap Procurement requirement. Please help me with the next steps.',
  SCRAP_LOT: 'Hello IRONEX, I would like to share details regarding an industrial scrap lot. Please let me know the information required for evaluation or inspection.',
  SCRAP_INSPECTION: 'Hello IRONEX, I would like to request a site inspection for an industrial scrap requirement.',
  SCAFFOLDING_DEFAULT: 'Hello IRONEX, I would like to discuss a Scaffolding or Formwork requirement. Please help me check the relevant availability and next steps.',
  SCAFFOLDING_RENTAL: 'Hello IRONEX, I would like to request a quotation for scaffolding rental. I can share the required quantity, location and rental duration.',
  SCAFFOLDING_AVAILABILITY: 'Hello IRONEX, I would like to check the availability of scaffolding components for my project.',
  SUPPLY_DEFAULT: 'Hello IRONEX, I would like to discuss a Steel or Construction Material requirement. I can share the specification, quantity and delivery location.',
  SUPPLY_PRICING: 'Hello IRONEX, I would like to request pricing for a material requirement. Please let me know where I can share the specifications or BOQ.',
  SUPPLY_BOQ: 'Hello IRONEX, I would like to share a BOQ for material procurement. Please guide me on the next steps.',
  FABRICATION_DEFAULT: 'Hello IRONEX, I would like to discuss a Structural Fabrication or Civil Works requirement. I can share the project scope, drawings and site details.',
  FABRICATION_DISCUSSION: 'Hello IRONEX, I would like to request a discussion regarding a fabrication or civil project requirement.',
  GENERAL_DEFAULT: 'Hello IRONEX, I would like to discuss a business requirement and need help connecting with the relevant division.',
  GENERAL_HERO: 'Hello IRONEX, I would like to discuss a requirement. Please connect me with the relevant division.',
  GENERAL_TEAM: 'Hello IRONEX, I would like to speak with the relevant team regarding an industrial or project requirement.',
};
