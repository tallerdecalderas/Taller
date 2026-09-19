export function normalizeHeader(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function parseCsvRow(row: string): string[] {
  const values: string[] = [];
  let value = "";
  let quoted = false;

  for (let index = 0; index < row.length; index += 1) {
    const character = row[index];

    if (character === '"') {
      if (quoted && row[index + 1] === '"') {
        value += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === "," && !quoted) {
      values.push(value.trim());
      value = "";
    } else {
      value += character;
    }
  }

  values.push(value.trim());
  return values;
}

export function parseCsvRecords(csv: string): Record<string, string | undefined>[] {
  const rows: string[] = [];
  let row = "";
  let quoted = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];

    if (character === '"') {
      if (quoted && csv[index + 1] === '"') {
        row += '""';
        index += 1;
      } else {
        quoted = !quoted;
        row += character;
      }
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && csv[index + 1] === "\n") {
        index += 1;
      }
      rows.push(row);
      row = "";
    } else {
      row += character;
    }
  }

  if (row !== "") {
    rows.push(row);
  }

  const [headerRow, ...dataRows] = rows.filter((currentRow) => currentRow.trim() !== "");
  if (!headerRow) {
    return [];
  }

  const headers = parseCsvRow(headerRow).map(normalizeHeader);

  return dataRows.map((dataRow) => {
    const values = parseCsvRow(dataRow);
    return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
  });
}