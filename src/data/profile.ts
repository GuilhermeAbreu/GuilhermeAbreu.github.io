// Todo o conteúdo do site mora aqui. Cada texto tem a versão em português (pt) e em inglês (en)
// lado a lado, para uma nunca ficar desatualizada em relação à outra.

export type Lang = "pt" | "en";
export type L<T = string> = Record<Lang, T>;

export const profile = {
  name: "Guilherme Abreu",
  role: { pt: "Desenvolvedor Mobile & Full Stack", en: "Mobile & Full Stack Developer" } as L,
  tagline: {
    pt: "Faço apps que continuam funcionando quando a internet some. Trabalho com Ionic, Angular e Capacitor e, quando o framework não dá conta, desço para o código nativo.",
    en: "I build apps that keep working when the internet drops. I work with Ionic, Angular and Capacitor, and when the framework isn't enough, I go down to native code.",
  } as L,
  location: { pt: "Senador Canedo, GO", en: "Senador Canedo, Brazil" } as L,
  avatar: "https://avatars.githubusercontent.com/u/50218062?v=4",
  email: "Guilherme.abreu2019@gmail.com",
  cv: "", // ex.: "/curriculo-guilherme-abreu.pdf" (coloque o PDF em public/)
  links: {
    github: "https://github.com/GuilhermeAbreu",
    linkedin: "https://www.linkedin.com/in/guilhermeabreudev/",
    npm: "https://www.npmjs.com/~guilhermeabreudev",
    youtube: "", // preencher com a URL do canal
  },
};

export const about: L<string[]> = {
  pt: [
    "Comecei em 2018 fazendo sites em PHP para uma produtora aqui de Senador Canedo. Depois fui para o suporte da Oobj, e foi lá que peguei o gosto por abrir o código para entender por que as coisas quebravam. Em 2021 virei dev de vez: primeiro front com Angular, depois back com Node e, de uns anos para cá, mobile.",
    "Hoje estou na Drakkar, fazendo o app que o pessoal usa no meio da lavoura, onde sinal de internet é artigo de luxo. É muito mapa, muito dado geoespacial e muito cuidado para nada se perder quando a conexão cai. De vez em quando também mexo no sistema web em React e no back-end em Laravel.",
    "Quando um problema me dá trabalho, costumo transformar a solução em algo que outros devs possam usar. Foi assim que nasceram o ORM de SQLite, os plugins nativos e os vídeos de Ionic com Angular no YouTube.",
  ],
  en: [
    "I started in 2018 building PHP websites for a small agency in my hometown. Then I joined Oobj's support team, and that's where I got hooked on opening up the code to figure out why things broke. In 2021 I became a full-time developer: front-end with Angular first, then back-end with Node and, for the last few years, mobile.",
    "Today I'm at Drakkar, building the app farmers use out in the field, where a signal is a luxury. It's a lot of maps, a lot of geospatial data and a lot of care so nothing gets lost when the connection drops. Every now and then I also work on the web app in React and the back-end in Laravel.",
    "When a problem gives me a hard time, I usually turn the solution into something other devs can use. That's how the SQLite ORM, the native plugins and my Ionic + Angular videos on YouTube came about.",
  ],
};

export const highlights: { value: L; label: L }[] = [
  { value: { pt: "8+", en: "8+" }, label: { pt: "anos mexendo com tecnologia", en: "years working in tech" } },
  { value: { pt: "5", en: "5" }, label: { pt: "anos como dev", en: "years as a developer" } },
  { value: { pt: "2 mil+", en: "2k+" }, label: { pt: "downloads no npm no último ano", en: "npm downloads in the last year" } },
  { value: { pt: "2", en: "2" }, label: { pt: "pacotes publicados no npm", en: "packages published on npm" } },
];

export type Project = {
  name: string;
  description: L;
  stack: string[];
  repo?: string;
  npm?: string;
  badge?: L;
};

