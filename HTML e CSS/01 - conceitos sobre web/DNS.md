# DNS
- Traduzir nomes de domínio em endereço IP
Ex.: www.dominio.com.br => 54.69.61.89
- Funciona sobre o protocolo UDP na porta 53

## Funcionamento básico do DNS
1. Usuário informa o enderoço no browser
2. Computador envia uma consulta DNS para o servidor local
3. O servidor responde com o endereço IP
4. Computador acessa o servidor a partir do DNS

### Busca recursiva
O cliente faz a consulta no servidor, se o server não tiver a referencia, ele irá consultar um outro server até obter a referencia e retorna-la para o cliente

### Buxca Iterativa
O cliente faz a consulta no servidor, se o server não tiver a referencia ele aponta para o cliente um outro servidor que pode ter a referencia para que o cliente possa consulta-lo


## DNS Record
- A - IPv4
- AAAA - IPv6
- MX - Servidor de e-mail
- NS - Servidor DNS
- CNAME - canonical name (apelido)
