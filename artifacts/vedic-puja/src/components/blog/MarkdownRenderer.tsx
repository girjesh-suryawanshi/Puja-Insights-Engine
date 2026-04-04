import React from "react";

export function MarkdownRenderer({ content }: { content: string }) {
  const lines = (content || "").trim().split("\n");
  const elements: React.JSX.Element[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      elements.push(<h1 key={key++} className="text-3xl font-display font-bold text-foreground mt-8 mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith("## ")) {
      elements.push(<h2 key={key++} className="text-2xl font-display font-bold text-foreground mt-8 mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith("### ")) {
      elements.push(<h3 key={key++} className="text-xl font-display font-semibold text-foreground mt-6 mb-2">{line.slice(4)}</h3>);
    } else if (line.startsWith("| ")) {
      // Table - find all table lines
      const tableLines = [];
      let j = i;
      while (j < lines.length && lines[j].startsWith("| ")) {
        tableLines.push(lines[j]);
        j++;
      }
      i = j - 1;

      const rows = tableLines.filter(l => !l.includes("---"));
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table className="w-full border-collapse border border-border rounded-lg overflow-hidden text-sm">
            {rows.map((row, ri) => {
              const cells = row.split("|").filter(c => c.trim());
              return ri === 0 ? (
                <thead key={ri}><tr className="bg-primary/10">{cells.map((c, ci) => <th key={ci} className="p-3 text-left font-semibold text-foreground border-b border-border">{c.trim()}</th>)}</tr></thead>
              ) : (
                <tbody key={ri}><tr className="border-b border-border hover:bg-muted/50">{cells.map((c, ci) => <td key={ci} className="p-3 text-muted-foreground">{c.trim()}</td>)}</tr></tbody>
              );
            })}
          </table>
        </div>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={key++} className="border-l-4 border-primary pl-4 py-2 my-4 bg-primary/5 rounded-r-lg italic text-muted-foreground">
          {line.slice(2)}
        </blockquote>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      // Collect list items
      const items = [];
      let j = i;
      while (j < lines.length && (lines[j].startsWith("- ") || lines[j].startsWith("* "))) {
        items.push(lines[j].slice(2));
        j++;
      }
      i = j - 1;
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1.5 my-3 text-muted-foreground pl-2">
          {items.map((item, ii) => {
            const boldMatch = item.match(/^\*\*(.+?)\*\*(.*)$/);
            return (
              <li key={ii} className="leading-relaxed">
                {boldMatch ? <><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2]}</> : item}
              </li>
            );
          })}
        </ul>
      );
    } else if (/^\d+\. /.test(line)) {
      const items = [];
      let j = i;
      while (j < lines.length && /^\d+\. /.test(lines[j])) {
        items.push(lines[j].replace(/^\d+\. /, ""));
        j++;
      }
      i = j - 1;
      elements.push(
        <ol key={key++} className="list-decimal list-inside space-y-1.5 my-3 text-muted-foreground pl-2">
          {items.map((item, ii) => {
            const boldMatch = item.match(/^\*\*(.+?)\*\*(.*)$/);
            return (
              <li key={ii} className="leading-relaxed">
                {boldMatch ? <><strong className="text-foreground">{boldMatch[1]}</strong>{boldMatch[2]}</> : item}
              </li>
            );
          })}
        </ol>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Regular paragraph — handle inline formatting and images
      let formatted = line;
      
      // Handle Markdown Images: ![alt](url)
      // This needs a special replacement to handle the URL resolution
      const imageRegex = /!\[(.+?)\]\((.+?)\)/g;
      let match;
      const parts = [];
      let lastIndex = 0;

      while ((match = imageRegex.exec(line)) !== null) {
        // Text before image
        if (match.index > lastIndex) {
          parts.push(line.slice(lastIndex, match.index));
        }
        
        let url = match[2];
        const alt = match[1];

        // Solve Google Drive links
        if (url.includes("drive.google.com")) {
          const driveIdMatch = url.match(/\/d\/([^\/]+)/) || url.match(/id=([^\&]+)/);
          if (driveIdMatch && driveIdMatch[1]) {
            url = `https://drive.google.com/uc?id=${driveIdMatch[1]}`;
          }
        }

        parts.push(
          <div key={`img-${key++}`} className="my-8 flex justify-center">
            <div className="relative group max-w-full">
              <img 
                src={url} 
                alt={alt} 
                className="rounded-2xl border-4 border-white shadow-xl max-w-full h-auto object-cover hover:scale-[1.01] transition-transform duration-500" 
              />
              <div className="absolute inset-x-0 bottom-0 py-2 px-4 bg-black/40 backdrop-blur-sm text-white text-[10px] text-center rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                {alt}
              </div>
            </div>
          </div>
        );
        
        lastIndex = imageRegex.lastIndex;
      }

      if (parts.length > 0) {
        // Remaining text after last image
        if (lastIndex < line.length) {
          parts.push(line.slice(lastIndex));
        }
        
        elements.push(
          <div key={key++} className="space-y-4">
            {parts.map((p, pi) => typeof p === 'string' ? (
              <p key={pi} className="text-muted-foreground leading-relaxed my-3" 
                 dangerouslySetInnerHTML={{ __html: p
                   .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                   .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline font-medium">$1</a>')
                 }} 
              />
            ) : p)}
          </div>
        );
      } else {
        // Standard paragraph
        formatted = line
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-primary hover:underline font-medium">$1</a>');
        
        elements.push(
          <p key={key++} className="text-muted-foreground leading-relaxed my-3" dangerouslySetInnerHTML={{ __html: formatted }} />
        );
      }
    }
  }

  return <div className="markdown-content">{elements}</div>;
}
