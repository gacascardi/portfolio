// Scroll suave para links do header
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar a página
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Função para formatar o telefone
function formatarTelefone(event) {
    // Remove tudo o que não for número
    let telefone = event.target.value.replace(/\D/g, '');
  
    // Formata o telefone conforme o padrão (XX) XXXX-XXXXX
    if (telefone.length <= 2) {
      telefone = telefone.replace(/(\d{2})/, '($1)');
    } else if (telefone.length <= 6) {
      telefone = telefone.replace(/(\d{2})(\d{4})/, '($1) $2');
    } else {
      telefone = telefone.replace(/(\d{2})(\d{4})(\d{5})/, '($1) $2-$3');
    }
  
    // Atualiza o valor do input com o telefone formatado
    event.target.value = telefone;
  }
  
  // Adiciona o evento de digitação ao input
  document.getElementById('telefone').addEventListener('input', formatarTelefone);  