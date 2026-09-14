// ===== Menu Mobile =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fechar menu ao clicar em link
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ===== Accordion =====
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // Fecha todos
    document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));

    // Abre o clicado se não estava ativo
    if (!isActive) item.classList.add('active');
  });
});

// ===== Simulador de Decisões =====
const scenarios = [
  {
    title: "Cenário 1 — O pedido urgente",
    text: "Você recebe uma mensagem no WhatsApp de um número que aparece como “Maria (irmã)”. A mensagem diz: “Amor, bati o carro, estou no hospital e preciso de R$ 1.800 pra não perder a vaga na clínica. Me manda no Pix agora, depois a gente se fala. Por favor!!”. Você sabe que sua irmã realmente tem esse apelido de infância. O que você faz?",
    options: [
      {
        text: "Faço o Pix imediatamente para ajudar.",
        feedback: "Essa é a reação mais comum — e a que os golpistas esperam. A urgência + vínculo afetivo reduz o pensamento crítico. Mesmo que a mensagem venha de um contato salvo, o ideal é confirmar por ligação de voz ou outro canal antes de transferir qualquer valor.",
        type: "danger"
      },
      {
        text: "Ligo para o número antigo da minha irmã ou mando áudio pedindo confirmação.",
        feedback: "Boa escolha. A verificação por um canal diferente quebra a maioria dos golpes de perfil clonado. Se a conta foi invadida, a pessoa real poderá alertá-lo.",
        type: "success"
      },
      {
        text: "Respondo pedindo mais detalhes do acidente e do hospital.",
        feedback: "Perguntar detalhes pode ajudar, mas um golpista preparado terá respostas prontas. Ainda é mais seguro validar a identidade por ligação ou encontro presencial antes de qualquer transferência.",
        type: "warning"
      },
      {
        text: "Ignoro a mensagem por precaução.",
        feedback: "Evita o prejuízo financeiro imediato, mas se for um pedido real você pode estar abandonando alguém em dificuldade. O equilíbrio está em verificar, não apenas ignorar.",
        type: "warning"
      }
    ]
  },
  {
    title: "Cenário 2 — A promoção imperdível",
    text: "Um anúncio no Instagram oferece um smartphone de última geração por R$ 890 (preço de mercado acima de R$ 4.000). O site parece profissional, tem avaliações de cinco estrelas e o vendedor responde rápido no chat. Você está tentado. Qual atitude tomar?",
    options: [
      {
        text: "Compro na hora antes que acabe o estoque.",
        feedback: "Preços muito abaixo do mercado combinados com pressão de escassez são sinais clássicos de golpe. Sites falsos clonam a aparência de lojas reais com facilidade.",
        type: "danger"
      },
      {
        text: "Pesquiso o CNPJ da empresa, reclamações no Reclame Aqui e se o site usa HTTPS.",
        feedback: "Excelente. Verificar a existência real da empresa, histórico de reclamações e a segurança do site reduz drasticamente o risco. Desconfie de lojas que só aceitam pagamento via Pix para “liberar desconto”.",
        type: "success"
      },
      {
        text: "Peço para um amigo que entende de tecnologia dar uma olhada no site.",
        feedback: "Boa prática de verificação coletiva. Duas cabeças analisando sinais de alerta aumentam a chance de identificar inconsistências.",
        type: "success"
      },
      {
        text: "Faço o pagamento com cartão de crédito para ter a proteção do chargeback.",
        feedback: "Usar cartão é mais seguro que Pix em compras duvidosas, pois permite contestação. Ainda assim, o ideal é nem chegar a pagar se os sinais de golpe forem claros.",
        type: "warning"
      }
    ]
  },
  {
    title: "Cenário 3 — O suporte técnico",
    text: "Um pop-up vermelho aparece no seu navegador: “Vírus detectado! Seu computador será bloqueado em 5 minutos. Ligue agora para o suporte Microsoft: 0800-XXX-XXXX”. O que você faz?",
    options: [
      {
        text: "Ligo imediatamente para o número indicado.",
        feedback: "Esse é um dos golpes mais antigos e ainda eficazes. A Microsoft (e outras empresas legítimas) não exibe pop-ups com números de telefone pedindo ligação urgente. Ao ligar, você será orientado a instalar software de acesso remoto.",
        type: "danger"
      },
      {
        text: "Fecho o navegador inteiro (ou forço o encerramento) e rodo uma varredura com antivírus legítimo.",
        feedback: "Atitude correta. Pop-ups agressivos são quase sempre falsos. Nunca ligue para números que aparecem em avisos inesperados.",
        type: "success"
      },
      {
        text: "Anoto o número e pesquiso no Google se é oficial.",
        feedback: "Pesquisar é bom, mas números de golpe também aparecem em resultados pagos ou sites falsos. O mais seguro é simplesmente ignorar e usar os canais oficiais conhecidos da empresa.",
        type: "warning"
      },
      {
        text: "Clico em “Cancelar” várias vezes até o pop-up sumir.",
        feedback: "Pode funcionar em alguns casos, mas muitos desses pop-ups são persistentes e o clique errado pode baixar malware. Fechar o navegador pelo gerenciador de tarefas é mais seguro.",
        type: "warning"
      }
    ]
  },
  {
    title: "Cenário 4 — O investimento do grupo",
    text: "Um colega de trabalho te adiciona a um grupo de Telegram onde um “especialista” mostra prints de lucros diários com criptomoedas. Várias pessoas do grupo (incluindo o colega) afirmam estar ganhando. Pedem um aporte mínimo de R$ 500 para “entrar na plataforma”. Como você reage?",
    options: [
      {
        text: "Aporto o valor. Se todo mundo está ganhando, deve ser verdade.",
        feedback: "Prova social é um dos gatilhos mais poderosos. Esquemas de pirâmide dependem exatamente dessa percepção de que “todo mundo está lucrando”. Os primeiros podem até receber — com o dinheiro dos que entram depois.",
        type: "danger"
      },
      {
        text: "Pergunto qual é a auditoria independente da plataforma e se ela é registrada em algum órgão regulador.",
        feedback: "Perguntas sobre regulação, auditoria e transparência costumam ser evitadas por operadores de pirâmide. A dificuldade em obter respostas claras já é um sinal de alerta importante.",
        type: "success"
      },
      {
        text: "Decido não entrar e alertar o colega sobre os riscos de pirâmides.",
        feedback: "Atitude responsável. Muitas pessoas se sentem pressionadas pelo grupo e acabam entrando mesmo com dúvidas. Alertar com respeito pode proteger mais alguém.",
        type: "success"
      },
      {
        text: "Entro com pouco dinheiro só para “testar”.",
        feedback: "O “teste” é exatamente o que o esquema precisa para criar o compromisso psicológico. Depois do primeiro aporte, a tendência é aumentar a exposição para recuperar ou potencializar o “lucro”.",
        type: "danger"
      }
    ]
  }
];

