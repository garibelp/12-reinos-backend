db.graduations.insertMany([
  {
    name: 'Artífice',
    life: 6,
    mana: 3,
    armor: 1,
    hitDice: 'd6',
    bonusAttr: {
      INT: 2,
    },
    skills: [
      {
        name: 'Gambiarra',
        level: 1,
        cost: 1,
        description: `Um Artífice pode apanhar objetos mundanos, aprimora-los rapidamente e lança-los contra seus inimigos. Use uma ação bónus para criar uma gambiarra. O ataque é feito a distância, a habilidade usada é Intelecto e o dano é 1d6 por gambiarra. Ao gastar 1 Ponto de Mana antes de lançar uma Gambiarra, você pode escolher um dos efeitos a seguir, a serem aplicados ao alvo apenas em caso de acerto. 
                1 - Estilhaços, causa o valor de Intelecto de dano adicional.
                2 - Gosmenta, impõe penalidade de 1d4 no acerto do próximo ataque do alvo.
                3 - Ofuscante, concede um bônus de 1d4 no acerto do próximo ataque ao alvo.
                4 - Mina, é presa ao chão e ativada ao toque automaticamente. Não há necessidade de acerto.`,
      },
      {
        name: 'Entendimento Mecânico',
        level: 1,
        cost: 1,
        description: `Concentrando-se brevemente, um Artífice entende os detalhes dos mais complexos mecanismos e elixires. Com uma Ação, ele pode basicamente enxergar através de paredes e objetos não-metálicos, observando engrenagens, escapamentos de vapor e detalhes de mecanismos em uma distância de até 5m. Ao observar mecanismos, o Artífice deve ser bem sucedido em um teste de Intelecto com um bônus de -2 para imediatamente entender o seu propósito. Caso um outro Artífice ou Ladino tenha fabricado o mecanismo a ser observado, o Artífice observador deverá superar seu oponente em um teste de Intelecto, ou nem será capaz de enxergar as peças.`,
      },
      {
        name: 'Assistente',
        level: 3,
        cost: 0,
        description: `O Artífice passa a ser acompanhado por um Assistente mecânico, construído por ele próprio para ajudá-lo em suas missões. A Defesa do assistente é 10, ele possui Vida igual a do Artífice, mas não pode atacar. Sua função é criar e guardar gambiarras, por isso, a cada 2 Pontos de Mana gastos para criar Gambiarras, ele construirá uma extra aleatória. Ele consegue falar e realizar outras atividades mais simples.`,
        distance: '9m',
      },
    ],
  },
  {
    name: 'Artista',
    life: 8,
    mana: 1,
    armor: 1,
    hitDice: 'd8',
    bonusAttr: {
      AST: 2,
    },
    skills: [
      {
        name: 'Magia: Charme',
        level: 1,
        cost: 0,
        description: `Faça um teste contra o Intelecto de um alvo. Ao passar, caso o alvo seja indiferente a você, torna-se amigável.`,
        conjuration: 'Ação',
        distance: '9m',
      },
      {
        name: 'Magia: Presença',
        level: 1,
        cost: 1,
        description: `Sua presença inspira aliados e abala inimigos. Use essa magia como uma reação para converter um acerto normal em crítico ou o contrário.`,
        conjuration: 'Reação',
        distance: '9m',
      },
      {
        name: 'Magia: Aclamar',
        level: 1,
        cost: 1,
        description: `Aclame um alvo como ação bônus e cure 1d8.`,
        conjuration: 'Ação',
      },
    ],
  },
  {
    name: 'Atirador',
    life: 8,
    mana: 0,
    armor: 1,
    hitDice: 'd8',
    bonusAttr: {
      CEL: 2,
    },
    skills: [
      {
        name: 'Disparo Duplo',
        level: 1,
        cost: 1,
        description: `Quando o Atirador acertar um ataque em um alvo, ele pode gastar 1 Mana e ativar seu Disparo Duplo para rolar um novo ataque usando sua Ação Bônus. `,
      },
      {
        name: 'Tiro de aviso',
        level: 1,
        cost: 1,
        description: `Enquanto estiver em posse de sua(s) arma(s), o Atirador tem uma clara vantagem em suas mãos. Gastando uma Ação, o Atirador é capaz de demonstrar o tamanho de seu poder de fogo, intimidando qualquer criatura que não tenha uma arma em mãos num raio de 5m. Caso a(s) criatura(s) em questão tenha armas naturalmente (como garras, por exemplo), ela não é afetada por essa habilidade. A partir daí, o Atirador pode tanto iniciar uma batalha com vantagem, agindo primeiro na ordem de iniciativa, quanto recebe um bônus de 1d4 para intimidar seus inimigos a fugir do combate.`,
      },
      {
        name: 'Descarregar',
        level: 3,
        cost: 1,
        description: `Atiradores podem gastar Pontos de Mana para darem novos disparos sem precisar usar Ação Bónus. Desde que não erre, pode continuar atirando até sua Mana acabar.`,
      },
    ],
  },
  {
    name: 'Bárbaro',
    life: 12,
    mana: 0,
    armor: 0,
    hitDice: 'd12',
    bonusAttr: {
      TEN: 2,
    },
    skills: [
      {
        name: 'Fúria',
        level: 1,
        cost: 1,
        description: `Com uma ação bônus, gaste 1 Mana e entre em Fúria e receba apenas metade de toda fonte de dano físico, que são de ataques feitos contra sua Defesa. Sua Fúria acaba caso você não cause ou receba dano em uma rodada, ou chegue a 0 Pontos de Vida. `,
      },
      {
        name: 'Algo de errado não está certo.',
        level: 1,
        cost: 1,
        description: `Embora seja eficiente em se jogar, furioso, para o perigo, o Bárbaro é também capaz de perceber o perigo, quase como um sexto sentido. Com uma Ação, o Bárbaro pode sentir todas as criaturas, humanoides ou não, que têm intenções imediatamente hostis contra si ou contra seu grupo num raio de 5m.`,
      },
      {
        name: 'Retaliar',
        level: 3,
        cost: 1,
        description: `A partir do nível 3, o Bárbaro pode gastar 2 Pontos de Mana para adicionar todo o dano que recebeu na última rodada como dano bónus de seu próximo ataque.`,
      },
    ],
  },
  {
    name: 'Clérigo',
    life: 8,
    mana: 1,
    armor: 1,
    hitDice: 'd8',
    bonusAttr: {
      AST: 2,
    },
    skills: [
      {
        name: 'Magia: Empatia',
        level: 1,
        cost: 0,
        description: `Faça um teste contra o Intelecto de um alvo. Ao passar, você identifica até três emoções que ele possa estar sentindo no momento.`,
        conjuration: 'Ação',
        distance: 'Toque',
      },
      {
        name: 'Magia: Vigília',
        level: 1,
        cost: 1,
        description: `Com uma súplica, um Clérigo pode estabilizar um alvo inconsciente, e poupá-lo de lutar contra a morte, para que sua hora chege em um momento mais oportuno para os deuses.`,
        conjuration: 'Ação',
        distance: 'Toque',
      },
      {
        name: 'Magia: Preservar',
        level: 1,
        cost: 1,
        description: `Um alvo à sua escolha é curado pelo valor de sua Astúcia.`,
        conjuration: 'Ação Bônus',
        distance: 'Toque',
      },
    ],
  },
  {
    name: 'Druida',
    life: 12,
    mana: 0,
    armor: 1,
    hitDice: 'd12',
    bonusAttr: {
      TEN: 2,
    },
    skills: [
      {
        name: 'Magia: Selvageria',
        level: 1,
        cost: 0,
        description: `A cada 5 Pontos de Vida que o Druida perder, 1 Ponto de Mana é ganho. Você pode escolher perder os Pontos de Vida, não é preciso ser atacado.`,
      },
      {
        name: 'Magia: Druidismo',
        level: 1,
        cost: 1,
        description: `Enquanto estiver na natureza, use Druidismo para aprender sobre plantas e animais típicos da região e conseguir comida e água para descansar. Também pode falar com animais.`,
        conjuration: 'Ação',
        distance: 'Pessoal',
      },
      {
        name: 'Magia: Predador',
        level: 1,
        cost: 1,
        description: `Seu próximo ataque causa seu valor de Tenacidade em Dano adicional.`,
        conjuration: 'Ação Bônus',
        distance: 'Pessoal',
      },
    ],
  },
  {
    name: 'Feiticeiro',
    life: 8,
    mana: 1,
    armor: 1,
    hitDice: 'd8',
    bonusAttr: {
      AST: 2,
    },
    skills: [
      {
        name: 'Magia: Ilusão',
        level: 1,
        cost: 0,
        description: `Cria um efeito sensorial inofensivo. Escolha entre um dos sentidos: audição, olfato e visão. A Ilusão não pode ter volume maior que o corpo do conjurador.`,
        conjuration: 'Ação',
        distance: '9m',
      },
      {
        name: 'Magia: Tremor',
        level: 1,
        cost: 1,
        description: `Treme uma área circular de 3m de raio a partir de você. Faça um teste contra a Tenacidade de todos os alvos na área. Cada criatura recebe 1d8 de dano ou metade se você falhar. O Tremor pode causar dano crítico em uma rolagem 12 de acerto.`,
        conjuration: 'Ação',
        distance: 'Pessoal',
      },
      {
        name: 'Magia: Restaurar',
        level: 1,
        cost: 1,
        description: `Um alvo à sua escolha é curado em 1d8. Você pode curar pontos adicionais se abdicar de um valor equivalente de seus próprios Pontos de Vida para isso.`,
        conjuration: 'Ação',
        distance: 'Toque',
      },
    ],
  },
  {
    name: 'Guerreiro',
    life: 12,
    mana: 0,
    armor: 1,
    hitDice: 'd12',
    bonusAttr: {
      TEN: 2,
    },
    skills: [
      {
        name: 'Arma Favorita',
        level: 1,
        cost: 1,
        description: `Defina um nome para uma arma específica, acostume-se com seu peso, balanço e precisão. Ao gastar 1 Ponto de Mana, você pode rolar um dado de dano adicional em uma ataque feito com sucesso. O uso é declarado antes do ataque e caso esse falhe, o efeito é perdido. Para trocar sua Arma Favorita, nomeie a nova e passe um Repouso treinando com ela.`,
      },
      {
        name: 'Competitivo',
        level: 1,
        cost: 1,
        description: `O Guerreiro é uma máquina de vencer, não só dentro das batalhas! Em situações de competição - uma partida de poker, uma corrida ou até uma queda de braço - em que uma aposta estiver em jogo, o Guerreiro pode gastar uma Ação para ganhar um bônus automático de 1d4 em todas as suas rolagens. Caso a competição valha a vida de alguém, esse bônus sobe para 1d6. Para que usufrua dessa habilidade, o Guerreiro deve receber uma confirmação clara da(s) outra(s) parte(s) da competição de que a aposta está feita.`,
      },
      {
        name: 'Arma Excepcional',
        level: 3,
        cost: 1,
        description: `A partir do nível 3, o Guerreiro pode gastar 1 Ponto de Mana para adicionar sua Tenacidade Ofensiva + seu nível ao seu dano enquanto estiver usando sua Arma Favorita.`,
      },
    ],
  },
  {
    name: 'Ladino',
    life: 10,
    mana: 0,
    armor: 1,
    hitDice: 'd10',
    bonusAttr: {
      CEL: 2,
    },
    skills: [
      {
        name: 'Agilidade',
        level: 1,
        cost: 1,
        description: `A partir do nível 1, um ladino pode gastar 1 Ponto de Mana para se movimentar usando sua Ação Bônus. Ele ainda pode se movimentar normalmente, ou seja, terá até o dobro de seu deslocamento nesse turno. Mover-se com Agilidade não provoca Ataques de Oportunidade.`,
      },
      {
        name: 'Zé Ninguém',
        level: 1,
        cost: 1,
        description: `O Ladino tem um talento especial para ir e vir despercebido. Desde que tome um pouco mais de cuidado, o Ladino é capaz de gastar uma Ação para tornar seu rosto quase completamente imemorável. Em um lugar relacionado a seu Antecedente, ele é capaz de estender esse efeito a até 4 pessoas. Caso cause algum tipo de alarde, o Ladino perde esse efeito imediatamente, atraindo a atenção de todos ao redor. Apenas tome cuidado: Bárbaros ainda podem perceber que Algo de Errado Não Está Certo!`,
      },
      {
        name: 'Astuto',
        level: 3,
        cost: 0,
        description: `A partir do nível 3, Ladinos podem usar sua Astúcia no lugar de Celeridade em Testes e para atacar à distância.`,
      },
    ],
  },
  {
    name: 'Mago',
    life: 6,
    mana: 3,
    armor: 1,
    hitDice: 'd6',
    bonusAttr: {
      INT: 2,
    },
    skills: [
      {
        name: 'Magia: Familiar',
        level: 1,
        cost: 0,
        description: `Um familiar pode servir como canalizador de magias e se comunicar telepaticamente com você. Até o nível 3, conjurar magias através do Familiar custa 1 Ponto de Mana adicional. Ele pode transmitir mensagens telepáticas para outras pessoas de até 10 palavras desde que você possa vê-lo, e ele possa ver o alvo.`,
      },
      {
        name: 'Magia: Projétil Mágico',
        level: 1,
        cost: 1,
        description: `Faça um teste contra a Celeridade de um alvo. Se passar, causa 1d6 + Intelecto de dano.`,
        conjuration: 'Ação',
        distance: '9m',
      },
      {
        name: 'Magia: Escudo Mágico',
        level: 1,
        cost: 1,
        description: `Quando você ou um aliado adjacente receber um ataque feito contra sua Defesa, corpo-a-corpo ou à distância, você pode usar sua reação para conjurar um Escudo Mágico, subtraindo seu valor de Intelecto no dano que receberia.`,
        conjuration: 'Reação',
        distance: 'Pessoal',
      },
    ],
  },
  {
    name: 'Monge',
    life: 10,
    mana: 0,
    armor: 1,
    hitDice: 'd10',
    bonusAttr: {
      CEL: 2,
    },
    skills: [
      {
        name: 'Defesa Serena',
        level: 1,
        cost: 1,
        description: `A partir do nível 1, quando receber um ataque que o acertar, Monge pode gastar 1 Ponto de Mana como reação para se desviar serenamente e tratar o ataque como uma falha.`,
      },
      {
        name: 'Aura de Tranquilidade',
        level: 1,
        cost: 1,
        description: `A simples presença do monge é um sinal de paz. Com um rápido momento de meditação, o monge pode gastar uma Ação para emanar uma energia extremamente pacífica e inofensiva. Desde que o monge não ataque (ou tenha atacado no passado) nenhuma criatura num raio de 5m, social ou fisicamente, ele também não sofrerá qualquer agressão física ou social.`,
      },
      {
        name: 'Contra-golpe',
        level: 3,
        cost: 1,
        description: `A partir do nível 3, quando um inimigo errar um ataque contra você ou um aliado adjacente, você pode gastar 1 Ponto de Mana para contra atacar. Essa habilidade não conta como reação, então você ainda poderá realizar Ataques de Oportunidade `,
      },
    ],
  },
  {
    name: 'Nexus',
    life: 6,
    mana: 3,
    armor: 3,
    hitDice: 'd6',
    bonusAttr: {
      INT: 2,
    },
    skills: [
      {
        name: 'Magia: Reprogramar',
        level: 1,
        cost: 0,
        description: `Troca uma de suas Aptidões até o fim da cena. Uma Aptidão trocada não pode ser reprogramada novamente até o efeito acabar.`,
        conjuration: 'Ação Bônus',
        distance: 'Pessoal',
      },
      {
        name: 'Magia: Esticar Espaço',
        level: 1,
        cost: 1,
        description: `Em uma área circular com raio de até 3m a partir de um ponto é esticada. Visualmente, o terreno permanece igual, mas qualquer criatura que andar nele usará o dobro de deslocamento que usaria para percorrer qualquer distância.`,
        conjuration: 'Ação',
        distance: '9m',
      },
      {
        name: 'Magia: Rebobinar',
        level: 1,
        cost: 1,
        description: `Use essa magia quando um dado qualquer for rolado, desde que você tenha visão e esteja a até 9m do alvo. Rebobinar força um novo dado a ser rolado, e você escolhe qual dos dois resultados será o definitivo. Essa magia é acumulativa, ou seja, você pode continuar gastando Pontos de Mana sobre a mesma rolagem até obter um resultado que te satisfaça.`,
        conjuration: 'Reação',
        distance: '9m',
      },
    ],
  },
]);