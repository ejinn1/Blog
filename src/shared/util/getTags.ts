export const getTags = (keywords: string) => {
  return keywords
    ? keywords.split(',').map((keyword: string) => keyword.trim())
    : [];
};
