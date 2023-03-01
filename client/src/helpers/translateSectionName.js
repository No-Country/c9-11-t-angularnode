import sections from './sectionData';

const translateSectionName = (section) => {
  const result = sections.find((s) => s.value == section );
  return result.name;
}

export default translateSectionName;