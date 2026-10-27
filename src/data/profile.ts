// Todo o conteúdo do site mora aqui. Para atualizar o portfólio, edite só este arquivo.

export const profile = {
  name: "Guilherme Abreu",
  role: "Desenvolvedor Mobile & Full Stack",
  tagline:
    "Faço apps que continuam funcionando quando a internet some. Trabalho com Ionic, Angular e Capacitor e, quando o framework não dá conta, desço para o código nativo.",
  location: "Senador Canedo, GO",
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

export const about = [
  "Comecei em 2018 fazendo sites em PHP para uma produtora aqui de Senador Canedo. Depois fui para o suporte da Oobj, e foi lá que peguei o gosto por abrir o código para entender por que as coisas quebravam. Em 2021 virei dev de vez: primeiro front com Angular, depois back com Node e, de uns anos para cá, mobile.",
  "Hoje estou na Drakkar, fazendo o app que o pessoal usa no meio da lavoura, onde sinal de internet é artigo de luxo. É muito mapa, muito dado geoespacial e muito cuidado para nada se perder quando a conexão cai. De vez em quando também mexo no sistema web em React e no back-end em Laravel.",
  "Quando um problema me dá trabalho, costumo transformar a solução em algo que outros devs possam usar. Foi assim que nasceram o ORM de SQLite, os plugins nativos e os vídeos de Ionic com Angular no YouTube.",
];

export const highlights = [
  { value: "8+", label: "anos mexendo com tecnologia" },
  { value: "5", label: "anos como dev" },
  { value: "2 mil+", label: "downloads no npm no último ano" },
  { value: "2", label: "pacotes publicados no npm" },
];

export type Project = {
  name: string;
  description: string;
  stack: string[];
  repo?: string;
  npm?: string;
  badge?: string;
};

export const projects: Project[] = [
  {
    name: "capacitor-orm-sqlite",
    description:
      "Cansei de escrever SQL na mão em app offline e fiz um ORM para SQLite no Capacitor, com query builder, migrations e tipagem de ponta a ponta. Já está na versão 5 e tem gente usando de verdade.",
    stack: ["TypeScript", "Capacitor", "SQLite", "Jest", "CI"],
    repo: "https://github.com/GuilhermeAbreu/orm-sqlite",
    npm: "https://www.npmjs.com/package/@guilhermeabreudev/capacitor-orm-sqlite",
    badge: "~2 mil downloads/ano",
  },
  {
    name: "Panic Watch",
    description:
      "Tinha um smartwatch genérico encostado em casa e resolvi descobrir como ele conversa com o celular. Virou um botão de pânico: um gesto no pulso inicia uma contagem e, se ninguém cancelar, o celular manda SMS e liga para um contato. De quebra, mostra batimentos, oxigenação, pressão e passos.",
    stack: ["Kotlin", "Android", "Bluetooth LE", "IoT"],
    // repo: "https://github.com/GuilhermeAbreu/smart-watch", // descomentar quando o código estiver no repositório
  },
  {
    name: "capacitor-system-sounds",
    description:
      "Plugin do Capacitor que lista os toques, alarmes e sons de notificação do próprio aparelho, no Android e no iOS.",
    stack: ["Capacitor", "Java", "Swift", "TypeScript"],
    repo: "https://github.com/GuilhermeAbreu/capacitor-system-sounds",
    npm: "https://www.npmjs.com/package/@guilhermeabreudev/capacitor-system-sounds",
  },
  {
    name: "capacitor-app-live-update",
    description:
      "Experimento de plugin para atualizar o código web do app sem passar pelas lojas.",
    stack: ["Capacitor", "Swift", "Java"],
    repo: "https://github.com/GuilhermeAbreu/capacitor-app-live-update",
  },
  {
    name: "automatizar-assinatura-apk",
    description:
      "Gerar e assinar APK na mão toda vez cansa. Esse script faz o build, sincroniza o Capacitor, gera release, debug e AAB e já assina tudo.",
    stack: ["Node.js", "Gradle", "Android"],
    repo: "https://github.com/GuilhermeAbreu/automatizar-assinatura-apk",
  },
  {
    name: "Guia de ambiente Ionic + Capacitor",
    description:
      "O passo a passo que eu queria ter tido quando montei o ambiente Android no Linux pela primeira vez: Node, Java, Android Studio, SDK e variáveis de ambiente.",
    stack: ["Ionic", "Angular", "Capacitor", "Linux"],
    repo: "https://github.com/GuilhermeAbreu/ionic-capacitor-android-config-guide",
  },
];

export type CaseStudy = {
  title: string;
  text: string;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "O app travava com mapa e dado offline",
    text: "O app baixava muita coisa para funcionar offline e tentava processar tudo ao mesmo tempo. Travava e comia memória. Montei uma fila interna, na linha do que ActiveMQ e Kafka fazem: o que chega da API entra na fila e vai sendo processado aos poucos, sem brigar com a tela. O app voltou a ficar liso.",
    stack: ["Ionic", "Angular", "SQLite"],
  },
  {
    title: "Funcionar sem sinal no meio da lavoura",
    text: "Produtor não escolhe onde vai ter internet. Então o app aproveita qualquer momento com conexão para baixar e atualizar os dados em segundo plano, guarda tudo no aparelho e, quando o sinal volta, envia o que foi feito offline. Ninguém precisa parar o trabalho porque a internet caiu.",
    stack: ["Capacitor", "SQLite", "Offline-first"],
  },
  {
    title: "Correção urgente sem esperar a loja",
    text: "Publicar na Play Store e na App Store pode levar dias, e tem bug que não espera. Com o Capgo, o app baixa a nova versão do JavaScript assim que ela sai, sem reenviar nada para as lojas e sem pagar Appflow.",
    stack: ["Ionic", "Capacitor", "Capgo"],
  },
  {
    title: "Chega de “me manda um print”",
    text: "Todo chamado começava igual: qual o celular, qual a versão do Android, qual a versão do app? Passamos a registrar os dispositivos de cada usuário num painel. O suporte já começa sabendo o contexto, e dá para ver quantas pessoas ainda usam versões antigas antes de decidir aposentá-las.",
    stack: ["Capacitor", "Laravel", "PostgreSQL"],
  },
];

