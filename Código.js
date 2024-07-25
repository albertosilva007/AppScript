function insertContractsData() {
  // Referência à planilha ativa
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // Dados dos contratos de emprego
  var contractsData = [
    ["João Silva", "Desenvolvedor Full Stack", 5, "JavaScript, Python, SQL", "joao@email.com", "2024-07-01", "2024-07-05", "Pendente"],
    ["Maria Oliveira", "Designer UX/UI", 3, "Sketch, Figma, Adobe XD", "maria@email.com", "2024-07-02", "2024-07-06", "Entrevistado"],
    ["Pedro Santos", "Analista de Dados", 4, "Python, R, SQL, Tableau", "pedro@email.com", "2024-07-03", "2024-07-07", "Aprovado"],
    ["Ana Costa", "Desenvolvedor Mobile", 2, "Kotlin, Swift", "ana@email.com", "2024-07-04", "2024-07-08", "Pendente"],
    ["Lucas Ferreira", "Engenheiro DevOps", 6, "AWS, Docker, Kubernetes", "lucas@email.com", "2024-07-05", "2024-07-09", "Aprovado"],
    ["Beatriz Lima", "Cientista de Dados", 5, "Python, Machine Learning, SQL", "beatriz@email.com", "2024-07-06", "2024-07-10", "Pendente"],
    ["Carlos Alves", "Arquiteto de Software", 7, "Java, Microservices, AWS", "carlos@email.com", "2024-07-07", "2024-07-11", "Entrevistado"],
    ["Daniela Moura", "Desenvolvedor Front-end", 4, "HTML, CSS, JavaScript, React", "daniela@email.com", "2024-07-08", "2024-07-12", "Aprovado"],
    ["Eduardo Pires", "Administrador de Redes", 5, "Cisco, Networking, Security", "eduardo@email.com", "2024-07-09", "2024-07-13", "Pendente"],
    ["Fernanda Sousa", "Engenheira de Software", 6, "C++, Java, Agile", "fernanda@email.com", "2024-07-10", "2024-07-14", "Entrevistado"],
    ["Guilherme Rocha", "Desenvolvedor Backend", 3, "Node.js, SQL, Docker", "guilherme@email.com", "2024-07-11", "2024-07-15", "Pendente"],
    ["Helena Martins", "Especialista em Segurança", 4, "Cybersecurity, Ethical Hacking", "helena@email.com", "2024-07-12", "2024-07-16", "Aprovado"],
    ["Igor Mendes", "Desenvolvedor Full Stack", 2, "JavaScript, PHP, MySQL", "igor@email.com", "2024-07-13", "2024-07-17", "Pendente"],
    ["Juliana Reis", "Gerente de Projetos", 6, "PMP, Scrum, Agile", "juliana@email.com", "2024-07-14", "2024-07-18", "Entrevistado"],
    ["Kleber Fonseca", "Analista de Sistemas", 4, "UML, SQL, Java", "kleber@email.com", "2024-07-15", "2024-07-19", "Pendente"],
    ["Larissa Campos", "Desenvolvedora Mobile", 3, "React Native, Swift", "larissa@email.com", "2024-07-16", "2024-07-20", "Entrevistado"],
    ["Marcelo Gomes", "Especialista em DevOps", 5, "Jenkins, Kubernetes, AWS", "marcelo@email.com", "2024-07-17", "2024-07-21", "Aprovado"],
    ["Nádia Vieira", "Cientista de Dados", 4, "Python, R, Machine Learning", "nadia@email.com", "2024-07-18", "2024-07-22", "Pendente"],
    ["Otávio Teixeira", "Arquiteto de Software", 7, ".NET, Azure, Microservices", "otavio@email.com", "2024-07-19", "2024-07-23", "Entrevistado"],
    ["Patrícia Azevedo", "Desenvolvedora Front-end", 3, "HTML, CSS, Angular", "patricia@email.com", "2024-07-20", "2024-07-24", "Aprovado"],
    ["Rodrigo Neves", "Analista de Suporte", 4, "ITIL, Windows Server, Linux", "rodrigo@email.com", "2024-07-21", "2024-07-25", "Pendente"],
    ["Sofia Almeida", "Engenheira de Software", 6, "Python, Django, Scrum", "sofia@email.com", "2024-07-22", "2024-07-26", "Entrevistado"],
    ["Tiago Moreira", "Desenvolvedor Backend", 5, "Java, Spring, MySQL", "tiago@email.com", "2024-07-23", "2024-07-27", "Pendente"],
    ["Vanessa Costa", "Especialista em Segurança", 6, "Cybersecurity, Network Security", "vanessa@email.com", "2024-07-24", "2024-07-28", "Aprovado"]
  ];
  
  // Cabeçalhos das colunas
  var headers = ["Nome do Funcionário", "Cargo", "Nível", "Tecnologias Utilizadas", "Email", "Data de Início", "Data de Término", "Status do Contrato"];
  
  // Insere os cabeçalhos na primeira linha
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  
  // Insere os dados a partir da segunda linha
  sheet.getRange(2, 1, contractsData.length, headers.length).setValues(contractsData);
  
  Logger.log('Dados inseridos com sucesso!');
}

