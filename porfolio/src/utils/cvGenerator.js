import { jsPDF } from 'jspdf';
import { cvData, filterExperienceByType, getSkillsByType } from '../data/cvData';
import { calculateAge } from '../utils/ageCalculator';

export const generateCV = (type = 'fullstack') => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPosition = 20;
  
  // Colores
  const primaryColor = [255, 217, 61]; // Amarillo
  const secondaryColor = [107, 182, 255]; // Azul
  const blackColor = [0, 0, 0];
  
  // Helper para agregar texto
  const addText = (text, x, y, options = {}) => {
    const {
      fontSize = 10,
      fontStyle = 'normal',
      color = blackColor,
      align = 'left',
      maxWidth = pageWidth - 40
    } = options;
    
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    doc.setTextColor(...color);
    
    if (align === 'center') {
      doc.text(text, pageWidth / 2, y, { align: 'center', maxWidth });
    } else {
      doc.text(text, x, y, { maxWidth });
    }
  };
  
  // Helper para agregar línea
  const addLine = (y, color = blackColor) => {
    doc.setDrawColor(...color);
    doc.setLineWidth(0.5);
    doc.line(20, y, pageWidth - 20, y);
  };
  
  // Header con fondo amarillo
  doc.setFillColor(...primaryColor);
  doc.rect(0, 0, pageWidth, 50, 'F');
  
  // Nombre
  addText(cvData.personal.name.toUpperCase(), pageWidth / 2, 20, {
    fontSize: 20,
    fontStyle: 'bold',
    align: 'center'
  });
  
  // Título según tipo
  const titles = {
    fullstack: 'INGENIERO DE SISTEMAS Y LÍDER TÉCNICO',
    frontend: 'DESARROLLADOR FRONTEND',
    backend: 'DESARROLLADOR BACKEND',
    mobile: 'DESARROLLADOR MOBILE',
    ml: 'ESPECIALISTA EN MACHINE LEARNING E IA'
  };
  
  addText(titles[type] || titles.fullstack, pageWidth / 2, 28, {
    fontSize: 12,
    fontStyle: 'bold',
    align: 'center'
  });
  
  // Edad
  const age = calculateAge(cvData.personal.birthDate);
  addText(`${age} años`, pageWidth / 2, 35, {
    fontSize: 10,
    align: 'center'
  });
  
  // Información de contacto
  const contactInfo = `${cvData.personal.location} | ${cvData.personal.phone} | ${cvData.personal.email}`;
  addText(contactInfo, pageWidth / 2, 42, {
    fontSize: 9,
    align: 'center'
  });
  
  yPosition = 60;
  
  // Perfil Profesional
  addText('PERFIL PROFESIONAL', 20, yPosition, {
    fontSize: 14,
    fontStyle: 'bold'
  });
  yPosition += 2;
  addLine(yPosition);
  yPosition += 8;
  
  const profile = cvData.profile[type] || cvData.profile.fullstack;
  const profileLines = doc.splitTextToSize(profile, pageWidth - 40);
  addText(profileLines, 20, yPosition, {
    fontSize: 10
  });
  yPosition += profileLines.length * 5 + 10;
  
  // Experiencia Profesional
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = 20;
  }
  
  addText('EXPERIENCIA PROFESIONAL', 20, yPosition, {
    fontSize: 14,
    fontStyle: 'bold'
  });
  yPosition += 2;
  addLine(yPosition);
  yPosition += 8;
  
  const experiences = filterExperienceByType(type);
  
  experiences.forEach((exp, index) => {
    if (yPosition > pageHeight - 60) {
      doc.addPage();
      yPosition = 20;
    }
    
    // Empresa
    addText(exp.company.toUpperCase(), 20, yPosition, {
      fontSize: 11,
      fontStyle: 'bold'
    });
    yPosition += 6;
    
    // Descripción y ubicación
    addText(exp.description, 20, yPosition, {
      fontSize: 9,
      color: [40, 40, 40]
    });
    yPosition += 5;
    
    // Rol y período
    addText(exp.role, 20, yPosition, {
      fontSize: 10,
      fontStyle: 'bold'
    });
    addText(exp.period, pageWidth - 70, yPosition, {
      fontSize: 9,
      color: [40, 40, 40]
    });
    yPosition += 6;
    
    // Logros
    exp.achievements.forEach(achievement => {
      if (yPosition > pageHeight - 20) {
        doc.addPage();
        yPosition = 20;
      }
      
      doc.setFillColor(...blackColor);
      doc.circle(22, yPosition - 1, 1, 'F');
      
      const achievementLines = doc.splitTextToSize(achievement, pageWidth - 50);
      addText(achievementLines, 26, yPosition, {
        fontSize: 9
      });
      yPosition += achievementLines.length * 4 + 2;
    });
    
    yPosition += 5;
  });
  
  // Educación
  if (yPosition > pageHeight - 40) {
    doc.addPage();
    yPosition = 20;
  }
  
  addText('EDUCACIÓN', 20, yPosition, {
    fontSize: 14,
    fontStyle: 'bold'
  });
  yPosition += 2;
  addLine(yPosition);
  yPosition += 8;
  
  addText(cvData.education.degree, 20, yPosition, {
    fontSize: 11,
    fontStyle: 'bold'
  });
  yPosition += 6;
  addText(`${cvData.education.institution} | ${cvData.education.location}`, 20, yPosition, {
    fontSize: 10
  });
  yPosition += 10;
  
  // Habilidades Técnicas
  if (yPosition > pageHeight - 60) {
    doc.addPage();
    yPosition = 20;
  }
  
  addText('HABILIDADES TÉCNICAS', 20, yPosition, {
    fontSize: 14,
    fontStyle: 'bold'
  });
  yPosition += 2;
  addLine(yPosition);
  yPosition += 8;
  
  const skills = getSkillsByType(type);
  
  Object.values(skills).forEach(skillCategory => {
    if (yPosition > pageHeight - 30) {
      doc.addPage();
      yPosition = 20;
    }
    
    addText(skillCategory.title + ':', 20, yPosition, {
      fontSize: 10,
      fontStyle: 'bold'
    });
    yPosition += 5;
    
    const skillsText = skillCategory.items.join(', ');
    const skillsLines = doc.splitTextToSize(skillsText, pageWidth - 40);
    addText(skillsLines, 20, yPosition, {
      fontSize: 9
    });
    yPosition += skillsLines.length * 4 + 5;
  });
  
  // Footer
  const footerY = pageHeight - 15;
  doc.setFillColor(...secondaryColor);
  doc.rect(0, footerY - 5, pageWidth, 20, 'F');
  addText(`LinkedIn: ${cvData.personal.linkedin} | Portfolio: ${cvData.personal.portfolio}`, pageWidth / 2, footerY, {
    fontSize: 8,
    align: 'center'
  });
  
  // Guardar PDF
  const fileName = `CV_${cvData.personal.name.replace(/ /g, '_')}_${type.toUpperCase()}.pdf`;
  doc.save(fileName);
};
