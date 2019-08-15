# logic-problems

## Problema do Miojo
 
João é um fanático por miojos; ele os adora, e, como era de se esperar, ele levou vários pacotes quando foi acampar com seus colegas. Como João só gosta de miojos feitos com o tempo exato, ele se deseperou ao perceber que havia esquecido seu relógio em casa.Por sorte, ele conseguiu, no caminho, comprar duas ampulhetas de durações diferentes. 
 
Por exemplo, se o miojo precisa de 3 minutos para ficar pronto, e João tiver uma ampulheta de 5 minutos e outra de 7, uma possível forma de cozinhar o miojo é:João começa virando as duas ampulhetas ao mesmo tempo.Quando a areia da ampulheta de 5 minutos se esgotar, João torna a virá-la.João começa a preparar o miojo quando a areia da ampulheta de 7 minutos acabar.João tira o miojo do fogo quando a ampulheta de 5 minutos acabar novamente.
Dessa forma, o miojo ficará 3 minutos no fogo (do minuto 7 ao minuto 10).Assim, apesar do miojo levar apenas três minutos para ser cozido, ele precisa de 10 minutos para ficar pronto.
 
Faça um programa que, dado o tempo de preparo do miojo, e os tempos das duas ampulhetas (ambos maiores que o tempo do miojo), determina o tempo mínimo necessário para o miojo ficar pronto ou se não é possível cozinhar o miojo no tempo exato com as ampulhetas disponíveis.
 
 
## Descubra o Assassino
 
O empresário Bill G. Ates foi assassinado e o corpo dele foi deixado na frente da delegacia de polícia. O detetive Lin Ust Orvalds foi escolhido para investigar este caso. Após uma série de investigações, ele organizou uma lista com prováveis assassinos, os locais do crime e quais armas poderiam ter sido utilizadas.
 
Suspeitos: 
• Charles B. Abbage 
• Donald Duck Knuth 
• Ada L. Ovelace 
• Alan T. Uring 
• Ivar J. Acobson 
• Ras Mus Ler Dorf
 
Locais: 
• Redmond
• Palo Alto 
• San Francisco 
• Tokio 
• Restaurante no Fim do Universo 
• São Paulo 
• Cupertino 
• Helsinki 
• Maida Vale 
• Toronto
 
Armas: 
• Peixeira 
• DynaTAC 8000X (o primeiro aparelho celular do mundo) 
• Trezoitão 
• Trebuchet 
• Maça 
• Gládio
 
Uma testemunha foi encontrada, mas ela só consegue responder se Linfornecer uma teoria. Para cada teoria ele "chuta" um assassino, um local e uma arma. A testemunha então responde com um número. Se a teoria estiver correta (assassino, local e arma corretos), ela responde 0. Se a teoria está errada, um valor 1,2 ou 3 é retornado. 1 indica que o assassiona está incorreto; 2 indica que o local está incorreto; 3 indica que a arma está incorreta. Se mais de uma suposição está incorreta, ela retorna um valor arbitrário entre as que estão incorretos (isso é totalmente aleatório).
 
Por exemplo, se o assassino for Donald Duck Knuth usando um trezoitão em Tokio:Teoria: 1, 1, 1Retorno: 1, ou 2, ou 3 (todos estão incorretos)Teoria: 3, 1, 3Retorno: 1, ou 3 (somente o local está correto). Teoria: 5, 3, 4Retorno: 1 (somente o assassino está incorreto)Teoria: 2, 3, 4Retorno: 0 (todos corretos, você solucionou o caso).
 
Você precisa desenvolver um programa que resolva o problema no menor número de tentativas possível.