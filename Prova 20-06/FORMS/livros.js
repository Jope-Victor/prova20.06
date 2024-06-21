/* function selecionarLivro(elemento) {
    // Remove a classe 'selected' de todos os elementos da lista
    let livros = document.querySelectorAll('.livros li');
    livros.forEach(livro => {
      /*livro.classList.remove('selected');
    });

    // Adiciona a classe 'selected' ao elemento clicado
    elemento.classList.add('selected');
  } */

    function selecionarLivro(elemento) {
        // Verifica se o elemento já está selecionado
        if (elemento.classList.contains('selected')) {
          // Se estiver selecionado, remove a classe 'selected'
          elemento.classList.remove('selected');
        } else {
          // Se não estiver selecionado, verifica quantos elementos estão selecionados
          let livrosSelecionados = document.querySelectorAll('.livros li.selected');
          
          // Verifica se já há 3 elementos selecionados
          if (livrosSelecionados.length < 3) {
            // Adiciona a classe 'selected' ao elemento clicado
            elemento.classList.add('selected');
          } else {
            // Se já houver 3 elementos selecionados, não faz nada (ou pode mostrar uma mensagem)
            alert('Você já selecionou o máximo de 3 Livros.');
          }
        }
      }

      function selecionarAluno(elemento) {
        if (elemento.classList.contains('selected')) {
            elemento.classList.remove('selected');
        } else {
            let alunoselecionado = document.querySelectorAll('.alunos li.selected');
            
            if (alunoselecionado.length < 1 ) {
                elemento.classList.add('selected');
            } else {
                alert('Você só pode selecionar no maximo 1 aluno.')
            }
        }
      }

      var now = new Date();
      var dateTimeString = now.toISOString();
      var formattedDateTimeString = now.toLocaleString();
      var timeElement = document.getElementById("current-time");
      timeElement.textContent = formattedDateTimeString;
      timeElement.setAttribute("datetime", dateTimeString);
      