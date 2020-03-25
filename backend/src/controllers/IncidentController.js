const connection = require("../database/connection");

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    // retorna o total de registros no banco
    const [count] = await connection("incidents").count();

    // busca os 'incidents'
    // fazendo um 'join' entre as tabelas 'ongs' e 'incidents'
    // limitando por 5 à cada página
    // selecionando os campos desejados de 'ongs'
    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf"
      ]);

    // passando para o cebeçalho da requisição o número de registros
    response.header("X-Total-Count", count["count(*)"]);

    return response.json(incidents);
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id
    });

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    // incident recebe o 'incident' com o id especifico
    // selecionando apenas a coluna 'ong_id'
    // retornando o primeiro elemento do array
    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id")
      .first();

    if (incident.ong_id !== ong_id) {
      return response.status(401).json({ error: "Operation not permitted." });
    }

    await connection("incidents")
      .where("id", id)
      .delete();

    return response.status(204).send();
  }
};
