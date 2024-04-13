import config from './data_config.json';

export default async function requestPageData(dispatch) {
  const { spreadsheetID, dataTabs } = config;

  for (let i = 0; i < dataTabs.length; i++) {
    const { id: tabID, action } = dataTabs[i];
    const reqURL = `https://docs.google.com/spreadsheets/d/e/${spreadsheetID}/pub?gid=${tabID}&single=true&output=tsv`;
    const res = await fetch(reqURL);
    const raw = await res.text();
    const data = parseCSV(raw);
    dispatch({ type: action, data: data });
  }
}

/* helpers */
function parseCSV(csv) {
  const lines = csv.split('\r').map(txt => txt.trim().split('\t'));
  const fields = lines.shift();
  return lines.map(line => {
    const data = {};
    line.forEach((val, i) => { data[fields[i]] = val });
    return data;
  });
}