export const projects: Project[] = [
  {
    name: "capacitor-orm-sqlite",
    description: {
      pt: "Cansei de escrever SQL na mão em app offline e fiz um ORM para SQLite no Capacitor, com query builder, migrations e tipagem de ponta a ponta. Já está na versão 5 e tem gente usando de verdade.",
      en: "I got tired of writing raw SQL in offline apps, so I built a SQLite ORM for Capacitor, with a query builder, migrations and end-to-end typing. It's on version 5 and people actually use it.",
    },
    stack: ["TypeScript", "Capacitor", "SQLite", "Jest", "CI"],
    repo: "https://github.com/GuilhermeAbreu/orm-sqlite",
    npm: "https://www.npmjs.com/package/@guilhermeabreudev/capacitor-orm-sqlite",
    badge: { pt: "~2 mil downloads/ano", en: "~2k downloads/year" },
  },
  {
    name: "Panic Watch",
    description: {
      pt: "Tinha um smartwatch genérico encostado em casa e resolvi descobrir como ele conversa com o celular. Virou um botão de pânico: um gesto no pulso inicia uma contagem e, se ninguém cancelar, o celular manda SMS e liga para um contato. De quebra, mostra batimentos, oxigenação, pressão e passos.",
      en: "I had a cheap smartwatch lying around and decided to figure out how it talks to the phone. It became a panic button: a wrist gesture starts a countdown and, if nobody cancels it, the phone sends an SMS and calls a contact. It also shows heart rate, oxygen, blood pressure and steps.",
    },
    stack: ["Kotlin", "Android", "Bluetooth LE", "IoT"],
    // repo: "https://github.com/GuilhermeAbreu/smart-watch", // descomentar quando o código estiver no repositório
  },
  {
    name: "capacitor-system-sounds",
    description: {
      pt: "Plugin do Capacitor que lista os toques, alarmes e sons de notificação do próprio aparelho, no Android e no iOS.",
      en: "Capacitor plugin that lists the device's own ringtones, alarms and notification sounds, on Android and iOS.",
    },
    stack: ["Capacitor", "Java", "Swift", "TypeScript"],
    repo: "https://github.com/GuilhermeAbreu/capacitor-system-sounds",
    npm: "https://www.npmjs.com/package/@guilhermeabreudev/capacitor-system-sounds",
  },
  {
    name: "capacitor-app-live-update",
    description: {
      pt: "Experimento de plugin para atualizar o código web do app sem passar pelas lojas.",
      en: "Experimental plugin to update an app's web code without going through the app stores.",
    },
    stack: ["Capacitor", "Swift", "Java"],
    repo: "https://github.com/GuilhermeAbreu/capacitor-app-live-update",
  },
  {
    name: "automatizar-assinatura-apk",
    description: {
      pt: "Gerar e assinar APK na mão toda vez cansa. Esse script faz o build, sincroniza o Capacitor, gera release, debug e AAB e já assina tudo.",
      en: "Building and signing APKs by hand every time gets old. This script runs the build, syncs Capacitor, generates release, debug and AAB, and signs them all.",
    },
    stack: ["Node.js", "Gradle", "Android"],
    repo: "https://github.com/GuilhermeAbreu/automatizar-assinatura-apk",
  },
  {
    name: "Ionic + Capacitor setup guide",
    description: {
      pt: "O passo a passo que eu queria ter tido quando montei o ambiente Android no Linux pela primeira vez: Node, Java, Android Studio, SDK e variáveis de ambiente.",
      en: "The step-by-step guide I wish I'd had the first time I set up an Android environment on Linux: Node, Java, Android Studio, SDK and environment variables.",
    },
    stack: ["Ionic", "Angular", "Capacitor", "Linux"],
    repo: "https://github.com/GuilhermeAbreu/ionic-capacitor-android-config-guide",
  },
];

