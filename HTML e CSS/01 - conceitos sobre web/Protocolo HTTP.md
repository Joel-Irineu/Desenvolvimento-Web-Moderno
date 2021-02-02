# Protocolo HTTP
Hyper Text Transfer Protocol
- Texto com links associados
- Documentos em HTML com textos linkados

## caracteristicas
- Está na camada de aplicação do modelo tcp/ip
- Stateless
- Cliente-Servidor (baseado em requisição e resposta)
- HTML, CSS, JS, Midias, ...

## Fluxo
1. Usuario informa a url
2. Browser gera requisição
3. Servidor web gera a resposta
4. Browser exibe a página

## Metodos
- get
- post
- put
- delete
- trace
- options
- connect
- head

## Requisição e Resposta
- cliente <=> servidor
### Requisição via get
Os parametros vão na url
### Requisição via post
Os parametros vão no corpo da requisição

## Grupos de status HTTP
- 1xx - Informação
- 2xx - Sucesso
- 3xx - Redirecionamento
- 4xx - Erro no cliente
- 5xx - Erro no servidor