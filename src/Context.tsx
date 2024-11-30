import React, { useContext } from 'react';

interface ProjectI {
  description: {
    pt: string;
    en: string;
  };
  info: {
    pt: string;
    en: string;
  };
  stack: {
    pt: string;
    en: string;
  };
  role: {
    pt: string;
    en: string;
  };
}

interface PageTextI {
  header: {
    'about-nav': {
      pt: string;
      en: string;
    };
    'projects-nav': {
      pt: string;
      en: string;
    };
    'contact-nav': {
      pt: string;
      en: string;
    };
  };
  intro: {
    greeting: {
      pt: string;
      en: string;
    };
    name: {
      pt: string;
      en: string;
    };
    title: {
      pt: string;
      en: string;
    };
    paragraph: {
      pt: string;
      en: string;
    };
    button: {
      pt: string;
      en: string;
    };
  };
  about: {
    heading: {
      pt: string;
      en: string;
    };
    subheading: {
      pt: string;
      en: string;
    };
    paragraph: {
      pt: string;
      en: string;
    };
    button: {
      pt: string;
      en: string;
    };
  };
  skills: {
    heading: {
      pt: string;
      en: string;
    };
    paragraph: {
      pt: string;
      en: string;
    };
    list: {
      pt: string[];
      en: string[];
    };
  };
  projects: {
    heading: {
      pt: string;
      en: string;
    };
    paragraph: {
      pt: string;
      en: string;
    };
    zoe: ProjectI;
    brasa: ProjectI;
    agnus: ProjectI;
    strongfit: ProjectI;
  };
  contact: {
    heading: {
      pt: string;
      en: string;
    };
    title: {
      first: {
        pt: string;
        en: string;
      };
      detail: {
        pt: string;
        en: string;
      };
      last: {
        pt: string;
        en: string;
      };
    };
    form: {
      name: {
        pt: string;
        en: string;
      };
      subject: {
        pt: string;
        en: string;
      };
      message: {
        pt: string;
        en: string;
      };
      button: {
        pt: string;
        en: string;
      };
    };
  };
}

interface ContextI {
  lang: 'pt' | 'en';
  setLang: React.Dispatch<React.SetStateAction<'pt' | 'en'>>;
  pageText: PageTextI | null;
}

export const Context = React.createContext<ContextI | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = useContext(Context);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};

export const GlobalContext = ({ children }: React.PropsWithChildren) => {
  const [pageText, setPageText] = React.useState<PageTextI | null>(null);
  const [lang, setLang] = React.useState<'pt' | 'en'>('pt');

  React.useEffect(() => {
    async function fetchLangText() {
      const data = await fetch('/translate.json');
      const json = await data.json();
      console.log(json);
      setPageText(json);
    }
    fetchLangText();
  }, []);

  return (
    <Context.Provider value={{ lang, pageText, setLang }}>
      {children}
    </Context.Provider>
  );
};
