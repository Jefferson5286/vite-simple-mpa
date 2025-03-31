# vite-simple-mpa

`vite-simple-mpa` é um plugin para Vite que facilita a configuração de Multi-Page Applications (MPA). Ele permite que você defina rotas sem a necessidade de incluir a extensão `.html` nas URLs. Além disso, ele oferece flexibilidade para mapear páginas de um projeto sem a necessidade de estruturar pastas com arquivos `index.html` explicitamente.

## Funcionalidade

Com esse plugin, você pode configurar suas páginas diretamente em um único arquivo `vite.config.js` e definir suas rotas de forma simples. Por exemplo, ao acessar `http://localhost:3000/about`, o plugin vai carregar o arquivo `src/pages/about.html`.

## Instalação

Para instalar o plugin, você pode usar o `npm` ou `yarn`:

```bash
npm install vite-simple-mpa --save-dev
```

ou

```bash
yarn add vite-simple-mpa --dev
```

## Uso

1. **Configuração do Plugin**

Adicione o plugin à configuração do Vite (`vite.config.js`).

```javascript
import { defineConfig } from 'vite';
import viteSimpleMPA from 'vite-simple-mpa';

export default defineConfig({
  plugins: [
    viteSimpleMPA({
      pages: {
        about: { target: 'src/pages/about.html', route: '/about' },
        contact: { target: 'src/pages/contact.html', route: '/contact' }
      }
    })
  ]
});
```

2. **Estrutura de Arquivos**

Organize suas páginas HTML em arquivos específicos no diretório `src/pages/`:

```
vite-simple-mpa/
├── src/
│   ├── pages/
│   │   ├── about.html
│   │   ├── contact.html
├── vite.config.js
```

Com a configuração acima, o plugin vai servir a página `about.html` quando você acessar `http://localhost:3000/about` e a página `contact.html` ao acessar `http://localhost:3000/contact`.

## Como Funciona

O plugin permite que você defina uma chave para cada página e associe a ela um arquivo HTML e uma rota personalizada.

## Configuração do Objeto `pages`

No objeto `pages`, você pode definir as páginas como chaves e fornecer duas propriedades:

- **`target`:** Caminho para o arquivo HTML correspondente à página.
- **`route`:** A rota que será mapeada para essa página (sem a extensão `.html`).

Exemplo de configuração:

```javascript
const pages = {
  about: {
      target: 'src/pages/about.html',
      route: '/about'
  },
  contact: {
      target: 'src/pages/contact.html',
      route: '/contact'
  }
}
```

## Características

- **Suporte a múltiplas páginas:** Defina rotas personalizadas para várias páginas no seu projeto.
- **Sem necessidade de index:** Não é necessário criar subpastas ou arquivos `index.html`.
- **Simples de usar:** Adicione o plugin no `vite.config.js` e mapeie suas páginas de forma simples.

## Contribuindo

Contribuições são bem-vindas! Se você encontrar algum bug ou tiver uma sugestão de melhoria, fique à vontade para abrir uma *issue* ou enviar um *pull request*.

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.