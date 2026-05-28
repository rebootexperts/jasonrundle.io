import React from "react";
import { renderToFile } from "@react-pdf/renderer";
import { join } from "path";
import { resume } from "../src/data/resume";
import { ResumePdf } from "../src/components/pdf/ResumePdf";

async function main() {
  const outputPath = join(process.cwd(), "public", "jason-rundle-resume.pdf");
  await renderToFile(<ResumePdf data={resume} />, outputPath);
  console.log(`Wrote PDF: ${outputPath}`);
}

main().catch((err) => {
  console.error("PDF generation failed:", err);
  process.exit(1);
});
