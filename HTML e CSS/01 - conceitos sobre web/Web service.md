# Web Service
É um serviço que roda em cima de tecnologias para web, carregado em forma textual: XML, Json, etc...

## SOAP
- Versão mais antiga
- Baseado em XML
- WSDL
- RPC
- Burocratico

## REST
- Json
- Utiliza os metodos HTTP
- Simples

## Convenções RESTful
URL          | Metodo | Descrição
-------------| -------|----------
/clientes    | POST   | Novo Cliente
/clientes    | GET    | Obtém todos
/clientes/36 | GET    | Obtém cliente 36
/clientes/12 | PUT    | Atualiza cliente 12
/clientes/41 | DELETE | Deletar cliente 41

## SOA vc Micro service
### SOA
- Mais antiga
- Baseada em serviços instalados em ESB
### Micro service
- Quebrar uma aplicação em pequenos modulos
- Equipes que cuidam cada um de seu serviço especifico
- Como se fosse pequenos projetos que formam um Grande projeto