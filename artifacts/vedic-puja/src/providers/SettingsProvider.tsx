import React, { createContext, useContext, useEffect, useState } from "react";

interface Setting {
  id: number;
  type: string;
  key: string;
  value: string;
  injectionLocation: string | null;
  isActive: boolean;
}

interface SettingsContextType {
  settings: Setting[];
  getSetting: (key: string) => string | null;
}

const SettingsContext = createContext<SettingsContextType>({
  settings: [],
  getSetting: () => null,
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Setting[]>([]);

  useEffect(() => {
    fetch("/api/settings/public")
      .then((res) => res.json())
      .then((data: Setting[]) => {
        setSettings(data);
        
        // Inject scripts safely
        data.filter(s => s.type === "tracking_script" && s.isActive).forEach(script => {
          if (!script.injectionLocation) return;
          const template = document.createElement("template");
          template.innerHTML = script.value.trim();
          
          const target = script.injectionLocation === "body" ? document.body : document.head;
          
          for (let i = 0; i < template.content.childNodes.length; i++) {
            const node = template.content.childNodes[i];
            if (node.nodeName === "SCRIPT") {
              const newScript = document.createElement("script");
              Array.from((node as HTMLScriptElement).attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
              newScript.appendChild(document.createTextNode((node as HTMLScriptElement).innerHTML));
              target.appendChild(newScript);
            } else {
              target.appendChild(node.cloneNode(true));
            }
          }
        });
      })
      .catch(console.error);
  }, []);

  const getSetting = (key: string) => {
    const setting = settings.find((s) => s.key === key && s.isActive);
    return setting ? setting.value : null;
  };

  return (
    <SettingsContext.Provider value={{ settings, getSetting }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
