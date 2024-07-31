interface FormatterConfig {
  values: string[];
  isLong: boolean;
  isConjunction: boolean;
}

function listFormat(config: FormatterConfig): string {
  if (config.values.length <= 0) return '';

  const formatter = new Intl.ListFormat('en', {
    style: config.isLong ? 'long' : 'short',
    type: config.isConjunction ? 'conjunction' : 'disjunction',
  });

  return formatter.format(config.values);
}

export default listFormat;
