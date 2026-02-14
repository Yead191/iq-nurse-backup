export const getCategoryColor = (category: string): string => {
  const colorMap: { [key: string]: string } = {
    'Fundamentals of Nursing': '#2C5F8D',
    'Medical Surgical Nursing': '#FE5E7E',
    'Maternal Newborn Nursing': '#8B5CF6',
    'Pediatric Nursing': '#F59E0B',
    'Mental Health Nursing': '#10B981',
    'Pharmacology': '#EC4899',
    'Critical Care Nursing': '#EF4444',
    'Community Health Nursing': '#14B8A6',
    'Nursing Leadership and Management': '#6366F1',
    'Gerontological Nursing': '#84CC16',
    'ECG Interpretation': '#DC2626',
    'Dosage Calculations': '#059669',
    'Nursing Assessment': '#7C3AED',
    'Clinical Skills': '#EA580C',
  };
  
  return colorMap[category] || '#2C5F8D';
};

export const getCategoryIcon = (category: string): string => {
  const iconMap: { [key: string]: string } = {
    'Fundamentals of Nursing': '🏥',
    'Medical Surgical Nursing': '⚕️',
    'Maternal Newborn Nursing': '👶',
    'Pediatric Nursing': '🧸',
    'Mental Health Nursing': '🧠',
    'Pharmacology': '💊',
    'Critical Care Nursing': '🚑',
    'Community Health Nursing': '🏘️',
    'Nursing Leadership and Management': '👔',
    'Gerontological Nursing': '👵',
    'ECG Interpretation': '📈',
    'Dosage Calculations': '🔢',
    'Nursing Assessment': '🔍',
    'Clinical Skills': '🩺',
  };
  
  return iconMap[category] || '📚';
};