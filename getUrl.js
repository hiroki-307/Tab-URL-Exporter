
function toMarkdown(urls) {
    return urls.map((url) => `- [${new URL(url).hostname}](${url})`).join("\n");
  }
  
  function toHTML(urls) {
    return (
      `<ul>\n` +
      urls
        .map((url) => `  <li><a href="${url}">${new URL(url).hostname}</a></li>`)
        .join("\n") +
      `\n</ul>`
    );
  }
  
  function toPlainText(urls) {
    return urls.map((url) => `- ${url}`).join("\n");
  }
  
  function toJSON(urls) {
    return JSON.stringify(urls, null, 2);
  }
  
  function toXML(urls) {
    return (
      `<urls>\n` +
      urls.map((url) => `  <url>${url}</url>`).join("\n") +
      `\n</urls>`
    );
  }
  
  function toCSV(urls) {
    return urls.map((url) => `"${url}"`).join("\n");
  }
  
  // フォーマットに応じて適切な変換関数を呼び出す
  function formatURLs(urls, format) {
    switch (format) {
      case "markdown":
        return toMarkdown(urls);
      case "html":
        return toHTML(urls);
      case "plain":
        return toPlainText(urls);
      case "json":
        return toJSON(urls);
      case "xml":
        return toXML(urls);
      case "csv":
        return toCSV(urls);
      default:
        return toPlainText(urls);
    }
  }
  
  // ファイル拡張子を決定する関数
  function getFileExtension(format) {
    switch (format) {
      case "markdown":
        return "md";
      case "html":
        return "html";
      case "plain":
        return "txt";
      case "json":
        return "json";
      case "xml":
        return "xml";
      case "csv":
        return "csv";
      default:
        return "txt";
    }
  }
  
  // MIMEタイプを取得する関数
  function getBlobType(format) {
    switch (format) {
      case "markdown":
        return "text/markdown";
      case "html":
        return "text/html";
      case "plain":
        return "text/plain";
      case "json":
        return "application/json";
      case "xml":
        return "application/xml";
      case "csv":
        return "text/csv";
      default:
        return "text/plain";
    }
  }
  