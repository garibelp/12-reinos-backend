db.races.insertMany([
  {
    name: 'Anão',
    age: 'Anões atingem a maturidade com 30 anos, e vivemem média até os 120.',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'ANAO'],
    pro: {
      name: 'Azarão',
      description:
        'Anões, desde sempre, trabalham contra as probabilidades, para bem ou para mal. Podem se atrapalhar e falhar completamente em atividades simples, como obter sucessos surpreendentes em desafios quase impossíveis. Por isso, ao jogar com um Anão, você inverterá o resultado de seus dados, sempre. Dessa forma, em um d12, 1 se torna 12, 2 se torna 11, 3 se torna 10, e vice-versa.',
    },
    con: {
      name: 'Provação',
      description:
        'O declínio dos Anões os tornou ainda mais amargurados que o seu normal por natureza. Todos os Anões ainda sonham que, um dia, tempos mais simples virão. Até lá, tentam se provar úteis e prestativos sempre que puderem... do jeito deles. Sempre que um Anão receber um desafio, iniciado pela palavra "Duvido...", ele tentará cumpri-lo.',
    },
  },
  {
    name: 'Anguisa',
    age: 'Anguisas atingem a maturidade com 30 anos, eivem em média até os 200.',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'ANGUISA'],
    pro: {
      name: 'Veneno',
      description:
        'Anguisas são imunes a qualquer tipo de veneno e possuem presas que produzem sua própria substância paralisante. O veneno deve ser extraído de suas presas e depois aplicado em uma lâmina, ou ingerido pelo alvo. Então, o Anguisa faz um Teste de Vigor contra a Tenacidade do Alvo. Caso falhe, o alvo fica paralisado por 1 hora.',
    },
    con: {
      name: 'Digestão',
      description:
        'Anguisas demoram para digerir seus alimentos. Após qualquer refeição, esses seres usam de toda energia de seu corpo para processar o que comeram, por isso geralmente apenas dormem. Dessa forma, enquanto estiver digerindo algo, um Aguisa tem desvantagem em todas as rolagens que fizer.',
    },
  },
  {
    name: 'Alterado',
    age: 'Raça base',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'ELFO'],
    pro: {
      name: 'Melhorado',
      description:
        'Esses seres híbridos mantem as características de sua raça de origem, com a adição de 1 Ponto de Atributo onde quiser, a depender do tipo de melhoramento. Seja um braço (Força), uma perna (Destreza), parte do dorso (Constituição), implantes cerebrais (Inteligência), um Olho (Sabedoria) ou mesmo adereços estéticos (Carisma), esses são apenas alguns exemplos de até onde a tecnologia pode ir.',
    },
    con: {
      name: 'Defeituoso',
      description:
        'Claro que nenhuma melhoria sai de graça, especialmente se você não tem a capacidade de auto-manutenção dos Asharianos. Alterados devem fazer Testes de Tolerância, com dificuldade a depender da situação, sempre que passarem por locais que possam afetar seu funcionamento. Seja água, areia, calor ou frio, em caso de falha, o Alterado perde o Ponto de Atributo extra e passa a ter o valor fixo de -1 naquele Atributo em específico até descansar.',
    },
  },
  {
    name: 'Áquila',
    age: 'Áquilas atingem a maturidade com 40 anos, e vivem em média até os 150.',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'ANAO'],
    pro: {
      name: 'Vôo',
      description:
        'As majestosas asas dos Áquilas os permitem voar, com deslocamento de 9m. Alçar vôo em combate não abre Ataque de Oportunidade.',
    },
    con: {
      name: 'Liberdade',
      description:
        'Como seres do ar, Áquilas precisam sentir-se livres constantemente. A qualquer sinal de aprisionamento, seja físico, emocional ou psicológico, um Áquila não consegue usufruir dos privilégios de um descanso. Seja por algo grave como encarceiramento, ou algo simples como um contrato, Áquilas facilmente sentem sua liberdade ameaçada.',
    },
  },
  {
    name: 'Áshariano',
    age: 'Asharianos nascem já maduros, e vivem até serem fisicamente destruídos.',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'ANAO'],
    pro: {
      name: 'Construto',
      description:
        'Asharianos não precisam comer, beber e descansar. Para recuperar suas energias, ao invés de usufruir de um descanso como as demais raças, eles entram em modo de reparo, e recebem os privilégios de um repouso em apenas uma noite.',
    },
    con: {
      name: 'Auto-destruição',
      description:
        'Andrômeda deu a todas as suas criações um mecanismo de auto-destruição imbatível. Muitos Asharianos dedicaram suas vidas para descobrir uma forma de desabilitá-lo, em vão. Asharianos derrubados em combate sempre têm automaticamente 2 falhas em Teste de Vigor contra a morte, assim que caem. Caso acumulem a terceira, seu corpo explode causando 8d6 de dano a todas as criaturas a até 9m dele em qualquer direção.',
    },
  },
  {
    name: 'Bugurso',
    age: 'Bugursos atingem a maturidade com 20 anos, e vivem em média até os 100.',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'ANAO'],
    pro: {
      name: 'Irrastreável',
      description:
        'Um Bugurso nunca, jamais, deixa rastros por onde anda. Não importa o terreno e região, se na natureza ou na cidade, é impossível rastrear um Bugurso se ele não o quiser.',
    },
    con: {
      name: 'Dieta',
      description:
        'Dieta. A vida nas florestas do Sul de Bartol mudou bastente a fisiologia desses seres. Bugursos se alimentam exclusivamente de carne crua. Ingerir qualquer outro alimento lhes causa indigestão, que lhes priva de receber os privilégios de um descanso por uma noite e um dia. Além disso, Pétalas de Damiana, uma flor amarela bastante comum, são tóxicas e letais a Bugursos. O contato com a pele lhes causa paralizia instantânea. Ingestão causa morte imediata.',
    },
  },
  {
    name: 'Cheloniano',
    age: 'Chelonianos atingem a maturidade com 200 anos, e vivem em média até os 1000.',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'ANAO'],
    pro: {
      name: 'Casco',
      description:
        'Chelonianos têm um casco natural para protegê-los. Por isso, não podem usar amardura, mas seu valor de Defesa é 12 por padrão. Com uma ação, podem se recolher por completo, perdendo movimento e qualquer tipo de ação, para aumentar o valor para 14.',
    },
    con: {
      name: 'Membrana',
      description:
        'Quando o casco é quebrado, há apenas uma fina e frágil membrana para proteger os Chelonianos. Quando isso acontece, seu valor de Armadura cai para 0, e reduzir seus Pontos de Vida a 0 é uma morte súbita.',
    },
  },
  {
    name: 'Cogni',
    age: ' Cognis atingem a maturidade com 20 anos, e vivem em média até os 100.',
    size: 'MEDIO',
    movement: 6,
    languages: ['COMUM', 'COGNI'],
    pro: {
      name: 'Anfíbio',
      description:
        'Cognis podem respirar embaixo dágua naturalmente por tempo indeterminado.',
    },
    con: {
      name: 'Hidrofílico',
      description:
        'O Pó da Seca foi inventado pelos Cogni para sempre terem consigo uma fonte de água. Até hoje, cada um carrega uma bolsa carregada. Mas se, por algum motivo, um Cogni perder seu Pó da Seca, e passar um dia sem contato com água, perderá os privilégios de um descanso.',
    },
  },
]);
