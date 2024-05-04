import fs from "fs";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
const generatedData = {
  "metadata": {
    "creator": "testuser@gmail.com",
  },
  "paraObject": [
    {
      "type": "string",
      "name": "What is Lorem Ipsum?",
      "nameFontSize": 18,
      "content": `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      "contentFontSize": 12,
      "includeInTOC": true,
      "newPageAfter": false
    },
    {
      "type": "string",
      "name": "Why do we use it?",
      "nameFontSize": 14,
      "content": `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
      "contentFontSize": 12,
      "includeInTOC": true,
      "newPageAfter": true
    },
    // {
    //   "type": "string",
    //   "name": "The middle",
    //   "nameFontSize": 14,
    //   "content": `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\nThe standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
    //   "contentFontSize": 12,
    //   "includeInTOC": true,
    //   "newPageAfter": false
    // },
    // {
    //   "type": "table",
    //   "name": "Table 1",
    //   "nameFontSize": 14,
    //   "table": {
    //     "theme": "grid",
    //     "data": [
    //       [
    //         {
    //           "content": "A valid name",
    //           "styles": {
    //             "fontStyle": "bold",
    //             "cellWidth": 120,
    //             "fillColor": "#1abd9c",
    //             "textColor": "#ffffff"
    //           }
    //         },
    //         "John Doe"
    //       ],
    //       [
    //         {
    //           "content": "A valid number",
    //           "styles": {
    //             "fontStyle": "bold",
    //             "cellWidth": 120,
    //             "fillColor": "#1abd9c",
    //             "textColor": "#ffffff"
    //           }
    //         },
    //         "259"
    //       ],
    //       [
    //         {
    //           "content": "Your address",
    //           "styles": {
    //             "fontStyle": "bold",
    //             "cellWidth": 120,
    //             "fillColor": "#1abd9c",
    //             "textColor": "#ffffff"
    //           }
    //         },
    //         "127.0.0.1"
    //       ]
    //     ]
    //   },
    //   "includeInTOC": true,
    //   "newPageAfter": true
    // },
    {
      "type": "string",
      "name": "What should have worked !",
      "nameFontSize": 18,
      "content": "The generated PDF should have all the necessary information.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\n\nIn interdum neque vitae elementum tincidunt.\n\nProin eu eros aliquam, malesuada nunc vitae, porta metus.\n\nMauris vulputate risus sit amet facilisis ullamcorper.\n\nQuisque ac metus eu arcu sagittis placerat tempor id risus.\n\nIn ultrices risus imperdiet mi pulvinar venenatis.\n\nMorbi sit amet enim rhoncus, faucibus sapien at, tincidunt mi.\n\nNam vel ipsum suscipit, vulputate urna at, tempus ante.\n\nAliquam rutrum leo dapibus turpis suscipit ultrices.",
	  "contentFontSize": 10,
      "includeInTOC": true,
      "newPageAfter": false
    },
    // {
    //   "type": "table",
    //   "name": "A detailed table",
    //   "nameFontSize": 14,
    //   "table": {
    //     "theme": "grid",
    //     "head": [
    //       [
    //         {
    //           "content": "#",
    //           "styles": {
    //             "fontStyle": "bold",
    //             "cellWidth": "wrap"
    //           }
    //         },
    //         {
    //           "content": "Name",
    //           "styles": {
    //             "fontStyle": "bold",
    //             "cellWidth": "wrap"
    //           }
    //         },
    //         {
    //           "content": "Status",
    //           "styles": {
    //             "fontStyle": "bold",
    //             "cellWidth": "wrap"
    //           }
    //         }
    //       ]
    //     ],
    //     "data": [
    //       [
    //         {
    //           "content": 1,
    //           "styles": {
    //             "fontStyle": "normal",
    //             "cellWidth": "wrap",
    //             "fillColor": "#d3d3d3"
    //           }
    //         },
    //         {
    //           "content": "John Doe",
    //           "styles": {
    //             "fontStyle": "normal",
    //             "cellWidth": "wrap",
    //             "fillColor": "#d3d3d3"
    //           }
    //         },
    //         {
    //           "content": "Active",
    //           "styles": {
    //             "fontStyle": "normal",
    //             "cellWidth": "wrap",
    //             "fillColor": "#d3d3d3"
    //           }
    //         }
    //       ],
    //       [
    //         {
    //           "content": 2,
    //           "styles": {
    //             "fontStyle": "normal",
    //             "cellWidth": "wrap",
    //             "fillColor": "#d3d3d3"
    //           }
    //         },
    //         {
    //           "content": "Doe Jane",
    //           "styles": {
    //             "fontStyle": "normal",
    //             "cellWidth": "wrap",
    //             "fillColor": "#d3d3d3"
    //           }
    //         },
    //         {
    //           "content": "Inactive",
    //           "styles": {
    //             "fontStyle": "normal",
    //             "cellWidth": "wrap",
    //             "fillColor": "#d3d3d3"
    //           }
    //         }
    //       ]
    //     ]
    //   },
    //   "includeInTOC": true,
    //   "newPageAfter": false
    // }
  ]
};
function NewDefectPDF(generatedData) {
	try {
		// Create a new PDF document
		const doc = new jsPDF({
			orientation: "portrait",
			unit: "pt",
			format: "a4",
			putOnlyUsedFonts: true,
			floatPrecision: "smart",
		});
		const maxContentWidth = 480;
		const pageWidth = doc.internal.pageSize.width;
		const pageHeight = doc.internal.pageSize.height;
		const baseXAxis = pageWidth / 11;
		const baseYAxis = pageHeight / 11;
		let tocTable = [];
		//Fonts
		const fontPath = `./assets/fonts/`;
		const fontFiles = fs.readdirSync(fontPath);
		fontFiles.forEach((fontFile) => {
			const fontData = fs.readFileSync(`${fontPath}${fontFile}`, { encoding: "base64" });
			doc.addFileToVFS(fontFile, fontData);
			const fontName = fontFile.split(".")[0];
			doc.addFont(fontFile, fontName.split("-")[0], fontName.split("-")[1]);
		});
		doc.setFont("OpenSans", "Regular");
		const addStandardItemsToAllPages = () => {
			const pageSize = doc.internal.pageSize;

			//Border Config
			const borderMargin = 40; // Adjust the margin as needed
			const borderWidth = 1; // Adjust the border width as needed

			//Footer Config
			const xMargin = 58; // Adjust the margin as needed
			const yMargin = 36; // Adjust the margin as needed
			const fontSize = 12; // Adjust the font size as needed
			doc.setFontSize(fontSize);

			const totalPages = doc.internal.getNumberOfPages();

			for (let i = 1; i <= totalPages; i++) {
				doc.setPage(i);

				//Add Border
				doc.setLineWidth(borderWidth);
				doc.line(borderMargin, borderMargin, pageSize.width - borderMargin, borderMargin);
				doc.line(
					borderMargin,
					pageSize.height - borderMargin,
					pageSize.width - borderMargin,
					pageSize.height - borderMargin,
				);

				//Add Footer
				const text = `Page ${i} / ${totalPages}`;
				const textWidth = (doc.getStringUnitWidth(text) * fontSize) / doc.internal.scaleFactor;
				doc.text(text, pageSize.width - xMargin - textWidth, pageSize.height - yMargin + fontSize);
				doc.text(`Sample footer`, xMargin, pageSize.height - yMargin + fontSize);
			}
		};
		const addTable = (xAxis, yAxis, content) => {
			doc.autoTable({
				theme: content.theme,
				margin: xAxis,
				startY: yAxis,
				head: content?.head ?? null,
				body: content.data,
				styles: { font: "OpenSans" },
			});
		};
		const logPageForTOC = (text) => {
			tocTable.push({ name: text, page: doc.internal.getCurrentPageInfo().pageNumber });
		};
		const processTOC = () => {
			doc.setPage(2);
			doc.setFontSize(18);
			doc.setFont("OpenSans", "Bold");
			let title = `Table of Contents`;
			let titleWidth = doc.getTextWidth(title);
			doc.text(title, baseXAxis + titleWidth / 2, baseYAxis, {
				align: "center",
			});
			let yAxis = baseYAxis + 30;
			doc.setFontSize(14);
			doc.setFont("OpenSans", "Italic");
			const dotWidth = doc.getTextWidth(".");
			titleWidth = doc.getTextWidth(title);
			let remainingWidth = 0;
			let noOfDots = 0;
			let stringOfDots = ``;
			let finalText = ``;
			yAxis += 18;
			const numberOfPagesForTOC = Math.ceil(tocTable.length / 36);
			tocTable.forEach((toc, index) => {
				if (yAxis > pageHeight - baseYAxis) {
					const currPage = doc.internal.getCurrentPageInfo().pageNumber + 1;
					doc.insertPage(currPage);
					doc.setPage(currPage);
					yAxis = baseYAxis + 30;
					doc.setFontSize(18);
					doc.setFont("OpenSans", "Bold");
					doc.text(title, baseXAxis + titleWidth / 2, baseYAxis, {
						align: "center",
					});
					doc.setFontSize(14);
					doc.setFont("OpenSans", "Italic");
				}
				let text = toc.name;
				let textWidth = doc.getTextWidth(text);
				remainingWidth = maxContentWidth - textWidth;
				if (remainingWidth < 0) {
					text = text.substring(0, text.length - 10);
					textWidth = doc.getTextWidth(`${text}`);
					remainingWidth = maxContentWidth - textWidth;
				}
				noOfDots = Math.floor(remainingWidth / dotWidth) - 3;
				if (noOfDots < 0) {
					noOfDots = 0;
				}
				stringOfDots = ".".repeat(noOfDots);
				finalText = `${text} ${stringOfDots}`;
				const currItemPage = toc.page + numberOfPagesForTOC - 1;
				doc.textWithLink(finalText, baseXAxis, yAxis, { url: `#page=${currItemPage}` });
				doc.textWithLink(`${currItemPage}`, baseXAxis + maxContentWidth, yAxis, { url: `#page=${currItemPage}` });
				yAxis += 18;
			});
		};
		const logoData = fs.readFileSync("assets/logo.png", { encoding: "base64" });
		doc.addImage(logoData, "PNG", pageWidth / 2 - 200 / 2, pageHeight / 4, 200, 70);
		doc.setFont("OpenSans", "Bold");
		const coverTitle = `A small test to check the issue with Adobe Reader and jsPDF`;
		let coverTitleWidth = doc.getTextWidth(coverTitle);
		let currFontSize = 24;
		while (coverTitleWidth > maxContentWidth) {
			currFontSize -= 1;
			doc.setFontSize(currFontSize);
			coverTitleWidth = doc.getTextWidth(coverTitle);
		}
		doc.text(coverTitle, pageWidth / 2, pageHeight / 2, {
			align: "center",
		});
		doc.setFontSize(20);
		doc.setFont("OpenSans", "BoldItalic");
		doc.text(`A simple test to show what is going wrong`, pageWidth / 2, pageHeight / 2 + 60, {
			align: "center",
		});

		doc.setFontSize(18);
		doc.setFont("OpenSans", "SemiBold");
		doc.text(`Last page wont work in Adobe Reader`, pageWidth / 2, pageHeight / 2 + 120, {
			align: "center",
		});

		const dateString = new Date().toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
		doc.setFontSize(13);
		doc.setFont("OpenSans", "Italic");
		doc.text(`Date : ${dateString}`, pageWidth / 4, (pageHeight / 4) * 3 + 80, {
			align: "center",
		});
		doc.setFont("OpenSans", "Regular");
		doc.addPage();
		//TOC
		doc.addPage();
		let paraYAxis = baseYAxis;
		generatedData.paraObject.forEach((para) => {
			const nameTextLines = para.name;
			doc.setFontSize(para.nameFontSize);
			doc.setFont("OpenSans", "Bold");
			doc.text(nameTextLines, baseXAxis, paraYAxis);
			paraYAxis += 18;
			if (para.type === "string") {
				doc.setFontSize(para.contentFontSize);
				doc.setFont("OpenSans", "Regular");
				const contentTextLines = doc.splitTextToSize(para.content, maxContentWidth);
				const contentTextHeight = contentTextLines.length * doc.internal.getLineHeight();
				doc.text(contentTextLines, baseXAxis, paraYAxis, { align: "justify" });
				paraYAxis += contentTextHeight + 20;
			} else if (para.type === "table") {
				addTable(baseXAxis, paraYAxis, para.table);
				paraYAxis = doc.lastAutoTable.finalY + 30;
			}
			if (para.includeInTOC) {
				logPageForTOC(para.name);
			}
			if (para.newPageAfter) {
				doc.addPage();
				paraYAxis = baseYAxis;
			}
		});
		processTOC();
		//add meta data such as author, title to the pdf
		doc.setProperties({
			title: `Test Report`,
			author: `jspdf-adobe-issue`,
			creator: generatedData.metadata.creator,
		});
		addStandardItemsToAllPages();
		doc.save(`./proof.pdf`);
		return { success: true };
	} catch (error) {
		console.log("Error in generating PDF file", error);
		return { success: false, error: error };
	}
}

NewDefectPDF(generatedData);
