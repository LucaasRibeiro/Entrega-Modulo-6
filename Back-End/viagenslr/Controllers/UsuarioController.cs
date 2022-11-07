using Microsoft.AspNetCore.Mvc;
using viagemlr.Model;
using viagemlr.Repository;

namespace viagemlr.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuarioController : ControllerBase
    {
    
        private readonly IUsuarioRepository _repository;

        public UsuarioController(IUsuarioRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var usuarios = await _repository.GetUsuarios();
            return usuarios.Any() ? Ok(usuarios) : NoContent();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var usuario = await _repository.GetUsuarioById(id);
            return usuario != null
            ? Ok(usuario) : NotFound("Infelizmente não achamos esse ser.");
        }

        [HttpPost]
        public async Task<IActionResult> Post(Usuario usuario)
        {
            _repository.AddUsuario(usuario);
            return await _repository.SaveChangesAsync()
            ? Ok("Usuário adicionado com sucesso!") : BadRequest("Algo infelizmente deu errado!");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Atualizar(int id, Usuario usuario)
        {
            var usuarioExiste = await _repository.GetUsuarioById(id);
            if (usuarioExiste == null) return NotFound("Ops, usuário não achado");

            usuarioExiste.Nome = usuario.Nome ?? usuarioExiste.Nome;
            usuarioExiste.DataNascimento = usuario.DataNascimento != new DateTime()
            ? usuario.DataNascimento : usuarioExiste.DataNascimento;

            _repository.AtualizarUsuario(usuarioExiste);

            return await _repository.SaveChangesAsync()
            ? Ok("Usuário atualizado!") : BadRequest("Infelizmente algo não deu certo.");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var usuarioExiste = await _repository.GetUsuarioById(id);
            if (usuarioExiste == null)
                return NotFound("Desculpe, usuário não encontrado");

            _repository.DeletarUsuario(usuarioExiste);

            return await _repository.SaveChangesAsync()
            ? Ok("Usuário apagado com sucesso!.") : BadRequest("Infelizmente, algo deu errado.");
        }

    }
}