export type CaseStudy = {
  title: L;
  text: L;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: { pt: "O app travava com mapa e dado offline", en: "The app froze with maps and offline data" },
    text: {
      pt: "O app baixava muita coisa para funcionar offline e tentava processar tudo ao mesmo tempo. Travava e comia memória. Montei uma fila interna, na linha do que ActiveMQ e Kafka fazem: o que chega da API entra na fila e vai sendo processado aos poucos, sem brigar com a tela. O app voltou a ficar liso.",
      en: "The app downloaded a lot of data to work offline and tried to process everything at once. It froze and ate memory. I built an internal queue, along the lines of ActiveMQ and Kafka: whatever comes from the API goes into the queue and gets processed bit by bit, without fighting the UI. The app got smooth again.",
    },
    stack: ["Ionic", "Angular", "SQLite"],
  },
  {
    title: { pt: "Funcionar sem sinal no meio da lavoura", en: "Working with no signal in the middle of a field" },
    text: {
      pt: "Produtor não escolhe onde vai ter internet. Então o app aproveita qualquer momento com conexão para baixar e atualizar os dados em segundo plano, guarda tudo no aparelho e, quando o sinal volta, envia o que foi feito offline. Ninguém precisa parar o trabalho porque a internet caiu.",
      en: "Farmers don't get to choose where they have internet. So the app uses any moment with a connection to download and refresh data in the background, keeps everything on the device and, when the signal comes back, uploads what was done offline. Nobody has to stop working because the internet went down.",
    },
    stack: ["Capacitor", "SQLite", "Offline-first"],
  },
  {
    title: { pt: "Correção urgente sem esperar a loja", en: "Urgent fixes without waiting for the stores" },
    text: {
      pt: "Publicar na Play Store e na App Store pode levar dias, e tem bug que não espera. Com o Capgo, o app baixa a nova versão do JavaScript assim que ela sai, sem reenviar nada para as lojas e sem pagar Appflow.",
      en: "Publishing on the Play Store and the App Store can take days, and some bugs can't wait. With Capgo, the app downloads the new JavaScript bundle as soon as it's out, without resubmitting anything to the stores and without paying for Appflow.",
    },
    stack: ["Ionic", "Capacitor", "Capgo"],
  },
  {
    title: { pt: "Chega de “me manda um print”", en: "No more “can you send me a screenshot?”" },
    text: {
      pt: "Todo chamado começava igual: qual o celular, qual a versão do Android, qual a versão do app? Passamos a registrar os dispositivos de cada usuário num painel. O suporte já começa sabendo o contexto, e dá para ver quantas pessoas ainda usam versões antigas antes de decidir aposentá-las.",
      en: "Every support ticket started the same way: which phone, which Android version, which app version? We started recording each user's devices in a dashboard. Support now starts with the context, and we can see how many people are still on old versions before deciding to retire them.",
    },
    stack: ["Capacitor", "Laravel", "PostgreSQL"],
  },
];

export type Job = {
  role: L;
  company: string;
  period: L;
  place: L;
  summary: L;
  stack: string[];
};