let currentScenario = 0;
let simulatorChoices = [];

const scenarioTitle = document.getElementById('scenarioTitle');
const scenarioText = document.getElementById('scenarioText');
const scenarioOptions = document.getElementById('scenarioOptions');
const scenarioFeedback = document.getElementById('scenarioFeedback');
const nextScenarioBtn = document.getElementById('nextScenario');
const simulatorEnd = document.getElementById('simulatorEnd');
const simulatorSummary = document.getElementById('simulatorSummary');
const restartSimulatorBtn = document.getElementById('restartSimulator');
const scenarioContainer = document.getElementById('scenarioContainer');

function loadScenario() {
  const s = scenarios[currentScenario];
  scenarioTitle.textContent = s.title;
  scenarioText.textContent = s.text;
  scenarioOptions.innerHTML = '';
  scenarioFeedback.style.display = 'none';
  nextScenarioBtn.style.display = 'none';
  simulatorEnd.style.display = 'none';
  scenarioContainer.style.display = 'block';

  s.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'scenario-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectScenarioOption(idx);
    scenarioOptions.appendChild(btn);
  });
}

function selectScenarioOption(idx) {
  const s = scenarios[currentScenario];
  const chosen = s.options[idx];
  simulatorChoices.push(chosen.type);

  scenarioFeedback.textContent = chosen.feedback;
  scenarioFeedback.className = 'scenario-feedback ' + chosen.type;
  scenarioFeedback.style.display = 'block';

  // Desabilita botões
  scenarioOptions.querySelectorAll('button').forEach(b => b.disabled = true);

  nextScenarioBtn.style.display = 'inline-block';
}

