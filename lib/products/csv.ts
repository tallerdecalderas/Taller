export function normalizeHeader(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
<<<<<<< HEAD
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
=======
    .replace(/[\s_-]+/g, "");
}

function parseCsvLine(line: string): string[] {
  const values: string[] = [];
  let value = "";
  let insideQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const character = line[index];
    const nextCharacter = line[index + 1];

    if (character === '"') {
      if (insideQuotes && nextCharacter === '"') {
        value += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (character === "," && !insideQuotes) {
      values.push(value);
>>>>>>> develop
      value = "";
    } else {
      value += character;
    }
  }

<<<<<<< HEAD
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
=======
  values.push(value);
  return values;
}

function parseCsvLines(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let value = "";
  let insideQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];
    const nextCharacter = csv[index + 1];

    if (character === '"') {
      if (insideQuotes && nextCharacter === '"') {
        value += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (character === "," && !insideQuotes) {
      row.push(value);
      value = "";
      continue;
    }

    if ((character === "\n" || character === "\r") && !insideQuotes) {
      if (character === "\r" && nextCharacter === "\n") {
        index += 1;
      }
      row.push(value);
      if (row.some((cell) => cell.trim() !== "")) {
        rows.push(row);
      }
      row = [];
      value = "";
      continue;
    }

    value += character;
  }

  if (value !== "" || row.length > 0) {
    row.push(value);
    if (row.some((cell) => cell.trim() !== "")) {
      rows.push(row);
    }
  }

  return rows;
}

export function parseCsvRecords(csv: string): Record<string, string | undefined>[] {
  const rows = parseCsvLines(csv);
  const headers =
    rows.shift()?.map((header) => normalizeHeader(header.replace(/^\uFEFF/, ""))) ?? [];

  return rows.map((row) => {
    const record: Record<string, string | undefined> = {};

    headers.forEach((header, index) => {
      if (header) {
        record[header] = row[index]?.trim() || undefined;
      }
    });

    return record;
  });
}
>>>>>>> develop
