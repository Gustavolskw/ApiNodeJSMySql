class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const dataList = await this.serviceEntity.GetAllData();
      if (dataList === null) {
        return res.status(404).json("Resultado da pesquisa não Encontrada");
      } else {
        return res.status(200).json(dataList);
      }
    } catch (erro) {
      return res.status(400).json({ message: "Erro na Requisição", error: erro });
    }
  }
  async getById(req, res) {
    const { id } = req.params;
    try {
      const getPessoa = await this.serviceEntity.GetDataById(Number(id));
      return res.status(200).json(getPessoa);
    } catch (erro) {
      return res.status(400).json({ message: "Erro na Requisição", error: erro });
    }
  }

  async create(req, res) {
    const dadosParaCriacao = req.body;
    try {
      const novoRegistro = await this.serviceEntity.CreateEntity(dadosParaCriacao);
      return res.status(200).json(novoRegistro);
    } catch (erro) {
      return res.status(400).json({ message: "Erro na Requisição", error: erro });
    }
  }

  async excluiDados(req, res) {
    const { id } = req.params;
    try {
      const getPessoa = await this.serviceEntity.GetDataById(Number(id));
      if (!getPessoa) {
        res.status(404).json("Id Invalido ou incorreto");
      }


      const dadoDeletado = await this.serviceEntity.deleteData(id);
      return res.status(200).json({ message: "item excluido com Sucesso", itemExcluido: dadoDeletado });
    } catch (erro) {
      return res.status(500).json({ message: "Erro Interno do Servidor", error: erro });
    }
  }


  async atualizarDados(req, res) {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    try {
      const IsUpdated = await this.serviceEntity.UpdatedData(dadosAtualizados, Number(id));
      if (!IsUpdated) {
        return res.status(400).json({ message: "Registro nao foi atualizado!" });
      }
      return res.status(200).json({ message: "item Atualizado com Sucesso", Id: id, ItemAtualizado: dadosAtualizados });
    } catch (erro) {
      return res.status(500).json({ message: "Erro Interno do Servidor", error: erro });
    }
  }
}

module.exports = Controller;