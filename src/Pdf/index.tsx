import RNHTMLtoPDF from 'react-native-html-to-pdf';

export async function createPDF(name: string, html: string) {
  return new Promise(async (resolve, reject) => {
    try {
      let options = {
        html: html,
        fileName: name,
        directory: 'quero2pay',
      };

      let file = await RNHTMLtoPDF.convert(options);

      resolve(file.filePath);
    } catch (err) {
      reject('');
    }
  });
}