nextScenarioBtn?.addEventListener('click', () => {
  currentScenario++;
  if (currentScenario < scenarios.length) {
    loadScenario();
  } else {
    showSimulatorEnd();
  }
});

function showSimulatorEnd() {
  scenarioContainer.style.display = 'none';
  nextScenarioBtn.style.display = 'none';
  scenarioFeedback.style.display = 'none';
  simulatorEnd.style.display = 'block';

  const dangers = simulatorChoices.filter(c => c === 'danger').length;
  const successes = simulatorChoices.filter(c => c === 'success').length;

  let comment = '';
  if (successes >= 3) {
    comment = 'Você demonstrou bom senso de verificação na maioria das situações. Continue cultivando o hábito de confirmar por canais alternativos.';
  } else if (dangers >= 2) {
    comment = 'Algumas escolhas seguiram o caminho que os golpistas esperam (urgência + confiança). Vale reforçar a pausa antes de agir e a verificação cruzada.';
  } else {
    comment = 'Suas respostas mostram equilíbrio entre solidariedade e cautela. O mais importante é transformar essa reflexão em hábito cotidiano.';
  }

  simulatorSummary.textContent = `Você passou por ${scenarios.length} cenários. Escolhas mais seguras: ${successes}. Escolhas de maior risco: ${dangers}. ${comment}`;
}

restartSimulatorBtn?.addEventListener('click', () => {
  currentScenario = 0;
  simulatorChoices = [];
  loadScenario();
});

loadScenario();

