import showdown from 'showdown';

const converter = new showdown.Converter();

export const mdToHtml = (mdString: string): string => {
  return converter.makeHtml(mdString);
};