export type Job = {
  role: string;
  company: string;
  period: string;
  place: string;
  summary: string;
  stack: string[];
};

export const experience: Job[] = [
  {
    role: "Desenvolvedor de aplicativos móveis",
    company: "Drakkar Agricultura de Precisão",
    period: "out/2024 – hoje",
    place: "Remoto",
    summary:
      "Cuido do app de campo, que precisa funcionar offline, mostrar mapas e lidar com bastante dado geoespacial. Também trabalho no sistema web em React e no back-end em Laravel.",
    stack: ["Ionic", "Angular", "Capacitor", "React", "Laravel", "Leaflet"],
  },
  {
    role: "Desenvolvedor Mobile Pleno",
    company: "KLIOS",
    period: "jun/2024 – jan/2025",
    place: "Goiânia, GO",
    summary: "Apps mobile com Ionic e Angular, com back-end em PHP.",
    stack: ["Ionic", "Angular", "PHP"],
  },
  {
    role: "Desenvolvedor Front-end e Back-end",
    company: "Decisão Sistemas",
    period: "nov/2021 – jun/2024",
    place: "Goiânia, GO",
    summary:
      "Entrei no front com Angular e, a partir de 2022, passei a tocar também o back-end em Node.js.",
    stack: ["Angular", "Node.js", "TypeScript"],
  },
  {
    role: "Desenvolvedor de Aplicativos Mobile e Web",
    company: "H1 Software House (terceirizado)",
    period: "fev/2022 – jan/2023",
    place: "Goiânia, GO",
    summary:
      "Apps com Ionic, Angular e Capacitor e as APIs por trás deles. Modelei o banco em PostgreSQL com Prisma e cuidei do deploy no Heroku.",
    stack: ["Ionic", "Node.js", "PostgreSQL", "Prisma"],
  },
  {
    role: "Analista CRM Tech (estágio)",
    company: "Enext, a Wunderman Thompson Company",
    period: "nov/2021 – mar/2022",
    place: "São Paulo, SP",
    summary: "Estágio no time de CRM.",
    stack: [],
  },
  {
    role: "Analista de Suporte · Estagiário de TI",
    company: "Oobj, Tecnologia em Gestão Fiscal",
    period: "mar/2019 – set/2021",
    place: "Goiânia, GO",
    summary:
      "Comecei como estagiário, fazendo sistemas internos de infraestrutura e patrimônio. No suporte, ia além do atendimento: corrigia bug direto no código (Java e Angular) e escrevia bots em Node para acabar com tarefas repetitivas.",
    stack: ["Java", "Angular", "Node.js", "PHP"],
  },
  {
    role: "Desenvolvedor Web e Designer",
    company: "Produtora Rave (autônomo)",
    period: "mar/2018 – mar/2019",
    place: "Senador Canedo, GO",
    summary:
      "Sites e sistemas em PHP, e um pouco de design no Corel Draw: logo, cartão de visita, ícone.",
    stack: ["PHP", "HTML", "CSS"],
  },
];

export const education = {
  course: "Análise e Desenvolvimento de Sistemas",
  school: "Pontifícia Universidade Católica de Goiás",
  period: "2020 – 2022",
};

export const skills = [
  { group: "Mobile", items: ["Ionic", "Capacitor", "Cordova", "Android (Java/Kotlin)", "iOS (Swift)", "SQLite"] },
  { group: "Front-end", items: ["Angular", "React", "TypeScript", "RxJS", "Tailwind", "Leaflet"] },
  { group: "Back-end", items: ["Node.js", "Laravel", "PHP", "PostgreSQL", "Prisma"] },
  { group: "Ferramentas", items: ["Git", "GitHub Actions", "Gradle", "Linux", "Heroku", "Jest / Vitest"] },
];

export const testimonial = {
  quote:
    "Um excelente profissional! Sempre me auxiliou e tirou minhas dúvidas, e graças a ele aprendi Angular, TypeScript e até um pouco de back-end. Sempre me orientou da melhor forma possível, com paciência e dedicação! Super inteligente, dedicado e disposto a aprender e a ensinar!",
  author: "Fabianno Otávio",
  role: "Desenvolvedor de software",
};