// ===== Quiz =====
const questions = [
  {
    question: "Qual é o principal objetivo de um golpe de phishing?",
    options: [
      "Instalar um vírus automaticamente sem qualquer ação da vítima",
      "Induzir a vítima a revelar dados ou clicar em links maliciosos",
      "Roubar a senha do Wi-Fi da residência",
      "Bloquear o computador até o pagamento de resgate"
    ],
    correct: 1,
    explanation: "Phishing depende da ação da vítima (clicar, informar dados, baixar arquivo). Não é, em si, um malware que se instala sozinho."
  },
  {
    question: "Por que o “golpe do amigo em apuros” é tão eficaz?",
    options: [
      "Porque usa criptografia avançada",
      "Porque explora o vínculo afetivo e a solidariedade",
      "Porque o banco não consegue rastrear Pix",
      "Porque só acontece com idosos"
    ],
    correct: 1,
    explanation: "O ponto central é emocional: a mensagem parece vir de alguém querido e pede ajuda urgente. A solidariedade vira o vetor do crime."
  },
  {
    question: "O que caracteriza um possível esquema de pirâmide disfarçado de investimento?",
    options: [
      "Rentabilidade moderada e auditoria pública",
      "Promessa de alto retorno com pouco risco e forte pressão para indicar novas pessoas",
      "Regulamentação clara por órgão oficial",
      "Transparência total sobre a origem dos lucros"
    ],
    correct: 1,
    explanation: "Pirâmides dependem de entrada constante de novos participantes. A pressão para “indicar amigos” e a promessa de ganhos desproporcionais são sinais clássicos."
  },
  {
    question: "Qual atitude é mais segura ao receber um pedido de dinheiro por mensagem de um contato conhecido?",
    options: [
      "Transferir rapidamente para não deixar a pessoa na mão",
      "Confirmar a identidade por ligação de voz ou outro canal antes de qualquer pagamento",
      "Pedir o CPF da pessoa e fazer o Pix",
      "Responder com outra mensagem de texto pedindo mais detalhes"
    ],
    correct: 1,
    explanation: "A verificação por canal diferente (voz, presencial, aplicativo oficial) é a forma mais eficaz de quebrar golpes de conta clonada."
  },
  {
    question: "Por que muitas vítimas de golpe não denunciam?",
    options: [
      "Porque a denúncia é proibida por lei",
      "Por vergonha, medo de julgamento e sensação de culpa",
      "Porque a polícia nunca registra esse tipo de ocorrência",
      "Porque o prejuízo sempre é reembolsado automaticamente"
    ],
    correct: 1,
    explanation: "A vergonha e o estigma social são barreiras reais. Isso gera subnotificação e dificulta o combate às operações criminosas."
  },
  {
    question: "O que significa o princípio da “prova social” no contexto de golpes?",
    options: [
      "A obrigação legal de provar a identidade",
      "A tendência de confiar em algo porque “outras pessoas também estão fazendo”",
      "O uso de documentos oficiais falsos",
      "A verificação biométrica em aplicativos bancários"
    ],
    correct: 1,
    explanation: "Prova social é um atalho mental: se muitos parecem confiar ou lucrar, a pessoa assume que deve ser legítimo. Golpistas fabricam essa percepção."
  }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('options');
const quizFeedback = document.getElementById('quizFeedback');
const nextQuestionBtn = document.getElementById('nextQuestion');
const quizContainer = document.getElementById('quizContainer');
const quizResult = document.getElementById('quizResult');
const scoreText = document.getElementById('scoreText');
const scoreComment = document.getElementById('scoreComment');
const restartQuizBtn = document.getElementById('restartQuiz');
const questionCounter = document.getElementById('questionCounter');
const quizProgressBar = document.getElementById('quizProgressBar');

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  questionCounter.textContent = `Pergunta ${currentQuestion + 1} de ${questions.length}`;
  quizProgressBar.style.width = `${((currentQuestion) / questions.length) * 100}%`;
  optionsContainer.innerHTML = '';
  quizFeedback.textContent = '';
  nextQuestionBtn.style.display = 'none';

  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(index);
    optionsContainer.appendChild(btn);
  });
}

function selectAnswer(index) {
  const q = questions[currentQuestion];
  const buttons = optionsContainer.querySelectorAll('.option-btn');

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add('correct');
    else if (i === index && i !== q.correct) btn.classList.add('wrong');
  });

  if (index === q.correct) {
    score++;
    quizFeedback.textContent = '✓ Correto. ' + q.explanation;
    quizFeedback.style.color = '#15803d';
  } else {
    quizFeedback.textContent = '✗ Incorreto. ' + q.explanation;
    quizFeedback.style.color = '#b91c1c';
  }

  nextQuestionBtn.style.display = 'inline-block';
  quizProgressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
}

nextQuestionBtn?.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showQuizResult();
  }
});

function showQuizResult() {
  quizContainer.style.display = 'none';
  quizResult.style.display = 'block';
  const percent = Math.round((score / questions.length) * 100);
  scoreText.textContent = `Você acertou ${score} de ${questions.length} (${percent}%).`;

  if (percent >= 80) {
    scoreComment.textContent = 'Excelente domínio dos conceitos. Você está bem preparado para identificar a maioria dos padrões de golpe.';
  } else if (percent >= 50) {
    scoreComment.textContent = 'Bom resultado. Revise os pontos em que errou — especialmente os que envolvem urgência e prova social.';
  } else {
    scoreComment.textContent = 'Vale a pena reler as seções sobre psicologia dos golpes e dilemas sociais. A conscientização é um processo contínuo.';
  }
}

restartQuizBtn?.addEventListener('click', () => {
  currentQuestion = 0;
  score = 0;
  quizContainer.style.display = 'block';
  quizResult.style.display = 'none';
  loadQuestion();
});

loadQuestion();