export const experience: Job[] = [
  {
    role: { pt: "Desenvolvedor de aplicativos móveis", en: "Mobile App Developer" },
    company: "Drakkar Agricultura de Precisão",
    period: { pt: "out/2024 – hoje", en: "Oct 2024 – now" },
    place: { pt: "Remoto", en: "Remote" },
    summary: {
      pt: "Cuido do app de campo, que precisa funcionar offline, mostrar mapas e lidar com bastante dado geoespacial. Também trabalho no sistema web em React e no back-end em Laravel.",
      en: "I take care of the field app, which has to work offline, show maps and handle a lot of geospatial data. I also work on the web app in React and the back-end in Laravel.",
    },
    stack: ["Ionic", "Angular", "Capacitor", "React", "Laravel", "Leaflet"],
  },
  {
    role: { pt: "Desenvolvedor Mobile Pleno", en: "Mid-level Mobile Developer" },
    company: "KLIOS",
    period: { pt: "jun/2024 – jan/2025", en: "Jun 2024 – Jan 2025" },
    place: { pt: "Goiânia, GO", en: "Goiânia, Brazil" },
    summary: {
      pt: "Apps mobile com Ionic e Angular, com back-end em PHP.",
      en: "Mobile apps with Ionic and Angular, backed by PHP.",
    },
    stack: ["Ionic", "Angular", "PHP"],
  },
  {
    role: { pt: "Desenvolvedor Front-end e Back-end", en: "Front-end & Back-end Developer" },
    company: "Decisão Sistemas",
    period: { pt: "nov/2021 – jun/2024", en: "Nov 2021 – Jun 2024" },
    place: { pt: "Goiânia, GO", en: "Goiânia, Brazil" },
    summary: {
      pt: "Entrei no front com Angular e, a partir de 2022, passei a tocar também o back-end em Node.js.",
      en: "I joined on the front-end with Angular and, from 2022, also took on the back-end in Node.js.",
    },
    stack: ["Angular", "Node.js", "TypeScript"],
  },
  {
    role: { pt: "Desenvolvedor de Aplicativos Mobile e Web", en: "Mobile & Web Developer" },
    company: "H1 Software House",
    period: { pt: "fev/2022 – jan/2023", en: "Feb 2022 – Jan 2023" },
    place: { pt: "Goiânia, GO (terceirizado)", en: "Goiânia, Brazil (contractor)" },
    summary: {
      pt: "Apps com Ionic, Angular e Capacitor e as APIs por trás deles. Modelei o banco em PostgreSQL com Prisma e cuidei do deploy no Heroku.",
      en: "Apps with Ionic, Angular and Capacitor and the APIs behind them. I modeled the PostgreSQL database with Prisma and handled deployment on Heroku.",
    },
    stack: ["Ionic", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    role: { pt: "Analista CRM Tech (estágio)", en: "CRM Tech Analyst (intern)" },
    company: "Enext, a Wunderman Thompson Company",
    period: { pt: "nov/2021 – mar/2022", en: "Nov 2021 – Mar 2022" },
    place: { pt: "São Paulo, SP", en: "São Paulo, Brazil" },
    summary: { pt: "Estágio no time de CRM.", en: "Internship on the CRM team." },
    stack: [],
  },
  {
    role: { pt: "Analista de Suporte · Estagiário de TI", en: "Support Analyst · IT Intern" },
    company: "Oobj",
    period: { pt: "mar/2019 – set/2021", en: "Mar 2019 – Sep 2021" },
    place: { pt: "Goiânia, GO", en: "Goiânia, Brazil" },
    summary: {
      pt: "Comecei como estagiário, fazendo sistemas internos de infraestrutura e patrimônio. No suporte, ia além do atendimento: corrigia bug direto no código (Java e Angular) e escrevia bots em Node para acabar com tarefas repetitivas.",
      en: "I started as an intern, building internal tools for IT infrastructure and asset tracking. In support, I went beyond answering tickets: I fixed bugs straight in the code (Java and Angular) and wrote Node bots to get rid of repetitive tasks.",
    },
    stack: ["Java", "Angular", "Node.js", "PHP"],
  },
  {
    role: { pt: "Desenvolvedor Web e Designer", en: "Web Developer & Designer" },
    company: "Produtora Rave",
    period: { pt: "mar/2018 – mar/2019", en: "Mar 2018 – Mar 2019" },
    place: { pt: "Senador Canedo, GO (autônomo)", en: "Senador Canedo, Brazil (freelance)" },
    summary: {
      pt: "Sites e sistemas em PHP, e um pouco de design no Corel Draw: logo, cartão de visita, ícone.",
      en: "PHP websites and systems, plus some design work in Corel Draw: logos, business cards, icons.",
    },
    stack: ["PHP", "HTML", "CSS"],
  },
];

export const education = {
  course: { pt: "Análise e Desenvolvimento de Sistemas", en: "Systems Analysis and Development" } as L,
  school: { pt: "Pontifícia Universidade Católica de Goiás", en: "Pontifical Catholic University of Goiás (PUC Goiás)" } as L,
  period: "2020 – 2022",
};

export const skills: { group: L; items: string[] }[] = [
  { group: { pt: "Mobile", en: "Mobile" }, items: ["Ionic", "Capacitor", "Cordova", "Android (Java/Kotlin)", "iOS (Swift)", "SQLite"] },
  { group: { pt: "Front-end", en: "Front-end" }, items: ["Angular", "React", "TypeScript", "RxJS", "Tailwind", "Leaflet"] },
  { group: { pt: "Back-end", en: "Back-end" }, items: ["Node.js", "Laravel", "PHP", "PostgreSQL", "Prisma"] },
  { group: { pt: "Ferramentas", en: "Tools" }, items: ["Git", "GitHub Actions", "Gradle", "Linux", "Heroku", "Jest / Vitest"] },
];

export const testimonial = {
  quote: {
    pt: "Um excelente profissional! Sempre me auxiliou e tirou minhas dúvidas, e graças a ele aprendi Angular, TypeScript e até um pouco de back-end. Sempre me orientou da melhor forma possível, com paciência e dedicação! Super inteligente, dedicado e disposto a aprender e a ensinar!",
    en: "An excellent professional! He always helped me and answered my questions, and thanks to him I learned Angular, TypeScript and even a bit of back-end. He always guided me in the best possible way, with patience and dedication! Super smart, dedicated and willing to learn and to teach!",
  } as L,
  author: "Fabianno Otávio",
  role: { pt: "Desenvolvedor de software", en: "Software Developer" } as L,
};

// Textos fixos da interface (menus, títulos de seção, botões)
export const ui = {
  nav: {
    about: { pt: "Sobre", en: "About" },
    projects: { pt: "Projetos", en: "Projects" },
    cases: { pt: "Casos", en: "Cases" },
    experience: { pt: "Experiência", en: "Experience" },
    contact: { pt: "Contato", en: "Contact" },
  },
  hello: { pt: "Oi, eu sou o", en: "Hi, I'm" },
  talkToMe: { pt: "Fale comigo", en: "Get in touch" },
  downloadCv: { pt: "Baixar CV", en: "Download CV" },
  photoOf: { pt: "Foto de", en: "Photo of" },
  toggleTheme: { pt: "Alternar tema claro/escuro", en: "Toggle light/dark theme" },
  switchLang: { pt: "Read in English", en: "Ler em português" },
  sections: {
    about: { eyebrow: { pt: "01. sobre", en: "01. about" }, title: { pt: "Do PHP ao app que roda sem sinal", en: "From PHP to apps that run without signal" } },
    projects: {
      eyebrow: { pt: "02. open source", en: "02. open source" },
      title: { pt: "Projetos", en: "Projects" },
      intro: { pt: "Quase todos nasceram de um problema que eu mesmo tive.", en: "Almost all of them started with a problem I had myself." },
    },
    cases: {
      eyebrow: { pt: "03. no trabalho", en: "03. at work" },
      title: { pt: "Problemas que resolvi", en: "Problems I've solved" },
      intro: {
        pt: "Alguns perrengues do dia a dia e como saí deles. Sem código e sem dado de cliente, claro.",
        en: "Some everyday headaches and how I got out of them. No code and no client data, of course.",
      },
    },
    experience: { eyebrow: { pt: "04. trajetória", en: "04. career" }, title: { pt: "Por onde passei", en: "Where I've worked" } },
    contact: {
      eyebrow: { pt: "05. contato", en: "05. contact" },
      title: { pt: "Bora conversar?", en: "Let's talk?" },
      text: {
        pt: "Estou aberto a novas oportunidades em mobile ou full stack. Se quiser trocar uma ideia, me chama por e-mail ou no LinkedIn.",
        en: "I'm open to new opportunities in mobile or full stack. If you'd like to chat, reach me by email or on LinkedIn.",
      },
    },
  },
  code: { pt: "Código", en: "Code" },
  education: { pt: "Formação", en: "Education" },
  testimonialEyebrow: { pt: "o que dizem por aí", en: "what people say" },
  testimonialSource: { pt: "recomendação no LinkedIn", en: "LinkedIn recommendation (translated)" },
  footer: { pt: "feito com Astro e Tailwind", en: "built with Astro and Tailwind" },
} satisfies Record<string, unknown>;
