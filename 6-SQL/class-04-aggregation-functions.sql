SELECT * FROM orders;

SELECT * FROM orders ORDER BY pais; --paises em ordem alfabética

SELECT DISTINCT pais FROM orders ORDER BY pais;

SELECT DISTINCT categoria FROM orders ORDER BY categoria;

SELECT DISTINCT segmento FROM orders ORDER BY segmento;

SELECT * FROM orders WHERE pais LIKE '%zil'; -- se colocar uma % ele pega tudo que termina com o final... ex %a ele pega tudo que termina em "a"

SELECT * FROM orders WHERE pais LIKE 'ar%';

SELECT * FROM orders WHERE pais LIKE '%ar%';

SELECT * FROM orders WHERE pais LIKE '_ar%';

SELECT * FROM orders WHERE pais IN ('Brazil', 'Argentina');

SELECT * FROM orders WHERE total_vendas BETWEEN 500 and 2000;

SELECT count(*) AS QTD,
Round(sum(total_vendas), 2) AS Total,
Min(total_vendas),
AVG(total_vendas)


 FROM orders WHERE pais = 'Brazil';

SELECT pais, ROUND(sum(total_vendas)) AS total FROM orders GROUP BY pais ORDER BY total DESC LIMIT 10;


SELECT id_pedido, count(id_pedido) FROM orders GROUP BY id_pedido;

SELECT * FROM orders WHERE id_pedido = 'AE-2011-9160';